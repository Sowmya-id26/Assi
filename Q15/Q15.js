const username="Sowmya";
const course="full-stack";
console.log(`Hello ${username},welcome to the ${course} course!`)

const name = "Sam";
const age = 21;
const student = {
  name: name,
  age: age,
  greet: function () {
    console.log("Hello");
  }
};
student.greet();

const getFullName=(first, last)=> `${first} ${last}`;
console.log(getFullName("Sam","Wilson"))