# Handling Arguments

Skills become much more powerful when they accept arguments. Arguments are passed to your skill and accessed through the `$ARGUMENTS` environment variable.

## Argument Formats

Skills should support both named flags and positional arguments:

```bash
# Named flags (recommended for clarity)
/my-skill --topic "React" --slides 5 --icon "⚛️"

# Positional arguments (quicker for simple skills)
/my-skill "React" 5 "⚛️"
```

## Parsing Arguments

Since the skill receives arguments as a string, you need to parse them:

```markdown
When invoked, parse `$ARGUMENTS` to extract:
- **topic**: From `--topic "value"` or first positional
- **slides**: From `--slides N` or second positional (default: 5)
- **icon**: From `--icon "emoji"` or third positional
```

## Practical Example

```bash
# User invokes:
/deck-creator --topic "Docker Basics" --slides 7

# Your skill receives:
ARGUMENTS='--topic "Docker Basics" --slides 7'

# And parses:
TOPIC="Docker Basics"
NUM_SLIDES=7
```

## Key Takeaways

- Access arguments via the `$ARGUMENTS` environment variable
- Support both `--flag value` and positional formats
- Always provide sensible defaults for optional arguments
- Validate arguments before proceeding
