use employees_db;

INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Legal'),
    ('Finance');

INSERT INTO role (title, salary, department_id)
VALUES 
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Lead Accountant', 155000, 4),
    ('Accountant', 125000, 4),
    ('Legal Team Lead', 250000, 3),
    ('Lawyer', 190000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Jack', 'London', 1, NULL),
    ('Robert', 'Bruce', 2, 1),
    ('Peter', 'Greenaway', 3, NULL),
    ('Derek', 'Jarman', 4, 3),
    ('Paolo', 'Pasolini', 5, NULL),
    ('Heathcote', 'Williams', 6, 5),
    ('Sandy', 'Powell', 7, NULL),
    ('Emil', 'Zola', 8, 7);

