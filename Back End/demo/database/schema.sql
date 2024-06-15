BEGIN TRANSACTION;

DROP TABLE IF EXISTS
users, blogPost, inquiry, appointment
CASCADE;

CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	full_name varchar(50) NOT NULL,
	email varchar(50) NOT NULL UNIQUE
);

CREATE TABLE blogPost (
	post_id SERIAL PRIMARY KEY,
	date_posted DATE DEFAULT CURRENT_DATE,
	title varchar(100) NOT NULL,
	body varchar(1000) NOT NULL
);

CREATE TABLE inquiry (
	inquiry_id SERIAL PRIMARY KEY,
	user_id INT,
	user_message varchar(250),
	FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE appointment (
	appointment_id SERIAL PRIMARY KEY,
	user_email varchar(100) NOT NULL,
	scheduled_date TIMESTAMP NOT NULL
);

COMMIT TRANSACTION;