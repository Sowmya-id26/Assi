arr1 = [1, 2, 3];
arr2 = [4, 5];
const merge=[...arr1, ...arr2]
console.log(merge)

const sum=(...numbers)=>{
    return numbers.reduce((total,num)=> total+num, 0);
};
console.log(sum(10,20,30));

const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};


const { name: userName, address: { city: userCity, pin: userPin } } = user;

console.log(userName); 
console.log(userCity); 
console.log(userPin);  
