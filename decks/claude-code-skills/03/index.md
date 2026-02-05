# Creating Your First Skill

Every skill begins with a `SKILL.md` file containing YAML front matter that defines the skill's metadata and capabilities.

## SKILL.md Structure

```yaml
---
name: my-skill
description: Brief explanation of what this skill does
allowed-tools: Bash, Read, Write, Edit
user-invocable: true
---

# Detailed Skill Documentation

This section tells Claude exactly what to do when
the skill is invoked. Include implementation steps,
examples, and any special instructions.
```

## Essential Fields

| Field | Purpose |
|-------|---------|
| `name` | Unique identifier (becomes `/name` command) |
| `description` | Shown in help text and skill listings |
| `allowed-tools` | Restricts which tools the skill can use |
| `user-invocable` | Set `true` to enable slash command access |

## Installation

```bash
mkdir -p ~/.claude/skills/hello-world
cat > ~/.claude/skills/hello-world/SKILL.md << 'EOF'
---
name: hello-world
description: Prints a friendly greeting
allowed-tools: Bash
user-invocable: true
---
EOF
```

## Key Takeaways

- Skills are defined in `SKILL.md` files with YAML front matter
- Store skills in `~/.claude/skills/` for auto-discovery
- Always specify `allowed-tools` for security
