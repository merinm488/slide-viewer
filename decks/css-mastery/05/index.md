# Responsive Design

## Modern Approach
```css
.container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card { display: grid; }
}
```

## Container Queries > Media Queries
- Components adapt to their container
- Truly reusable components
- No more media query spaghetti

![Responsive design](responsive.jpg)
