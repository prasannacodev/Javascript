// Funtion Declaration
function greet(name) {
  console.log("Hello," + name + "!");
}
greet("John")
greet("Emily")


// Function Expression
var greet = function(name){
    console.log("Hello,"+name+"!");
}
greet("John");
greet("Emily");


// Arrow Function
var greet = (name)=>{
    console.log("Hello,"+name+"!");
};
greet("John");
greet("Emily");
function addnumber(a, b) {
  return a + b;
}
const result = addnumber(5,3);
console.log(result);
function greet(name = "Anonymous") {
  console.log("Hello," + name + "!");
}
greet();
greet("John");
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
const results = sum(1, 2, 3, 4, 5);
console.log(results);


// Spread Oparator
let name="prasanna";
console.log([...name].length);

var array = [
  { name: "prasanna", age: 25, profession: "fullstack" },
  { name: "balaji", age: 55, profession: "frontend" },
  { name: "madhan", age: 35, profession: "backend" },
];
function name(datas) {
  for (var data of datas) {
    if (data.age >= 35) {
      console.log(data);
    }
  }
}
name(array);
