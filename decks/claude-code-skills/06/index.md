# Best Practices

Building effective skills requires thoughtful design. Here are proven patterns for creating skills that are reliable, maintainable, and delightful to use.

## Skill Design Principles

- **Single Responsibility** - Each skill should do one thing well
- **Clear Naming** - Short, descriptive names that are easy to type
- **Graceful Defaults** - Provide sensible defaults for optional arguments
- **Helpful Errors** - Validate inputs and explain what went wrong

## Good vs. Bad Skills

| Good | Bad |
|------|------|
| `/commit` - Creates git commits | `/helper` - Does everything |
| `/test-runner` - Runs tests | `/stuff` - Vague purpose |
| `/deck-creator` - Creates slides | `/magic` - Unclear behavior |

## Documentation Template

```yaml
---
name: my-skill
description: One sentence explaining what it does
allowed-tools: Bash, Read
user-invocable: true
---

## Usage
`/my-skill --input "value" --flag`

## Implementation Steps
- Parse arguments
- Validate inputs
- Execute main logic
- Report results
```

## Key Takeaways

- Focus on one specific task per skill
- Use clear, concise naming
- Provide helpful documentation
- Validate arguments and handle errors gracefully
