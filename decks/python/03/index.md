# Python Basics

## Variables & Data Types

| Type | Description | Example |
|------|-------------|---------|
| `int` | Integer | `42`, `-7`, `0` |
| `float` | Decimal | `3.14`, `-0.001`, `2.0` |
| `str` | Text | `"Hello"`, `'Python'` |
| `bool` | True/False | `True`, `False` |
| `list` | Mutable sequence | `[1, 2, 3]` |
| `tuple` | Immutable sequence | `(1, 2, 3)` |
| `dict` | Key-value pairs | `{"name": "John"}` |
| `set` | Unique items | `{1, 2, 3}` |

## Basic Syntax

```python
# Variables (no declaration needed)
name = "Alice"
age = 25
is_student = True

# String formatting
greeting = f"Hello, {name}!"  # f-string (Python 3.6+)

# Type hints (Python 3.5+)
def greet(name: str) -> str:
    return f"Hello, {name}"

# Multiple assignment
x, y, z = 1, 2, 3

# List comprehension
squares = [x**2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

## Indentation Matters

Python uses **indentation** instead of braces `{}`

```python
def function_example(x):
    if x > 0:
        return "positive"
    else:
        return "non-positive"
```
