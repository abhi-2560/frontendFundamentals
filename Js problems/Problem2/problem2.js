const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 5 },
  { id: 2, name: "Phone", price: 30000, stock: 10 },
  { id: 3, name: "Tablet", price: 25000, stock: 0 },
  { id: 4, name: "Watch", price: 10000, stock: 7 }
];

  
// 11. Print all product names
products.forEach(product => console.log(product.name));


  
// 12. Show only products that are in stock
const inStockProducts = products.filter(product => product.stock > 0);
console.log(inStockProducts);


  
// 13. Find the most expensive product
const mostExpensive = products.reduce((max, product) =>
  product.price > max.price ? product : max
);

console.log(mostExpensive);


  
// 14. Find the product with id = 2  
const product = products.find(product => product.id === 2);
console.log(product);


  
// 15. Calculate the total inventory value (price × stock)

const totalInventoryValue = products.reduce(
  (total, product) => total + product.price * product.stock,
  0
);
console.log(totalInventoryValue);



// 16. Add a discount of 20% to every product  
const discountedProducts = products.map(product => ({
  ...product,
  price: product.price * 0.8
}));

console.log(discountedProducts);


  
// 17. Add a new product using the spread operator
  
const newProduct = {
  id: 5,
  name: "Charger",
  price: 5000,
  stock: 15
};

const updatedProducts = [...products, newProduct];
console.log(updatedProducts);


  
// 18. Destructure the price and stock of the first product

const { price, stock } = products[0];
console.log(price);
console.log(stock);


  
// 19. Find products costing more than ₹20,000

const expensiveProducts = products.filter(product => product.price > 20000);
console.log(expensiveProducts);


// 20. Create an array of only product prices
const productPrices = products.map(product => product.price);
console.log(productPrices);