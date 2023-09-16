---
title: "Basics Data Structure & Algorithm - Lecture 9"
date: 2023-09-16
id: 28
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - DSA Course
---

## Strings

- String is collection of characters.
- Strings are written in double quotation mark (" ").
- Each string will get NULL character (\0) at the end of it.
- Strings are basically One Dimensional Array of characters.

## String Syntax

```c
char str_name[str_size] = "str_content"
```

## String Example

```c
char [] = "Hello"; // you can leave str_size empty which will have no limit in str_content.
```

![preview](https://i.imgur.com/LPuCOjC.png)

- Strings can contain all types of characters.
  - A to Z
  - a to z
  - 0 to 9
  - @, #, $, %, ^, etc.

## Initialization of string

### size defined string

```c
char str[30] = "preetsuthar.me"
```

### no size defined string

```c
char str[] = "preetsuthar.me"
```

### defining as array with size

```c
char str[30] = {"p","r","e","e","t","\0"} // Null character at the end.
```

### defining string as pointer

```c
char *str = "hello"
```

## Reading strings

### Reading string using `scanf()`

- We use `scanf()` in C language to read any input from user.
- `scanf()` won't read anything after whitespace in input string.

```c
"hello world" // it will only read till hello.
```

````c
  char str[];
  scanf("%s", &s);
  ```
````

### Reading string using `getchar()`

- This will just read first character in string.

  ```c
  "Hello world" // it will only read 'h'.
  ```

  ```c
    char str[10];
    str = getchar()
  ```

### Reading string using `gets()`

- This will read entire string element with all the white spaces and all the new lines.

```c
    Hello
    This will
    Read this string
    Exactly
    As it is.
```

```c
char str[10];
gets(str);
```

## Operations on string

_detailed information will be covered in upcoming lectures_

- String Read.
- String Write.
- String Length Count.
- String Case Conversion.
  - Uppercase To Lowercase and vice a versa.
- String Concatenate.
- String Copy.
- String Comparing.
- Substring.
  - Getting specified value from any index in string,
- String Reverse.
- String Append.
- String insertion.
- String Deletion.
