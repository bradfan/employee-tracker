DROP DATABASE IF EXISTS departmentDB;
CREATE DATABASE departmentDB;


USE departmentDB;




CREATE TABLE department(
id INT PRIMARY KEY AUTO_INCREMENT,
dept_name VARCHAR(30) 
);


CREATE TABLE emp_role (
id  INT PRIMARY KEY AUTO_INCREMENT,
title  VARCHAR(30),
salary DECIMAL,
department_id INT 
);



CREATE TABLE employee (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NOT NULL,
  manager_id INT NULL  
);





