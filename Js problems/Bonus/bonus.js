const posts = [
  { id:1, title:"React Basics", likes:120, comments:30 },
  { id:2, title:"JavaScript Arrays", likes:80, comments:15 },
  { id:3, title:"CSS Flexbox", likes:150, comments:45 }
];


// 81. Print all post titles
posts.forEach(post => console.log(post.title));

// 82. Find the most liked post
const mostLikedPost = posts.reduce((max, post) =>
  post.likes > max.likes ? post : max
);

console.log(mostLikedPost);



// 83. Find the least liked post
const leastLikedPost = posts.reduce((min, post) =>
  post.likes < min.likes ? post : min
);
console.log(leastLikedPost);



// 84. Calculate total likes

const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
console.log(totalLikes);


// 85. Calculate average comments

const averageComments =
  posts.reduce((sum, post) => sum + post.comments, 0) / posts.length;

console.log(averageComments);



// 86. Add a popularity property
const postsWithPopularity = posts.map(post => ({
  ...post,
  popularity: post.likes >= 100 ? "Popular" : "Normal"
}));

console.log(postsWithPopularity);



// 87. Find the post with id = 2

const post = posts.find(post => post.id === 2);
console.log(post);



// 88. Add a new post using the spread operator
const newPost = {
  id: 4,
  title: "Expressjs",
  likes: 89,
  comments: 17
};

const updatedPosts = [...posts, newPost];

console.log(updatedPosts);



// 89. Destructure title and likes
const { title, likes } = posts[0];

console.log(title);
console.log(likes);



// 90. Sort posts by likes in descending order

const sortedPosts = [...posts].sort((a, b) => b.likes - a.likes);
console.log(sortedPosts);