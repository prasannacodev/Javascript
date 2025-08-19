// Declaring variables
var a = 20;
let b = 10;
const c=50;
console.log(a,b,c);
console.log(a);
console.log(b);
console.log(c);
// end of variable declaration



// variable types
var name = "John Doe"; // string
var age = 34; // number
 let nullvalue = null// Null
var isStudent = true; // Boolean
var men = // undefined
let hobbies = ["reading", "gaming", "coding"]; // array
var person={ // Object
    name: "John Doe",
    age: 34,
    gender:"male"
}
console.log(name, age, isStudent, hobbies);
console.log(men);
console.log(nullvalue);
console.log(person);
// end of variable types




// variable scope
function myfunction() {
  let localvar = "local variable";
  console.log(localvar);
}
// end of variable scope
