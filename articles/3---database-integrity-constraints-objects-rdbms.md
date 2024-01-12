---
title: "3 - Database Integrity Constraints & Objects | RDBMS"
date: 2024-01-11
id: 41
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - RDBMS Tutorial
---

## Domain Integrity constraints: Not null, Check

- Not null -

  - Not null constraints allows us to add requirement to specific column that, the column cannot be null.
  - It ensures that the value is provided.
  - syntax -

  ```sql
  CREATE TABLE t1(
  	name VARCHAR(50) NOT NULL;
  );
  ```

  - Using this constraint when trying to insert row or column that is null it’ll return error.

- Check -

  - Check constraints is used to limit value or range for a column that is placed.
  - If you define check constraint on a column it’ll allow only specified values to be inserted.
  - syntax -

  ```sql
  CREATE TABLE t1(
  	age int,
  	CHECK (age>=18)
  );
  ```

  - Here using check constraint will make sure that the inserting age is equal to 18 or above 18.

## Entity Integrity constraints: Unique, Primary key.

- Unique -

  - Using unique constraint it allows to make sure that the values in columns is always unique.
  - A table can have multiple UNIQUE constraints in it.
  - It will guarantee for uniqueness in column or set of columns.
  - Syntax -

  ```sql
  UNIQUE;
  ```

  ```sql
  CREATE TABLE employee(
  	id INT NOT NULL UNIQUE,
  	name VARCHAR(50)
  );
  ```

- Primary key -

  - Primary key constraint allows us to make any specific column a primary key.
  - Using that column we can uniquely identify each record in a table.
  - Primary key must be UNIQUE.
  - primary key cannot be NULL.
  - Syntax -

  ```sql
  PRIMARY KEY;
  ```

  ```sql
  CREATE TABLE t1(
  	id INT PRIMARY KEY NOT NULL,
  	name VARCHAR(50);
  );
  ```

## Referential Integrity constraints: Foreign key, referenced key, on delete cascade

- Foreign key -
  - A foreign key is columns or set of columns which creates links between two tables and columns in SQL
  - It establishes connection between two tables.
  - The table with foreign key is called child table, and the table with primary key is called referenced table or parent table.
- Referenced key -
  - The referenced key or the target key is primary key of the table that the foreign key refers to.
  - The value in in foreign key must match the values in referenced key.
  - It is used to ensure data integrity in tables.
- On delete cascade -
  - On delete cascade is very important keyword to define while defining foreign keys.
  - The ON DELETE CASCADE is used when defining foreign key.
  - This is very important to maintain data integrity between tables.
  - ON DELETE CASCADE will automatically remove all the related foreign key records if main table (referenced table) record is deleted.
  - It prevents orphan records and keeps the data in sync.

## Views – Create, Alter, Drop views

- Views are basically virtual tables which is result of SQL queries.
- Views can contain columns and rows.
- To create views we can use `CREATE VIEW` keyword.
- Types of views-
  - Simple view
  - User defined view
  - Indexed view
- Advantages -
  - Takes very little space to store.
  - Simplifies data and shows in table manner.
  - It can represent consistent image of data and tables without changing structure of database.
- Disadvantages -
  - Cannot create views on temporary tables.
  - Cannot pass parameters to SQL server views.
  - Cannot execute any query if only READ MODE is enabled.
- Syntax -

  ```sql
  CREATE VIEW view_name AS
  SELECT column1, column2.....
  FROM table_name
  WHERE condition;
  ```

- Example -

  ```sql
  CREATE VIEW detailsView AS
  SELECT name, id
  FROM students
  WHERE id > 10;
  ```

  ```sql
  SELECT * FROM detailsView;
  ```

- Altering view -

  - We can change definition of a view using `ALTER VIEW` query.

  ```sql
  ALTER VIEW view_name AS
  SELECT column1, column2.....
  FROM table_name;
  ```

  - This allows changing or modifying view column or tables.

- Dropping view -

  - Dropping view means deleting a view.
  - To drop a view we can use `DROP VIEW` query in SQL.

  ```sql
  DROP VIEW view_name;
  ```

  - Drops the view definition while keeping the base table.

## Synonym: Create, Drop synonym

- Synonym -

  - Synonym is basically another name for our database object.
  - It provides alternative name for database objects like tables, views etc.
  - Syntax -

  ```sql
  CREATE SYNONYM synonym_name
  FOR object_name;
  ```

  - Here object_name can be table or view or anything.
  - It does not create different object but instead they are alias names mapping to other objects.
  - They allows simpler/alternate naming of objects.

- DROP Synonym -

  - To drop synonym we can use `DROP` statement.
  - It’ll delete the synonym.

  ```sql
  DROP SYNONYM synonym_name;
  ```

- CREATE Synonym -

  - A synonym is created using `CREATE` statement.

  ```sql
  CREATE SYNONYM synonym_name
  FOR object_name;
  ```

## Sequences: Create, alter, Drop sequences

- Sequence -
  - A sequence in SQL database is an object that is used to generate sequential set of integer numbers.
  - It will generate unique integer number in ascending or descending order.
  - We can define starting point and ending point or increment value when creating sequence.
  - These sequence can be used repeatedly in database.
- CREATE SEQUENCE -

  - We use `CREATE SEQUENCE` keywords to create a new sequence.

  ```sql
  CREATE SEQUENCE sequence_name
  START WITH 1
  INCREMENT BY 1;
  ```

  - Above example will generate series of number starting with 1 which will increment each integer by 1.

- ALTER SEQUENCE -

  - We can alter the sequence using `ALTER` keyword.

  ```sql
  ALTER SEQUENCE sequence_name
  START WITH 100
  INCREMENT BY 5;
  ```

- DROP SEQUENCE -

  - To remove or delete unused sequence we can `DROP` sequence.

  ```sql
  DROP SEQUENCE sequence_name;
  ```

## Index: Unique and composite – Create, Drop

- Indexes are very useful in database which is very efficient lookup method in table.
- It speeds up the process of data retrieval.
- It holds pointers which refers to data stored in database.
- They are similar to bookmarks in a book.
- It keeps track of all data.
- Create index -

```sql
CREATE INDEX index_name ON table_name;
```

- There are two types of indexes -

  - Unique index -

    - A unique index make sures that the data stored in index is unique across all rows.
    - It prevents duplicate entries.
    - It basically creates PRIMARY KEY and UNIQUE constraint in index.
    - syntax -

    ```sql
    CREATE UNIQUE INDEX index_name ON table_name;
    ```

  - Composite index -

    - Composite indexes can be created on multiple columns combined.
    - It speeds up queries using those columns together.

    ```sql
    CREATE INDEX index_name
    ON table_name(column1, column2);
    ```
