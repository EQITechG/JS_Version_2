var people = ["Mike","Emma","John","Adam","Pam","Lando"];
function whoPays(){
    var random = Math.floor(Math.random() * people.length);
    var payer = people[random];
    return payer + " is going to pay the bills today :)"
}