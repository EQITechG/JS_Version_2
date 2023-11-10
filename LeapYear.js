var year = prompt("Enter Year");
var leapYear = "";
if (year % 4 === 0){
    if (year % 100 === 0){
        if (year % 400 === 0){
            leapYear = "It's a bloody leap year :)";
        }
        leapYear = "It's not a  leap year :(";
    }else{
        
    }   
    leapYear = "It's a bloody leap year :)";
}else{
    leapYear = "It's not a  leap year :(";
}
console.log(leapYear)