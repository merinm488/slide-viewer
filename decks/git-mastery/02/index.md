# Essential Git Commands

## Everyday Commands

| Command | Description | Example |
|---------|-------------|---------|
| `git status` | Check current state | See modified files |
| `git add .` | Stage all changes | Prepare for commit |
| `git add -p` | Stage interactively | Review each change |
| `git commit -m "msg"` | Save changes | Create snapshot |
| `git push` | Upload to remote | Share with team |
| `git pull` | Download changes | Update local repo |
| `git log --oneline` | View history | Compact commit list |

## Common Workflows

```bash
# Start new work
git checkout -b feature/new-feature
git add .
git commit -m "feat: add new feature"

# Update with remote changes
git fetch origin
git rebase origin/main

# Clean up commits
git rebase -i HEAD~3  # Interactive rebase
```

## Undo Commands

| Situation | Command |
|-----------|---------|
| Unstage file | `git restore --staged file.js` |
| Discard local changes | `git restore file.js` |
| Undo last commit (keep changes) | `git reset --soft HEAD~1` |
| Undo last commit (discard changes) | `git reset --hard HEAD~1` |
