---
title: "1 - Fundamentals of Python - Python"
date: 2023-12-28
id: 30
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - Python Tutorial
---

## Introduction to Python

- Python is a scripting language that is used for creating smart and advance scripting language.
- It was developed by Guido van Rossum in 1991.
- It is high level programming language which is used by millions of people to perform task such as automating anything or to perform complex math operations.
- Python has very easy and simpler syntax compared to any other programming language which makes it beginner friendly.
- Python is interpreted programming language which means it’ll check and go through each and every line in code.
- It is independent programming language which means the code written on any machine can work on any machine just by installing required modules.

## Python Application

- Python can be used to create server side websites
- Python can be used to create software in computer system.
- It can be very efficient for creating databases.
- It is also used for advance tasks such as machine learning or artificial intelligence.
- It is used to fetch live data from the web and plot graphs based on the data in real time.
- we can create a whole new programming language on top of python.

## Basic Structure of python program

- basic structure of python program looks like this,

  ```python
  import random

  def generate_random_num():
  	random_num = random.randint()
  	print(random_num)

  generate_random_num()

  # This python program will generate random number and print in outptu
  ```

- Import Libraries:
  - Using import method we can import external functions or modules in our program.
- functions:
  ```python
  def function_name():
  	# code
  ```
  - We can create user defined function with `def` keyword and use them where ever we like to
- Comments
  ```python
  # This is comment in python code
  ```
  - Comments are just pseudo code which is ignored by the compiler.
- I/O operations

  ```python
  name = input("enter your name: ")
  print("Hello, ", name)
  ```

  - I/O means Input/output operations
  - we can take input from user using `input()` function.
  - we can give output to our console or screen using `print()` function.

## Keywords and identifiers

- Keywords:
  - Keywords are basically reserved words by programming language.
  - This words cannot be used to name any object or any component is program as they are reserved by programming language.
  - for example here are few keywords in python language
    - def
    - int
    - float
    - True
    - False
    - print
    - input
    - return
  - etc.
  - we cannot use this names for naming variables or function or anything.
- Identifiers:
  - Identifiers are basically words that identity any object in program.
  - we can name any variable or function to identify them throughout program and these are called identifiers.
  - for example,
    ```python
    name = "Preet"
    age = 17
    ```
    - Here in this program the `name` and `age` is called identifier because it identifies the value of the variable.
  - Identifiers cannot be same as keywords.

## Data Types and Variables

- Data Types:
  - Data types is basically type of data in our program.
  - These types are automatically defined by python as the python is interpreted programming language.
  - we don’t need to define the type of data we store separately.
  ```python
  int age = 17 ❌
  age = 17 ✅
  ```
  - There are multiple data types in python,
    - Integer = 1, 2, 3, 4…
    - Float = 1.3, 5.3, 6.9…
    - String = “Hello world!”
    - Char = “H”, “E”
    - Boolean = True, False
- Variables:

  - Variables are basically containers that are used to store some data in our memory.
  - Think of variables as jar. we can store any item in jar so we can in variables.
  - we name an variable and assign some values to that variable.
  - we use identifiers to name any variables.
  - variable names cannot be same as keywords.
  - example:

    ```python
    name = "Preet Suthar"

    # here the `name` is identifier
    	# for variable which can value of "Preet Suthar".
    # now we can access the value of variable `name`,
    	# using the identifier.

    print(name) # output: Preet Suthar
    ```

## Type Casting

- Type casting is method of converting data type of one variable to another.
- Type casting is also known as type conversion.
- Type casting has two types,
  - Implicit Casting
  - Explicit Casting
- Here are the function used for type casting,
  - `int()`:
    - Used to convert any other type of data to integer.
    - `int(”12”) --> 12`
  - `float()`
    - Used to convert any integer type of data to float.
    - `float(10) --> 10.00`
  - `str()`
    - Used to convert any other type of data to string.
    - `str(10) --> "10"`
- Input/output function

  - Input:

    - we use `input()` function to take data as input from the user via keyboard.
    - we can take any sort of data for our variables to store or input any array or anything.
    - and we can directly store this input data into a variable.
    - Syntax:
      - `input()`
    - Example:

      ```python
      name = input("Enter your name: ")
      print("Hello, ", name)

      # output:
      # Enter your name: Preet
      # Hello, Preet
      ```

  - Output:

    - we use `print()` function to provide any output to the console or screen in python programming language.
    - this output can be anything from someone’s name to value of variable which was taken from the user.
    - Syntax:
      - `print(data_to_print)`
    - Example:

      ```python
      name = "Preet Suthar"

      # printing number
      print(1)
      # output: 1

      #printing string
      print("Hello world!")
      # output: Hello world!

      # printing data from the variable
      print(name)
      # output: Preet Suthar
      ```

## Operators

- Operators in python are used to perform operations on variables and values.
- There are multiple types of operators in python,
  - Arithmetic Operators:
    - These are basic operators which are used to perform mathematical operations.
    - `+`
      - Addition
      - `x + y`
    - `-`
      - Subtraction
      - `x - y`
    - `/`
      - Division
      - `x / y`
    - `%`
      - Modulus
      - `x % y`
    - `*`
      - Multiplication
      - `x * y`
    - `**`
      - Exponentiation
      - `x ** y`
  - Assignment Operators:
    - Assignment operators are used to assign values to variables.
    - Here are some of them
    - `=`
      - used to assign values to variable.
      - `x = 10`
    - `+=`
      - to make addition in existing value.
      - `x+=1 --> x = x + 1`
    - `-=`
      - to make subtraction in existing value.
      - `x -= 1 --> x = x - 1`
    - `*=`
      - to make multiplication in existing value.
      - `x *= 1 --> x = x * 3`
    - `/=`
      - same as above but for division
    - `**=`
      - same as above but for exponentiation.
    - `%=`
      - same as above but for modulus.
  - Comparison Operators:
    - Comparison operators are used to compare values
    - `==`
      - Equal to (check if both of the values are same)
    - `!=`
      - Not Equal to.
    - `>`
      - Greater than
    - `<`
      - Less than
    - `>=`
      - Greater than or equal
    - `<=`
      - Less than or equal
  - Logical Operators:
    - Logical operators are used to combine conditional statements.
    - `and`
      - If all of the condition are True.
      - `x < 4 and x > 6`
    - `or`
      - if at least one condition is True
      - `x < 4 or x > 10`
  - Membership Operators:
    - Membership operators are used to check if specific sequence is present in an object.
    - `in`
      - Check if sequence is present in the object
      - `x in y`
    - `not in`
      - Check if sequence is not present in the object
      - `x not in y`
