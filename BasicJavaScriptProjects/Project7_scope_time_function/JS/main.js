function add_numbers(){
    var x = 10;
    document.getElementById("add").innerHTML = "The sum is: " + (20 + x); 
    // This adds 20 to the variable x and displays the result
}
var y = 10;
function subtract_numbers() {
    document.getElementById("subtract").innerHTML = "The difference is: " + (y - 5); 
    // This subtracts 5 from the variable y and displays the result
}

add_numbers(); // This calls the add_numbers function to execute it
subtract_numbers(); // This calls the subtract_numbers function to execute it

function add_numbers_1(){
    var x = 10;
    console.log(15 + x); // This adds 15 to the variable x and logs the result to the console
}

function add_numbers_2(){
    console.log(20 + x); // This adds 20 to the variable x and logs the result to the console
    // Note: x is not defined in this scope, so it will throw an error if executed
}

add_numbers_1(); // This calls the add_numbers_1 function to execute it
add_numbers_2(); // This calls the add_numbers_2 function to execute it, but it will throw an error due to undefined x

function Time_of_Day() {
    var Time = new Date().getHours();
    var Reply;
    if (Time >= 5 && Time < 12) // This checks if the time is before noon
    {
        Reply = "It is morning."; 
    } else if (Time >= 12 && Time < 18) // This checks if the time is between noon and 6 PM
    {
        Reply = "It is afternoon.";
    } else if (Time >= 18 && Time < 21) // This checks if the time is between 6 PM and 9 PM
        {
        Reply = "It is evening."; }
    else // This checks if the time is after 9 PM
    {
        Reply = "It is night.";
    }
    document.getElementById("message").innerHTML = Reply; // This displays the time of day message
}

function icecream_flavor() {
    flavor = document.getElementById("flavor").value; // Get the flavor input from the user
    var Ice_Cream;
    if (flavor == 1) {
        Ice_Cream = "Chocolate"; // This sets the ice cream flavor to Chocolate if the user selects 1
    } else if (flavor == 2) {
        Ice_Cream = "Vanilla"; // This sets the ice cream flavor to Vanilla if the user selects 2
    } else {
        Ice_Cream = "Strawberry"; // This sets the ice cream flavor to Strawberry if the user selects any other option
    }
    document.getElementById("Ice_cream").innerHTML = Ice_Cream; // This displays the selected ice cream flavor
}

function Driver_age(){
    Age = document.getElementById("age").value; // Get the age input from the user
    if (Age < 16) {
        Drive= "You are too young to drive."; // This sets the driving eligibility message if the user is under 16
    } else {
        Drive = "You are old enought to drive."; // This sets the driving eligibility message if the user is 16 or older
    } document.getElementById("Driver").innerHTML = Drive; // This displays the driving eligibility message
}

