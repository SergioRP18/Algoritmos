const calculateGrades = (students) => {
    if (students.length === 0) return 0;

    const totalGrades = students.reduce((accumulator, student) => accumulator + student.grade, 0);
    const average = totalGrades / students.length;
    return average;
};

export default calculateGrades;