const cart = [
  { id: 1, item: "Shoes", price: 2500, quantity: 2 },
  { id: 2, item: "Bag", price: 1500, quantity: 1 },
  { id: 3, item: "Shirt", price: 1200, quantity: 3 }
];


// 31. Print all item names
cart.forEach(product => console.log(product.item));



// 32. Calculate the total cart value

const totalCartValue = cart.reduce(
  (total, product) => total + product.price * product.quantity,
  0
);

console.log(totalCartValue);



// 33. Find the most expensive item
const mostExpensiveItem = cart.reduce((max, product) =>
  product.price > max.price ? product : max
);

console.log(mostExpensiveItem);



// 34. Increase every item's quantity by 1
const updatedCart = cart.map(product => ({
  ...product,
  quantity: product.quantity + 1
}));

console.log(updatedCart);



// 35. Find the item with id = 2
const cartItem = cart.find(product => product.id === 2);

console.log(cartItem);



// 36. Add a new item

const newItem = {
  id: 4,
  item: "Trousers",
  price: 800,
  quantity: 2
};

const newCart = [...cart, newItem];

console.log(newCart);



// 37. Create a new array with a totalPrice property
const cartWithTotalPrice = cart.map(product => ({
  ...product,
  totalPrice: product.price * product.quantity
}));

console.log(cartWithTotalPrice);



// 38. Destructure item and quantity
const { item, quantity } = cart[0];

console.log(item);
console.log(quantity);



// 39. Find items costing more than ₹1500

const costlyItems = cart.filter(product => product.price > 1500);

console.log(costlyItems);



// 40. Calculate the average item price
const averagePrice =
  cart.reduce((sum, product) => sum + product.price, 0) / cart.length;

console.log(averagePrice);