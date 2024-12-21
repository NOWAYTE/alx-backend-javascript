const { createServer } = require('http');
const fs = require('fs');
const { argv } = require('process');

const hostname = '127.0.0.1';
const port = 1245;

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const rows = data.trim().split('\n');

    const headers = rows.shift().split(',');
    const students = rows
      .map((row) => row.split(','))
      .filter((row) => row.length === headers.length)
      .map((row) => ({
        firstname: row[0].trim(),
        lastname: row[1].trim(),
        age: row[2].trim(),
        field: row[3].trim(),
      }));
    let result = `Number of students: ${students.length}\n`;

    const fieldCounts = students.reduce((acc, student) => {
      if (!acc[student.field]) {
        acc[student.field] = [];
      }
      acc[student.field].push(student.firstname);
      return acc;
    }, {});

    for (const [field, studentsInField] of Object.entries(fieldCounts)) {
      result += `Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}\n`;
    }

    return result;
  } catch (error) {
    return `Error: Cannot load database\n ${error.message}`;  // Return error message
  }
}

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;

  if (url === '/') {
    res.end('Hello Holberton School');
  } else if (url === '/students') {
    console.log('This is the list of students');
    try {
      const result = countStudents(argv[1]);
      res.end(result);
    } catch (error) {
      res.end(error.message);
    }
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;

