DROP DATABASE IF EXISTS departmentDB;
DROP DATABASE IF EXISTS emp_roleDB;
DROP DATABASE IF EXISTS employeeDB;

CREATE DATABASE departmentDB;
CREATE DATABASE emp_roleDB;
CREATE DATABASE employeeDB;

USE departmentDB;
USE emp_roleDB;
USE employeeDB;



CREATE TABLE department(
id INT PRIMARY KEY AUTO_INCREMENT,
dept_name VARCHAR(30) 
);

INSERT INTO department (dept_name)
VALUES ("Production");

INSERT INTO department (dept_name)
VALUES ("Sales");

INSERT INTO department (dept_name)
VALUES ("Administration");

INSERT INTO department (dept_name)
VALUES ("Development");

INSERT INTO department (dept_name)
VALUES ("Executive");

CREATE TABLE emp_role (
id  INT PRIMARY KEY AUTO_INCREMENT,
title  VARCHAR(30),
salary DECIMAL,
department_id INT 
);

INSERT INTO emp_role (title, salary, department_id)
VALUES ("Assembler", 30000,  1);

INSERT INTO emp_role (title, salary, department_id)
VALUES ("Sales Person", 50000, 2);

INSERT INTO emp_role (title, salary, department_id)
VALUES ("Administrator", 40000, 3);

INSERT INTO emp_role (title, salary, department_id)
VALUES ("Web Developer", 80000, 4);

INSERT INTO emp_role (title, salary, department_id)
VALUES ("Manager", 70000, 5);

CREATE TABLE employee (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NOT NULL,
  manager_id INT NULL  
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Loblaw", 101, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jimmy", "Page", 202, 20);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Bonham", 303, 30 );

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Robert", "Plant",404,40);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John Paul", "Jones", 505, 50);


-- ### Alternative way to insert more than one row
