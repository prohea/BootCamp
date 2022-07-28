var student = "Andre";
var pets = 3; 
var isStudent = true;

var students = ["Andre", "Karl", "Rashida", "Olivia"];

console.log(students);

console.log(students[1]); 

console.log(students[0]); 

console.log(students[3]);

students[3] = "Carter"; 

console.log(students[3]);

for (var i = 0; i < 4; i++) {

console.log(students.length);
}

for (var i = 0; students.length; i++) {
    console.log("Great to see you, " + students[i] + "!");
}