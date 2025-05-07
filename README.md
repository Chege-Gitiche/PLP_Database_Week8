# Student Portal

## Description
Simple CRUD API for managing student records using Node.js, Express, and MySQL.

## How to Setup
1. Clone this repo.
2. Install dependencies: `npm install`
3. Create a `.env` file with database credentials.
4. Import the `students_db.sql` file to your MySQL server.
5. Start the server: `npm start`

## Project Screenshot
(Insert your screenshot here)

## Database ERD
- Students (student_id, first_name, last_name, email, date_of_birth)
- Courses (course_id, course_name, course_code)
- Enrollments (enrollment_id, student_id, course_id, enrollment_date)

