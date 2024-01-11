---
title: "2 - Control Flow Structure - Python"
date: 2023-12-29
id: 31
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - Python Tutorial
---

## Introduction to Control Structures

- Control structure is part of programming language where it allows us to control the flow of code execution in python.
- this control structures can add conditions or repetition or iterations.
- here are types of control structures,

  ### Conditional statements

  - conditional statements allows us to control the flow of code execution by providing specific conditions to program
  - `if`
    - `If` is used to check any specific condition matches or not, if yes then it’ll return true and execute the code if not then it’ll return false and execute the code given for false condition.
    - example:
      ```python
      age = 18
      if age < 18: # when condition is true
      	print("User can drive!")
      else: # when condition becomes false
      	print("User cannot drive!")
      ```
  - `elif`

    - `elif` is used to add extra condition on top of `if` condition for even more specific control on execution.
    - example:

      ```python
      age = 18

      if age <= 0: # first `if` condition to check if we got valid age in input
      	print("invaid user!")
      elif age < 18: # elif condition `extra condition` to check if age is less than 18
      	print("user can drive!")
      else:
      	print("user cannot drive!")
      ```

  - `else`

    - else is default code execution when none of the given condition matches.
    - it’ll execute else when none of the given condition is fulfilled.
    - example:

    ```python
    name = "John"

    if name == "Doe":
    	print("user found!")
    else: # It'll execute else because the `if` condition isn't matched
    	print("user not found!")
    ```

  ### Loops

  - Loops in python are used to iterate over existing object or to print some of output for specific amount of numbers.
  - Loops can be very useful when we want to print same and same thing over and over again until our condition is matched.
  - Loops are also useful when we want to print some series like series of numbers or series of factorials etc.
  - There are two types of loops,

    - For loop

      - `For loop` in python is used for more like sequential traversal over any object.
      - for example traversing a list or string or array.
      - using for loop we can traverse and process every single element in array or object or every single alphabet in string.
      - syntax:
        ```python
        for iterate_var in object:
        	print(iterate_var)
        ```
      - example:

        ```python
        name = "John"

        for x in name:
        	print(x)

        # output:
        # J
        # o
        # h
        # n
        ```

    - While loop

      - While loop in python are basically used to repeat block of code until specific condition matches which is given inside while loop.
      - whenever we add while loop we provide condition inside that loop and until that condition matches the code inside the loop is repeated continuously.
      - syntax:
        ```python
        while (condition):
        	# code
        ```
      - example:

        ```python
        count = 0

        while (count < 3): # we provide a condition in while loop
        	count = count + 1 # we increment the value of `count` everytime loop is working
        	print("Hello!!") # we print the output until the count becomes 3

        # output:
        # Hello!!
        # Hello!!
        # Hello!!
        ```

## If, If-else statements

- Conditional statements

  - conditional statements allows us to control the flow of code execution by providing specific conditions to program
  - `if`
    - `If` is used to check any specific condition matches or not, if yes then it’ll return true and execute the code if not then it’ll return false and execute the code given for false condition.
    - example:
      ```python
      age = 18
      if age < 18: # when condition is true
      	print("User can drive!")
      else: # when condition becomes false
      	print("User cannot drive!")
      ```
  - `elif`

    - `elif` is used to add extra condition on top of `if` condition for even more specific control on execution.
    - example:

      ```python
      age = 18

      if age <= 0: # first `if` condition to check if we got valid age in input
      	print("invaid user!")
      elif age < 18: # elif condition `extra condition` to check if age is less than 18
      	print("user can drive!")
      else:
      	print("user cannot drive!")
      ```

  - `else`

    - else is default code execution when none of the given condition matches.
    - it’ll execute else when none of the given condition is fulfilled.
    - example:

    ```python
    name = "John"

    if name == "Doe":
    	print("user found!")
    else: # It'll execute else because the `if` condition isn't matched
    	print("user not found!")
    ```

## Nested If-else

- Nested if else in python are used to create method to check condition twice or check multiple condition inside a condition that is true.
- for example, XYZ condition is true, now i want to check if XYZ condition is true then and then check if ABC condition is true, if ABC condition is true then and then check MNO condition is true and goes on.
- it is useful when we have multiple set of conditions to be checked if one condition becomes true.
- syntax:
  ```python
  	if condition:
  			if condition:
  				# code
  			else:
  				# code
  	else:
  			# code
  ```
- example:

  ```python
  number = 9

  if (n%5==0):
  		if (n%3==0):
  				print(f"The number {n} is dividable by both 5 and 3.")
  		else:
  				print(f"The number {n} is only dividable by 5 not 3.")
  else:
  		if(n%3==0):
  				print(f"The number {n} is only dividable by 3 not 5")
  		else:
  				print(f"The number {n} is neither dividable by 3 nor 5")
  ```

## Switch statement

- Switch statement is core mechanism in python that checks the values stored in variable and execute the code based on case statements provided.
- switch statement also known as switch is case is replacement for nested if else in python if you’re working with single variable condition checking.
- syntax:
  ```python
  match term:
  	case patternOne:
  			# code 1
  	case patternTwo:
  			# code 2
  	case patternThree:
  			# code 3
  	case patternFour:
  			# code 4
  	case patternFive:
  			# code 5
  	case _:
  			# default code
  ```
- example:

```python
lang = input("Enter your programming language (only one): ")

match lang:
	case "javascript":
		print("You can become web developer.")
	case "python":
		print("You can become data scientist.")
	case "php":
		print("You can become backend developer.")
	case _:
		print("Language doesn't matter, Problem solving skills matters!")
```

## For loops

- For loop

  - `For loop` in python is used for more like sequential traversal over any object.
  - for example traversing a list or string or array.
  - using for loop we can traverse and process every single element in array or object or every single alphabet in string.
  - syntax:
    ```python
    for iterate_var in object:
    	print(iterate_var)
    ```
  - example:

    ```python
    name = "John"

    for x in name:
    	print(x)

    # output:
    # J
    # o
    # h
    # n
    ```

## While loops

- While loop

  - While loop in python are basically used to repeat block of code until specific condition matches which is given inside while loop.
  - whenever we add while loop we provide condition inside that loop and until that condition matches the code inside the loop is repeated continuously.
  - syntax:
    ```python
    while (condition):
    	# code
    ```
  - example:

    ```python
    count = 0

    while (count < 3): # we provide a condition in while loop
    	count = count + 1 # we increment the value of `count` everytime loop is working
    	print(f"Counter: {count}") # we print the output until the count becomes 3

    # output:
    # Counter: 1
    # Counter: 2
    # Counter: 3
    ```

## Nested loops

- nested loop is a loop inside a loop.
- in nested loop the `inner loop` will be executed one time each iteration of the `outer loop`.
- syntax:
  ```python
  for x in x:
  	for y in y:
  		for z in z:
  			print(x, y, z)
  ```
- example:

  ```python
  colors = ["red", "yellow", "green"]
  fruits = ["apple", "banana", "apple"

  for x in colors:
  	for y in fruits:
  		print (x, y)

  # output:
  # red apple
  # yellow banana
  # green apple
  ```

## Break, Continue and pass statement

- Break

  - break statement is used in python to instantly terminate the loop when break statement is encountered.
  - it’ll instantly stop the loop when break statement is passed in loop.
  - syntax:

  ```python
  break
  ```

  - example:
    ```python
    while (count = 5):
    	count = count + 1
    	if count == 3:
    		print("Counter has reached 3, now stopping the loop")
    		break
    	else:
    		print(count)
    ```
    - Here in this example we have provided a counter while loop and in that loop we provided condition that if count becomes `3` we break the loop and if not then we continue printing.
    - what it’ll do is whenever the count value becomes `3` it’ll encounter break statement and instantly terminate the loop.

- Continue

  - continue statement is used to continue any loop when specific condition is matched.
  - it’ll continue to iterate the loop when it'll encounter `continue` statement.
  - using continue isn’t very required for small projects, it’s optional.
  - syntax:
    ```python
    continue
    ```
  - example:
    ```python
    while (count = 5):
    	count = count + 1
    	if count == 3:
    		print("Counter has reached 3, now continuing the loop")
    		continue
    	elif count == 5:
    		print("break encountered;")
    		break
    ```
    - here in this example we have created same counter loop but if the counter reaches the `3` it’ll continue the counting instead of breaking the loop on count `3`
    - and when it’ll reach `5` we’ll break the loop.

- Pass
  - Pass statement is used to skip any specific iteration in code execution.
  - it’ll skip the iteration where we passed the `pass` statement.
  - syntax:
  ```python
  pass
  ```
  - example:
    ```python
    while (count = 5):
    	count = count + 1
    	if count == 3:
    		print("passing the count 3")
    		pass
    	elif count == 5:
    		print("break encountered;")
    		break
    ```
    - here in this same counter example we have passes condition where if count reaches count `3` it’ll pass that iteration.
    - which means if `count == 3` it’ll basically skip the `count 3` and won’t print `3` instead it’ll directly print `4` after `2`.
