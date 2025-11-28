function main(userName){
    console.log("Hello"+ userName);
}
function user(callbackFn){
    setTimeout(function(){
        const name="Alice";
        callbackFn(name);
    },200);

}
user(main);