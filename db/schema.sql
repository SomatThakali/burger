ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'thakali1234';
flush privileges;
ALTER USER 'root'@'localhost' IDENTIFIED BY 'thakali1234';


DROP DATABASE  IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(200) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
)