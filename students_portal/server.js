const express = require('express');
require('dotenv').config();
const app = express();
const studentRoutes = require('./routes/students');

app.use(express.json());

app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
