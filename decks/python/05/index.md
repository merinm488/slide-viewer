# Functions & Modules

## Function Basics

```python
# Basic function
def greet(name):
    return f"Hello, {name}!"

# Default parameters
def greet(name="World"):
    return f"Hello, {name}!"

# Multiple return values (returns tuple)
def get_user_info():
    name = "Alice"
    age = 30
    return name, age

name, age = get_user_info()

# *args and **kwargs
def summarize(*args, **kwargs):
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

summarize(1, 2, 3, name="Alice", age=30)
# Args: (1, 2, 3)
# Kwargs: {'name': 'Alice', 'age': 30}
```

## Lambda Functions

```python
# Lambda (anonymous function)
square = lambda x: x ** 2
add = lambda x, y: x + y

# Common usage with built-in functions
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
```

## Common Built-in Functions

| Function | Purpose | Example |
|----------|---------|---------|
| `print()` | Output to console | `print("Hello")` |
| `len()` | Get length | `len([1, 2, 3])` → 3 |
| `range()` | Number sequence | `list(range(5))` |
| `type()` | Get type | `type(42)` → `<class 'int'>` |
| `isinstance()` | Check type | `isinstance(x, int)` |
| `input()` | User input | `name = input()` |
| `enumerate()` | Index + value | `for i, v in enumerate(list)` |
| `zip()` | Combine iterables | `zip([1,2], ['a','b'])` |
