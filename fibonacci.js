// SANITIZE INPUT
//Could not successfully santize input with prompt

var n = prompt("Please enter number between 3 and 10: ");
if (typeof n === "number") {
    fibonacciGeneretor(n);
} else {
    alert("Wrong Number!");
    var n = prompt("Please enter number between 3 and 10: ");
}

if (Number.isSafeInteger(n)) {
    fibonacciGeneretor(n);
} else {
    alert("Wrong Number!");
    var n = prompt("Please enter number between 3 and 10: ");
}

//this could have been used
var n = parseInt(prompt("Please enter number between 3 and 10: "));
//but it converts any input to numbers/int so no need as letters won't work in the function below

// Fibonacci Function with for loop


function fibonacciGeneretor(n){
    var fb = []; //Declaring Empty Array
    if (n === 1){ //Checking if n is 1 as the sequnce needs numbers to add up for the next one.
        fb = [0]
    }else if(n === 2){
        fb = [0,1];

    }else{
        fb = [0,1]; //Checking if n is 2 providing second number to add up with
for (var i = 1; i <= n-2; i++){ //For loop starting 1 to the number of requested array minus exisiting two arrays
fb.push(fb[fb.length - 2] + fb[fb.length - 1]);  //Dry code applied, to push the sum of the penultimate and last added array
}
console.log(fb); // logging the current array
}
}

// Fibonacci Function with while loop


function fibonacciGeneretor(n){
    var i = 1; //Incremental variable to stop loop
    var fb = []; //Declaring Empty Array
    if (n === 1){ //Checking if n is 1 as the sequnce needs numbers to add up for the next one.
        fb = [0]
    }else if(n === 2){
        fb = [0,1];

    }else{
        fb = [0,1]; //Checking if n is 2 providing second number to add up with
    
    while(n -2 >= i){ //For loop starting 1 to the number of requested array minus exisiting two arrays
           
        fb.push(fb[fb.length - 2] + fb[fb.length - 1]);  //Dry code applied, to push the sum of the penultimate and last added array
        console.log(fb);
        i++;
    }
    console.log(fb); // logging the current array
}
}
  
