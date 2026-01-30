# Presenter

A generic, web-based slide presentation viewer. Display any markdown-based slide deck with beautiful themes and smooth navigation.

**Presenter is a Progressive Web App (PWA)** - install it on your device for offline access!

## Features

- 🎴 **Multiple Decks** - Support for multiple slide decks with easy configuration
- 🎨 **9 Color Themes** - Dark, Light, Sepia, Ocean, Forest, Sunset, Rose, Midnight, Aurora
- ⌨️ **Keyboard Navigation** - Arrow keys, Home, End for slide navigation
- 👆 **Touch Support** - Swipe gestures on mobile devices
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 📝 **Markdown Content** - Write slides in GitHub Flavored Markdown
- 🖼️ **Image Support** - Include images in your slides
- 📊 **Tables & Cards** - Rich formatting with GFM tables and JSON cards
- 📲 **Installable PWA** - Works offline, install on home screen

## Live Demo

https://merinm488.github.io/slide-viewer/

## Installing the App

### Desktop (Chrome/Edge)

1. Visit the demo link
2. Click the install icon in the address bar (⊕ or 💻)
3. Click "Install"

### Mobile (iOS)

1. Visit the demo link in Safari
2. Tap Share → "Add to Home Screen"
3. Tap "Add"

### Mobile (Android)

1. Visit the demo link in Chrome
2. Tap menu (⋮) → "Install app" or "Add to Home Screen"
3. Tap "Install"

Once installed, Presenter works **offline**!

## Adding a New Slide Deck

### 1. Create the deck folder

```bash
mkdir -p decks/your-deck/{01,02,03}
```

### 2. Add slide content

Create `index.md` in each numbered folder:

```markdown
# Your Slide Title

Your slide content here.

![Optional image](image.jpg)
```

### 3. Update `decks/decks.json`

```json
[
  {
    "id": "your-deck",
    "name": "Your Deck Name",
    "icon": "📚",
    "description": "Brief description of your deck"
  }
]
```

That's it! Your new deck will appear on the landing page.

## Project Structure

```
slide-viewer/
├── index.html              # Main viewer application
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker (offline caching)
├── icons/                  # App icons for PWA
│   ├── icon-192x192.png
│   └── icon-512x512.png
├── decks/
│   ├── decks.json          # Deck configuration
│   ├── claude-skills/      # Example deck 1
│   │   ├── 01/index.md
│   │   ├── 02/index.md
│   │   └── ...
│   └── terminal-mastery/  # Example deck 2
│       ├── 01/index.md
│       └── ...
└── README.md
```

## Markdown Features

- **Headings** - `# Title` (extracted as slide title)
- **Bold/Italic** - `**bold**`, `*italic*`
- **Lists** - Bullet and numbered lists
- **Code** - Inline `` `code` `` and fenced ` ```blocks``` `
- **Tables** - GitHub Flavored Markdown tables
- **Images** - `![alt](image.jpg)`
- **Blockquotes** - `> Quote`
- **JSON Cards** - Fenced JSON blocks render as clickable cards

## Navigation

| Key | Action |
|-----|--------|
| `←` / `→` | Previous / Next slide |
| `Home` | First slide |
| `End` | Last slide |
| `↑` / `↓` | Scroll within slide |

## Hosting

### GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Source: Deploy from branch `main` / `(root)`
4. Your site is live at `https://username.github.io/slide-viewer/`

### Other Static Hosts

Works with Netlify, Vercel, Cloudflare Pages, or any static file host.

**Note:** PWAs require HTTPS to work properly. All listed hosts provide this automatically.

## Customization

### Themes

Edit the CSS variables in `index.html` to customize colors:

```css
:root {
    --bg-primary: #000000;
    --accent-purple: #ffffff;
    --accent-pink: #e5e5e5;
    /* ... */
}
```

### Deck Configuration

Edit `decks/decks.json` to add/remove decks:

```json
[
  {
    "id": "deck-id",
    "name": "Display Name",
    "icon": "🎯",
    "description": "Deck description"
  }
]
```

### PWA Settings

Edit `manifest.json` to change app name, icons, or colors:

```json
{
  "name": "Presenter",
  "short_name": "Presenter",
  "theme_color": "#000000",
  "display": "standalone"
}
```

## Technologies

- HTML5, CSS3, Vanilla JavaScript
- Marked.js for Markdown parsing
- Service Worker for offline support
- No build process required

## License

MIT
