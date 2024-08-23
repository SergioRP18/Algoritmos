import students from "./data/dataStudents.js";
import {util} from "./utils/renderStudents.js";
import orderNames  from "./utils/orderByName.js";
import filterGrades from "./utils/filterHighGrade.js";
import calculateGrades from "./utils/calculateMeanGrade.js";
import { groupStudentsByCourse} from "./utils/organizeByCourse.js";

//Esta funcion ordena los nombres de los estudiantes
const sortedStudents = orderNames(students);
const renderStudentNames = (students) => {
    const app = document.querySelector(".app-gestor");
    const list = document.createElement('ul')

    students.forEach(student => {
        const studentElement = document.createElement('li');
        studentElement.innerHTML = `
            ${student.name}
        `;
        list.appendChild(studentElement);
    });
    app.appendChild(list)
};


//Esta funcion filtra a los estudiantes de acuerdo a la nota
const filterGradeStudents = filterGrades(students);
const renderStudentGrades = (students) => {
    const app = document.querySelector(".app-gestor");
    const list = document.createElement('ul')

    students.forEach(student => {
        const studentElement = document.createElement('li');
        studentElement.innerHTML = `
        <h4>Nombre: ${student.name}</h4>
        <p>Nota: ${student.grade}</p>
        `;
        list.appendChild(studentElement);
    });
    app.appendChild(list)
};


//Esta funcion calcula la nota de los estudiantes y saca el promedio
const averageGrade = calculateGrades(students);
const renderStudentCalculateGrades = (averageGrade) => {
    const app = document.querySelector(".app-gestor");
    const averageElement = document.createElement('div');
    averageElement.className = 'average-grade';
    averageElement.innerHTML = `
        <h3>Promedio de Calificaciones: ${averageGrade}</h3>
    `;
    app.appendChild(averageElement);
};


//Esta funcion organiza a los estudiantes por curso
const groupedStudents = groupStudentsByCourse(students);
for(const course in groupedStudents){
    let students = groupedStudents [course];
    students.forEach(student =>{
        const mainContainer = document.querySelector(".app-gestor");
        const studentCard = util(student);
        mainContainer.appendChild(studentCard);
    });
}


// Renderiza en el DOM
renderStudentNames(sortedStudents);
renderStudentGrades(filterGradeStudents);
renderStudentCalculateGrades(averageGrade);

