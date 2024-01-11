---
title: "5 - String Processing and File Handling - Python"
date: 2024-01-02
id: 33
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - Python Tutorial
---

## Introduction to String

- Strings are basically sequential collection of characters.
- It is immutable data type which means once you have created a string you cannot change it.
- Strings are written inside double quotation mark `"like this"`
- example strings:

```python
"This is string"

"""
This is
multiline
string
"""

'''
So this
is multiline
Too
'''
```

- Creating a string in python

  - To create a string you don’t have to define specific data type in python.
  - Because python is dynamically written language you don’t have to define any type of data while creating variables.
  - so strings are basically array of characters.
  - but in python you don’t have to create array or array of characters to create a string, you can easily create a string just by creating a string variable.
  - example:

  ```python
  my_string = "This is my string"
  ```

  ```python
  my_string = "Hello world!"
  print(my_string)

  # output:
  # Helllo world!
  ```

## Access string elements using indexing

- Usually every object in python has indexes with which we can access the specific data from specific set
- These index are used to target specific data from specific element.

![Accessing elements using indexing](https://i.imgur.com/iInZ6lb.png)

- Index always starts with 0.
- for example
  - `index 0 == 35`
  - `index 7 == 44`
- Using this same indexes we can access specific data in python.
- example:

```python
list1 = ["I0", "I1", "I2", "I3"]

print(list1[0]) # here [0] represent index number

# output:
# I1 (I1 = Index 1)

print(list1[2])

# output:
# I2 (I2 = Index 2)
```

## String functions

### Basic functions

- `len()`
  - len function is used to get length of specified string
    ```python
    my_str = "1234567890"
    print(len(my_str))
    ```

### Testing functions

- `isalnum()`
  - Returns true if specified string is in alpha numeric format.
    ```python
    print(isalnum(str))
    ```
- `isalpha()`
  - Returns true if specified string is in alphabetic format.
    ```python
    	print(isalpha(str))
    ```
- `isdigit()`
  - Returns true if specified string is in numeric format.
    ```python
    print(isdigit(str))
    ```
- `isidentifier()`
  - Returns true if specified string is an identifier.
    ```python
    print(isidentifier(str))
    ```
- `islower()`
  - Returns true if specified string is in lower text format.
    ```python
    print(islower(str))
    ```
- `isupper()`
  - Returns true if specified string is in upper text format.
    ```python
    print(islower(str))
    ```
- `isspace()`
  - Returns true if specified string is space.
    ```python
    print(isspace(str))
    ```

### Searching functions

- `endswith()`
  - Returns True if specified string ends with passed parameter.
    ```python
    my_str = "Hii John"
    print(my_str.endswith("John")
    ```
- `startswith()`
  - Returns True if specified string starts with passed parameter.
    ```python
    my_str = "Hii John"
    print(my_str.startswith("Hii")
    ```
- `find()`

  - Returns the index number if specified parameter is found.

    ```python
    my_str = "Hello world, I'm AI."
    print(my_str.find("Hello"))

    # output
    # 6
    ```

- `count()`

  - Returns the total count of text or number which has been repeated in the string.

    ```python
    my_str = "Repeat, Repeat, Repeat, The output for Repeat word should be 4""
    print(my_str.count("Repeat") # we have wrote "Repeat" 4 times.

    # output
    # 4
    ```

### Manipulation functions

- `capitalize()`

  - Capitalize first character of the first word in string.

  ```python
  my_str = "hii there!"
  print(my_str.captitalize())

  # output
  # Hii there!
  ```

- `lower()`

  - Lowercase all characters in the string

  ```python
  my_str = "THIS IS UPPERCASE"
  print(my_str.lower())

  # output
  # this is uppercase
  ```

- `upper()`

  - Uppercase all characters in the string

  ```python
  my_str = "this is lowercase"
  print(my_str.upper())

  # output
  # THIS IS LOWERCASE
  ```

- `title()`

  - Gives title format to entire string.

  ```python
  my_str = "make This title format"
  print(my_str.title())

  # output
  # Make This Title Format
  ```

- `swapcase()`

  - Swaps cases in entire string
  - Uppercase → lowercase
  - Lowercase → Uppercase

  ```python
  my_str = "tHIS iS MiXCase"
  print(my_str.swapcase())

  # output
  # This Is mIxcASE
  ```

- `replace()`

  - Replace function is used to replace specific words to specific word in string.
  - `str.replace("<replace_this>", "<with_this>")`

  ```python
  my_str = "Hii world!"
  print(my_str.replace("Hii", "Hello")

  # output
  # Hello world!
  ```

## File Handling

- Python has inbuilt feature to handle files via python program, it’s called “File Handling”.
- Using File Handling we can read, write, append, delete and do a lot of operations on file and file data.
- Here are file methods,
- `w` - Write only
- `w+` - Write and Read
- `r` - Read only
- `r+` - Read and Write
- `a` - Append only
- `a+` - Append and Read

- `open()`
  - We use open() function to open file.
  ```python
  my_file = file.open("readme.txt", w+)
  ```
- `close()`
  - We use close() function to close opened file.
  ```python
  my_file.close()
  ```

## File Handling Functions

### Basic Functions

- `open()`
  - We use open() function to open file.
  ```python
  my_file = file.open("readme.txt", w+)
  ```
- `close()`
  - We use close() function to close opened file.
  ```python
  my_file.close()
  ```

### Reading File

- `read()`
  - Using read function we can read entire file.
  ```python
  my_file = file.open("readme.txt", r)
  print(my_file.read())
  ```
- `readline()`
  - Using readline function we can read just single line from the file.
  ```python
  my_file = file.open("readme.txt", r)
  print(my_file.readline())
  ```
- `readlines()`
  - Using readlines function we can read multiple lines from the file.
  ```python
  my_file = file.open("readme.txt", r)
  print(my_file.readlines())
  ```

### Writing File

- `write()`
  - Using write function we can write data in a file.
  ```python
  my_file = open("writeme.txt", w)
  my_file.write("Helloo world!!")
  ```
- `append()`
  - Using append function we can add new text at the last of the file, only at the end of the file.
  ```python
  my_file = open("writeme.txt", w)
  my_file.append("This text was added at the end.")
  ```
- `writelines()`

  - Using writelines function we can add multiple lines in the file.

  ```python
  my_file = open("writeme.txt", w)
  L = [str1, str2, str3]

  my_file.writelines(L)


  ```
