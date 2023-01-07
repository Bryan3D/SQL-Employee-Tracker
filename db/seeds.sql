/* SQL statement that is inserting multiple rows into a department table.
The statement specifies the name column and provides a value for each row being inserted.
The values being inserted are names of departments. */

INSERT INTO department(name)
VALUES
("Finance"),
("Marketing"),
("Legal"),
("Sales"),
("Engineering");



/* SQL statement that is inserting multiple rows into a role table.
The statement specifies the columns to be inserted into (title, salary, and department_id) 
and provides values for each column for each row being inserted.
The values being inserted include job titles, salaries, and department IDs. */

INSERT INTO role (title, salary, department_id)
VALUES
("Salesperson", 80000, 4),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Account Manager", 160000, 1),
("Accountant", 125000, 1),
("Legal Team Lead", 250000, 3),
("Lawyer", 190000, 3),
("Promotion Team Lead", 150000, 5);

/* SQL statement that is inserting multiple rows into an employee table.
The statement specifies the columns to be inserted into (first_name, last_name, role_id, and manager_id)
and provides values for each column for each row being inserted. The values being inserted include names,
role IDs, and manager IDs. */

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Bryan", "Quero", 1, Null),
("Paula", "Quero", 2, 1),
("Elijah", "Quero", 3, 1),
("Justo", "Quero", 4, 1),
("Teresa", "Carmona", 5, 1),
("Milagros", "Morales", 6, 1),
("Luis", "Morales", 7, 1);

-- Path: config\db\seeds.sql
