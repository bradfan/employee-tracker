const connection = require("./db");
const inquirer = require("inquirer");
init();

function init(){
  inquirer.prompt([{
    type: "list",
    name: "whatToDo",
    message: "What would you like to do?",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add A Department",
      "Add A Role",
      "Add An Employee",
      "Update Employee Role",
      "Exit"
    ]
  }]).then(function(response){
    switch(response.whatToDo){
        case "View All Departments":
        viewDepartments();
        break;
        case "View All Roles":
        viewRoles();
        break;
        case "View All Employees":
        viewEmployees();
        break;
        case "Add A Department":
        addDepartment();
        break;
        case "Add A Role":
        addRole();
        break;
        case "Add An Employee":
        addEmployee();
        break;
        case "Update Employee Role":
        updateEmployeeRole();
        break;
        default:
        connection.end();
    }
  })
}
function viewDepartments(){
  connection.query("SELECT * FROM department", function(err, data){
    console.table(data);
    init();
  })
}
function viewRoles(){
  connection.query("SELECT emp_role.id, emp_role.title, emp_role.salary, department.dept_name FROM emp_role INNER JOIN department ON emp_role.department_id=department.id", function(err, data){
    console.table(data);
    init();
  })
}
function viewEmployees(){
  connection.query("SELECT employee.id,employee.first_name, employee.last_name, emp_role.title, department.dept_name, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN emp_role ON emp_role.id=employee.role_id LEFT JOIN department ON emp_role.department_id=department.id LEFT JOIN employee manager ON manager.id=employee.manager_id", function(err, data){
    console.table(data);
    init();
  })
}
function addDepartment(){
  inquirer.prompt([{
    type: "input",
    name: "id",
    message: "What new ID would you like to give this new Department?"
  },
  {
    type: "input",
    name: "dept_name",
    message: "What name would you like to give this new Department?"
  }]).then(function(response){
    console.log(response);
    const query = "INSERT INTO department (id,dept_name) VALUES (?,?);";
    const dept = connection.query(query, [response.id, response.dept_name], function(err, data){
      console.log("Added dept:", response.id, response.dept_name);
      console.log(dept.sql);
      init();
    })
  })
}
function addRole(){
  inquirer.prompt([{
    type: "input",
    name: "id",
    message: "What ID# would you like to give this new role?"
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of the Role would you like to add?"
  },
  {
    type: "input",
    name: "salary",
    message: "What is the annual Salary of this new Role?"
  },
  {
    type: "input",
    name: "department_id",
    message: "What is the existing Department ID# to add to this new role?"
  }
]).then(function(response){
    console.log(response);
    const question = "INSERT INTO emp_role (id, title, salary, department_id) VALUES (?,?,?,?);";
    const job = connection.query(question, [response.id, response.title, response.salary,response.department_id], function(err, data){
      if(err) throw err;
      console.log("Added role:", response.id, response.title, response.salary, response.department_id);
      console.table(job.sql);
      init();
    })
  })
}

function addEmployee(){
  inquirer.prompt([{
    type: "input",
    name: "first_name",
    message: "What is the employee's first name?"
  },
  {
    type: "input",
    name: "last_name",
    message: "What is the employee's last name?"
  },{
    type: "input",
    name: "role_id",
    message: "What is the role ID associated with this employee's position?"
  },
  {
    type: "input",
    name: "manager_id",
    message: "What is the ID of the manager this employee reports to?"
  }
]).then(function(response){
    console.log(response);
    if (response.manager_id == '') {
        role.id === 5
    } 
    const query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);";
    const emp = connection.query(query, [response.first_name, response.last_name, response.role_id, response.manager_id], function(err, data){
      console.log("Added employee", response.emp);
      console.log(emp.sql);
      init();
    })
  })
}
function updateEmployeeRole(){
  inquirer.prompt([{
     type: "input",
     name:"last_name",
     message: "What is the last name of the employee you wish to update?"
  },
    {
    type: "input",
    name: "role_id",
    message: "What is this employee's new role ID#?"
  }]).then(function(response){
    console.log(response);
    const burrito = "UPDATE employee SET (role_id) WHERE (last_name)  VALUES (?);";
    const newRole = connection.query(burrito, [response.role_id], function(err, data){
      if (err) throw err
      console.log("Added new role:", response.role_id);
      console.log("What happened: ",newRole.sql);
      init();
    })
  })
}
  



