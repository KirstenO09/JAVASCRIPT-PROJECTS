function addition () {
    var A = 5; // This is the first number
    var B = 10; // This is the second number
    var C = A + B; // This adds the two numbers together
    document.getElementById("math").innerText = "The sum of " + A + " and " + B + " is " + C; // This displays the result (sum) in an HTML element with the ID "math".
}

function subtraction () {
    var subtraction = 10 - 5;// This subtracts 5 from 10
    document.getElementById("subtract").innerText = "10 - 5 = " + subtraction; // This displays the result (difference) in an HTML element with the ID "math".
}

function multiplication () {
    var multiplication = 10 * 5;// This multiplies 10 by 5
    document.getElementById("multiply").innerText = "10 * 5 = " + multiplication; // This displays the result (product) in an HTML element with the ID "math".
}

function division () {
    var division = 10 / 5;// This divides 10 by 5
    document.getElementById("divide").innerText = "10 / 5 = " + division; // This displays the result (quotient) in an HTML element with the ID "math".
}

function multiple_operations(){
    var simple_Math = (10 + 5) * 2 - 3 / 1; // This performs multiple operations: addition, multiplication, subtraction, and division
    document.getElementById("simpleMath").innerText = "The result of the expression (10 + 5) * 2 - 3 / 1 is " + simple_Math; 
    // This displays the result in an HTML element with the ID "simpleMath".

}

function modulus() {
    var modulus = 10 % 3; // This calculates the remainder of 10 divided by 3
    document.getElementById("modulus").innerText = "10 % 3 = " + modulus; 
    // This displays the result (remainder) in an HTML element with the ID "modulus".
}

function negation(){
    var negation = -10; // This negates the value of 10
    document.getElementById("negation").innerText = "The negation of 10 is " + negation; 
    // This displays the result (negative value) in an HTML element with the ID "negation".

}

function increment() {
    var increment = 5; // This is the initial value
    increment++; // This increments the value by 1
    document.getElementById("increment").innerText = "The incremented value of 5 is " + increment; 
    // This displays the result (incremented value) in an HTML element with the ID "increment".
}

function decrement() {
    var decrement = 5; // This is the initial value
    decrement--; // This decrements the value by 1
    document.getElementById("decrement").innerText = "The decremented value of 5 is " + decrement; 
    // This displays the result (decremented value) in an HTML element with the ID "decrement".
}

function math_random() {
    var random = (Math.random() * 100); // This generates a random number between 0 and 1
    document.getElementById("random").innerText = "A random number between 0 and 100 is " + random; 
    // This displays the result (random number) in an HTML element with the ID "random".
}

function math_object () {
    var power = (Math.pow(2,3)); // This performs exponentiation
    document.getElementById("power").innerText = "The number 2 raised to the power of 3 is " + power;
    //This displays the result (power) in an HTML elment with the ID "exponent". 
}