const { createServer } = require('http');
const fs = require('fs').promises;
const { argv } = require('process');

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
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

    console.log(result);

    return result;
  } catch (error) {
    console.log(`Error reading file: ${error.message}`);
    throw error;
  }
}

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log('This is the list of students');

    try {
      const result = await countStudents(argv[2]);
      res.end(result);
    } catch (error) {
      res.statusCode = 500;
      res.end(error.message);
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
