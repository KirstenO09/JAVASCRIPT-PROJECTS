function dictionary(){
    var Vehicle = {
        Brand:"Ford",
        Model:"Escape",
        Color:"Black",
        Year:"2022",
        Doors: 4,
        Engine:"Hybrid",
    };
    delete Vehicle.Doors;
    document.getElementById("dictionary").innerHTML = Vehicle.Doors; //
}