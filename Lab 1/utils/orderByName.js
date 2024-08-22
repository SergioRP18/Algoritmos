const orderNames = (students) => {
    return students.sort((student1,student2) => student1.name.localeCompare(student2.name));
};

export default orderNames;

