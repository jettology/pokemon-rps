
// ======================================================================
// Variable instantiations
// ======================================================================

// Buttons
const btnStart = document.querySelector("#startbutton");

// Div
const divStart = document.querySelector(".start-container");
const divIntro = document.querySelector(".intro-container");
const divContainer = document.querySelector(".container");

// ======================================================================
// Check for "START" and transition to animation
// ======================================================================

btnStart.addEventListener('click', transitionIntro);

function transitionIntro() {
    divStart.style.display = "none";    // hide Start button
    divIntro.style.display = "none";   // show Intro div

    divContainer.style.display = "flex";    // show main game container
}



// btn.addEventListener('click', function () {
//     startContainer.style.opacity = 0;
//     startContainer.style.transform = 'scale(0)';
//     // Add timeout with length matching animation-duration 
//     window.setTimeout(function () {
//         startContainer.style.display = 'none';
//     }, 700);
//     setTimeout(() => { typeWriter(); }, 1000);
// });