const express = require('express');

const app = express();
const fs = require('fs').promises;
const { argv } = require('process');

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8')
    const rows = data.split('\n');

    rows.shift(); // Remove header row

    const students = rows
      .filter((row) => row.trim().length > 0)
      .map((row) => row.split(','))
      .map((row) => ({
        firstname: row[0],
        lastname: row[1],
        age: row[2],
        field: row[3],
      }));

    const totalStudents = students.length;

    const fieldCount = {};
    students.forEach((student) => {
      if (!fieldCount[student.field]) {
        fieldCount[student.field] = [];
      }
      fieldCount[student.field].push(student.firstname);
    });

    let result = 'This is the list of our students\n';
    result += `Number of students: ${totalStudents}\n`;

    Object.keys(fieldCount).forEach((field) => {
      const studentField = fieldCount[field];
      result += `Number of students in ${field}: ${studentField.length}. List: ${studentField.join(', ')}\n`;
    });

    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const port = 1245;
const homeRouter = express.Router();
const studentsRouter = express.Router();

homeRouter.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

studentsRouter.get('/students', async (req, res) => {
  try {
    const result = await countStudents(argv[2]);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.use('/', homeRouter);
app.use('/', studentsRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
