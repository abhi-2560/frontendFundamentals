const players = [
  { id: 1, name: "Virat", runs: 12000 },
  { id: 2, name: "Rohit", runs: 9800 },
  { id: 3, name: "Gill", runs: 2500 },
  { id: 4, name: "KL Rahul", runs: 5200 }
];


// 51. Print player names

players.forEach(player => console.log(player.name));



// 52. Find players with more than 5000 runs

const topPlayers = players.filter(player => player.runs > 5000);

console.log(topPlayers);



// 53. Find the highest run scorer
const highestScorer = players.reduce((highest, player) =>
  player.runs > highest.runs ? player : highest
);

console.log(highestScorer);



// 54. Calculate total runs
const totalRuns = players.reduce((sum, player) => sum + player.runs, 0);
console.log(totalRuns);



// 55. Find average runs
const averageRuns =
  players.reduce((sum, player) => sum + player.runs, 0) / players.length;

console.log(averageRuns);



// 56. Add 500 runs to every player
const updatedPlayers = players.map(player => ({
  ...player,
  runs: player.runs + 500
}));

console.log(updatedPlayers);



// 57. Add a new player

const newPlayer = {
  id: 5,
  name: "MS Dhoni",
  runs: 6000
};

const newPlayers = [...players, newPlayer];

console.log(newPlayers);



// 58. Destructure name and runs
const { name, runs } = players[0];

console.log(name);
console.log(runs);

// 59. Find player with id = 1

const player = players.find(player => player.id === 1);

console.log(player);



// 60. Create an array containing only player names
const playerNames = players.map(player => player.name);
console.log(playerNames);