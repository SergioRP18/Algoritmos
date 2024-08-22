// const organaizeByGroupCourse = (students) => {
//     return students.reduce((result,student) => {
//         const group = student;
//         if(!result [group]){
//             result [group] = [];
//         }
//         result [group].push(student);
//         return result;
//     })
// };
// organaizeByGroupCourse();

import students from "../data/dataStudents.js";


const organaizeByGroupCourse = {};

for(let i = 0; i < students.length; i++){
    const objeto = students[i];
    if(!organaizeByGroupCourse[objeto.grade]){
        organaizeByGroupCourse[objeto.grade] = [];
    }
    organaizeByGroupCourse[objeto.grade].push(objeto);
}

console.log(organaizeByGroupCourse)