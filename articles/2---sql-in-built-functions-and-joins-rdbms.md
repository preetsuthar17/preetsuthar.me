---
title: "2 - SQL In built functions and Joins | RDBMS"
date: 2024-01-10
id: 40
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - RDBMS Tutorial
---

## Operators Arithmetic, Comparison, Logical, SQL functions-

- Single Row Function -
  - Single row functions return single row for every row of queried table or view.
  - These functions can appear in select lists, WHERE clauses, START WITH clauses, CONNECT BY clauses and HAVING clauses.
- Date Functions -

  - ADD_MONTHS() -

    - It adds or subtracts months from a date.

    ```sql
    SELECT ADD_MONTHS(DATE '2023-01-31', 5) FROM dual;
    -- Adds 5 months to the date '2023-01-31'
    ```

  - MONTHS_BETWEEN() -

    - Get total number of months between given date.

    ```sql
    SELECT MONTHS_BETWEEN(DATE '2023-07-30', DATE '2022-02-1') FROM dual;
    -- returns total number of months between two dates.
    ```

  - ROUND() -

    - Rounds a date to specified unit.

    ```sql
    SELECT ROUND(DATE '2023-01-02', 'MONTH') FROM dual;
    -- Rounds the date to nearest month.
    ```

  - TRUNC() -

    - Truncates the date to specified unit.

    ```sql
    SELECT TRUNC(DATE '2023-01-19', 'MONTH') FROM dual;
    -- truncates the date to first day of month
    ```

- Numeric Functions -

  - ABS() -

    - Returns absolute value.

    ```sql
    SELECT ABS(-15) FROM dual;
    ```

  - POWER() -

    - Returns exponential of passed numbers.

    ```sql
    SELECT POWER(3, 3) FROM dual;
    ```

  - MOD() -

    - Returns modulus of passed numbers.

    ```sql
    SELECT MOD(10, 5) FROM dual;
    ```

  - ROUND() -

    - Rounds up the value to nearest number.

    ```sql
    SELECT ROUND(3.2) FROM dual;
    ```

  - TRUNC() -

    - Truncates to previous integer decimal or given unit.

    ```sql
    SELECT TRUNC(111.11, 1) FROM dual;
    -- will truncate last 1 decimal so output will be '111.1'
    ```

  - SQRT() -

    - Returns square root of passed number.

    ```sql
    SELECT SQRT(25) FROM dual;
    ```

  - RAND() -

    - Returns random value from between 0 to 1.

    ```sql
    SELECT RDBMS_RANDOM.VALUE() from dual;
    ```

- Character Functions -

  - INITCAP() -

    - Capitalize first letter of words.

    ```sql
    SELECT INITCAP('hello world') FROM dual;
    ```

  - LOWER() -

    - Converts text into lowercase()

    ```sql
    SELECT LOWER('HELLO WORLD') FROM dual;
    ```

  - UPPER() -

    - Converts text into uppercase()

    ```sql
    SELECT UPPER('hello world') FROM dual;
    ```

  - LTRIM() -

    - Trims extra and unnecessary spaces from the beginning of the sentence.

    ```sql
    SELECT LTRIM('          hello world') FROM dual;
    ```

  - RTRIM() -

    - Trims extra and unnecessary space at the end of the sentence.

    ```sql
    SELECT RTRIM('hello world          ') FROM dual;
    ```

  - REPLACE() -

    - Replaces text with some other text.

    ```sql
    SELECT REPLACE('Hello world', 'lo', 'p') FROM dual;
    -- will replace `lo` with `p` so output will be 'Help world'.
    ```

  - SUBSTR() -

    - Extracts the substring from the string.

    ```sql
    SELECT SUBSTR('Hello world', 3) FROM dual;
    -- Extracts the string from the index 3.
    ```

  - INSTR() -

    - Used to get position of the sub string in string.

    ```sql
    SELECT INSTR('Hello world', 'o') FROM dual;
    -- will return the first 'o' in the string.
    ```

- Conversion Functions -

  - TO_CHAR() -

    - Converts number/date to string.

    ```sql
    SELECT TO_CHAR(69, "99") FROM dual;
    ```

  - TO_DATE() -

    - Converts a string to date.

    ```sql
    SELECT TO_DATE('January 15, 2023', 'Month dd, yyyy') FROM dual;
    ```

  - TO_NUMBER() -

    - Converts a string to number.

    ```sql
    SELECT TO_NUMBER('23', '99') FROM dual;
    ```

## Group by, Having and Order by clause

- GROUP BY -

  - It is used to group rows that has same value into summary rows.
  - It can be used with functions like AVG(), SUM(), COUNT() to calculate the summaries for each group.
  - It groups rows based on one or more columns specified after GROUP BY keyword.s

  ```sql
  SELECT department, AVG(salary)
  FROM employees
  GROUP BY department;
  ```

  - Example -

  ```sql
  SELECT NAME, SUM(SALARY) FROM emp
  GROUP BY NAME;
  ```

  ![Untitled](https://i.imgur.com/lue22xk.png)

  - In above example you can see that using GROUP BY we grouped two different columns and fetched view of both columns together.

- HAVING -

  - This is used to filter groups after GROUP BY clause grouped two rows/columns together.
  - Allows filtering smallest data based on given conditions.
  - Conditions can use smallest data and columns used in GROUP BY.
  - It is applied after using GROUP BY clause.
  - GROUP BY > HAVING

  ```sql
  SELECT department, SUM(salary)
  FROM employees
  GROUP BY department
  HAVING SUM(salary) > 100000;
  ```

  - Example -

  ```sql
  SELECT Department, sum(Salary) as Salary
  FROM employee
  GROUP BY department
  HAVING SUM(Salary) >= 50000;
  ```

  ![Untitled](https://i.imgur.com/bBl7WA3.png)

  - In above example as you can see we’re grouping the departments where salary is greater than 50,000 using HAVING clause.

- ORDER BY -

  - This is used to sort the output data in ascending or descending order.
  - It sorts rows based on one or more columns specified after ORDER BY clause.
  - ASC sorts data in ascending and DESC sorts data in descending order.
  - This clause is applied at last after all other clauses like GROUP BY, HAVING etc.
    - Means GROUP BY > HAVING > ORDER BY

  ```sql
  SELECT year, COUNT(*)
  FROM transactions
  GROUP BY year
  ORDER BY year DESC;
  ```

  - Example -

  ```sql
  SELECT * FROM students ORDER BY ROLL_NO DESC;
  ```

  ![Untitled](https://i.imgur.com/uBLYLHt.png)

  - In above example we have ordered the students data in Descending order which means greater → less.

## Joins: Simple (Cross join), Equi-join & Non-Equi-join (Inner join), Self-Joins, Outer-joins

- CROSS JOIN -

  - The CROSS JOIN returns all records from both of the tables.
  - For example, if there are three records in table 1 and three records in table 2, after performing CROSS JOIN it’ll return total of 6 records.
  - Output of Cross Join is similar to Cartesian product so this operation is also referred to Cartesian Product.
  - As this join operation is simplest among all joins that’s why it’s also called **Simple Join**.

    ![Untitled](https://i.imgur.com/5yG2alh.png)

  - Syntax -

  ```sql
  SELECT * FROM table1 CROSS JOIN table2
  ```

- INNER JOIN -

  - The INNER JOIN will return the matching records from the both tables.
  - Inner join is most common join among all.
  - If both the Joins are compared for equality then the operation will be called **Equi-Join.**
  - And opposite if both the joins are compared for non-equality then the operation will be called **Non-Equi join.**

    ![Untitled](https://i.imgur.com/mMl5eR3.png)

  - Syntax -

  ```sql
  SELECT * FROM table1 INNER JOIN table2
  ON table1.column_name = table2.column_name
  ```

- SELF JOIN -

  - When we want to join one table with itself then we have to use SELF JOIN.
  - In SELF JOIN we can give single table aliases and join that table with itself.
  - Self-Join is similar to inner join, except the table is joined with it self.
  - Each row in table is combined with every other row in the same table to produce a result.

    ![Untitled](https://i.imgur.com/KU7SJfS.png)

  - Syntax -

  ```sql
  SELECT * FROM table1 T1, table1 T2
  WHERE condition;
  ```

  - In above example we have gave alias (nickname) to table1 to connect it with itself.

- OUTER JOIN -

  - The OUTER JOIN in SQL has three types,

    - RIGHT JOIN-

      - The RIGHT OUTER JOIN returns all the records from the right table and the matching records from the left table.
      - If it don’t find any matching element in right table then it returns with NULL.

        ![Untitled](https://i.imgur.com/tTLHyYX.png)

      - Example -

        ```sql
        SELECT * FROM table1 RIGHT JOIN table2
        ON table1.column_name = table2.column_name;
        ```

    - LEFT JOIN -

      - The LEFT OUTER JOIN returns all the record from the left table and the matching records from the right table.
      - If it don’t find any matching element in right table then it returns with NULL.

        ![Untitled](https://i.imgur.com/EeDilot.png)

      - Example -

        ```sql
        SELECT * FROM table1 LEFT JOIN table2
        ON table1.column_name = table2.column_name;
        ```

    - FULL OUTER JOIN -

      - The FULL OUTER JOIN returns all the records when there is a match in left or right table records.
      - The FULL OUTER JOIN can potentially return very large set of data.

        ![Untitled](https://i.imgur.com/pl72NUa.png)

      - Example -

        ```sql
        SELECT * FROM table1 FULL OUTER JOIN table2
        ON table1.column_name = table2.column_name
        WHERE condition;
        ```

## Subqueries - Multiple, Correlated

- Multiple Subqueries -

  - It allows combining multiple subqueries using logical operators like AND, OR.
  - Each Sub query is typically enclosed in its own parentheses.
  - Outer query reference the main table and the result of sub queries.
  - Useful for applying multiple criteria from the same or different table.
  - Example -

  ```sql
  SELECT * FROM Employees as e
  WHERE e.salary > (SELECT AVG(salary) FROM Employees
  AND e.hire_date IN (SELECT hire_date FROM Employees WHERE name LIKE "A%");
  ```

- Co-related Queries -

  - Sub query reference to outer column.
  - Sub query is re-run for each row processed by the outer query.
  - It can perform comparisons, filtering based on outer query data.
  - Useful when subquery logic needs to utilize columns for each outer query row
  - Example -

  ```sql
  SELECT * FROM employees AS e1
  WHERE e1.salary > (SELECT AVG(salary) FROM employees e2
                     WHERE e2.department_id = e1.department_id);
  ```

## Implementation of Queries using SQL Set operators: Union, union all, Intersect, Minus

- Union

  - Union is used to combine the result of two selected statements.
  - It will remove the duplicated rows from the result obtained after performing UNION operation.
  - It useful to combine different results into one.

    ![Untitled](https://i.imgur.com/chrIPhq.png)

  ```sql
  SELECT column1 FROM table1
  UNION
  SELECT column1 FROM table1;
  ```

- Union All

  - Union All also combine results of multiple SELECT statements.
  - But it does not removes the duplicate rows from the result like UNION.
  - It keeps all the rows from all the SELECT statement, including duplicates.

    ![Untitled](https://i.imgur.com/OlvRWS3.png)

  ```sql
  SELECT column1 FROM table1
  UNION ALL
  SELECT column1 FROM table2;
  ```

- Intersect

  - Intersect returns only those rows which are common in between two select statements.
  - Similar to taking an intersection between sets.
  - It is very useful for finding common data in multiple tables.

    ![Untitled](https://i.imgur.com/bvWGCTC.png)

  ```sql
  SELECT column1 FROM table1
  INTERSECT
  SELECT column1 FROM table2;
  ```

- Minus

  - It returns the rows which are present in first query but absent in second query with no duplicates.
  - Subtracts common rows from the first result set.
  - It is Opposite to INTERSECT operation.

    ![Untitled](https://i.imgur.com/g8NOLqJ.png)

  ```sql
  SELECT column1 FROM table1
  MINUS
  SELECT column1 FROM table2;
  ```
