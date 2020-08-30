const inquirer = require('inquirer');
const db = require('./db');
const consoleTable = require('console.table');
const connection = require('./db/connection');

function start() {
    menu();
}

function menu() {
    inquirer
        .prompt([{
            type: 'list',
            name: 'menuChoice',
            message: 'What would you like to do?',
            choices: [
                'View All Employees', 'View All Employees By Department', 'View All Employees By Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager'
            ]
        }])
        .then(userChoice => {
            switch (userChoice.menuChoice) {
                case 'View All Employees':
                    viewAllEmployees();
                    break;

                case 'View All Employees By Department':
                    viewAllEmployeesByDepartment();
                    break;

                case 'View All Employees By Manager':
                    viewAllEmployeesByManager();
                    break;

                case 'Add Employee':
                    addEmployee();
                    break;

                case 'Remove Employee':
                    removeEmployee();
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

function viewAllEmployees() {
    const params = {};
    const query = connection.query(
        'SELECT * FROM employee',
        params,
        function (err, res) {
            if (err) throw err;
            let values = [res]
            console.table(values[0]);
            menu();
        }
    )
};

function viewAllEmployeesByDepartment() {
    const params = {};
    const query = connection.query(
        'SELECT * FROM department',
        params,
        function (err, res) {
            if (err) throw err;
            let values = [res]
            console.table(values[0]);
            menu();
        }
    )
};



