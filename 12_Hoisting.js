// Variables Hoisting:
console.log(x);// output undefined
var x = 10;
console.log(x);// output 10


// Function Hoisting:
greet ();// Hello!
function greet(){
    console.log("Hello!");    
}


// Function Expreesion Hoisting:
greet ();// output: Typerror :greet is not a function
var greet =function(){
    console.log("Hello!");    
}



// Hoisting with let and const :
console.log(x);
let x = 10;
console.log(y);
const y = 20;
