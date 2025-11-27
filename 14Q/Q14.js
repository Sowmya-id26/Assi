console.log("Begin");
setTimeout(() =>{
    console.log("TimeoutTask")
}, 0);
Promise.resolve().then(() =>{
    console.log("Promise Task");
})
console.log("End")