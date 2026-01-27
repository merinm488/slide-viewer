# Power User Techniques

Level up with these advanced patterns.

**Piping & Chaining**

```bash
# Combine commands with |
cat file.txt | grep "pattern"
ps aux | grep node | kill -9 1234

# Chain commands with && or ||
npm install && npm start
make build || echo "Build failed"
```

**Output Redirection**

```bash
# Save output to file
ls > files.txt

# Append to file
echo "new entry" >> log.txt

# Redirect stderr
command 2> error.log
```

**Background Jobs**

```bash
# Run in background
npm start &

# Bring back to foreground
fg

# List background jobs
jobs
```
