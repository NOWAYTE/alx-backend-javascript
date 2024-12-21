const { createServer } = require('http');
const fs = require('fs').promises;
const { argv } = require('process');

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const rows = data.split('\n');

    rows.shift();

    const students = rows
      .filter((row) => row.trim().length > 0)
      .map((row) => row.split(','))
      .map((row) => ({
        firstname: row[0],
        lastname: row[1],
        age: row[2],
        field: row[3],
      }));

    console.log(`Number of students: ${students.length}`);

    const fieldCount = {};

    students.forEach((student) => {
      if (!fieldCount[student.field]) {
        fieldCount[student.field] = [];
      }
      fieldCount[student.field].push(student.firstname);
    });

    Object.keys(fieldCount).forEach((field) => {
      const studentField = fieldCount[field];
      console.log(
        `Number of students in ${field}: ${studentField.length}. List: ${studentField.join(', ')}`,
      );
    });

    return fieldCount;
  } catch (error) {
    console.log(`Error reading file: ${error.message}`);
    throw error;
  }
}

const hostname = '127.0.0.1';
const port = 3000;

const app = createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    console.log('This is the list of students');

    try {
      const fieldCount = await countStudents(argv[2]);
      res.end(JSON.stringify(fieldCount, null, 2));
    } catch (error) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: error.message }));
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log('Server running');
});

module.exports = app;
