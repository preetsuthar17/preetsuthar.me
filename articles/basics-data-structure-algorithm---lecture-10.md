---
title: "Basics Data Structure & Algorithm - Lecture 10"
date: 2023-09-20
id: 29
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - DSA Course
---

## Stack and Queues

## Stack

- It is non-primitive linear Data Structure where you can insert and delete values at the same End also known as Top of Stack.

![stack](https://i.imgur.com/B6MvXk5.png)

- Stack is also known as LIFO - Last in First Out.
- Which means the values inserts last in stack is the value gets deleted first.
- To insert any value at end of stack you have to delete all of the top values and then insert new value.
- Whenever stack is empty the top stack value is "0" or "-1".

## Properties of Stack

- Insertion operation in stack is called "Push Operation".
- Deletion operation in stack is called "Pop Operation".
- A pointer at top always keeps track of top elements in stack.
- Initially when stack is empty top has value of "Zero (0) " and when stack contain single element top has value of "One (1)" and this value increases according to insertion in stack and decreases according to deletion.
- Each time new element insert in stack the top pointer is incremented by "One (1)" and decrement by "One (1)" when element delete.

## Operations on Stack

- Stack has two operations:
  - 1. Push
  - 2. Pop

## Stack operation - Push

- Push operation means adding.
- Push operation is used to insert any new value in stack
- After every push operation the top of stack value is increased by 1.
- When you try to insert value in stack when stack is full, you create condition which is called `Stack Full condition` or `Stack overflow condition`.

### Stack Push Algorithm:

Step 1: [Initialization]
if ( top >= N)
then write("Stack overflow)
return ()

Step 2:
Top = Top + 1

Step 3:
S[Top] = X

Step 4: [Finish]
Return ()

## Stack operation - Pop

- Pop operation means delete.
- Pop operation is used to delete any value from stack.
- After every pop operation the top of stack value is decreased by 1.
- When you try to delete value from stack when stack is empty, you create condition which is called `Stack underflow condition`

### Stack Pop Algorithm:

Step 1:
if (Top = 0)
then write("Stack Underflow")
return ()

Step 2:
Y <- S[Top]

Step 3:
Top <- Top - 1

Step 4:
return()
