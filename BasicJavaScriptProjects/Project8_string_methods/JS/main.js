function Concatenate() {
    var str1 = "Hello, ";
    var str2 = "world!";
    var result = str1.concat(str2); 
    document.getElementById("Concatenate").innerHTML = result; // This concatenates str1 and str2 and displays the result
}

function Slice(){
    var sentence="The quick brown fox jumps over the lazy dog.";
    var part=sentence.slice(4,19);
    document.getElementById("Slice").innerHTML=part; 
    // This extracts a part of the sentence from index 4 to 19 and displays it
}

function Numbers_to_String() {
    var x = 182;
    document.getElementById("Numbers_to_String").innerHTML = x.toString(); 
    // This converts the number x to a string and displays it
}

function Precision() {
    var x = 123.456789;
    document.getElementById("Precision").innerHTML = x.toPrecision(5);
    // This formats the number x to 5 significant digits and displays it
}