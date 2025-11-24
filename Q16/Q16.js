const isEven = number => (number % 2 === 0);

console.log(isEven(10)); 
console.log(isEven(9));  

let score = 42;
let result = score >= 35 ? "Pass" : "Fail";

console.log(result);

const greetUser = (name) => `Hello, ${name || "Guest"}`;

console.log(greetUser("sowmya"));
console.log(greetUser());
