

/* This statement is checking if a database called employee_db exists. 
If it does, it will delete the database and all of the data it contains. */
DROP DATABASE IF EXISTS employee_db;

--  This statement is creating a new database called employee_db.
CREATE DATABASE employee_db;

/*  Once the database has been created, you can then use the USE statement
 to select it as the current database for subsequent SQL statements to be executed on. */
USE employee_db;

/* This is a SQL statement that is creating a new table called department.
The table has two columns: id and name.The id column is defined as an integer data type and is set as the primary key,
which means it will be a unique identifier for each row in the table. */ 

CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

/* This is a SQL statement that is creating a new table called role.
The table has several columns, including id, title, salary, and department_id.
The id column is defined as an integer data type and is set as the primary key,
which means it will be a unique identifier for each row in the table. */

CREATE TABLE role (
    id int auto_increment PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

/* This is a SQL statement that is creating a new table called employee. 
The table has several columns, including id, first_name, last_name, role_id, and manager_id.
The id column is defined as an integer data type and is set as the primary key,
which means it will be a unique identifier for each row in the table. */

CREATE TABLE employee (
    id int auto_increment PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee(id)

);

