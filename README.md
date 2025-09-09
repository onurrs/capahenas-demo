# Capahenas Travel – Static Website

A modern static website for Capahenas Travel, focused on tours, balloon flights and destinations in Cappadocia.

## Structure

- `index.html` – home with hero, featured tours and WhatsApp CTA
- `tours/` – listing and detail pages (`red-tour.html`, `green-tour.html`)
- `balloons/` – balloon flight options
- `destinations/` – destination listing and sample (`goreme.html`)
- `about.html`, `contact.html` – company info and contact with map
- `legal/` – `terms.html`, `privacy.html`
- `assets/` – CSS, JS, images
- `seo/organization.json` – JSON-LD Organization schema

## Local preview

Any static server works. For example with Python:

```bash
python -m http.server 8000
# open http://localhost:8000
```

## Deploy

- Netlify: drag-and-drop the folder or connect the repo. Build command: none, Publish directory: root
- Vercel: Import project, framework = Other, Output Directory = `.`
- GitHub Pages: push to `main`, enable Pages on the repo root

## SEO

- Basic meta/og tags in pages
- JSON-LD Organization at `seo/organization.json` and embedded in `index.html`

## Notes

- Replace placeholder images in `assets/img/` with optimized WebP/JPEG
- Update TURSAB number and contact details as needed

