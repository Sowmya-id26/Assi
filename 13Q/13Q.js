let count=0;
let load=setInterval(() =>{
    console.log("Loading.....");
    count++;

}, 2000);
setTimeout(() =>{
    clearInterval(load);
    console.log("Loaded sucessfully!")
}, 2000);