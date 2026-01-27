# Custom Commands

Create your own slash commands to automate repetitive tasks and workflows.

**Creating Custom Commands**

Create a `.claude/commands` directory and add files like `deploy.md`:

```
Run the deployment script:
npm run build && npm run deploy
```

**Using Arguments ($variable)**

Pass dynamic values to your commands using `$variable` syntax:

```
Create a new component named $component:
npx create-component $component
```

Usage: `/component Button` → creates a Button component
