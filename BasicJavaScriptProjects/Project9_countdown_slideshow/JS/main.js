function countdown() {
    var seconds = parseInt(document.getElementById("seconds").value); // Get the countdown time from the input field

    function tick() {
        document.getElementById("timer").innerHTML = seconds; // Display the current countdown time
        seconds = seconds - 1; // Decrease the seconds by 1

        if (seconds < 0) // Check if the countdown has reached zero
        {
            alert("Time's up!"); // Alert the user that the time is up
            document.getElementById("timer").innerHTML = ""; // Clear the timer display
        } else {
            setTimeout(tick, 1000); // Call the tick function again after 1 second
        }
    }
    tick(); // Start the countdown
}


let slideIndex = 1; // Initialize the slide index
showSlides(slideIndex); // Show the first slide initially

// Next/previous controls
function plusSlides(n) // Function to change slides
{
  showSlides(slideIndex += n); // Increment or decrement the slide index
}

// Thumbnail image controls
function currentSlide(n) // Function to show a specific slide
{
  showSlides(slideIndex = n); // Set the slide index to the specified number
}

function showSlides(n) // Function to display the slides
{
  let i; 
  let slides = document.getElementsByClassName("mySlides"); // Get all elements with the class "mySlides"
  let dots = document.getElementsByClassName("dot"); // Get all elements with the class "dot"
  if (n > slides.length) {slideIndex = 1} // If the slide index exceeds the number of slides, reset to the first slide
  if (n < 1) {slideIndex = slides.length} // If the slide index is less than 1, set it to the last slide

  // Hide all slides and remove the active class from all dots
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); 
  }
  slides[slideIndex-1].style.display = "block"; // Display the current slide
  dots[slideIndex-1].className += " active"; // Add the active class to the current dot
}