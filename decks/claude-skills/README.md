# Learning Claude Code - Interactive Presentation

An interactive, web-based presentation about mastering Claude Code - Anthropic's official CLI for AI-assisted software engineering.

## Features

### Theme System
- **5 Color Themes**: Dark (default), Light, Sepia, Ocean, and Forest
- **Theme Persistence**: Selected theme is saved and restored on revisit
- **Quick Access**: Theme selector button in the top-right corner

### Navigation
- **Keyboard Shortcuts**:
  - `Arrow Left/Right` - Navigate between slides
  - `Home` - Jump to first slide
  - `End` - Jump to last slide
  - `Arrow Up/Down`, `Page Up/Down`, `Space` - Scroll within slide content
- **Touch/Swipe**: Swipe left/right on mobile devices
- **On-screen Controls**: Previous/Next buttons with slide counter
- **Progress Bar**: Visual indicator of presentation progress

### Responsive Design
- **Desktop**: Full-featured layout with side-by-side content
- **Tablet**: Optimized spacing and layout adjustments
- **Mobile**: Compact design with touch-friendly navigation
- **Extra Small**: Further optimized for very small screens (≤380px)
- **Scrollable Content**: Each slide can scroll independently for long content

### Visual Design
- **Animated Background**: Subtle floating gradient animation
- **Glassmorphism**: Frosted glass effect on slides and cards
- **Hover Effects**: Interactive feedback on cards and buttons
- **Custom Scrollbar**: Styled scrollbars matching the theme

## Slide Contents

| # | Title | Description |
|---|-------|-------------|
| 1 | Title Slide | Introduction with Claude Code branding |
| 2 | What is Claude Code? | Overview and key capabilities |
| 3 | Installation | Setup instructions and requirements |
| 4 | Custom Commands | Creating and using slash commands with arguments |
| 5 | Integrations & Extensions | MCP, GitHub, Hooks, Claude Agent SDK |
| 6 | GitHub Pages Example | Practical walkthrough with screenshots |
| 7 | Key Features | Smart search, multi-file editing, debugging, terminal |
| 8 | Common Commands | Essential slash commands reference |
| 9 | Best Practices | Visual diagram with guidelines |
| 10 | Common Workflows | Feature development workflow steps |
| 11 | Tips & Tricks | Interactive diagram with keyboard shortcuts and tips |
| 12 | Resources | Curated links to docs, videos, courses, and community posts |

## Resources Slide (Data-Driven)

The Resources slide is powered by structured JSON data, making it easy to maintain and extend. Each resource includes:

- **Title**: Name of the resource
- **Subtitle**: Source or category
- **Snippet**: One-line summary explaining the content
- **Icon**: Visual indicator (emoji for GitHub, YouTube, X, docs, etc.)
- **Badge**: Category label (Video, Docs, Thread, Tips, etc.)
- **Link**: URL to the resource
- **Author**: Optional, for social posts

This design makes resources understandable at a glance without needing to click through.

## How to Use

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. Navigate using keyboard arrows or on-screen buttons

### Hosting
The presentation is a single static HTML file with inline CSS and JavaScript. It can be hosted on:
- GitHub Pages
- Netlify
- Vercel
- Any static file server

### Customizing Slides
All slide content is embedded in the HTML. To add or modify slides:
1. Edit the slide `div` elements with `data-slide` attributes
2. Update the `totalSlides` count in the navigation (currently 12)
3. Add content using the available component classes (highlight-box, grid-2, grid-3, card, etc.)

### Customizing Resources
To add or edit resources, modify the `resourcesData` array in the JavaScript section. Each resource object follows the structure described above.

## File Structure

```
slides/
├── index.html          # Main presentation file (all-in-one)
├── images/             # Slide images and logos
│   ├── image1.jpg      # StoryBrain logo
│   ├── image2.jpg      # Claude Code illustration
│   └── ...
└── README.md           # This file
```

## Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Custom properties (variables), flexbox, grid, animations, backdrop-filter
- **Vanilla JavaScript**: No dependencies, lightweight and fast
- **Google Fonts**: Inter (UI) and JetBrains Mono (code)

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Recent Updates

- **Resources Refactor**: Converted to data-driven JSON structure with content-first design
- **Theme System**: Added 5 color themes with persistence
- **Mobile Optimization**: Comprehensive responsive design for all screen sizes
- **Visual Improvements**: Enhanced cards, diagrams, and hover effects

## License

This project is for educational purposes.
