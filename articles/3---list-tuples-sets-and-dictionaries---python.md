---
title: "3 - List, Tuples, Sets and Dictionaries - Python"
date: 2023-12-30
id: 32
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - Python Tutorial
---

## Lists and operations on Lists

- List

  - List in python is collection of multiple data with various data type.
  - It’s just like array but list can contain multiple type of data.
  - list can have strings, characters, numbers, float, etc.
  - list are dynamic array which means we don’t need to provide any length for our lists.
  - how to create list
    - list are stored in variable and to create a list the data are stored between `[]`
    - syntax
      ```python
      my_list = [1,3,4,5,]
      ```
      ```python
      my_list = ["hi", "hello", "hola!"]
      ```
  - list can consist multiple types of data which means list can be dynamic,
    ```python
    my_list = ["Hi", 23, 4.3, "H", True]
    ```
  - Characteristics of lists:
    - Lists are in order
    - elements can be accessed by index numbers
    - The lists are mutable
    - various types of element and data can be stored in list.
  - Operations on lists:

    - Concatenation

      - Concatenating multiple lists

      ```python
      list1 = [2,5,6]
      list2 = [3,5,2]

      list3 = list1 + list2
      print(list3)

      # output: [2,5,6,3,5,2]
      ```

    - Length

      - Measuring length of a list

      ```python
      list1 = [4,5,6,5,7,3]
      print(len(list1)

      # output: 6
      ```

    - Iteration

      - Iterating over entire list and processing each and every element.

      ```python
      list1 = [3,4,5]
      for x in list1:
      	print(x)

      # output: 3 4 5
      ```

    - Membership

      - Check if any specific item or data is inside the list.

      ```python
      list1 = ["red", "yellow", "blue"]
      print("red" in list1)

      # output: True
      ```

## Tuples and operations on Tuples

- Tuples in python are used to store multiple items in a single variable.
- Tuple is collection which is ordered and unchangeable
- they are defined with `()` and stored in single variable
- syntax
  ```python
  my_tuple = ("apple", "banana", "cherry")
  print(my_tuple)
  ```
- Characteristics of tuples
  - Tuples are immutable data type which means their data cannot be changed after they are generated
  - Tuples allows duplicate data to be processed on.
  - Each element in tuple has a specific order that will never change because tuples are ordered sequence.
- Operations on tuples

  - Concatenation

    - Concatenating multiple tuples

    ```python
    tuple1 = (2,5,6)
    tuple2 = (3,5,2)

    tuple3 = tuple1 + tuple2
    print(tuple3)

    # output: (2,5,6,3,5,2)
    ```

  - Length

    - Measuring length of a tuple

    ```python
    tuple1 = (4,5,6,5,7,3)
    print(len(tuple1)

    # output: 6
    ```

  - Iteration

    - Iterating over entire tuple and processing each and every element.

    ```python
    tuple1 = (3,4,5)
    for x in tuple1:
    	print(x)

    # output: 3 4 5
    ```

  - Membership

    - Check if any specific item or data is inside the tuple.

    ```python
    tuple1= ("red", "yellow", "blue")
    print("red" in tuple1)

    # output: True
    ```

## Sets and operations on Sets

- Set are unordered data type in python which are mutable which means their data can be changed and edited by time. each element in set is different and unique.
- Sets can contain different type of data in it.

```python
example_set = { 23, "Hii" , 2.3, "H"}
```

- This data can be accessed using indexing.
- How to create set?

  - sets in python can be created using `{}` curly braces and that is set is stored inside a variable with which we can access the set later.

  ```python
  example_set = {1,3,45,5,5,2}

  print(example_set)
  ```

- Characteristics of set
  - Set is unordered data type.
  - Set is mutable which means their data can be edited with time.
  - Data in the set is different and unique, no data are same.
  - Data can be accessed using indexing.
  - It can contain multiple type of data.
- Operations on set

  - pop()

    - Pop operations removes any random element from the set and returns the removed element and returns the set in ordered manner.

    ```python
    example_set = {3,6,3,6,4}

    popped_element = example_set.pop()
    print(popped_element)
    print(example_set)

    # output:
    # 3
    # {4,6}
    ```

  - add()

    - using add function we can add new elements to set

    ```python
    example_set = {"this", "is", "example"}
    example_set.add("set")
    print(example_set)

    # output
    # this is example set
    ```

  - remove()

    - using remove function we can remove any element from the set

    ```python
    example_set = {"this", "is", "extra", "word"}
    example_set.remove("extra")
    print(example_set)

    # output
    # this is word
    ```

## Dictionaries and operations on Dictionaries

- Dictionaries are used to store data values in key and values pairs.
- A dictionary is a collection which is ordered and changeable.
- it does not allow duplicates.
- it is mutable data type.
- Dictionary has two values within the set,
  - key: with which we can target the specific data.
  - value: the value we can store in key.
- dictionary works almost same as variables only difference is we can store multiple variables in single dictionary and target dictionary to access the variable.
- Syntax

```python
new_dict = {
	"key": "value",
	"key1": "value1"
}
```

- Characteristics of dictionaries
  - They are mutable which mean we can change their data.
  - It does not allow duplication of data.
  - The data in dictionary are ordered data.
  - We can access the value of pair within dictionary by targeting the dictionary itself
- Operations on dictionaries

  - clear()

    - Removes all the elements from the dictionary.
    - syntax

    ```python
    my_dict = {
    	"one": 1,
    	"two": 2,
    	"three": 3
    }

    my_dict.clear()
    ```

  - copy()

    - return copy of a dictionary.

    ```python
    my_dict = {
    	"one": 1,
    	"two": 2,
    	"three": 3
    }

    my_dict.copy()
    ```

  - pop()

    - Removes the element with specified key.

    ```python
    my_dict = {
    	"one": 1,
    	"two": 2,
    	"three": 3
    }

    my_dict.pop("three")
    ```

  - update()

    - updates the dictionary with new key-value pairs.

    ```python
    my_dict = {
    	"one": 1,
    	"two": 2,
    	"three": 3
    }

    my_dict.update({
    	"four": 4
    })
    ```

  - values()

    - Returns a list of all the values in the dictionary.

    ```python
    my_dict = {
    	"one": 1,
    	"two": 2,
    	"three": 3
    }

    my_dict.values()
    ```

  - get ()

    - Used to get value from specific key.

    ```python
    my_dict = {
    	"one": 1,
    	"two": 2,
    	"three": 3
    }

    my_dict.get("three")
    ```
