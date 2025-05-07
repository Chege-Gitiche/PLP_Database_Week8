const express = require('express');
const router = express.Router();
const db = require('../db/db');

// Create a student
router.post('/', async (req, res) => {
  const { first_name, last_name, email, date_of_birth } = req.body;
  try {
    await db.execute('INSERT INTO students (first_name, last_name, email, date_of_birth) VALUES (?, ?, ?, ?)', 
      [first_name, last_name, email, date_of_birth]);
    res.status(201).json({ message: 'Student created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read all students
router.get('/', async (req, res) => {
  try {
    const [students] = await db.execute('SELECT * FROM students');
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a student
router.put('/:id', async (req, res) => {
  const { first_name, last_name, email, date_of_birth } = req.body;
  const { id } = req.params;
  try {
    await db.execute('UPDATE students SET first_name = ?, last_name = ?, email = ?, date_of_birth = ? WHERE student_id = ?', 
      [first_name, last_name, email, date_of_birth, id]);
    res.status(200).json({ message: 'Student updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a student
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute('DELETE FROM students WHERE student_id = ?', [id]);
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
