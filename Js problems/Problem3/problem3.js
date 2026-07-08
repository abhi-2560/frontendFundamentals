const movies = [
  { id: 1, title: "Inception", rating: 8.8, year: 2010 },
  { id: 2, title: "Interstellar", rating: 8.6, year: 2014 },
  { id: 3, title: "Avatar", rating: 7.8, year: 2009 },
  { id: 4, title: "Jawan", rating: 7.2, year: 2023 }
];


// 21. Print all movie titles
movies.forEach(movie => console.log(movie.title));



// 22. Find movies with rating above 8

const topRatedMovies = movies.filter(movie => movie.rating > 8);
console.log(topRatedMovies);



// 23. Find the newest movie

const newestMovie = movies.reduce((newest, movie) =>
  movie.year > newest.year ? movie : newest
);
console.log(newestMovie);



// 24. Find the oldest movie
const oldestMovie = movies.reduce((oldest, movie) =>
  movie.year < oldest.year ? movie : oldest
);

console.log(oldestMovie);



// 25. Find the movie with id = 4

const movie = movies.find(movie => movie.id === 4);
console.log(movie);



// 26. Calculate the average rating
const averageRating =
  movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;

console.log(averageRating);



// 27. Add a new movie
const newMovie = {
  id: 5,
  title: "Life-of-pie",
  rating: 8.5,
  year: 2012
};

const updatedMovies = [...movies, newMovie];
console.log(updatedMovies);



// 28. Add a property isHit: true if rating ≥ 8

const moviesWithHitStatus = movies.map(movie => ({
  ...movie,
  isHit: movie.rating >= 8
}));
console.log(moviesWithHitStatus);



// 29. Destructure title and rating

const { title, rating } = movies[0];
console.log(title);
console.log(rating);



// 30. Find the highest-rated movie
const highestRatedMovie = movies.reduce((highest, movie) =>
  movie.rating > highest.rating ? movie : highest
);

console.log(highestRatedMovie);