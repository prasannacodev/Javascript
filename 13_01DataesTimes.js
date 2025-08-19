// Creating a Date:
var currentDate = new Date();
console.log(currentDate);


// Getting Components,
// Setting Componentes:
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var second = currentDate.getSeconds();

console.log("Current Date:", year + "-" + month + "-" + day);
console.log("current Time:", hours + "-" + minutes + "-" + second);