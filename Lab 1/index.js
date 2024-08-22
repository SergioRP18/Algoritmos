import students from "./data/dataStudents.js";
import util from "./utils/renderStudents.js";
import orderNames  from "./utils/orderByName.js";
import filterGrades from "./utils/filterHighGrade.js";
import calculateGrades from "./utils/calculateMeanGrade.js";

//Esta funcion ordena los nombres de los estudiantes
const sortedStudents = orderNames(students);
const renderStudentNames = (students) => {
    const app = document.querySelector(".app-gestor");
    app.innerHTML = '';
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
        <p>Nombre: ${student.name}</p>
        <p>Nota: ${student.grade}</p>
        `;
        list.appendChild(studentElement);
    });
    app.appendChild(list)
};


//Esta funcion calcula la nota de los estudiantes y saca el promedio
const averageGrade = calculateGrades(students);
const renderStudentCalculateGrades = (averageGrade,students) => {
    const app = document.querySelector(".app-gestor");
    const averageElement = document.createElement('div');
    averageElement.className = 'average-grade';
    averageElement.innerHTML = `
        <h3>Promedio de Calificaciones: ${averageGrade.toFixed(2)}</h3>
    `;
    app.appendChild(averageElement);
};


//Esta funcion organiza a los estudiantes por curso


// Renderiza los nombres ordenados en el DOM
renderStudentNames(sortedStudents);
renderStudentGrades(filterGradeStudents);
renderStudentCalculateGrades(averageGrade);



const container = document.querySelector(".app-gestor");

orderNames(students).forEach((student) => {
    console.log(students)
    const studentCard = util(student);
    container.appendChild(studentCard);
});

