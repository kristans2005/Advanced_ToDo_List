CREATE DATABASE IF NOT EXISTS advanced_todo;


-- creates user table
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- placeholder user accounts to user so have something to test with.
INSERT INTO users (name, email, password) VALUES
('kristinas', 'kristians.ipa22@gmail.com', 'k12345678'),
('gerda', 'gerda.ipa22@gmail.com', 'g12345678'),
('rudolf', 'rudolfs.ipa22@gmail.com', 'r12345678'),
('sandris', 'sandris.ipa22@gmail.com', 's12345678');

-- creates todo table. its like a box that has all the todo stuff inside and it only belongs to the user who made it
-- and only he can decide if he wants to allow other users to access the box by making it private or public
CREATE TABLE IF NOT EXISTS todo_table (
	todo_table_id INT AUTO_INCREMENT PRIMARY KEY,
	user_id INT NOT NULL,
	todo_table_name VARCHAR(255) NOT NULL,
	is_private BOOLEAN NOT NULL DEFAULT FALSE,
	FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- placeholders to have something to work with
INSERT INTO todo_table (user_id, todo_table_name, is_private) VALUES
(1, 'home chores', FALSE ),
(2, 'school stuff', FALSE ),
(1, 'sport activities', FALSE ),
(1, 'medication reminders', TRUE ),
(3, 'programming', FALSE ),
(4, 'unity', FALSE );


-- creates todo bord. so basicly its smaller boxes inside the table box that holds the actual todos 
CREATE TABLE IF NOT EXISTS todo_bord (
	todo_bord_id INT AUTO_INCREMENT PRIMARY KEY,
	todo_table_id INT NOT NULL,
	todo_bord_name VARCHAR(255) NOT NULL,
	bord_column_order INT NOT NULL,
	FOREIGN KEY (todo_table_id) REFERENCES todo_table(todo_table_id)
);

-- placeholders to have something to work with
INSERT INTO todo_bord (todo_table_id, todo_bord_name, bord_column_order) VALUES
(1, 'kitchen', 1 ),
(1, 'bedroom', 3 ),
(1, 'garden', 2 ),
(2, 'after school activities', 2 ),
(2, 'homework', 1 ),
(3, 'school', 1 ),
(3, 'weekends', 2 ),
(4, 'aids', 1 ),
(5, 'todo_app', 1 ),
(5, 'krigerts', 2 ),
(6, 'need to add', 1 ),
(6, 'working rn on', 2 ),
(6, 'finnished', 3 );


-- todo tasks. you can add title, description, expiration date (optional) and checkbox form if task is completed
CREATE TABLE IF NOT EXISTS todo_task (
	todo_task_id INT AUTO_INCREMENT PRIMARY KEY,
	todo_bord_id INT NOT NULL,
	title VARCHAR(255) NOT NULL,
	description VARCHAR(255),
	expiration_date DATETIME,
	todo_row_order INT NOT NULL,
	is_completed BOOLEAN NOT NULL DEFAULT FALSE,
	FOREIGN KEY (todo_bord_id) REFERENCES todo_bord(todo_bord_id)
);

-- placeholder todo (this was a pain to make pls kill me)
INSERT INTO todo_task (todo_bord_id, title, description, expiration_date, todo_row_order, is_completed) VALUES
(1 , 'clean dishes', 'clean until moms home', '2023-12-31 23:59:59', 1, FALSE),
(1 , 'clean ground', 'clean floor', '2023-12-31 23:59:59', 3, FALSE),
(1 , 'clean litter box', 'stinky cat', '2023-12-31 23:59:59', 2, TRUE),
(2, 'do laundry', 'do laundry before going to bed', '2023-12-31 23:59:59', 1, FALSE),
(3, 'mow the lawn', 'mow the lawn in the morning', '2023-12-31 10:00:00', 1, FALSE),
(4, 'study for exam', 'study for the math exam', '2023-12-30 23:59:59', 1, FALSE),
(5, 'buy groceries', 'buy groceries after work', '2023-12-31 18:00:00', 1, FALSE),
(6, 'pay bills', 'pay electricity and internet bills', '2023-12-31 23:59:59', 1, FALSE),
(7, 'task 7', 'description for task 7', '2024-04-17 22:28:03', 1, TRUE),
(8, 'task 8', 'description for task 8', '2024-04-18 22:28:03', 1, FALSE),
(9, 'task 9', 'description for task 9', '2024-04-19 22:28:03', 1, FALSE),
(10, 'task 10', 'description for task 10', '2024-04-20 22:28:03', 1, TRUE),
(11, 'task 11', 'description for task 11', '2024-04-21 22:28:03', 1, TRUE),
(12, 'task 12', 'description for task 12', '2024-04-22 22:28:03', 1, FALSE),
(13, 'task 13', 'description for task 13', '2024-04-23 22:28:03', 1, FALSE),
(2, 'task 14', 'description for task 14', '2024-04-24 22:28:03', 2, TRUE),
(3, 'task 15', 'description for task 15', '2024-04-25 22:28:03', 2, FALSE),
(4, 'task 16', 'description for task 16', '2024-04-26 22:28:03', 2, TRUE),
(5, 'task 17', 'description for task 17', '2024-04-27 22:28:03', 2, FALSE),
(6, 'task 18', 'description for task 18', '2024-04-28 22:28:03', 2, FALSE),
(7, 'task 19', 'description for task 19', '2024-04-29 22:28:03', 2, TRUE),
(8, 'task 20', 'description for task 20', '2024-04-30 22:28:03', 2, TRUE),
(9, 'task 21', 'description for task 21', '2024-05-01 22:28:03', 2, FALSE),
(10, 'task 22', 'description for task 22', '2024-05-02 22:28:03', 2, TRUE),
(11, 'task 23', 'description for task 23', '2024-05-03 22:28:03', 2, FALSE),
(12, 'task 24', 'description for task 24', '2024-05-04 22:28:03', 2, FALSE),
(13, 'task 25', 'description for task 25', '2024-05-05 22:28:03', 2, TRUE),
(2, 'task 26', 'description for task 26', '2024-05-06 22:28:03', 3, FALSE);

