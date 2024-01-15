---
title: "4 - PL/ SQL and Triggers"
date: 2024-01-15
id: 44
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - RDBMS Tutorial
---

## Basics of PL/SQL

- PL/SQL stands for Procedural Language/Structured Query Language.
- It is an extension of SQL that adds procedural programming technique.
- PL/SQL allows us to add procedural code in our program for example, Loops, Conditional statement, logic, etc.
- PL/SQL code is structured and written in blocks which groups together related objects.
- PL/SQL block has three parts -
  - Declare
  - Begin
  - Exception
- We can declare variables and constant in PL/SQL like standard SQL datatype NUMBER and VARCHAR2.
- It includes conditional statements like IF/THEN/ELSE.
- It also includes basic loops like simple loop or while loop.
- Data Types in PL/SQL -
  - Some common data types in PL/SQL are -
    - NUMBER - store numeric values
    - VARCHAR2 - to store variable length character strings.
    - BOOLEAN - to store TRUE, FALSE or NULL values.
    - INTEGER - to store integer values.
    - SMALLINT - to store small integer values.
    - FLOAT - to store decimal values.
    - DATE - to store date value.
    - BLOB - to story large binary object values.
    - CLOB - to store large character object values.
    - TIMESTAMP - to store any timestamp.

## Advantages of PL/SQL over SQL

- PL/SQL provides high level security.
- programs written in PL/SQL are portable.
- PL/SQL supports object oriented programming.
- PL/SQL provides support for developing web applications and server pages.
- PL/SQL gives access to predefined SQL packages.
- PL/SQL saves time on designing and developing programming by providing strong features like data binding, encapsulation, exception handling.
- PL/SQL reduces network traffic and provides high performance for the application.

## Control Structures

- Control structures are used to control flow of program.
- There are major three control structures
  - Sequential
  - Conditional
  - Iterative

### Sequential -

- In this control structure the queries are executed in the same sequence they are written.
- default top to down order.
- Example -

```sql
BEGIN
DBMS_OUTPUT.PUT_LINE('Step 1');
DBMS_OUTPUT.PUT_LINE('Step 2');
DBMS_OUTPUT.PUT_LINE('Step 3');
END;
```

### Conditional -

- Conditional structure allows to add conditions statements and execute the program depending on a boolean condition.
- IF/THEN logic flow.
- Example -

```sql
IF price > 100 THEN
calculate_discount;
ELSIF price > 50 THEN
give_small_discount;
ELSE
apply_regular_discount;
END IF;
```

- Main conditional structure IF THEN ELSIF ELSE END IF

### Iterative -

- This conditional structure allows us to iterate over or repetitive execution of statement in a loop.
- Repetitive execution.
- Example -

```sql
FOR i in 1..10 LOOP
DBMS_OUTPUT.PUT_LINE('Count :' || i);

END LOOP;
```

- Main iterative structures -
  - Basic LOOP, END LOOP
  - WHILE LOOP, END LOOP
  - FOR LOOP, END LOOP

## Exceptions

- PL/SQL has vast support for exception handling in program and handling warnings in functions.
- There are two major types of Exceptions

  - Predefined Exceptions
  - User-defined Exceptions

### Predefined Exceptions -

- These are built-in exceptions in PL/SQL to handle warnings and errors.

  - NO_DATA_FOUND
  - TOO_MANY_ROWS
  - INVALID_CURSOR
  - ZERO_DIVIDE
  - DUP_VAL_ON_INDEX

### User-defined Exceptions -

- These are custom defined exceptions by developer in program.
- It allows to add custom name to exception that describes the error scenario.
- Example -

```sql
DECLARE

invalid_id EXCEPTION;

invalid_amount EXCEPTION;

BEGIN

…

IF id < 0 THEN

RAISE invalid_id;

ELSIF amount < 0 THEN

RAISE invalid_amount;

END IF;

EXCEPTION

WHEN invalid_id THEN

— error handling code;

WHEN invalid_amount THEN

— error handling code;

END;
```

## Cursors

- Cursors are used to processed multiple multi-row query retrieved using SELECT query.
- There are two types of cursors -
  - Static Cursor (Implicit & Explicit)
  - Dynamic Cursor

### Static Cursor -

- Static cursor are the type of cursor which are declared and known at the compile time.
- There are two types in Static Cursor -
  - Implicit
  - Explicit

#### Implicit cursor -

- These cursor are automatically created by Oracle when DML statements are executed.
- Implicit cursors are hidden.
- Example -

```sql
BEGIN

SELECT * INTO my_variable FROM my_table
WHERE ID = 10;

IF SQL%NOTFOUND THEN
-- no rows returned
END IF;
END;
```

- Here `SQL%NOTFOUND` is an implicit cursor attribute.

#### Explicit cursor -

- These are declared explicitly in declare section using a cursor name.
- This is fetched in a loop with OPEN-FETCH_CLOSE syntax.
- Explicit cursors are configurable.
- Example -

```sql
DECLARE

CURSOR custom_cursor IS
SELECT * FROM customers;

BEGIN

OPEN custom_cursor;
LOOP

FETCH custom_cursor INTO custom_record;
EXIT WHEN custom_cursor%NOTFOUND;
END LOOP;

CLOSE custom_cursor;

END;
```

### Dynamic Cursor -

- In dynamic cursor the statement are declared with bind variable instead of SELECT statement.
- Dynamic cursors are very flexible.
- Example -

```sql
DECLARE

TYPE cursor_type IS REF CURSOR;

cv cursor_type;
id NUMBER;
BEGIN
id = 10;
OPEN cv FOR 'SELECT * FROM Employees
WHERE id = 10' USING id;
```

## Procedures & Functions

### Procedures -

- This is named PL/SQL blocks that perform specific actions.
- It does not return values directly.
- It can have input and output parameters within it.
- Invoked using the EXECUTE statement.
- Can perform actions and return values via OUTPUT parameter.
- Example -

```sql
CREATE PROCEDURE get_emp_name (
emp_id IN NUMBER,
emp_name OUT VARCHAR2
)

AS
BEGIN
SELECT ename into emp_name
FROM emp
WHERE id = emp_id;
END;
```

### Functions -

- This is named PL/SQL blocks that returns single value.
- It should return value using RETURN statement.
- It can have only Input parameter.
- Invoked by calling the function name.
- It returns just single value using RETURN statement.
- Example -

```sql
CREATE FUNCTION calc_bonus (
salary NUMBER
) RETURN NUMBER
IS
bonus NUMBER;

BEGIN

IF salary > 10000 THEN
bonus := 500;
ELSE
bonus := 100;
END IF;

RETURN BONUS;
END;
```

## Fundamentals of Database Triggers

- Triggers are basically procedures that fires automatically when a specific event occurs on a database table or view.
- Triggers are stored in database and work implicitly.
- Any DML operations like INSERT, DELETE, UPDATE that causes trigger to fire.
- When Trigger fire it’ll execute specific block of PL/SQL.
- Triggers are useful to allow complex integrity constraints and business rules in program.
- Creating Triggers

- We can create new trigger using `CREATE TRIGGER` statement.

```sql
[CREATE/ALTER] TRIGGER trigger_name
[BEFORE/AFTER] [INSERT/UPDATE/DELETE] ON table_name
FOR EACH ROW
...
```

- `[INSERT/UPDATE/DELETE]` specifying action to fire trigger.
- when including `FOR EACH ROW` make sure that trigger fires update of each row.
- Example -

```sql
CREATE TRIGGER validate_transaction
BEFORE INSERT ON transaction
FOR EACH ROW

BEGIN
IF amount < 0 THEN
RDBMS_OUTPUT.PUT_LINE("Error");
END IF;
END;
```

- We put body of our code inside `BEGIN` and then end the body of code with `END`.

## Types of Triggers

- There are few major triggers which are listed below

- BEFORE Trigger
- AFTER Trigger
- FOR EACH ROW
- FOR EACH STATEMENT

### BEFORE Trigger -

- BEFORE trigger fires before the triggering event (INSERT/UPDATE/DELETE)
- It allows to add checking values before modification
- Example -

```sql
CREATE TRIGGER before_insert_trigger
BEFORE INSERT ON employees
FOR EACH ROW;

BEGIN
-- code
END;
```

### AFTER TRIGGER -

- AFTER trigger fires after the triggering event (INSERT/UPDATE/DELETE)
- It allows accessing modified values.
- Example -

```sql
CREATE TRIGGER after_insert_trigger
AFTER INSERT ON employees
FOR EACH ROW;

BEGIN
-- code
END;
```

### FOR EACH ROW -

- The trigger FOR EACH ROW fires once for each row that is affected by triggering statement.
- Allows checking/updating values specific to each row.
- Example -

```sql
CREATE TRIGGER for_each_row
AFTER INSERT ON employees
FOR EACH ROW;

BEGIN
-- code
END;
```

### FOR EACH STATEMENT -

- The trigger fires only once for the triggering statement.
- Allows performing actions once per statement.

```sql
CREATE TRIGGER for_each_statement
AFTER INSERT ON employees
FOR EACH STATEMENT;

BEGIN
-- code
END;
```

- Example -
