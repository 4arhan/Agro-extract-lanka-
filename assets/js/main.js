/* Agro Extract Lanka: header state, mobile menu, section highlighting and the enquiry form. */
(() => {
  'use strict';

  const header = document.getElementById('site-header');
  const nav = document.getElementById('site-nav');
  const menuBtn = header.querySelector('.menu-btn');

  /* ---- header: clear over the hero, solid once the page scrolls ---- */
  let queued = false;
  const syncHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
    queued = false;
  };
  window.addEventListener('scroll', () => {
    if (!queued) { queued = true; requestAnimationFrame(syncHeader); }
  }, { passive: true });
  syncHeader();

  /* ---- mobile menu ---- */
  const setMenu = (open) => {
    header.classList.toggle('nav-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
  };
  menuBtn.addEventListener('click', () => setMenu(!header.classList.contains('nav-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains('nav-open')) { setMenu(false); menuBtn.focus(); }
  });

  /* ---- mark the section being read in the navigation ---- */
  const links = new Map();
  nav.querySelectorAll('a[href^="#"]:not(.btn)').forEach((a) => links.set(a.getAttribute('href').slice(1), a));
  if ('IntersectionObserver' in window) {
    const watcher = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.removeAttribute('aria-current'));
        const link = links.get(entry.target.id);
        if (link) link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main > section[id]').forEach((section) => watcher.observe(section));
  }

  /* ---- enquiry form ---- */
  const form = document.getElementById('enquiry');
  const ready = document.getElementById('enquiry-ready');
  const errorBox = document.getElementById('enquiry-error');
  const output = document.getElementById('enquiry-text');
  const copyBtn = document.getElementById('enquiry-copy');
  const intent = document.getElementById('f-intent');
  const sendTo = form.dataset.email;
  document.getElementById('enquiry-to').textContent = sendTo;

  // Buttons elsewhere on the page can pre-select what the enquiry is about.
  document.querySelectorAll('a[data-intent]').forEach((a) => {
    a.addEventListener('click', () => {
      const option = intent.querySelector(`option[data-intent="${a.dataset.intent}"]`);
      if (option) intent.value = option.value;
    });
  });

  const value = (data, key) => String(data.get(key) || '').trim();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = value(data, 'name');
    const email = value(data, 'email');

    const problems = [];
    if (!name) problems.push(['f-name', 'Add your name.']);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) problems.push(['f-email', 'Add an email address we can reply to.']);
    form.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));
    if (problems.length) {
      errorBox.textContent = problems.map((p) => p[1]).join(' ');
      errorBox.hidden = false;
      problems.forEach(([id]) => document.getElementById(id).setAttribute('aria-invalid', 'true'));
      document.getElementById(problems[0][0]).focus();
      return;
    }
    errorBox.hidden = true;

    const products = data.getAll('product');
    const subject = value(data, 'intent') + (products.length ? ': ' + products.join(', ') : '');
    const details = [
      products.length ? 'Oil or crop: ' + products.join(', ') : '',
      value(data, 'volume') ? 'Volume: ' + value(data, 'volume') : '',
      value(data, 'place') ? 'Delivery point: ' + value(data, 'place') : '',
    ].filter(Boolean);
    const sender = [
      'From: ' + name + (value(data, 'company') ? ', ' + value(data, 'company') : ''),
      'Email: ' + email,
      value(data, 'phone') ? 'Phone: ' + value(data, 'phone') : '',
    ].filter(Boolean);
    const body = [
      'Enquiry: ' + value(data, 'intent'),
      details.join('\n'),
      value(data, 'message'),
      sender.join('\n'),
    ].filter(Boolean).join('\n\n');

    output.value = 'To: ' + sendTo + '\nSubject: ' + subject + '\n\n' + body;
    form.hidden = true;
    ready.hidden = false;
    ready.focus();

    // Hand the enquiry to the visitor's email app. Where none is set up nothing happens,
    // which is why the text also stays on the page to be copied.
    const mail = document.createElement('a');
    mail.href = 'mailto:' + sendTo + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    mail.click();
  });

  copyBtn.addEventListener('click', () => {
    const label = copyBtn.querySelector('span');
    const done = () => {
      label.textContent = 'Copied';
      setTimeout(() => { label.textContent = 'Copy text'; }, 2200);
    };
    const selectInstead = () => { output.focus(); output.select(); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(output.value).then(done, selectInstead);
    } else {
      selectInstead();
    }
  });

  document.getElementById('enquiry-edit').addEventListener('click', () => {
    ready.hidden = true;
    form.hidden = false;
    document.getElementById('f-name').focus();
  });

  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
