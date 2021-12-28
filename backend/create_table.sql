CREATE TABLE sys.`user` (
	id INT auto_increment NOT NULL,
	email varchar(100)  NOT NULL,
	password varchar(100)  NOT NULL,
	first_name varchar(100) NOT NULL,
	second_name varchar(100) NOT NULL,
	CONSTRAINT user_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;
