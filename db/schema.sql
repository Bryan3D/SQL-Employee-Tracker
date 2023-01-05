DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

-- Create the department table

CREATE TABLE department(
  id INT NOT NULL auto_increment,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department(name) 
VALUES("Sales"),("Engineering"),("Finance"),("Legal"),("Human Resources"),("Marketing"),("Customer Service");


-- Create Emplee tables
CREATE TABLE employee(
  id INT NOT NULL auto_increment,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)

);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES("Luis", "Gonzales", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES("Duede", "Rivera", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES("Puerco", "DontDoIt", 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES("Joe", "The Plumber", 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES("Iris", "Chacon", 5, 1);

CREATE TABLE role(
  id INT NOT NULL auto_increment,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department(id)
);

INSERT INTO role (title, salary, department_id) VALUES("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id) VALUES("Salesperson", 80000, 1);
INSERT INTO role (title, salary, department_id) VALUES("Lead Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id) VALUES("Software Engineer", 100000, 2);
INSERT INTO role (title, salary, department_id) VALUES("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id) VALUES("Legal Team Lead", 130000, 4);
INSERT INTO role (title, salary, department_id) VALUES("Lawyer", 120000, 4);
INSERT INTO role (title, salary, department_id) VALUES("HR Representative", 40000, 5);
INSERT INTO role (title, salary, department_id) VALUES("Marketing Manager", 90000, 6);
INSERT INTO role (title, salary, department_id) VALUES("Marketing Specialist", 60000, 6);



