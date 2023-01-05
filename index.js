const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

// Create connection to database called employees
const connection = mysql.createConnection({
    host: 'localhost',
    // local port
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "@@22@MySql@23@",

    // Name of database
    database: "employees_db"

});


// The connection.connect() method takes a callback function as an argument, which is executed when the connection to the database is established
connection.connect((err) => {
    if (err) throw err;
    start();
});

// This is the start function that starts the application.

function start() {

  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "View All Roles",
        "Add Role",
        "Remove Role",
        "View All Departments",
        "Add Department",
        "Remove Department",
        "View Total Budget",
        "Exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "View All Employees":
        viewAllEmployees();
        break;

      case "Add Employee":
        addEmployee();
        break;

      case "Remove Employee":
        removeEmployee();
        break;

      case "Update Employee Role":
        updateEmployeeRole();
        break;

      case "Update Employee Manager":
        updateManager();
        break;

      case "View All Roles":
        viewAllRoles();
        break;

      case "Add Role":
        addRole();
        break;

      case "Remove Role":
        removeRole();
        break;

      case "View All Departments":
        viewAllDepartments();
        break;

      case "Add Department":
        addDepartment();
        break;

      case "Remove Department":
        removeDepartment();
        break;

      case "View Total Budget":
        viewTotalBudget();
        break;

      case "Exit":
        connection.end();
        break;
      }
    });
}

// This is addNewEmployee function prompts the user to enter the first and last name, role ID, and manager ID (optional) for the new employee and then inserts this information into the employees table using a MySQL INSERT query.
function viewAllEmployee(){
    connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id",
      
      function(err, res, fields) {

        if (err) throw err;
        console.table(res);
        start();
      }

    );
};

// This is viewAllEmployeesByDepartment function prompts the user to enter the department name and then displays all employees in that department using a MySQL SELECT query.
function viewAllEmployeesByDepartment(){
    connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id",
      
      function(err, res, fields) {

        if (err) throw err;
        console.table(res);
        start();
      }

    )


}

// This is viewAllEmployeesByManager function prompts the user to enter the manager's name and then displays all employees that report to that manager using a MySQL SELECT query.

function viewAllEmployeesByManager(){

    connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id",
      
      function(err, res, fields) {

        if (err) throw err;
        console.table(res);
        start();
      }

    );


};

// This is addEmployee function prompts the user to enter the first and last name, role ID, and manager ID (optional) for the new employee and then inserts this information into the employees table using a MySQL INSERT query.

function addEmployee(){
      
      connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id",
        
        function(err, res, fields) {
  
          if (err) throw err;
          console.table(res);
          start();
        }
  
      );
  

};

// This is removeEmployee function prompts the user to enter the first and last name of the employee to be removed and then deletes that employee from the employees table using a MySQL DELETE query.

function removeEmployee(){

    connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id",
      
      function(err, res, fields) {

        if (err) throw err;
        console.table(res);
        start();
      }

    );


};


// This is updateEmployeeRole function prompts the user to enter the first and last name of the employee whose role is to be updated and then updates the employee's role using a MySQL UPDATE query.

function updateEmployeeRole(){

    connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id",
      
      function(err, res, fields) {

        if (err) throw err;
        console.table(res);
        start();
      }

    );

};

// This is updateManager function prompts the user to enter the first and last name of the employee whose manager is to be updated and then updates the employee's manager using a MySQL UPDATE query.

function updateManager(){

    connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id",
      
      function(err, res, fields) {

        if (err) throw err;
        console.table(res);
        start();
      }

    );

}

// This is viewAllRoles function displays all roles in the company using a MySQL SELECT query.

function viewAllRoles(){
  
      connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id",
        
        function(err, res, fields) {
  
          if (err) throw err;
          console.table(res);
          start();
        }
  
      );
  
};

// This is addRole function prompts the user to enter the name, salary, and department ID for the new role and then inserts this information into the roles table using a MySQL INSERT query.

function addRole(){
  
      connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id",
        
        function(err, res, fields) {
  
          if (err) throw err;
          console.table(res);
          start();
        }
  
      );
  
  };

// This is removeRole function prompts the user to enter the name of the role to be removed and then deletes that role from the roles table using a MySQL DELETE query.

function removeRole(){

    connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id",
      
      function(err, res, fields) {

        if (err) throw err;
        console.table(res);
        start();
      }

    );

};

// This is viewAllDepartments function displays all departments in the company using a MySQL SELECT query.

function viewAllDepartments(){
  
      connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id",
        
        function(err, res, fields) {
  
          if (err) throw err;
          console.table(res);
          start();
        }
  
      );
  
  }

// This is addDepartment function prompts the user to enter the name of the new department and then inserts this information into the departments table using a MySQL INSERT query.

function addDepartment(){
    
        connection.query(
          "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id",
          
          function(err, res, fields) {
    
            if (err) throw err;
            console.table(res);
            start();
          }
    
        );
    
    }

// This is removeDepartment function prompts the user to enter the name of the department to be removed and then deletes that department from the departments table using a MySQL DELETE query.

function removeDepartment(){
  
      connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id",
        
        function(err, res, fields) {
  
          if (err) throw err;
          console.table(res);
          start();
        }
  
      );
  
  }

// This is viewTotalBudget function displays the total utilized budget of a department -- the combined salaries of all employees in that department -- using a MySQL SELECT query.

function viewTotalBudget(){

    connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id",
      
      function(err, res, fields) {

        if (err) throw err;
        console.table(res);
        start();
      }

    );

}

// This is exit function exits the application.

function exit(){
  
      connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id",
        
        function(err, res, fields) {
  
          if (err) throw err;
          console.table(res);
          start();
        }
  
      );
  
  };

