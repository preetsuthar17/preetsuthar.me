---
title: "Basics Data Structure & Algorithm - Lecture 6"
date: 2023-09-07
id: 22
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - DSA Course
---

## Algorithm Analysis

- Task of measuring how much storage and determining how much computing time required from algorithm.

## Time complexity

- The time complexity of algorithm is defined as amount of time taken by algorithm to run its complexity

- Number of instruction which one algorithm to execute during its running time is called time complexity.

- It is machine independent

- Time Complexity represent as a function of input `t(n)` time required to execute number of steps.

- Sometimes it may happen some algorithm have different time complexity just because of its input size and number of steps executed.

## Space Complexity

- When we design an algorithm to solve problem it needs some computer memory to complete its execution.

- Total amount of computer memory required by an Algorithm to complete its execution is called space complexity.

- It is machine dependent.

- The memory is primary memory not a hard drive or removable media.

## Notations

1. Asymptotic Notation
2. Big-O-Notation
3. Omega Notation
4. Theta Notation

![Preview](https://i.imgur.com/xt0Fd2E.png)

## Asymptotic Notation

- A Asymptotic notation is used to describe the running time of an algorithm its a order of growth of function

### Uses

- They can be used to represent the complexities of algorithms for asymptotic analysis.

- They allow the comparison of the performance of an algorithm.

- To choose the best algorithm we need to check the efficiency of each algorithm.

- Asymptotic notation a short hand way to represent time complexity.

## Big-O-Notation (upper-bound; worst case)

- The big-O notation is a method representing the upper bond of algorithm running time.

- Using big-O-Notation we can give longest amount of time taken by the algorithm to
  complete.

- Let `f(n)` and `g(n)` being two non-negative functions

- Similarly `C` is some constant such that `C > 0` we can write `f(n) <= C * g(n)`

- It is also denoted as `f(n (- Og(n))`

- In other words `f(n) < g(n)` if `g(n)` is multiple of some constant.

## Omega Notation (lower bond; best case)

- Omega notation is denoted by `Ω` (omega).

- This notation is used to represent lower bound of algorithm running time.

- Using omega notation we can denote shortest amount of time taken by algorithm.

- A function `f(n)` is said to be in `Ω(g(n))` if `f(n)` is bounded below some positive constant multiple of `y(n)` such that `f(n) >= C * g(n)`

- For all `n >= no` is denoted as `f(n) (- g(n)`

## Theta Notation

- Theta notation is denoted by `Θ`

- In this method the running time is between upper bound and lower bound.

- Let `f(n)` and `g(n)` be two non-negative functions.

- There are two positive constant named `C1` and `C2`

`C1 * g(n) <= f(n) <= C2 * g(n)`

- Then we can say that `f(n) (- Θ g(n)`
