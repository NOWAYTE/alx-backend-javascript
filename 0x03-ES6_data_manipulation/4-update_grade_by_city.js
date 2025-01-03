export default function updateStudentGradeByCity(arrayObjects, city, newGrades) {
  return arrayObjects
    .filter((key) => key.location === city)
    .map((key) => {
      const gradesInfo = newGrades.find((grade) => grade.studentId === key.id);

      return {
        id: key.id,
        firstName: key.firstName,
        location: key.location,
        grade: gradesInfo ? gradesInfo.grade : 'N/A',
      };
    });
}
