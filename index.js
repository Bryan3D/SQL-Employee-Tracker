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

// Connect to database
// The connection.connect() method takes a callback function as an argument, which is executed when the connection to the database is established
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
});

// Function to start the application

function start() {
    //The inquirer.prompt() method returns a promise that is fulfilled with the user's response
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Add departments, roles, employees",
            "View departments, roles, employees",
            "Update employee roles",
            "Exit"
        ]
    }).then(function (answer) {
        switch (answer.action) {
            case "Add departments, roles, employees":
                // "Add departments, roles, employees": calls the add() function
                add();
                break;

            case "View departments, roles, employees":
                // "View departments, roles, employees": calls the view() function
                view();
                break;

            case "Update employee roles":
                // "Update employee roles": calls the update() function
                update();
                break;
                
                // "Exit" : the connection to the database is terminated 
            case "Exit":
                connection.end();
                break;
        }
    });

};

// This is addNewEmployee function prompts the user to enter the first and last name, role ID, and manager ID (optional) for the new employee and then inserts this information into the employees table using a MySQL INSERT query.

function addNewEmployee() {
    inquirer
      .prompt([
        {
          name: 'firstName',
          type: 'input',
          message: 'Enter the employee\'s first name:'
        },
        {
          name: 'lastName',
          type: 'input',
          message: 'Enter the employee\'s last name:'
        },
        {
          name: 'roleId',
          type: 'input',
          message: 'Enter the employee\'s role ID:'
        },
        {
          name: 'managerId',
          type: 'input',
          message: 'Enter the employee\'s manager ID (optional):'
        }
      ])
      .then(answers => {
        const { firstName, lastName, roleId, managerId } = answers;
        connection.query(
          'INSERT INTO employees SET ?',
          {
            first_name: firstName,
            last_name: lastName,
            role_id: roleId,
            manager_id: managerId
          },
          error => {
            if (error) throw error;
            console.log('Employee added to the database.');
            start();

          }
        );

      }
        );
};

// This is addNewRole function prompts the user to enter the title, salary, and department ID for the new role and then inserts this information into the roles table using a MySQL INSERT query.

function addNewRole() {
    inquirer
      .prompt([
        {
          name: 'title',
          type: 'input',
          message: 'Enter the role title:'
        },
        {
          name: 'salary',
          type: 'input',
          message: 'Enter the role salary:'
        },
        {
          name: 'departmentId',
          type: 'input',
          message: 'Enter the department ID:'
        }
      ])
      .then(answers => {
        const { title, salary, departmentId } = answers;
        connection.query(
          'INSERT INTO roles SET ?',
          {
            title: title,
            salary: salary,
            department_id: departmentId
          },
          error => {
            if (error) throw error;
            console.log('Role added to the database.');

            // After the new employee or role has been added to the database, the start function is called again to allow the user to perform another action.
            start();

          }
        );

      }
        );
}
