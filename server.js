
// Require the modules needed for the application
const mysql = require('mysql2')
const inquirer = require('inquirer')
const cTable = require('console.table')

// JavaScript code snippet that is creating a connection to a MySQL database

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '@@22@MySql@23@',
  database: 'employees_db',
})

// the connection.connect() method to establish a connection to a MySQL database. The method takes a callback function as an argument, which is called once the connection has been established or if an error occurs.

connection.connect(function (err) {
  if (err) throw err
  console.log('connected as id ' + connection.threadId)
  start()
})

// The start() function is the first function that is called when the application is started. It uses the inquirer package to prompt the user with a list of options to choose from. The user can choose to view all departments, view all roles, view all employees, add a department, add a role, add an employee, or update an employee role. The user can also choose to exit the application.

function start() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
        
          'View all Departments',
          'View all Employees',
          'View all Roles',
          'Add new Employee',
         'Add new Department',
          'Add new Role',
          'Update Employee Role',
          'Exit',
        ],
      },
    ])
    .then((answer) => {
      if (answer.action === 'View all Departments') {
        viewAllDepartments()
      } else if (answer.action === 'View all Employees') {
        viewAllEmployees()
      } else if (answer.action === 'View all Roles') {
        viewAllRoles()
      } else if (answer.action === 'Add new Employee') {
        addNewEmployee()
      } else if (answer.action === 'Add new Department') {
        addNewDepartment()
      } else if (answer.action === 'Add new Role') {
        addNewRole()
      } else if (answer.action === 'Update Employee Role') {
        updateEmployeeRole()
      } else {
        connection.end()
      }
    })
}


// The viewAllDepartments() function is called when the user chooses to view all departments. It uses the connection.query() method to query the database and return all departments. The results are then logged to the console using the console.table() method.

function viewAllDepartments() {
  const sql = `select * from department;`
  connection.query(sql, function (err, row) {
    if (err) throw err
    console.table(row)
    start()
  })
}

// The viewAllEmployees() function is called when the user chooses to view all employees. It uses the connection.query() method to query the database and return all employees. The results are then logged to the console using the console.table() method.

function viewAllEmployees() {
  const sql = `SELECT employee.first_name, employee.last_name, employee.id, role.title, role.salary, department.name, manager.first_name AS managerFirstname, manager.last_name AS managerLastName FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee AS manager ON employee.manager_id = manager.id `
  connection.query(sql, function (err, res) {
    if (err) throw err
    console.table(res)
    start()
  })
}


// The viewAllRoles() function is called when the user chooses to view all roles. It uses the connection.query() method to query the database and return all roles. The results are then logged to the console using the console.table() method.

function viewAllRoles() {
  const sql = `SELECT role.id, role.title, role.salary, department.name FROM role LEFT JOIN department ON role.department_id = department.id;`
  connection.query(sql, function (err, res) {
    if (err) throw err
    console.table(res)
    start()
  })
}

// The addNewEmployee() function is called when the user chooses to add a new employee. It uses the inquirer package to prompt the user with questions about the new employee. The user is asked for the new employee's first name, last name, role id, and manager id. The user's answers are then used to create a new employee in the database.

function addNewEmployee() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'first_name',
        message: 'What is the new employee first name?',
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'What is the new employee last name?',
      },
      {
        type: 'input',
        name: 'role_id',
        message: 'What is the new employee role id?',
      },
      {
        type: 'input',
        name: 'manager_id',
        message: 'What is the new employee manager id?',
      },
    ])

    .then((answer) => {
      const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`
      const params = [
        answer.first_name,
        answer.last_name,
        answer.role_id,
        answer.manager_id,
      ]
      connection.query(sql, params, function (err, res) {
        if (err) throw err
        console.table(res)
        start()
      })
      start();
    })

}

// The addNewDepartment() function is called when the user chooses to add a new department. It uses the inquirer package to prompt the user with a question about the new department. The user is asked for the new department's name. The user's answer is then used to create a new department in the database.

function addNewDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the new department name?',
            },
        ])

        .then((answer) => {
            const sql = `INSERT INTO department (name) VALUES (?)`
            const params = [answer.name]
            connection.query(sql, params
                , function (err, res) {
                    if (err) throw err
                    console.table(res)
                    start()
                })
        })
}

// The addNewRole() function is called when the user chooses to add a new role. It uses the inquirer package to prompt the user with questions about the new role. The user is asked for the new role's title, salary, and department id. The user's answers are then used to create a new role in the database.

   function addNewRole() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the new role title?',
        },
        {
          type: 'input',
          name: 'salary',
          message: 'What is the new role salary?',
        },
        {
          type: 'input',
          name: 'department_id',
          message: 'What is the new role department id?',
        },
      ])

      .then((answer) => {
        const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`
        const params = [answer.title, answer.salary, answer.department_id]
        connection.query(sql, params, function (err, res) {
          if (err) throw err
          console.table(res)
          start()
        })
      })
  }

// The updateEmployeeRole() function is called when the user chooses to update an employee's role. It uses the inquirer package to prompt the user with questions about the employee's new role. The user is asked for the new role id and the employee id. The user's answers are then used to update the employee's role in the database.

  function updateEmployeeRole() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'role_id',
          message: 'What is the new role id?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is the employee id?',
        },
      ])

      .then((answer) => {
        const sql = `ALTER TABLE role `
        const params = [answer.role_id, answer.id]
        connection.query(sql, params, function (err, res) {
          if (err) throw err
          console.table(res)
          start()
        })

        start()
      })
  }

 