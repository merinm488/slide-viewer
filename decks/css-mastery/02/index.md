# Flexbox & Grid

## Flexbox - One Dimensional Layout

| Property | Values | Description |
|----------|--------|-------------|
| `justify-content` | flex-start, center, space-between, space-around | Horizontal alignment |
| `align-items` | stretch, flex-start, center, baseline | Vertical alignment |
| `flex-direction` | row, column, row-reverse, column-reverse | Direction |
| `flex-wrap` | nowrap, wrap, wrap-reverse | Wrapping |
| `gap` | `<length>` | Space between items |

```css
.center-all {
  display: flex;
  justify-content: center;
  align-items: center;
}

.spread {
  display: flex;
  justify-content: space-between;
}
```

## Grid - Two Dimensional Layout

| Template | Description | Example |
|----------|-------------|---------|
| Columns | `repeat(3, 1fr)` | 3 equal columns |
| Rows | `auto minmax(100px, auto)` | Responsive rows |
| Areas | `"header header" "sidebar main"` | Named layout |
| Auto-fit | `repeat(auto-fit, minmax(250px, 1fr))` | Responsive grid |

```css
.grid-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

## When to Use Which?

| Scenario | Use |
|----------|-----|
| 1D layout (row or column) | Flexbox |
| 2D layout (rows AND columns) | Grid |
| Aligning items in container | Flexbox |
| Overall page structure | Grid |
| Navigation bars | Flexbox |
| Card grids | Grid |
