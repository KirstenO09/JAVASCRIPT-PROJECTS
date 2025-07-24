document.write("10" + 5);// This will output "105" because the number 5 is coerced into a string and concatenated with "10".
document.write("<br>");
document.write(typeof "word"); // This will output "string" because the expression is coerced into a string.
document.write("<br>");
document.write(typeof 5); // This will output "number" because the expression is a number.
document.write("<br>");
var infinity = 2E310;// This is an expression that results in infinity
document.getElementById("infinity").innerText = "This is infinity: " + infinity; 
document.write("<br>");
// This displays infinity in an HTML element with the ID "output".

var negativeInfinity = -3E310; // This is an expression that results in negative infinity
document.getElementById("negativeInfinity").innerText = "This is negative infinity: " + negativeInfinity;
document.write("<br>");
// This displays negative infinity in an HTML element with the ID "output".

document.write(10 > 2); // This will output true because 10 is greater than 2
document.write("<br>");
document.write(10 < 2); // This will output false because 10 is not less than 2
document.write("<br>");

console.log(2 + 2); // This will log 4 to the console
document.write("<br>");
console.log(10 == 4); // This will log false to the console because 10 is not equal to 4
document.write("<br>");

document.write(10 == 10); // This will output true because 10 is equal to 10
document.write("<br>");
document.write(10 == 5); // This will output false because 10 is not equal to 5
document.write("<br>");
x= 10;
y= 10;

a = 10;
b = "5";

c = 10;
d = "10";

e = "10";
f = "5";

document.write(x === y); // This will output true because both x and y are strictly equal (same type and value)
document.write("<br>");
document.write(a === b); // This will output false because a is a number and b is a string, so they are not strictly equal
document.write("<br>");
document.write(c === d); // This will output false because c is a number and d is a string, so they are not strictly equal
document.write("<br>");
document.write(e === f); // This will output false because e and f are different strings,