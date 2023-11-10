var output = [];
var add = 1;
function fizzBuzz(){
    while(add <= 100){
    if(add % 3 === 0 && add % 5 === 0){
        output.push("FizBuzz");
    }else if(add % 5 === 0){
        output.push("Buzz");
    }else if (add % 3 === 0){
        output.push("Fizz");
    }else{
        output.push(add);
    }

    add++;
    
        }
        console.log(output);
}