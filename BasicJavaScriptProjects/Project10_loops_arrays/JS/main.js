function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) { // Loop from 1 to 10
        Digit += "<br>" + X; // Append the current value of X to the Digit string
        X++; // Increment X by 1
    } document.getElementById("Loop").innerHTML = Digit; // Display the result in the HTML element with id "Loop"
}

var Instruments= ["Guitar", "Piano", "Drums", "Bass", "Violin","Trumpet", "Flute"]; // Array of musical instruments
var Content = ""; // Initialize an empty string to hold the list of instruments
var Y; // Variable to use in the for loop
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) { // Loop through each instrument in the array
        Content += Instruments[Y] + "<br>"; // Append the current instrument to the Content string
    } document.getElementById("List_of_Instruments").innerHTML = Content; // Display the list of instruments in the HTML element with id "List_of_Instruments"
}

function Array_Function() {
    var Instruments = []; // Initialize an empty array
    Instruments[0] = "Guitar"; // Add the first instrument
    Instruments[1] = "Piano"; // Add the second instrument
    Instruments[2] = "Drums"; // Add the third instrument
    Instruments[3] = "Bass"; // Add the fourth instrument
    Instruments[4] = "Violin"; // Add the fifth instrument
    Instruments[5] = "Trumpet"; // Add the sixth instrument
    Instruments[6] = "Flute"; // Add the seventh instrument
    document.getElementById("Array").innerHTML = "Instruments: " + Instruments[0] + ", " + Instruments[1] + ", " + Instruments[2] + ", " +
        Instruments[3] + ", " + Instruments[4] + ", " + Instruments[5] + ", " + Instruments[6]; // Display the list of instruments in the HTML element with id "Array"

}

function constant_function() {
    const Musical_Instrument = {type: "Guitar", brand: "Fender", color: "Red"}; // Create a constant object representing a musical instrument
    Musical_Instrument.color = "Blue"; // Change the color property of the object
    Musical_Instrument.price = "$1000"; // Add a new property to the object
    document.getElementById("Constant").innerHTML = "The " + Musical_Instrument.type + " is made by " + Musical_Instrument.brand +
        ", it is " + Musical_Instrument.color + " and costs " + Musical_Instrument.price; // Display the properties of the object in the HTML element with id "Constant"
}

let car = {
    make: "Ford", // Define the make of the car
    model: "Mustang", // Define the model of the car
    year: 2021, // Define the year of manufacture
    color: "Red", // Define the color of the car
    description: function() { // Define a method to return a description of the car
        return "The car is a " + this.year + " " + this.color + " " + this.make + " " + this.model + "."; 
    }
};
document.getElementById("Car_Object").innerHTML = car.description(); // Display the car description in the HTML element with id "Car_Object"