const organaizeByGroupCourse = (students) => {
    return students.reduce((result,student) => {
        const group = student;
        if(!result [group]){
            result [group] = [];
        }
        result [group].push(student);
        return result;
    })
};

organaizeByGroupCourse();

export default organaizeByGroupCourse;