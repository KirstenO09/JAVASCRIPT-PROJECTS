function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle(make, model, year, color) {
    this.Vehicle_make = make;
    this.Vehicle_model = model;
    this.Vehicle_year = year;
    this.Vehicle_color = color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myCar() {
    document.getElementById("New_and_This").innerHTML =
        "Erik drives a " + Erik.Vehicle_color + "-colored " + Erik.Vehicle_make + " " + Erik.Vehicle_model +
        " manufactured in " + Erik.Vehicle_year;
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {
            Starting_point += 1;
        }
        Plus_one();
        return Starting_point;
    }
}