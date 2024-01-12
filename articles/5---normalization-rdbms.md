---
title: "5 - Normalization | RDBMS"
date: 2024-01-12
id: 42
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - RDBMS Tutorial
---

## Basics of Normalization

- Normalization is method or technique used to eliminate data redundancy and ensures the data integrity between tables.
  - It decreases data redundancy.
  - It ensures the data integrity of tables.
- There are three types of Normalizations

  - 1NF (First Normal Form)
  - 2NF (Second Normal Form)
  - 3NF (Third Normal Form)

- 1NF (First Normal Form) -

  - First normal form in this table the data should not be repeating in single row.
  - Every row and data must be unique.

  ![Untitled](https://i.imgur.com/YIM5w8l.png)

  - In above example we have two author data in single column and single row.
  - Now if we use First Normal Form we eliminate the repeating data.

  ![Untitled](https://i.imgur.com/p2E6ueW.png)

- 2NF (Second Normal Form) -

  - It is already in First Normal Form, which means each row and data is unique.
  - All data are fully dependent on primary key.
  - It divides tables in multiple tables which helps to improve data integrity and reduce data redundancy.
  - It helps to organize the data and tables in database.

  ![Untitled](- It is already in First Normal Form, which means each row and data is unique.)

  - In above example we have where CourseID is primary key and there are total 3 columns,
  - Now using Second Normal Form we can divide the data referencing primary key in other tables.

  ![Untitled](https://i.imgur.com/9glCn3L.png)

  ![Untitled](https://i.imgur.com/1mVGBA1.png)

- 3NF (Third Normal Form) -

  - Must be Second Normal Form before Third Normal Form.
  - No non-key attributes are directly dependent on the primary key

    ![Untitled](https://i.imgur.com/JK8Tid3.png)

  - Now using Third Normal Form we can divide single table into two tables using one of the column data and referencing a column from one table into another table.

    ![Untitled](https://i.imgur.com/EkneCxa.png)

    ![Untitled](https://i.imgur.com/tvH0aoC.png)

## Advantages of normalization —

    - Reduces data redundancy and inconsistency.
    - Helps achieving data integrity.
    - Provides clear structure to the data.
    - Makes data retrieval more efficient.
    - By organizing data it'll enhances the reliability of the database.
    - Normalization improves performance of the database and makes it faster.

## Disadvantages of normalization —

    - Very complex to implement.
    - May require extra joins in tables to make it work.
    - Makes the structure complex which can slow down the queries and processes.
    - It increases the database size.
    - Using normalization it can reduce flexibility.
