// framework supplied by instructor
const mysql = require('mysql');
const inquirer = require("inquirer");
const connection = mysql.createConnection({
  host: 'localhost',
  // Your port, if not 3306
  port: 3306,
  // Your username
  user: 'root',
  // Be sure to update with your own MySQL password!
  password: 'root',
  database: "departmentDB",
  database: "emp-roleDB",
  database: "employeeDB",
});
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  init();
});
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
        updateEmployee();
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
  connection.query("SELECT * FROM emp_role", function(err, data){
    console.table(data);
    init();
  })
}
function viewEmployees(){
  connection.query("SELECT * FROM employee", function(err, data){
    console.table(data);
    init();
  })
}
function addDepartment(){
  inquirer.prompt([{
    type: "input",
    name: "department",
    message: "What Department would you like to add?"
  },
  {
    type: "input",
    name: "price",
    message: "How much does it cost?"
  },{
    type: "input",
    name: "quantity",
    message: "How many do you have?"
  }]).then(function(response){
    console.log(response);
    const query = "INSERT INTO products (flavor, price, quantity) VALUES (?, ?, ?);";
    const foo = connection.query(query, [response.flavor, response.price, response.quantity], function(err, data){
      console.log("Added flavor", response.flavor);
      console.log(foo.sql);
      init();
    })
  })
}

// function addDepartment(){
//   inquirer.prompt([{
//     type: "input",
//     name: "department",
//     message: "What Department would you like to add?"
//   },
//   {
//     type: "input",
//     name: "price",
//     message: "How much does it cost?"
//   },{
//     type: "input",
//     name: "quantity",
//     message: "How many do you have?"
//   }]).then(function(response){
//     console.log(response);
//     const query = "INSERT INTO products (flavor, price, quantity) VALUES (?, ?, ?);";
//     const foo = connection.query(query, [response.flavor, response.price, response.quantity], function(err, data){
//       console.log("Added flavor", response.flavor);
//       console.log(foo.sql);
//       init();
//     })
//   })
// }