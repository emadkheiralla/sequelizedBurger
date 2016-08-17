DROP DATABASE burgers_db;
CREATE DATABASE	burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INTEGER AUTO_INCREMENT,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN NOT NULL,
	dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name,devoured)
VALUES ("Classic Hamburger",false);

INSERT INTO burgers (burger_name,devoured)
VALUES ("Cheese Burger",false);

INSERT INTO burgers (burger_name,devoured)
VALUES ("Triple Bacon Cheese Burger",false);