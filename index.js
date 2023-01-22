
// ======================================================================
// Variable instantiations
// ======================================================================

// Buttons
const btnStart = document.querySelector("#startbutton");

const btnTest = document.querySelector("#TESTBUTTON");

// Images
let playerHpImage = document.querySelector(".player-hp-image");
let playerDataImage = document.querySelector(".player-data-image");
let opponentHpImage = document.querySelector(".opponent-hp-image");
let attackImage = document.querySelector(".attack-image");

// Div
const divStart = document.querySelector(".start-container");
const divIntro = document.querySelector(".intro-container");
const divContainer = document.querySelector(".container");

// ======================================================================
// Other variables
// ======================================================================
const attackDuration = 2400;
const hpDepletionDuration = 1200;


// ======================================================================
// Check for "START" and transition to animation
// ======================================================================

// temp: get rid of START animation for faster testing
divStart.style.display = "none";
divIntro.style.display = "none";
divContainer.style.display = "flex";



btnStart.addEventListener('click', transitionIntro);

function transitionIntro() {
    divStart.style.display = "none";    // hide Start button
    divIntro.style.display = "none";   // show Intro div

    divContainer.style.display = "flex";    // show main game container
}

// =============
// TEST BUTTON
// =============
btnTest.addEventListener('click', () => {
    // Animation to deplete HP to 0
    depleteHpAnimation(playerHpImage);

    // Changes databox from Full HP to Empty HP
    changeDataboxHp(playerDataImage);

    // same for opponent's hp
    depleteHpAnimation(opponentHpImage);

    // show pokemon move aniation
    attackImage.style.display = "block";
    attackImage.style.animation = `moveSpriteSheet_Y ${attackDuration}ms steps(26)`;
    setTimeout(() => { attackImage.style.display = "none"; }, attackDuration);
    // attackImage.style.display = "none";
});

function depleteHpAnimation(trainerHpImage) {
    trainerHpImage.style.animation = `deplete-hp ${hpDepletionDuration}ms`;
    trainerHpImage.style.width = "0%";
}

// Changes the databox for the PLAYER to account for HP changes
// Note: OPPONENT does not need this method with current databox UI
function changeDataboxHp(trainerDataImage) {
    let oldImage = trainerDataImage.src;
    let newImage = oldImage.slice(0, oldImage.length - 4) + "-Fainted.png";
    setTimeout(() => { trainerDataImage.src = newImage; }, hpDepletionDuration);
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