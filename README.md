# KaraokeBar — Tallinn

A bilingual (English / Estonian) website for KaraokeBar at Viru 13/15tn, Tallinn.

## Project Structure

```
karaokeBar/
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

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `karaokeBar`)
2. Upload all files keeping the folder structure
3. Go to **Settings → Pages**
4. Set source to `main` branch, `/ (root)`
5. Your site will be live at `https://yourusername.github.io/karaokeBar/`

## Adding Photos to Gallery

In `index.html`, find the Gallery section and replace placeholder divs:

```html
<!-- Before (placeholder) -->
<div class="gallery-placeholder">🎤</div>

<!-- After (real image) -->
<img src="images/your-photo.jpg" alt="Karaoke stage at KaraokeBar Tallinn" />
```

## Customising

- **Bar name**: Search & replace `KaraokeBar` in all files
- **Phone/email**: Find in `index.html` Contact section
- **Menu prices**: Update directly in the menu items in `index.html`
- **Opening hours**: Update the `<table class="hours-table">` in Contact section
- **Accent colour**: Change `--color-accent` in `css/style.css`

## Language System

Language is switched by adding `lang-en` or `lang-et` class to `<body>`.  
Elements with `data-lang="en"` or `data-lang="et"` are shown/hidden via CSS.  
Preference is saved to `localStorage`.
