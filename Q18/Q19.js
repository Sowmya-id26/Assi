
const calcText = `5 * 2 = ${5 * 2}`;
console.log(calcText);

const user = "sowmya";
const course = "Cybersecurity";
console.log(`${user} enrolled in ${course}`);


const add = (x, y) => x + y;
console.log(add(8, 7));

const obj1 = {
  val: 42,
  print: () => console.log(this.val)
};
obj1.print();

const obj2 = {
  val: 42,
  display() {
    console.log(this.val);
  }
};
obj2.display();


const item = { title: "Book", cost: 299 };
const itemClone = { ...item };
console.log(itemClone);

const base = { a: 1, b: 2 };
const extra = { b: 5, c: 9 };
const output = { ...base, ...extra };
console.log(output);

const biggest = (...nums) => Math.max(...nums);
console.log(biggest(12, 4, 25));


const nums = [4, 8, 12];
const [ , second, third ] = nums;
console.log(second, third);

const device = { make: "HP", memory: "16GB" };
const { make, memory } = device;
console.log(make, memory);

const info = { data: { id: 101 } };
console.log(info?.data?.id);
console.log(info?.data?.missing);


for (var n = 0; n < 3; n++) {
  setTimeout(() => console.log("var:", n), 0);
}

for (let m = 0; m < 3; m++) {
  setTimeout(() => console.log("let:", m), 0);
}
