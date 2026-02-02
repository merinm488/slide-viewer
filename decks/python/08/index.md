# Python Best Practices

## PEP 8 Style Guide

| Rule | Example |
|------|---------|
| Indentation | 4 spaces (not tabs) |
| Line length | Maximum 79 characters |
| Naming | `snake_case` for variables/functions |
| Constants | `UPPER_CASE` |
| Classes | `PascalCase` |
| Imports | At top of file, grouped |

```python
# Good
def calculate_total(price, quantity):
    return price * quantity

MAX_RETRIES = 3

class UserAccount:
    def __init__(self, username):
        self.username = username
```

## Pythonic Code

| ❌ Unpythonic | ✅ Pythonic |
|---------------|------------|
| `for i in range(len(lst)):` | `for item in lst:` |
| `if x == True:` | `if x:` |
| `if x == False:` | `if not x:` |
| `lst = []` + `for x in y: lst.append(x)` | `[x for x in y]` |
| `dict.get(key)` and check None | `dict.get(key, default)` |

```python
# Good: enumerate instead of range(len())
for index, item in enumerate(items):
    print(f"{index}: {item}")

# Good: zip for parallel iteration
for name, age in zip(names, ages):
    print(f"{name} is {age}")

# Good: context managers
with open("file.txt") as f:
    data = f.read()
```

## Error Handling

```python
# Specific exceptions
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
except ValueError as e:
    print(f"Invalid value: {e}")
else:
    print("Success!")
finally:
    print("Always runs")

# Raising exceptions
if age < 0:
    raise ValueError("Age cannot be negative")

# Custom exceptions
class CustomError(Exception):
    pass
```

## Virtual Environments

```bash
# Create virtual environment
python -m venv myenv

# Activate (Mac/Linux)
source myenv/bin/activate

# Activate (Windows)
myenv\Scripts\activate

# Install packages
pip install package-name

# Save dependencies
pip freeze > requirements.txt

# Install from requirements
pip install -r requirements.txt
```

**Write clean, readable Python!** 🐍
