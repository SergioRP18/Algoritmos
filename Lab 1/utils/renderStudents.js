export const util = ({ id, name, age, grade, course }) => {

    const container = document.createElement("card");
    container.classList.add("student-card");

    const h1 = document.createElement("h1");
    const h2Name = document.createElement("h2");
    const h2Age = document.createElement("h2");
    const h2Grade = document.createElement("h2");
    const h3Course = document.createElement("h3");

    h1.textContent = id;
    h2Name.textContent = name;
    h2Age.textContent = age;
    h2Grade.textContent = grade; 
    h3Course.textContent = course;

    container.appendChild(h1);
    container.appendChild(h2Name);
    container.appendChild(h2Age);
    container.appendChild(h2Grade);
    container.appendChild(h3Course);

    return container;
};