---
title: "Basics Data Structure & Algorithm - Lecture 11"
date: 2024-01-03
id: 36
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - DSA Tutorial
---

## Queue

- Queue is a linear data structure where insertion and deletion operations are performed at the both end.
- Queue is also known as FIFO (first in first out) because the element which was inserted first is deleted first.
- A queue is like ticket window, where whoever comes first, gets served first.

![Untitled](https://i.imgur.com/mHrjzNg.png)

- In a queue there are two ends, front-end and rear-end.
- Insertion in queue is done from rear-end which is called enqueue.
- Deletion in queue is done at the front-end which is called dequeue.
- Characteristics of queue:
  - Queue can handle multiple data.
  - In queue we can access both ends.
  - Queue is fast and flexible.
- Operations on queue:
  - Insertion
  - Deletion
  - Traversing
- Types of Queue
  - Singular Queue
  - Circular Queue.

## Concept of Circular Queue

- Circular queue is normal queue but looped in circular manner.
- Circular queue doesn’t have any null character at the end.
- The manner of circular queue is set in a way that no number of memory wastes.
- All the data in circular queue are looped and start pointer is connected with the last pointer.

  ![Untitled](https://i.imgur.com/bS7DP5P.png)

- Circular queue doesn’t waste any memory like normal queue.
- When element is deleted in normal queue the space that it left becomes non-usable.
- Where the circular queue it takes the empty space and make good use of it.
- Operations on circular queue:
  - Insertion (Enqueue)
  - Deletion (Dequeue)
  - IsEmpty/IsFull
- Application of circular queue:
  - Memory management
    - Circular queue is used in memory management
  - Process Scheduling
    - A CPU uses a queue to schedule processes.
  - Traffic System
    - Queues are also used in traffic systems.

## Application of Queue

- Task Scheduling
  - Queues can be used to manage and schedule the task based on priority or the order in which they were received.
- Operating System
  - Operating systems often uses Queue to manage the task of processing and resources.
- Resource Allocation
  - Queues can be used to manage and allocate the resources to task based on their priority or in the order they were received.
- Batch Processing
  - Queues can be used to handle batch processing jobs such as data analysis or image rendering.
- Web Servers
  - Queues can help to manage incoming client requests and outgoing server data efficiently.
- Printer queues
  - Queues in printer helps to manage queue of pending prints.

## Differentiate circular queue ad simple queue

| Simple Queue                                                     | Circular Queue                                             |
| ---------------------------------------------------------------- | ---------------------------------------------------------- |
| Elements are in sequential and linear manner.                    | Elements are in circular manner loop through entire queue  |
| Insertion is done from rear-end and deletion from the front-end. | Insertion and deletion can be done from any place any end. |
| Memory space is more occupied than circular queue.               | Memory space is less occupied than simple Queue            |
| The usage of memory is inefficient.                              | The memory can be more efficiently utilized.               |
| It follows FIFO principle (First in First Out)                   | It doesn’t have any specific manner                        |
