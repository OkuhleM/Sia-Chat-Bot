CREATE TABLE chatbot_response(
    id serial PRIMARY KEY,
    response_message TEXT NOT NULL,
    created_on TIMESTAMP DEFAULT now()

);
-- CREATE TABLE studentsAccounts (
-- 	user_id serial PRIMARY KEY,
-- 	email VARCHAR ( 255 ) UNIQUE NOT NULL,
-- 	username VARCHAR ( 255 ) UNIQUE NOT NULL,
-- 	lastname VARCHAR ( 255 ) NOT NULL,
-- 	ID INT UNIQUE NOT NULL,
-- 	password VARCHAR ( 50 ) NOT NULL,
-- 	confirm_password VARCHAR ( 50 ) NOT NULL,
-- 	created_on TIMESTAMP NOT NULL,
--     last_login TIMESTAMP 
-- );

CREATE TABLE solutions(
    id serial PRIMARY KEY,
    options TEXT NOT NULL,
    created_on TIMESTAMP DEFAULT now()

);