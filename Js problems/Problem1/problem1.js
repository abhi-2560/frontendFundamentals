const employees = [
  { id: 1, name: "John", department: "IT", salary: 50000 },
  { id: 2, name: "Sarah", department: "HR", salary: 45000 },
  { id: 3, name: "Mike", department: "IT", salary: 60000 },
  { id: 4, name: "Emma", department: "Finance", salary: 70000 }
];


// 1. Print all employee names
 
employees.forEach(emp => console.log(emp.name));

 
// 2. Find employees from the IT department
 
const itEmployees = employees.filter(emp => emp.department === "IT");
console.log(itEmployees);

 
// 3. Increase every employee's salary by 10%
const updatedEmployees = employees.map(emp => ({
  ...emp,
  salary: emp.salary * 1.1
}));
console.log(updatedEmployees);


 
// 4. Find the employee with id = 3
 
const employee = employees.find(emp => emp.id === 3);
console.log(employee);

 
// 5. Calculate the total salary of all employees 
const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalSalary);


 
// 6. Find the average salary
const averageSalary = employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length;
console.log(averageSalary);


 
// 7. Add a new employee without modifying the original array
const newEmployee = {
  id: 5,
  name: "Nicholas",
  department: "Marketing",
  salary: 55000
};

const newEmployees = [...employees, newEmployee];
console.log(newEmployees);


 
// 8. Destructure the name and salary of the first employee
 
const { name, salary } = employees[0];
console.log(name);
console.log(salary);


 
// 9. Find the highest-paid employee
const highestPaid = employees.reduce((highest, emp) =>
  emp.salary > highest.salary ? emp : highest
);

console.log(highestPaid);


 
// 10. Create an array containing only employee names
const employeeNames = employees.map(emp => emp.name);
console.log(employeeNames);