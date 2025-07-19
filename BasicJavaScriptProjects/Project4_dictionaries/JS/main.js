function dictionary(){
    var Vehicle = {
        Brand:"Ford",
        Model:"Escape",
        Color:"Black",
        Year:"2022",
        Doors: 4,
        Engine:"Hybrid",
    }; //This is a dictionary that contains key-value pairs (KVPs)
    delete Vehicle.Doors; //This uses the delete operator to remove the value (4) of the key (Doors) from the dicionary
    document.getElementById("dictionary").innerHTML = Vehicle.Doors; 
    // This is suppose to display the value (4) of the Doors key in an HTML element with the ID "dictionary".
    //However, since it used the delete operator it will only display undefined.
}