const users = [
  { id:1, name:"Rahul", age:22, active:true },
  { id:2, name:"Priya", age:19, active:false },
  { id:3, name:"Amit", age:25, active:true },
  { id:4, name:"Neha", age:21, active:true }
];

// 71. Print all user names
users.forEach(user => console.log(user.name));



// 72. Print only active users

const activeUsers = users.filter(user => user.active);
console.log(activeUsers);



// 73. Find the youngest user
const youngestUser = users.reduce((youngest, user) =>
  user.age < youngest.age ? user : youngest
);

console.log(youngestUser);



// 74. Find the oldest user

const oldestUser = users.reduce((oldest, user) =>
  user.age > oldest.age ? user : oldest
);

console.log(oldestUser);



// 75. Calculate the average age
const averageAge =
  users.reduce((sum, user) => sum + user.age, 0) / users.length;

console.log(averageAge);



// 76. Add an isAdult property

const usersWithAdult = users.map(user => ({
  ...user,
  isAdult: user.age >= 18
}));

console.log(usersWithAdult);



// 77. Find the user with id = 4
const user = users.find(user => user.id === 4);
console.log(user);

// 78. Add a new user using the spread operator
const newUser = {
  id: 5,
  name: "Abhi",
  age: 22,
  active: true
};

const updatedUsers = [...users, newUser];

console.log(updatedUsers);


// 79. Destructure the first user's name and age

const { name, age } = users[0];
console.log(name);
console.log(age);


// 80. Return an array containing only the names of active users
const activeUserNames = users
  .filter(user => user.active)
  .map(user => user.name);

console.log(activeUserNames);