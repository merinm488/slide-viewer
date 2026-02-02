# File Handling & Context Managers

## Reading Files

```python
# Best practice: with statement (auto-closes)
with open("file.txt", "r") as f:
    content = f.read()      # Entire file
    lines = f.readlines()   # List of lines

# Reading line by line
with open("file.txt", "r") as f:
    for line in f:
        print(line.strip())
```

## Writing Files

```python
# Write (overwrites existing)
with open("output.txt", "w") as f:
    f.write("Hello, World!")

# Append (adds to existing)
with open("output.txt", "a") as f:
    f.write("\nNew line")

# Write multiple lines
lines = ["Line 1", "Line 2", "Line 3"]
with open("output.txt", "w") as f:
    f.write("\n".join(lines))
```

## File Modes

| Mode | Description |
|------|-------------|
| `"r"` | Read (default) |
| `"w"` | Write (overwrites) |
| `"a"` | Append |
| `"r+"` | Read and write |
| `"rb"` | Read binary |
| `"wb"` | Write binary |

## Working with JSON

```python
import json

# Read JSON
with open("data.json", "r") as f:
    data = json.load(f)

# Write JSON
with open("output.json", "w") as f:
    json.dump(data, f, indent=2)
```

## Working with CSV

```python
import csv

# Reading CSV
with open("data.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["column_name"])

# Writing CSV
with open("output.csv", "w") as f:
    writer = csv.DictWriter(f, fieldnames=["name", "age"])
    writer.writeheader()
    writer.writerow({"name": "Alice", "age": 30})
```
