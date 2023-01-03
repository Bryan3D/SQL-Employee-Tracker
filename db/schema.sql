DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- Define the department table
-- stores information about each department, including the department's ID and name

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

insert into departments(name)
values ('Sales'),
('Engineering'),
('Finance'),
('Legal'),
('Human Resources'),
('Marketing'),
('Customer Service'),
('Quality Assurance'),
('Research and Development'),
('Production'),
('Development'),
('Accounting'),
('Public Relations'),
('Management'),
('Executive'),
('IT Support');



-- Define the employees table
-- Table stores information about each employee, including the employee's ID, first name, last name, role ID, and manager ID (if applicable)
CREATE TABLE employees(
    id int AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    department_id INT NOT NULL,
    manager_id int,
    role_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
);

-- insert names into
insert into employees(first_name, last_name,role_id, manager_id) VALUES("Milagros", "Morales", 1,1);
insert into employees(first_name, last_name,role_id, manager_id) VALUES("Bryan", "Quero", 2,1);
insert into employees(first_name, last_name,role_id, manager_id) VALUES("Elijah", "Morales", 3,1);
insert into employees(first_name, last_name,role_id, manager_id) VALUES("George", "Rivera", 4,1);
insert into employees(first_name, last_name,role_id, manager_id) VALUES("LL", "CoolJ", 5,1);
insert into employees(first_name, last_name,role_id, manager_id) VALUES("Tom", "Cruse", 6,1);
insert into employees(first_name, last_name,role_id, manager_id) VALUES("Jacob", "DeGrom", 7,1);



-- Define the role table
-- stores information about each role, including the role's ID, title, salary, and department ID
CREATE TABLE role(
    id int NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    PRIMARY KEY (id)
   
);

-- insert role into
insert into role(title, salary, department_id) VALUES("Sales Lead", 100000, 1);
insert into role(title, salary, department_id) VALUES("Salesperson", 80000, 1);
insert into role(title, salary, department_id) VALUES("Lead Engineer", 110000, 2);
insert into role(title, salary, department_id) VALUES("Software Engineer", 100000, 2);
insert into role(title, salary, department_id) VALUES("Accountant", 125000, 3);
insert into role(title, salary, department_id) VALUES("Legal Team Lead", 130000, 4);
insert into role(title, salary, department_id) VALUES("Lawyer", 120000, 4);
insert into role(title, salary, department_id) VALUES("HR Representative", 75000, 5);
insert into role(title, salary, department_id) VALUES("Marketing Manager", 90000, 6);
insert into role(title, salary, department_id) VALUES("Social Media Manager", 75000, 6);
insert into role(title, salary, department_id) VALUES("Customer Service Representative", 40000, 7);
insert into role(title, salary, department_id) VALUES("Quality Assurance Engineer", 70000, 8);
insert into role(title, salary, department_id) VALUES("Research Assistant", 50000, 9);
insert into role(title, salary, department_id) VALUES("Data Analyst", 60000, 9);

-- Define the employees_role table

CREATE TABLE employees_role(
    id int NOT NULL AUTO_INCREMENT,
    employee_id int,
    role_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (employee_id),
    REFERENCES employees(id),
    FOREIGN KEY (role_id),
    REFERENCES role(id)
);


