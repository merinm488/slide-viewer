# Control Flow & Loops

## Conditionals

```python
# if-elif-else
age = 18

if age < 13:
    category = "child"
elif age < 18:
    category = "teenager"
elif age < 65:
    category = "adult"
else:
    category = "senior"

# Ternary operator
status = "adult" if age >= 18 else "minor"

# Match statement (Python 3.10+)
match day:
    case 1 | 2 | 3 | 4 | 5:
        print("Weekday")
    case 6 | 7:
        print("Weekend")
```

## Loops

| Loop Type | Use Case | Example |
|-----------|----------|---------|
| `for` | Iterating over sequences | `for item in list:` |
| `while` | Loop until condition | `while condition:` |
| `break` | Exit loop early | `if done: break` |
| `continue` | Skip to next iteration | `if skip: continue` |

```python
# For loop with range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# For loop over list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1

# Enumerate for index and value
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# Dictionary iteration
person = {"name": "John", "age": 30}
for key, value in person.items():
    print(f"{key}: {value}")
```
