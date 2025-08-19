// Stringify:
var person ={
    name :"Prasanna",
    age :20,
    city:"New York"
};
var jsonString =JSON.stringify(person);
console.log(jsonString);

// Parse:
var jsonString ='{"name":"prasanna","age":20,"city":"panruti"}';
var person = JSON.parse(jsonString);
console.log(person.name);
console.log(person.age);
console.log(person.city);

