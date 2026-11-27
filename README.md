# Agro Extract Lanka website

Landing page for Agro Extract Lanka, a solvent extraction plant and edible oil refinery.

It is plain HTML, CSS and JavaScript. There is no build step and nothing to install.

## Preview

Open `index.html` in a browser, or serve the folder and visit <http://localhost:8000>:

```bash
python3 -m http.server 8000
```

## Before you publish

1. **Contact details.** The office and factory addresses, phone numbers, fax and email come from the company business card. To change one, search `index.html` for the old value: it appears in the contact section, the footer, the `data-email` attribute on the enquiry form and the organisation data in the page head.
2. **Check the wording.** The text describes how a solvent extraction plant and refinery normally work. Confirm it matches what the business really offers: the oils and oilseeds, the meal and co-products, and the quality tests.
3. **Photos are stock images.** None of them show your own plant. Replace them with your own pictures where you can. The files are in `assets/img/`.
4. **Sharing preview.** Once the site has a domain, change the `og:image` line in `index.html` to the full address, for example `https://your-domain.lk/og-image.jpg`.

## The enquiry form

The form has no server behind it. Pressing the button opens the visitor's email app with the enquiry filled in and addressed to the form's `data-email`. The same text is shown on the page with a copy button, in case no email app opens.

To receive enquiries directly, connect the form to a form service or your own server later.

## Hosting

Any static host works: GitHub Pages, Netlify, Vercel, Cloudflare Pages or ordinary web hosting. Upload the folder as it is.

## What is where

| Path | Contents |
| --- | --- |
| `index.html` | The page: all text, sections and the icon sprite |
| `assets/css/styles.css` | Styles. Colours, type and spacing are set as variables at the top |
| `assets/js/main.js` | Header, mobile menu and the enquiry form |
| `assets/img/` | Photographs in AVIF and WebP, with a JPEG fallback for each |
| `assets/brand/` | Logo files |
| `assets/fonts/` | Archivo, the typeface used throughout |
| `favicon.*`, `apple-touch-icon.png`, `site.webmanifest`, `og-image.jpg` | Browser icons and the link-sharing preview |

## Logo

Two leaves lean together into the letter A, with a drop of oil where the crossbar would be.

| File | Use |
| --- | --- |
| `assets/brand/logo-horizontal.svg` | Main logo, for light backgrounds |
| `assets/brand/logo-horizontal-reverse.svg` | Main logo, for dark backgrounds and photos |
| `assets/brand/logo-stacked.svg`, `logo-stacked-reverse.svg` | Centred version for square spaces |
| `assets/brand/logo-mark.svg`, `logo-mark-reverse.svg` | The symbol on its own |
| `assets/brand/icon-app.svg`, `icon-192.png`, `icon-512.png` | App and social profile icon |
| `assets/brand/png/` | PNG copies with transparent backgrounds, for documents and print |

The lettering is converted to outlines, so the SVG files look the same on any computer.

Brand colours: deep pine `#0C2B21`, oil gold `#F5B82E`, leaf green `#2FA463`.

## Credits

Photographs, cropped for this site:

| Image | Source | Licence |
| --- | --- | --- |
| Sunflower field at sunrise (hero) | ["Field of Sunflowers"](https://commons.wikimedia.org/wiki/File:Field_of_Sunflowers_(29050760887).jpg) by Heath Cajandig | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |
| Canola blossom | ["Flower, Rapeseed"](https://commons.wikimedia.org/wiki/File:Flower,_Rapeseed_-_Flickr_-_nekonomania_(2).jpg) by Yoko Nekonomania | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |
| Oil palm fruit | ["Oil Palm Fruit Bunch"](https://commons.wikimedia.org/wiki/File:Oil_Palm_Fruit_Bunch.jpg) by Officialbernard1 | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| Rice paddy with palms | ["The paddy farmer"](https://commons.wikimedia.org/wiki/File:The_paddy_farmer_(45856019122).jpg) by Peter Addor | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) |
| Sunflower crop | [Bruce Fritz, USDA Agricultural Research Service](https://commons.wikimedia.org/wiki/File:Sunflowers_helianthus_annuus.jpg) | Public domain |
| Ripening rice | [leaf0605 on iNaturalist](https://www.inaturalist.org/observations/28172854) | CC0 |
| Sri Lanka from orbit | [MODIS Land Rapid Response Team, NASA GSFC](https://commons.wikimedia.org/wiki/File:Sri_Lanka_(MODIS_2025-02-22).jpg) | Public domain |
| Canola field | ["Canola. Golden fields."](https://commons.wikimedia.org/wiki/File:Canola._Golden_fields._(22689785977).jpg) by Bernard Spragg | CC0 |
| Meal in storage | [U.S. Department of Agriculture](https://commons.wikimedia.org/wiki/File:20201023-OSEC-OC-0008_(50522322536).jpg) | Public domain |
| Sunflower seeds | ["Guazi (sunflower seeds)"](https://commons.wikimedia.org/wiki/File:Guazi_(sunflower_seeds).jpg) by Mx. Granger | CC0 |

The CC BY photographs must stay credited. The credits are listed in the page footer under "Photo credits"; keep that list if you keep the photos.

The golden oil image (`assets/img/golden-oil-*`) was drawn for this site and needs no credit.

Typeface: [Archivo](https://github.com/Omnibus-Type/Archivo) by Omnibus-Type, under the SIL Open Font License (`assets/fonts/Archivo-OFL.txt`).
