export const calculateGrades = (students) => {
    const result = students.reduce((accumulator, grade) => accumulator + grade, 0);
    const average = result / calculateGrades.length;

    return average;
};

