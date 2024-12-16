const fs = require('fs')

function countStudents(path) {
	try{
		const data = fs.readFileSync(path, 'utf-8');
		const lines = data.trim().split('\n');
		console.log(lines)
		const header = lines[0].split(',');
		console.log(header)
		const students = lines.slice(1)
		console.log(`Number of students: ${students.length}`);
	} catch (err) {
		process.stdout.write("Cannot load the database\n")
	}

}
module.exports = countStudents;
