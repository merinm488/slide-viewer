# CSS Animations

## Key Animation Properties

| Property | Values | Description |
|----------|--------|-------------|
| `animation-name` | @keyframes name | Which animation |
| `animation-duration` | time, s/ms | How long |
| `animation-timing-function` | ease, linear, ease-in-out | Speed curve |
| `animation-delay` | time, s/ms | Wait before starting |
| `animation-iteration-count` | number, infinite | Repeat count |
| `animation-fill-mode` | forwards, backwards, both | End state |

## Animation Examples

```css
/* Fade in and slide up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Pulse effect */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Shorthand */
.element {
  animation: fadeInUp 0.5s ease-out forwards;
}
```

## Performance Tips

| DO ✅ | DON'T ❌ |
|--------|----------|
| Animate `transform`, `opacity` | Animate `width`, `height`, `top` |
| Use `will-change` sparingly | Use `will-change` on everything |
| Respect `prefers-reduced-motion` | Force animations on all users |
| Use GPU acceleration | Trigger repaints |

```css
/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
