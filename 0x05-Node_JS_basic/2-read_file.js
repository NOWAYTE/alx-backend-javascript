const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const rows = data.trim().split(',');
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

	  console.log(students)
  } catch (error) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
