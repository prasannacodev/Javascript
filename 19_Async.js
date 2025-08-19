// setTimeout vs setInterval:
console.log("setTimeout: will run once after 1 second");
setTimeout(() => console.log("Timeout executed"), 1000);
console.log("setInterval: will run every 2 seconds. Cancel after 12 seconds");
var intervalId = setInterval(() => console.log("Interval tick"), 2000);
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval cleared");
}, 12000);



// Callback Function:
function getData(callback){
    setTimeout(()=>{
        var data ="This is the data";
        callback(data);
    },2000);
}
function processData(data){
    console.log("Processing data:",data);
}
getData(processData);


// Promises:
function getData(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        const data = "This is the data";
        resolve(data);
      } else {
        reject("Something went wrong!");
      }
    }, 2000);
  });
}
getData(true)
  .then((data) => {
    console.log("Recevied data:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
getData(false)
  .then((data) => {
    console.log("Recevied data:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });


  
// Async/Await:
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "This is the data";
      resolve(data);
    }, 2000);
  });
}

async function fetchData() {
  try {
    const data = await getData();
    console.log("Received data:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}
fetchData();