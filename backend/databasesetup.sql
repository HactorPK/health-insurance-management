CREATE DATABASE   DB;
USE DB;

CREATE TABLE `employees` (
  `employeeID` int NOT NULL AUTO_INCREMENT,
  `employee_name` varchar(100) DEFAULT NULL,
  `employee_uname` varchar(100) DEFAULT NULL,
  `employee_pswrd` varchar(100) DEFAULT NULL,
  `insurance_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`employeeID`)
);


CREATE TABLE `insurances` (
  `insuranceID` int NOT NULL AUTO_INCREMENT,
  `insurance_name` varchar(100) DEFAULT NULL,
  `insurance_premium` int DEFAULT NULL,
  `insurance_age_limit` int DEFAULT NULL,
  PRIMARY KEY (`insuranceID`)
);


CREATE TABLE `users` (
  `username` varchar(50) NOT NULL,
  `userpassword` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`username`)
)
insert into users (username, userpassword) values ("Admin", "Admin123");