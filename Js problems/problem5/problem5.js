const books = [
  { id: 1, title: "Atomic Habits", pages: 320, available: true },
  { id: 2, title: "Clean Code", pages: 450, available: false },
  { id: 3, title: "Deep Work", pages: 280, available: true }
];


// 41. Print all book titles
books.forEach(book => console.log(book.title));



// 42. Find available books
const availableBooks = books.filter(book => book.available);
console.log(availableBooks);



// 43. Find books with more than 300 pages

const longBooks = books.filter(book => book.pages > 300);
console.log(longBooks);



// 44. Find the longest book
const longestBook = books.reduce((longest, book) =>
  book.pages > longest.pages ? book : longest
);

console.log(longestBook);



// 45. Calculate total pages

const totalPages = books.reduce((sum, book) => sum + book.pages, 0);

console.log(totalPages);



// 46. Add a new book
const newBook = {
  id: 4,
  title: "Psycology of Money",
  pages: 252,
  available: true
};
const updatedBooks = [...books, newBook];
console.log(updatedBooks);



// 47. Add a category property to every book

const booksWithCategory = books.map(book => ({
  ...book,
  category: "c1"
}));

console.log(booksWithCategory);



// 48. Destructure title and pages

const { title, pages } = books[0];

console.log(title);
console.log(pages);



// 49. Find the book with id = 3
const book = books.find(book => book.id === 3);
console.log(book);



// 50. Count how many books are available
const availableCount = books.filter(book => book.available).length;
console.log(availableCount);