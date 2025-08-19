// for loop
for(var i=1; i<=5;i++){
    console.log(i);
}
for(var i=10; i>=1;i--){
    console.log(i);
}

// while loop
var i = 1;
while(i <=5){
    console.log(i);
    i++;
}
var i = 10;
while(i >=1){
    console.log(i);
    i--;
}

// do while loop
var i = 1;
do {
    console.log(i);
    i++;
} while(i <= 5);
var i = 11;
do {
    console.log(i);
    i--;
} while(i >= 1);

// for in loop
var person = {
  name: "John",
  age: 30,
  profession: "Developer",
};
for (var key in person){
    console.log(key + ":"+ person[key]);
}

// for of loop
const fruit=["apple","banana","cherry"];
for (let fruit of fruits){
    console.log(fruit);
}

// foreach loop
const fruits=["apple","banana","cherry"];
fruits.forEach((fruit)=>{
    console.log(fruit);
})

