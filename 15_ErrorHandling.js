// Try...catch Statement:
try {
  let num = parseInt("abc");
  if (isNaN(num)) throw new Error("Invaild number!");
  console.log(num);
} catch (error) {
  console.error("Something went wrong:", error.message);
}


// Error object:
try {
    var user =JSON.parse('{"name":"Prasanna"');
    console.log(user.name);
}catch(error){
    console.error("An error occurred:",error.message);
}


// Throw Statement :
function divide(a,b){
    if( b===0){
        throw new Error("Cannot divide by zero");
    }
    return a/b;
}
try {
    const result = divide(10,-5);
    console.log("Result:",result);
}catch (error){
    console.log("An error occurred:",error.message);
}


// Debugging with Console:
function add(a, b) {
  console.log("Adding number:", a, b);
  const sum = a + b;
  console.log("sum:",sum);
  return sum;
}
add(5,3)