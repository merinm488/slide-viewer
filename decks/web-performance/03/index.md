# Core Web Vitals

Google's metrics for user experience:

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | < 2.5s | < 4s | ≥ 4s |
| **FID** (First Input Delay) | < 100ms | < 300ms | ≥ 300ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | < 0.25 | ≥ 0.25 |
| **INP** (Interaction to Next Paint) | < 200ms | < 500ms | ≥ 500ms |

## What Each Metric Measures

### LCP
- When the **largest content element** becomes visible
- Measures perceived load speed
- Target: Images, hero text, video

### FID → INP (2024 update)
- Time from **user interaction** to browser response
- Measures interactivity
- Clicks, taps, and keyboard input

### CLS
- **Layout stability** during page load
- Measures unexpected shifts
- Critical for preventing accidental clicks
