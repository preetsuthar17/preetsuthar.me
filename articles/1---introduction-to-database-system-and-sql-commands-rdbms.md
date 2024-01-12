---
title: "1 - Introduction to Database System and SQL commands | RDBMS"
date: 2024-01-09
id: 39
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - RDBMS Tutorial
---

## Concepts and Definitions: Database and database systems and database environment

- Database -
  - Database is organized collection of data or information. It allows efficient storage, retrieval, updating and searching of large amount of information.
- Database System -
  - The database system refers to the database, DBMS software or applications that interactive with the data.
- DBMS (Database Management System) -
  - This refers to software designed to define, create, alter, update, view, delete or perform other more queries on database.
- Database Environment -
  - It refers to comprehensive architecture and ecosystem supporting the database in organization. It includes, DBMS software, database servers, hardware, Application, User Interface or anything related database.

## Data, Information, Data Item or Fields, Records, Files, Metadata, Data dictionary and it’s components

- Data -
  - Collection of raw facts containing key and value.
- Information -
  - Information is what we get as output when we process bunch of data.
- Data Item/field -
  - Data item/field refers to specific single piece of information in a table.
- Records -
  - Collection of multiple fields or related data item is called records.
- Files -
  - Collection of multiple records is called File.
- Metadata -
  - Metadata refers to data about data, It describes the structure, data type, formats, etc.
- Data Dictionary and It’s components -
  - Data Dictionary is collections of metadata info containing definitions and descriptions related all data items.
  - Components of Data Dictionary -
    - Field Name - Name assigned to data element.
    - Description - Description explaining the element.
    - Data Type - Type of data like int, char, varchar
    - Format - Field validating
    - Who created it and when
    - etc.

## Schemas, Sub-schemas, and Instances

- Schemas -
  - Schema is basically logical configuration or structure of database. It defines what data will be stored in which field. For example, Student schema might have fields like ID, Name, Class, etc.
- Sub-schemas -
  - Sub-schema is a subset of schema that has same elements as the schema. It’s set of data elements that belongs to table.
  - For example a table can represent “India”, in that table we have “Phone Code” In that we have subschema for each state like which state represent which code.
- Instance -
  - Instance is the data stored in database at a particular moment of time.
  - It takes note of occurrences in database.

## Data Types

- In RDBMS we have various data types such as,
  - INT
    - INT data type is used to represent numeric data types.
  - CHAR
    - CHAR data type used to represent single character data.
  - FLOAT
    - FLOAT data type is used to represent point values data.
  - VARCHAR
    - VARCHAR data type is used to represent string data.
    - `VARCHAR(size_of_string)`
  - BOOLEAN
    - BOOLEAN data type is used to represent TRUE or FALSE value.
  - DATETIME
    - DATETIME, DATE, TIME, TIMESTAMP these data types are used to represent the date or time value.
  - BINARY/BLOB
    - BINARY large objects and byte arrays for storing files, images etc.
  - etc.

## Database Language commands: Data Definition Language (DDL): CREATE, ALTER, TRUNCATE, DROP

- DDL commands in RDBMS is used to define and manage structure of database like, tables, indexes, etc.
- CREATE -
  - CREATE command is used to create new database, table or other objects.
  - Example -
  ```sql
   CREATE DATABASE students;
  ```
- ALTER -
  - ALTER command is used to modify or update tables r object in database.
  - Example -
  ```sql
  ALTER TABLE students ADD email VARCHAR(100);
  ```
- TRUNCATE -
  - TRUNCATE command is used to clear entire data from the database table without deleting rows or columns.
  - Example -
  ```sql
  TRUCATE TABLE students;
  ```
- DROP -
  - DROP command is used to drop means delete entire objects like tables or entire database.
  - Example -
  ```sql
  DROP DATABASE students;
  ```

## Database Language: Data Manipulation Language (DML): INSERT, SELECT, UPDATE, DELETE

- DML Commands in RDBMS are used to manipulate the data inside the database or tables by running queries.
- INSERT -
  - INSERT command is used to insert new data in table of database.
  - Example -
  ```sql
  INSERT INTO students(name, fees, email)
  VALUES ('John', 5000, 'john@example.com');
  ```
- SELECT -
  - SELECT command is used to select data from the table and print in console.
  - Example -
  ```sql
  SELECT * FROM student_data;
  -- using * we can select entire table data.
  ```
- UPDATE -
  - UPDATE command is used to update existing data or modify data in specific columns of table.
  - Example -
  ```sql
  UPDATE students
  SET fees = 2600
  WHERE id = 2;
  ```
- DELETE -
  - DELETE command is used to delete specific record from the table based on given conditions.
  - Example -
  ```sql
  DELETE FROM students
  WhERE id = 3;
  ```
