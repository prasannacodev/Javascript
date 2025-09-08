// Constructor funtion:
function Person(name,age){
    this.name =name;
    this.age =age;
}
var person1 =new Person("murugan",17);
var person2 =new Person("harsha",18);
console.log(person1.name);
console.log(person1.age);
console.log(person2.name);
console.log(person2.age);



// Constructor Function with Methods:
function Car(make,model,year){
    this.make =make;
    this.model =model;
    this.year =year;
     this.start =function(){
        console.log("The car is starting");
     };
     this.stop =function(){
        console.log("The car is stopping");     
     }
}
let car1 =new Car("toyoto","corolla",2020);
let car2 =new Car("honda","civic",2019);
car1.stop();
car2.start();


// Constructor Function with Prototype:
function Animal(species,sound){
    this.species =species;
    this.sound =sound;
}
Animal.prototype.makesound =function(){
    console.log(this.sound);
};
var dog =new Animal("dog","bark");
var cat =new Animal("cat","meow");
dog.makesound();
cat.makesound();




//  Constructor Function with Inheritance:
function Vehicle(make,model,year){
    this.make =make;
    this.model =model;
    this.year =year;
} 
Vehicle.prototype.start =function(){
    console.log("The vehicle is staring");
    
};
function Car(make,model,year,color){
    Vehicle.call(this,make,model,year);
    this.color =color;
}
Car.prototype =Object.create(Vehicle.prototype);
Car.prototype.constructor =Car;

var car1 =new Car("Toyoto","camry",2020,"red");
var car2 =new Car("Honda","Accord",2019,"blue");
console.log(car1);
console.log(car2);
car1.start();
car2.start();



//  Constructor Function with Static Methods:
function MathUtil(){}

MathUtil.add =function(a,b){
    return a+b;
};
MathUtil.subract = function(a,b){
    return a-b;
}
console.log(MathUtil.add(28,32));
console.log(MathUtil.subract(17,3));


