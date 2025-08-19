// If Statements
let age = 17;
if (age >= 18) {
  console.log("you are eligible to vote");


// else Statements
} else {
  console.log("you are not eligible to vote");
}
var  day = "Sunday";
if (day === "Saturday" || day === "Sunday"){
  console.log("It's the weekend!");  


// else if Statements
}else if (day === "Friday"){
  console.log("It's almost the weekend!");
}else{
  console.log("It's a weekday.");
}
const number = 10;
if (number % 2 === 0){
  console.log("The number is even.");
}else {
  console.log("The number is odd.");
}


// Ternary Statement
let isAuthenticated = false;
let message = isAuthenticated ? "Welcome back!" : "Please log in.";
console.log(message);
var dayofweek ="Thursday";


// Switch Statements
switch (dayofweek) {
  case "Monday":      
  console.log("It's Monday.");
  break;
  case  "Tuesday":
  console.log("It's Tuesday.");
  break;
  case "Wednesday":
  console.log("It's Wednesday.");
  break;
  case "Thursday":
  console.log("It's Thursday.");
  break;
  case "Friday":
  console.log("It's Friday.");
  break;
  default:
    console.log("It's the weekend day!");
}