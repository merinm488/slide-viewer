# Data Structures

## Lists vs Tuples

| Feature | List | Tuple |
|---------|------|--------|
| Mutable | ✅ | ❌ |
| Syntax | `[1, 2, 3]` | `(1, 2, 3)` |
| Use case | Changing data | Fixed data |
| Performance | Slower | Faster |

```python
# List operations
numbers = [1, 2, 3]
numbers.append(4)        # [1, 2, 3, 4]
numbers.extend([5, 6])    # [1, 2, 3, 4, 5, 6]
numbers.insert(0, 0)      # [0, 1, 2, 3, 4, 5, 6]
numbers.remove(3)         # Removes first 3
popped = numbers.pop()    # Removes and returns last
numbers.sort()            # Sort in-place
sorted_nums = sorted(numbers)  # Returns new sorted list

# Slicing
numbers[0:3]    # [0, 1, 2]
numbers[:3]     # Same as above
numbers[::2]    # Every second item
numbers[::-1]   # Reversed
```

## Dictionaries

```python
# Creating dictionaries
person = {
    "name": "Alice",
    "age": 30,
    "city": "NYC"
}

# Accessing values
person["name"]           # "Alice"
person.get("name")       # "Alice"
person.get("job", "N/A") # "N/A" (default)

# Methods
person.keys()      # dict_keys(['name', 'age', 'city'])
person.values()    # dict_values(['Alice', 30, 'NYC'])
person.items()     # dict_items([('name', 'Alice'), ...])
person.update({"age": 31})  # Update value
person.pop("city")         # Remove and return
```

## Sets

```python
# Unique values only
numbers = {1, 2, 3, 3, 3}  # {1, 2, 3}

# Set operations
a = {1, 2, 3}
b = {3, 4, 5}

a.union(b)        # {1, 2, 3, 4, 5}
a.intersection(b) # {3}
a.difference(b)   # {1, 2}
a.symmetric_difference(b)  # {1, 2, 4, 5}
```
