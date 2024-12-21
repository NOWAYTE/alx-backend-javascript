const fs = require('fs').promises;

async function countStudents(path) {
    try {
        const data = await fs.readFile(path, "utf-8");
        const rows = data.trim().split('\n');

        const headers = rows.shift().split(',');

        const students = rows.map((row) => row.split(',')).map((rows) => ({
            firstname: rows[0].trim(),
            lastname: rows[1].trim(),
            age: rows[2].trim(),
            field: rows[3].trim(),
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
                `Number of students in ${field}: ${studentField.length}. List: ${studentField.join(', ')}`
            );
        });
    } catch (error) {
        console.log(`Error reading file: ${error.message}`);
    }
}

module.exports = countStudents;

