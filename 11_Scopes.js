// Global Scope:
let message = "Hello, World!";
function showmessage(){
    console.log(message);
}
showmessage();


// Local Scope :
function showmessage(){
    var message = "Hello,World!";
    console.log(message);
}
showmessage();
console.log(message);


// Function Scope:
function showmessage (){
    if (true){
        let message ="Hello,World!";
        console.log(message);
    }
}
showmessage();
console.log(message);



// Block Scope:
{
  const message = "Hello,World!";
  console.log(message);
}
console.log(message);



// Lexical Scope:
function outerfunction(){
    var message = "Hello,";
    function innerfunnction(){
        console.log(message + "World!");        
    }
    innerfunnction();
}
outerfunction();



// Closure:
function createCounter(){
    var count = 0;
    function increment(){
        count++;
        console.log(count);  
    }
    return increment;
}
const counter = createCounter();
counter();
counter();
counter();
counter();
counter();
