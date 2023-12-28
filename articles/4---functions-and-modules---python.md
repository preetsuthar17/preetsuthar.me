---
title: "4 - Functions and Modules - Python"
date: 2023-12-27
id: 32
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - Python Tutorial
---

## Introduction to python user defined function

- User defined function are kind of functions which are defined by user in python program to do some specific tasks with specific requirements.
- To define a function in python we use `def` keyword which means define.
- syntax:
  ```python
  def function_name(parameters)
    # code
  ```
- example:

  ```python
  def print_hello():
    print("hello world!")

  print_hello()

  # output:
  # hello world!
  ```

## Passing parameters to a function

- Parameters are basically placeholder which are used in a lot function to get actual value for the specific data inside of a function.
- They work as a variable when we call a function.
- syntax:

  ```python
  def function_name(parameter):
    x = <parameter>
    print(x)

  function_name(parameter)
  ```

- example:

  ```python
  def pr  nt_name(name):
   x = name
    print("Hello, ", name)

  print_name("Preet")

  # output:
  # Hello, Preet
  ```

## Standard Library: Built-in functions

- python has very large collection of built in functions which are used by user to make things easy in the program to be executed.
- these are kind of function which doesn’t require any installation or importing external data.
- we can use these functions directly in our code by calling them with identifier.
- here are few of the built-in function in python,
- len()
  - len function is used to find length of passed object.
  ```python
  my_list = [1,3,545,6,7,3,6]
  print(len(my_list))
  ```
- print()
  - print function is used to print any output on our console.
  ```python
  print("Hello world")
  print(143)
  ```
- input()
  - input function is used to take input from user, store it in variable and use later in our python program.
  ```python
  age = input("Enter your age: ")
  print("User is ", age, " years old!")
  ```
- type()

  - type function is used to find type of any object.

  ```python
  my_str = "Hello world!!"
  my_int = 143

  print(type(my_str))
  print(type(my_int))
  ```

- min()
  - min function is used to find minimum value from passed parameters.
  ```python
  print(min(3,5,2,5,7,3,1))
  ```
- max()
  - max function is used to find maximum value from passed parameters.
  ```python
  print(max(3,5,2,6,8,234,456,33,3))
  ```
- sum()
  - sum function is used to sum up two passed parameters.
  ```python
  x = 10
  y = 20
  print(sum(10,20))
  ```
- etc.

## Modules and Packages

## Random Module

- Random module in python is used to generate any random sequence of numbers or any other data.
- This module is pre-installed in python so it doesn’t require any external installation.
- we can start using it by importing in our file — `import random`
- this module can help to generate series of random numbers or data.
- here are few function from the random module
  - `random.random()`
    - Returns random number between 0 and 1
    - 0.34244
  - `random.randint()`
    - returns random integer.
  - `random.range()`
    - generate sequence of number or data from given range.
  - `random.randrange()`
    - generates series with random range.
  - `random.choice()`
    - chooses random data from the given object.
- Example:

  ```python
  import random

  my_list = ["red", "blue", "green"]
  random_color = random.choice(my_list)

  print(random_color)

  # output:
  #	red
  ```

## Math Module

- Math module in python is used to perform mostly all math function inside of python program.
- It is very useful when we have to perform such complex mathematic equation in our program to get some specific data.
- It is pre-installed in python programming language which means it doesn’t require any external installation to start using this module.

```python
import math
```

- Here are few function from the math module
  - `math.sum()`
    - Returns sum of two numbers
    ```python
    math.sum(10,20)
    ```
  - `math.pow()`
    - Return answer of A to the B
    ```python
    math.pow(a,b)
    ```
  - `math.exp()`
    - Returns exponential of the number
    ```python
    math.exp(65)
    ```
  - `math.asin()`
    - Returns Arc sin of a number.
  - `math.acos()`
    - Returns Arc cos of a number.
  - `math.atan()`
    - Returns Arc tan of a number.
  - `math.sin()`
    - Returns sin of a number.
  - `math.cos()`
    - Returns cos of a number.
  - `math.tan()`
    - Returns tan of a number.
  - `math.log()`
    - Returns log of given number.
  - `math.sqrt()`
    - Returns Square root of given number.
    ```python
    math.sqrt(25)
    ```
  - `math.fact()`
    - Returns factorial of given number.
    ```python
    math.fact(25)
    ```

## Datetime Module

- Datetime module in python is very useful module to easily manage the dates and current time data in program.
- It is pre-installed module in python so it doesn’t require any external installation.

```python
import datetime
```

- Datetime module has vast collection of datetime functions and methods.
- Here are few function from the datetime module.
- `datetime.date()`
  - Returns the current date.
- `datetime.time()`
  - Returns the current time.
- `datetime.datetime()`
  - Returns the current date and time.
- `datetime.timedelta()`
  - Returns the difference in date or time at any given point.
- `datetimte.tzinfo()`
  - Returns time zone information.
- `datetime.timezone()`
  - Returns time zone information with recent version of UTC.

## Matplotlib Module

- Matplotlib means Math plot library.
- This is used to plot visual graph in python program for some specific data set or any online data.
- This isn’t pre-installed in python so it requires installation before usage.

```python
pip install matplotlib
```

- matplotlib allows us wide variety of plots which helps to understand trends and patterns. Here are few of them listed,

  - Matplotlib Line Plot

    - This plotting is used to plot graph with line visual.

    ```python
    from matplotlib import pyplot as plt
    x = [2,4,6]
    y = [2,7,2]

    plt.plot(x,y)
    plt.show()
    ```

  - Matplotlib Bar Plot

    - This plotting is used to plot graph with bar visual.

    ```python
    from matplotlib import pyplot as plt
    x = [4,3,7]
    y = [2,6,8]

    plt.bar(x,y)
    plt.show()
    ```

  - Matplotlib Histogram Plot

    - This plotting is used to plot graph with histogram visual.

    ```python
    from matplotlib import pyplot as plt
    x = [3,5,2]
    y = [8,7,3]

    plt.hist(x,y)
    plt.show()
    ```

  - Matplotlib Scatter Plot

    - This plotting is used to plot graph with scatter visual.

    ```python
    from matplotlib import pyplot as plt
    x = [3,5,2]
    y = [8,7,3]

    plt.scatter(x,y)
    plt.show()
    ```

  - Matplotlib Pie Plot

    - This plotting is used to plot graph with pie visual.

    ```python
    from matplotlib import pyplot as plt

    label = ["Day 1", "Day 2", "Day 3"]
    sizes = [35,35,30]

    plt.pie(sizes, labels=label)
    plt.title("Pie chart example")
    plt.show()
    ```

## Create and import custom user defined modules

- creating custom user defined modules is very simple task here is how we can achieve that.
- first create a file named `matho.py`
- now inside that file we define our user defined functions.

```python
def sum(x,y):
		return x + y
def sub(x,y):
		return x - y
def multi(x,y):
		return x * y
def mod(x,y):
		return x % y
def div(x,y):
		return x / y
```

- now in our main file `main.py` we can import our user defined module

```python
import matho.py

a = 10
b = 20

print(matho.sum(a,b))
print(matho.sub(a,b))
print(matho.multi(a,b))
print(matho.mod(a,b))
print(matho.div(a,b))
```

- This is the most basic yet effective method to create user-defined functions and actually import them in our main file and use them easily.
