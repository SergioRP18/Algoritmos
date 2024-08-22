const filterGrades = (students) => {
    const result = students.filter((student) => student.grade > 80);
    return result;
};

export default filterGrades;

