export const groupStudentsByCourse = (students) => {
    return students.reduce((groups, student) => {
        const { course } = student;
        if (!groups[course]) {
            groups[course] = [];
        }
        groups[course].push(student);
        return groups;
    }, {});
};