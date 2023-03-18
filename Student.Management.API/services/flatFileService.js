const fs = require("fs");
const csv = fs.readFileSync("../flat-files/students.csv");

function getStudents() {
    let lines = csv.toString().split("\r");
    let students = [];
    for (let i = 1; i < lines.length - 1; i++) {
        let row = lines[i]
        let cells = row.split(", ");
        let student = {
            id: Number(cells[0]),
            name: cells[1],
            lastName: cells[2],
            age: Number(cells[3]) 
        };
        students.push(student);
    }

    return students;
}

module.exports = { getStudents };