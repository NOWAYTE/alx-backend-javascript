const fs = require('fs');

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
    console.log(`Number of students: ${students.length}`);

    const fieldCounts = students.reduce((acc, student) => {
      if (!acc[student.field]) {
        acc[student.field] = [];
      }
      acc[student.field].push(student.firstname);
      return acc;
    }, {});

    for (const [field, studentsInField] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`);
    }
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
