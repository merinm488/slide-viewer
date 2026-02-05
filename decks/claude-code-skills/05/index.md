# Available Tools

Skills can access Claude Code's powerful tools, but must explicitly declare which ones they need. This is both a security feature and documentation for what the skill does.

## Available Tools

| Tool | Description | Use Case |
|------|-------------|----------|
| `Bash` | Execute shell commands | Run tests, git operations, build |
| `Read` | Read file contents | Analyze code, review files |
| `Write` | Create new files | Generate code, config files |
| `Edit` | Edit existing files | Refactor, update code |
| `Glob` | Find files by pattern | Discover files matching patterns |
| `Grep` | Search file contents | Find code usages, patterns |
| `AskUserQuestion` | Prompt user for input | Get clarification, preferences |

## Tool Declaration

```yaml
---
name: code-reviewer
description: Reviews code changes
allowed-tools: Read, Bash, Edit
user-invocable: true
---
```

Only declare tools your skill actually uses.

## Common Tool Patterns

```bash
# Read then Edit workflow
Read file → Analyze → Edit file

# Bash for validation
Write code → Run tests via Bash → Report results

# Glob for discovery
Glob **/*.js → Read files → Generate summary
```

## Key Takeaways

- Skills must declare tools in `allowed-tools`
- Only request tools you actually need
- Tools work together in workflows
- Tool restrictions keep skills safe and predictable
