let students = [
    {
        name: "Priya",
        marks: {
            Math: 90,
            English: 88,
            Science: 95,
            History: 76,
            Hindi: 65
        }
    },
    {
        name: "Nita",
        marks: {
            Math: 60,
            English: 48,
            Science: 35,
            History: 86,
            Hindi: 54
        }
    },
    {
        name: "Shital",
        marks: {
            Math: 80,
            English: 78,
            Science: 45,
            History: 77,
            Hindi: 65
        }
    },
    {
        name: "Diya",
        marks: {
            Math: 50,
            English: 58,
            Science: 65,
            History: 96,
            Hindi: 65
        }
    },
    {
        name: "Riya",
        marks: {
            Math: 67,
            English: 95,
            Science: 92,
            History: 66,
            Hindi: 69
        }
    }
];

// Calculate total and percentage
let result = students.map(student => {

    let total = Object.values(student.marks).reduce((sum, marks) => {
        return sum + marks;
    }, 0);

    return {
        name: student.name,
        ...student.marks,
        totalMarks: total,
        percentage: Math.floor((total / 500) * 100)
    };
});

// Find highest and lowest scorer
let highest = result.reduce((a, b) =>
    a.totalMarks > b.totalMarks ? a : b
);

let lowest = result.reduce((a, b) =>
    a.totalMarks < b.totalMarks ? a : b
);

// Calculate class average
let classAverage = result.reduce((sum, student) => {
    return sum + student.percentage;
}, 0) / result.length;

// Display dashboard
document.getElementById("totalStudents").textContent = students.length;

document.getElementById("classAverage").textContent =
    classAverage.toFixed(2) + "%";

document.getElementById("highestScorer").textContent = highest.name;

document.getElementById("lowestScorer").textContent = lowest.name;


// Display table
let tableBody = document.getElementById("studentTableBody");

function displayStudents(data) {

    tableBody.innerHTML = "";

    data.forEach(student => {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.Math}</td>
            <td>${student.English}</td>
            <td>${student.Science}</td>
            <td>${student.History}</td>
            <td>${student.Hindi}</td>
            <td>${student.totalMarks}</td>
            <td>${student.percentage}%</td>
        `;

        tableBody.appendChild(row);

    });
}

displayStudents(result);


// Search students
let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    let searchValue = this.value.toLowerCase();

    let filteredStudents = result.filter(student => {
        return student.name.toLowerCase().includes(searchValue);
    });

    displayStudents(filteredStudents);

});