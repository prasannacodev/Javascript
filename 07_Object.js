// Object
var person = {
  name: "John",
  age: 30,
  profession: "Developer",
};
console.log(person.name);
console.log(person.age);
console.log(person.profession);


// Object constructor
let person = new Object();
person.name = "John";
person.age = 30;
person.profession = "Developer";
console.log(person.name);
console.log(person.age);
console.log(person.profession);


// Accessing object properties using variable
const person = {
    name : "John",
    age :30,
    profession : "Developer"
};
const propertyname = "age";
console.log(person[propertyname]);
const professionkey ="profession";
console.log(person.professionkey);


// Modifying object properties
var person ={
    name :"John",
    age :30,
    profession :"Developer"
}
person.age =40;
console.log(person.age);
person["profession"]="designer";
console.log(person.profession);


// Adding new properties to an object
var person ={
    name : "John",
    age: 30
};
person.profession ="Developer"
console.log(person.profession);
person["location"] ="New York";
console.log(person.location);


// Deleting object properties
var person = {
  name: "John",
  age: 30,
  profession: "Developer",
};
console.log(person.age);
delete person.age;
console.log(person.age);
console.log(person.profession);
delete person["profession"];
console.log(person.profession);
