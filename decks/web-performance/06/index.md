# Code Splitting & Lazy Loading

## Splitting Strategies

| Type | Description | Tools |
|------|-------------|-------|
| **Route-based** | Separate bundle per page | React Router, Vue Router |
| **Component-based** | Load components on demand | React.lazy(), Suspense |
| **Function-level** | Load specific functions | Dynamic imports |
| **Vendor splitting** | Separate third-party libraries | Webpack chunks |

## Dynamic Import Syntax

```javascript
// Route-based splitting
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

// Component-based
const Modal = lazy(() => import('./Modal'));

// Usage
<Suspense fallback={<Spinner />}>
  <Home />
</Suspense>
```

## Tree Shaking Setup

```javascript
// package.json
{
  "sideEffects": false,  // Tell bundler all modules are pure
  "type": "module"       // Use ES modules
}

// Export named exports (not default)
export { functionA, functionB };
// NOT: export default functionA() {}
```

## Results
- **Initial load**: 40-60% reduction typical
- **Time to Interactive**: 30-50% faster
- **Cache efficiency**: Users only download what they use
