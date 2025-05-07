-- Create the database
CREATE DATABASE students_db;
USE students_db;

-- Create the Students table
CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    date_of_birth DATE
);

-- Create the Courses table
CREATE TABLE courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    course_code VARCHAR(50) UNIQUE NOT NULL
);

-- Create the Enrollments table (MANY-TO-MANY relationship between students and courses)
CREATE TABLE enrollments (
    enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    course_id INT,
    enrollment_date DATE NOT NULL DEFAULT (CURRENT_DATE),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);


-- Insert sample students
INSERT INTO students (first_name, last_name, email, date_of_birth) VALUES
('John', 'Doe', 'john.doe@example.com', '2000-05-15'),
('Jane', 'Smith', 'jane.smith@example.com', '1999-08-22'),
('Mike', 'Johnson', 'mike.johnson@example.com', '2001-01-30');

-- Insert sample courses
INSERT INTO courses (course_name, course_code) VALUES
('Database Systems', 'DBS101'),
('Web Development', 'WEB201'),
('Software Engineering', 'SWE301');

-- Insert sample enrollments
INSERT INTO enrollments (student_id, course_id) VALUES
(1, 1),
(1, 2),
(2, 1),
(3, 3);

