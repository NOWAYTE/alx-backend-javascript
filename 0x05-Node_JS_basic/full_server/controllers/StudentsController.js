const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const fieldCount = await readDatabase();

      const fields = Object.keys(fieldCount).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      let output = 'This is the list of our students\n';

      fields.forEach((field) => {
        const studentField = fieldCount[field];
        output += `Number of students in ${field}: ${studentField.length}. List: ${studentField.join(', ')}\n`;
      });

      response.status(200).send(output.trim());
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fieldCount = await readDatabase();

      const studentList = fieldCount[major];

      if (!studentList) {
        response.status(500).send('Cannot load the database');
        return;
      }

      response.status(200).send(`List: ${studentList.join(', ')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;

