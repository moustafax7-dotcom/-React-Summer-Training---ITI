let grades = [];

for (let i = 1; i <= 6; i++) {
    let grade = Number(prompt(`Enter grade ${i}:`));
    grades.push(grade);
}

let sum = 0;
for (let grade of grades) {
    sum += grade;
}

let average = sum / grades.length;

let highestGrade = grades[0];
for (let grade of grades) {
    if (grade > highestGrade) {
        highestGrade = grade;
    }
}

let lowestGrade = grades[0];
for (let grade of grades) {
    if (grade < lowestGrade) {
        lowestGrade = grade;
    }
}

console.log("Grades:", grades);
console.log("Average Grade:", average);
console.log("Highest Grade:", highestGrade);
console.log("Lowest Grade:", lowestGrade);