function Fruit_Function(){
    var Fruit_Output;
    var Fruits = document.getElementById("Fruits").value; // Get the value from the input field with id "Fruits"
    var Fruit_String = " is a delicious fruit!"; // Define a string to append to the fruit name
    switch(Fruits) { // Use a switch statement to determine the output based on the fruit
        case "Apple":
            Fruit_Output = "Apple" + Fruit_String; // If the fruit is Apple, set the output to "Apple is a delicious fruit!"
            break;
        case "Banana":
            Fruit_Output = "Banana" + Fruit_String; // If the fruit is Banana, set the output to "Banana is a delicious fruit!"
            break;
        case "Kiwi":
            Fruit_Output = "Kiwi" + Fruit_String; // If the fruit is Cherry, set the output to "Cherry is a delicious fruit!"
            break;
        case "Strawberry":
            Fruit_Output = "Strawberry" + Fruit_String; // If the fruit is Date, set the output to "Date is a delicious fruit!"
            break;
         case "Orange":
            Fruit_Output = "Orange" + Fruit_String; // If the fruit is Date, set the output to "Date is a delicious fruit!"
            break;
         case "Pineapple":
            Fruit_Output = "Pineapple" + Fruit_String; // If the fruit is Date, set the output to "Date is a delicious fruit!"
            break;
        default:
            Fruit_Output = "Please enter a fruit exactly as written on the above list."; 
            // If none of the cases match, prompt the user to enter a valid fruit name
    } document.getElementById("Output").innerHTML = Fruit_Output; // Display the output in the HTML element with id "Output"
}

function Hello_World_Function(){
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!"; 
}


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "blue"; // Set the fill color to blue
ctx.fill(); // Fill the circle with blue color

