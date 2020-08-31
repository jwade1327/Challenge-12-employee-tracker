const inquirer = require('inquirer');
const consoleTable = require('console.table');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'employeeDB'
});

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
        .then(userChoice => {
            switch (userChoice.menuChoice) {
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

                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;

                case 'Update Employee Manager':
                    updateEmployeeManager();
                    break;
            }
        })
    }
menu();

function viewAllEmployees() {
    connection.query('SELECT * FROM employee',
        function (err, res) {
            if (err) throw err;
            let values = [res]
            console.table(values[0]);
            menu();
        }
    )
};

function viewAllDepartments() {
    connection.query('SELECT * FROM department',
        function (err, res) {
            if (err) throw err;
            let values = [res]
            console.table(values[0]);
            menu();
        }
    )
};

function viewAllRoles() {
    connection.query('SELECT * FROM role',
    function (err, res) {
        if (err) throw err;
        let values = [res]
        console.table(values[0]);
        menu();
    })
};

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
            }
        ])
        .then(function(answer) {
            connection.query('INSERT INTO employee SET ?',
            {
                first_name: answer.firstName,
                last_name: answer.lastName,
                role_id: null,
                manager_id: null
            },
            function (err, answer) {
                if (err) throw err;
            });
            console.table(answer);
        menu();
    });
};

function addDepartment() {
    inquirer
        .prompt({
            type: 'input',
            message: 'Department name?',
            name: 'department'
        })
        .then(function(answer) {
            connection.query('INSERT INTO department SET ?',
            {
                name: answer.department
            },
            function(err, answer) {
                if (err) throw err;
            });
            console.table(answer);
        menu();
    });
};

function updateEmployeeRole() {
    connection.query('SELECT first_name, last_name, id FROM employees',
    function (err, res) {

    })
}



