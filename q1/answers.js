
let arr1 = [10, 20, 30];
let arr2 = [40, 50];
let combined=[...arr1, ...arr2];
console.log(combined)

let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
let profile={...person, ...extra}
console.log(profile)

function sumAll(...nums){
    let sum=0;
    for(let n of nums){
        sum+=n
    }
    return sum;
}
console.log(sumAll(1,2,3,4))

let numbers = [10, 20, 30, 40, 50];
let [a, ...remaining]=numbers;
console.log(a);
console.log(remaining)



let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
let {
    address: {
        city,
        pin,
        geo:{lat,lng}
    }
    
}=user;
console.log(city,pin,lat,lng);

const multiply=(a,b)=>a*b
console.log(multiply(4,5))


let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};

let role=emp?.details?.profile?.role;
console.log(role)