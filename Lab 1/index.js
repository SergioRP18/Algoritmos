import students from "./data/dataStudents.js";
import { util } from "./utils/renderStudents.js";
import orderNames  from "./utils/orderByName.js";
import { calculateGrades } from "./utils/calculateMeanGrade.js";
import filterGrades from "./utils/filterHighGrade.js";


const container = document.querySelector(".app-gestor");

orderNames(students).forEach((student) => {
    console.log(students)
    const studentCard = util(student);
    container.appendChild(studentCard);
});

