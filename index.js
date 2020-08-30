const inquirer = require('inquirer');
const db = require('./db');
const consoleTable = require('console.table');

function menu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menuChoice',
                message: 'What would you like to do?',
                choices: [
                    'View all Employees', 'View All Employees By Department', 'View All Employees By Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager'                
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.menuChoice) {
                case 'View all Employees':
                    viewEmployees();
                    break;
            }
            
        })
}

