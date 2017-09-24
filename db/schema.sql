CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
   id INTEGER AUTO_INCREMENT NOT NULL,
     burger_name VARCHAR(222) NOT NULL,
    devoured boolean NOT NULL default false,
     date TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);