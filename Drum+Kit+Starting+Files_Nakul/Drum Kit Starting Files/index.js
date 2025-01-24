// Change the color of the "w drum" button to blue
document.querySelector("button.w.drum").style.color = "blue";

// Select all elements with class "drum"
var drums = document.querySelectorAll(".drum");

// Loop through each drum element and add an event listener
for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML; // Get the inner HTML (the letter) of the clicked button
        makeSound(buttonInnerHTML); // Play the sound
        buttonAnimation(buttonInnerHTML); // Add animation
    });
}

// Add keypress event listener for keyboard inputs
document.addEventListener("keypress", function(event) {
    makeSound(event.key); // Play the sound
    buttonAnimation(event.key); // Add animation
});

// Function to play the sound based on key or button
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log("Invalid key: " + key); // Log invalid keys
            break;
    }
}

// Function to add animation to the button
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) { // Check if the button exists to prevent errors
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
