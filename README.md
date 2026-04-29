# ruddyXL — Tallinn

A bilingual (English / Estonian) website for ruddyXL at Viru tn. 13/15, 10140 Tallinn.

🌐 **Live site:** [ruddyxl.ee](https://ruddyxl.ee)

## Project Structure

```
xl_site/
├── index.html        ← Single entry point (all 4 pages inside)
├── css/
│   └── style.css     ← Dark theme, all styles
├── js/
│   └── main.js       ← Navigation, language switcher, menu filter
└── images/           ← Add your photos here
```

## Pages

| Page    | Description                                  |
|---------|----------------------------------------------|
| Home    | Hero, features, private events CTA           |
| Menu    | Drinks & food with category filter           |
| Gallery | Photo grid (placeholders — add real images)  |
| Contact | Booking form + address + opening hours       |

## Deployment

The site is hosted via GitHub Pages and deploys automatically.

1. Make your changes locally and test in the browser
2. Commit and push to the `master` branch
3. GitHub Actions will run automatically — the live site updates in ~1–2 minutes

## Adding Photos to Gallery

In `index.html`, find the Gallery section and replace placeholder divs:

```html
<!-- Before (placeholder) -->
<div class="gallery-placeholder">🎤</div>

<!-- After (real image) -->
<img src="images/your-photo.jpg" alt="Karaoke stage at ruddyXL Tallinn" />
```

## Customising

- **Bar name**: ruddyXL — update in index.html if needed
- **Phone/email**: Find in `index.html` Contact section
- **Menu prices**: Update directly in the menu items in `index.html`
- **Opening hours**: Update the `<table class="hours-table">` in Contact section
- **Accent colour**: Change `--color-accent` in `css/style.css`

## Language System

Language is switched by adding `lang-en`, `lang-et` or `lang-ru` class to `<body>`.  
Elements with `data-lang="en"`, `data-lang="et"` or `data-lang="ru"` are shown/hidden via CSS.  
Preference is saved to `localStorage`.
