
setTimeout(doSomething, 2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");

//Anonyymi funktio

setTimeout(function(){
    console.log("Demonstrating the callbacks");
},2000);

//Arrow function

setTimeout(()=>{
    console.log("Demonstrating the callbacks");
},2000);
