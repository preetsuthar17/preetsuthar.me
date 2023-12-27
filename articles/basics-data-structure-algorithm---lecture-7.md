---
title: "Basics Data Structure & Algorithm - Lecture 7"
date: 2023-09-11
id: 26
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - DSA Tutorial
---

## Arrays

- Collection of similar types of data is called an "Array".
- Array is linear data structure of similar type of value under a same name.
- Data are stored in sequence in data structure.

## Array Syntax

```
data_type arr_name[sizeof_arr]
```

### Example

```c
int ages[5] = [15,17,14,18,19]
```

This example basically means

```c
ages[0] = 15;
ages[1] = 17;
ages[2] = 14;
ages[3] = 18;
ages[4] = 19;
```

An array basically creates multiple variables with different index with which data can be accessed.

in arrays index starts from 0 to n number.
the last index will be `sizeof_arr - 1` which means we have `ages[5]` where size of arr is `5` so first index will `ages[0]` and last index will be `sizeof_arr - 1` means it'll be `5 - 1` so last index will be `ages[4]`

Values in arrays can be accessed using array index. SO if we wanna access value on `ages[4]` we will access it `ages[4]` which will be `19`

![preview](https://i.imgur.com/CYbjPpj.png)
_Diagram from byju's_

> Notes: elements in array must have same datatype.

```c
int a = [1,4,7,3,6] // This is correct ✅
char b = ['d','a','s','g','h'] // This is also correct ✅
float c = [32,6.3,'d','a',42,'b'] // This is not allowed ❌
```

I hope this clears up what arrays means.

## Properties(Characteristics) of Array

- Array has number of memory cell which are called elements. each memory cell size occupy by which is depending on type of Array
- The array elements are always stored sequentially or linear form.
- Every elements has assigned a unique number which is called `"Address of particular element"`

## Types of array

There are three main types of array.

1. One Dimensional Array [1D Array]
2. Two Dimensional Array [2D Array]
3. Multi-Dimensional Array

## One Dimensional Array [1D Array]

### Syntax

```c
data_type arr_name[size];
```

### Example

```c
int ages[4] = [12,54,83,35]
```

```c
char vowels[5] = ['A','E','I','O','U']
```

## Two Dimensional Array [2D Array]

### Syntax

```c
data_type arr_name[row][column];
```

### Example

```c
int two_dimensional_arr[4][3];
```

### Initialization

```c
int arr[4][3]={{1,2,3},{2,3,4},{3,4,5},{4,5,6}};
```

## Array Practical Example

Example to find Row Major Order and Column Major Order in C.

```c
#include <stdio.h>
int Max = 10;

int main(){

  int arr[Max][Max], m, n, i, j;
  printf("\n Enter total number of row: ");
  scanf("%d", &m);
  printf("\n Enter total number of column: ");
  scanf("%d", &n);

  for(i=0;i<m;i++){
    for(j=0;j<n;j++){
      printf("\n Enter any number for array elements: ");
      scanf("%d", &arr[i][j]);
    }
  }

  printf("\n\nRow-Major Order:\n\n");

  for(i=0; i<m; i++){
    for(j=0; j<n; j++){
      printf("%d\t", arr[i][j]);
    }
    printf("\n");
  }

  printf("\n\nColumn-Major Order:\n\n");
  for(i=0; i<m; i++){
    for(j=0; j<n; j++){
      printf("%d\t", arr[j][i]);
    }
    printf("\n");
  }
}
```

### Output

![output](https://i.imgur.com/C78mFcp.png)
