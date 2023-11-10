var guestList = ["Angela","Jack","Pam","James","Jason","Lara"];
var check = prompt("Enter your name please:");
if (guestList.includes(check)){
    console.log("You are on the guest list");
}else{
    console.log("Sorry we can't let you in"); 
}