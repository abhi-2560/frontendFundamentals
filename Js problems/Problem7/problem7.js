const students = [
  { id:1, name:"Rahul", age:20, marks:90, address:{city:"Delhi",state:"Delhi"} },
  { id:2, name:"Priya", age:21, marks:82, address:{city:"Mumbai",state:"Maharashtra"} },
  { id:3, name:"Amit", age:22, marks:70 }
];


// 61. Print all student names

students.forEach(student => console.log(student.name));



// 62. Print only students with marks above 80
const topStudents = students.filter(student => student.marks > 80);
console.log(topStudents);



// 63. Safely print each student's city using optional chaining
students.forEach(student => {
  console.log(student.address?.city);
});



// 64. Destructure name, marks, and city
const {
  name,
  marks,
  address: { city } = {}
} = students[0];

console.log(name);
console.log(marks);
console.log(city);



// 65. Add a grade property

const studentsWithGrade = students.map(student => ({
  ...student,
  grade:
    student.marks >= 90 ? "A+" :
    student.marks >= 80 ? "A" :
    student.marks >= 70 ? "B" : "C"
}));

console.log(studentsWithGrade);



// 66. Find the topper
const topper = students.reduce((top, student) =>
  student.marks > top.marks ? student : top
);
console.log(topper);



// 67. Calculate average marks
const averageMarks =
  students.reduce((sum, student) => sum + student.marks, 0) / students.length;

console.log(averageMarks);



// 68. Add a new student using the spread operator

const newStudent = {
  id: 4,
  name: "Abhi",
  age: 22,
  marks: 88,
  address: {
    city: "Indore",
    state: "MP"
  }
};

const updatedStudents = [...students, newStudent];
console.log(updatedStudents);



// 69. Find student with id = 2
const student = students.find(student => student.id === 2);

console.log(student);


// 70. Print 'City Not Available' if the address is missing

students.forEach(student => {
  console.log(student.address?.city ?? "City Not Available");
});