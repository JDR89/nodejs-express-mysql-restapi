CREATE DATABASE IF NOT EXISTS company_db;

USE company_db;

CREATE TABLE employee(
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(55) DEFAULT NULL,
    salary INT(5) DEFAULT NULL
);


insert into employee (name, salary) values ('Juan', 1000);
insert into employee (name, salary) values ('Pedro', 2000);
insert into employee (name, salary) values ('Maria', 3000);
insert into employee (name, salary) values ('Ana', 4000);



