export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.filter((grade) => grade.studentId === student.id);
      if (newGrade[0]) {
        return { ...student, grade: newGrade[0].grade };
      }
      return student;
    });
}
