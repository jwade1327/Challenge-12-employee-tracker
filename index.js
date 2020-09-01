const inquirer = require('inquirer');
const consoleTable = require('console.table');
const mysql = require('mysql2');
const db = require('.');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'employee_db',
    password: 'R@ven3mmett1327'
});

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId);

//     menu();
// });

function menu() {
    inquirer
        .prompt([{
            type: 'list',
            name: 'menuChoice',
            message: 'What would you like to do?',
            choices: [
                'View All Employees', 
                'View All Departments', 
                'View All Roles', 
                'Add Employee',
                'Add Department', 
                'Update Employee Role', 
                'Update Employee Manager'
            ]
        }])
        .then(result => {
            switch (result.menuChoice) {
                case 'View All Employees':
                    viewAllEmployees();
                    break;

                case 'View All Departments':
                    viewAllDepartments();
                    break;

                case 'View All Roles':
                    viewAllRoles();
                    break;

                case 'Add Employee':
                    addEmployee();
                    break;

                case 'Add Department':
                    addDepartment();
                    break;
                
                case 'Add Role':
                    addRole();
                    break;

                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;

                default:
                    exit();
            }
        });
    }

function viewAllEmployees() {
    let query = 'SELECT * FROM employee';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        menu();
    });
}

function viewAllDepartments() {
    let query = 'SELECT * FROM department';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        menu();
    });
}

function viewAllRoles() {
    let query = 'SELECT * FROM role';
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        menu();
    });
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Employee first name',
                name: 'firstName'
            },
            {
                type: 'input',
                message: 'Employee last name',
                name: 'lastName'
            },
            {
                type: 'input',
                message: 'Employee role id number',
                name: 'roleID'
            },
            {
                type: 'input',
                message: 'Manager id number',
                name: 'managerID'
            }
        ])
        .then(function(answer) {
            connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)',
            [answer.firstName, answer.lastName, answer.roleID, answer.managerID],
            function(err, res) {
                if (err) throw err;
                console.table(res);
                menu();
            });
    });
}

function addDepartment() {
    inquirer
        .prompt({
            type: 'input',
            message: 'Department name?',
            name: 'department'
        })
        .then(function(answer) {
            connection.query('INSERT INTO department (name) VALUES ?', 
            [answer.department],
            function(err, res) {
                if (err) throw err;
                console.table(res);
                menu();
            });
    });
}

function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Role name?',
                name: 'role'
            },
            {
                type: 'input',
                message: 'Salary for the role',
                name: 'salary'
            },
            {
                type: 'input',
                message: 'Department id number',
                name: 'departmentID'
            }
        ])
        .then(function(answer) {
            connection.query('INSERT INTO role (title, salary, department_id) VALUES (?,?,?)',
            [answer.role, answer.salary, answer.departmentID],
            function(err, res) {
                if (err) throw err;
                console.table(res);
                menu();
            });
        });
}

function updateEmployeeRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'employeeUpdate',
                message: "Which employee would you like to update?",
            },
            {
                type: 'input',
                name: 'roleUpdate',
                message: 'What do you want to update?'
            }
        ])
        .then (function(answer) {
            connection.query('UPDATE employee SET role_id = ? WHERE first_name = ?',
            [answer.roleUpdate, answer.employeeUpdate],
            function (err, res) {
                if (err) throw err;
                console.table(res);
                menu();
            });
        });
}

function exit() {
    connection.end();
}



