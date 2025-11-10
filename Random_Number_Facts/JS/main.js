function getNumberFact(){
    fetch('http://numbersapi.com/random/trivia')
    .then(response => response.text())
    .then(fact => {
        document.getElementById('factDisplay').innerText = fact;
    })
    .catch(error => {
        document.getElementById('factDisplay').innerText = 'Error fetching fact. Please try again.';
    });
}