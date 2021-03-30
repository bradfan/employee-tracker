USE departmentDB;

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



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Loblaw", 1, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jimmy", "Page", 2, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Bonham", 3, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Robert", "Plant",4,5);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John Paul", "Jones", 5 );
