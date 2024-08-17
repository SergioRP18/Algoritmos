export const util = ({ id, name, age, grade, course }) => {

    const container = document.createElement("card");
    container.classList.add("student-card");

    const h1 = document.createElement("h1");
    const h2Name = document.createElement("h2Name");
    const h2Age = document.createElement("h2Age");
    const h2Grade = document.createElement("h2Grade");
    const h2Course = document.createElement("h2Course");

    h1.textContent = id;
    h2Name.textContent = name;
    h2Age.textContent = age;
    h2Grade.textContent = grade;
    h2Course.textContent = course;

    container.appendChild(h1);
};