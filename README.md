# Slide Viewer

A generic, web-based slide presentation viewer. Display any markdown-based slide deck with beautiful themes and smooth navigation.

## Features

- 🎴 **Multiple Decks** - Support for multiple slide decks with easy configuration
- 🎨 **5 Color Themes** - Dark, Light, Sepia, Ocean, and Forest
- ⌨️ **Keyboard Navigation** - Arrow keys, Home, End for slide navigation
- 👆 **Touch Support** - Swipe gestures on mobile devices
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 📝 **Markdown Content** - Write slides in GitHub Flavored Markdown
- 🖼️ **Image Support** - Include images in your slides
- 📊 **Tables & Cards** - Rich formatting with GFM tables and JSON cards

## Live Demo

https://merinm488.github.io/slide-viewer/

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/merinm488/slide-viewer.git
   cd slide-viewer
   ```

2. **Start a local server**
   ```bash
   python3 -m http.server 3333
   ```

3. **Open in browser**
   ```
   http://localhost:3333
   ```

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

## Customization

### Themes

Edit the CSS variables in `index.html` to customize colors:

```css
:root {
    --bg-primary: #0f0f1a;
    --accent-purple: #8b5cf6;
    --accent-pink: #ec4899;
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

## Technologies

- HTML5, CSS3, Vanilla JavaScript
- Marked.js for Markdown parsing
- No build process required

## License

MIT
