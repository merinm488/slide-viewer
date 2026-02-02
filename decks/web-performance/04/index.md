# Image Optimization

Images account for **50-90%** of page weight!

## Format Comparison

| Format | Size vs JPEG | Browser Support | Use Case |
|--------|--------------|-----------------|----------|
| JPEG | Baseline | 100% | Photos |
| PNG | 2-3x larger | 100% | Graphics, transparency |
| WebP | 25-35% smaller | 95% | General use |
| AVIF | 50% smaller | 75% | Modern browsers |

## Implementation Checklist

```html
<!-- Responsive images -->
<img srcset="small.jpg 400w,
             medium.jpg 800w,
             large.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1200px) 800px,
            1200px"
     src="medium.jpg"
     loading="lazy"
     decoding="async"
     width="800" height="400">

<!-- Picture element for art direction -->
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

## Compression Settings
- **Quality**: 80-85% for WebP, 70-75% for JPEG
- **Tools**: Squoosh, ImageOptim, sharp (CLI)
- **Strip metadata**: Remove EXIF data except copyright
