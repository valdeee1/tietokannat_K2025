

function suurempiLuku(){

let input1 = prompt("Anna luku 1");
let input2 = prompt("Anna luku 2"); 

let number1 = parseFloat(input1);
let number2 = parseFloat(input2);

if(number1 > number2){
    console.log(number1);
}
    else{
        console.log(number2);
    }
}

suurempiLuku();