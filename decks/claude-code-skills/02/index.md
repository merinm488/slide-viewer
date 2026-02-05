# What Are Skills?

Skills are reusable, packaged capabilities that extend Claude Code with custom behaviors and specialized tools. They transform Claude from a general-purpose assistant into a team of specialized experts.

## Why Use Skills?

Instead of repeating the same complex instructions, you create a skill once and invoke it with a simple slash command. Skills capture expertise, automate multi-step workflows, and ensure consistency across your work.

## Key Benefits

- **Reusable** - Write once, use forever
- **Shareable** - Version control and distribute to your team
- **Focused** - Each skill does one thing well
- **Powerful** - Access to tools like Bash, Read, Write, Edit, and more

## Real-World Examples

```bash
/deck-creator --topic "React Hooks" --slides 5
/commit "Fix navigation bug"
/review-pr 123
/test-runner --verbose
```

Each command triggers a specialized workflow defined by a skill.

## Key Takeaways

- Skills are like plugins for Claude Code
- Invoked via slash commands (`/skill-name`)
- Accept arguments to customize behavior
- Perfect for repetitive or complex multi-step tasks
