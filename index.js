
// ======================================================================
// Variable instantiations
// ======================================================================

// ********************
// Buttons
// ********************

const btnStart = document.querySelector("#startbutton");

const btnTest = document.querySelector("#TESTBUTTON");

// ********************
// Images 
// ********************

// battle images
let playerHpImage = document.querySelector(".player-hp-image");
let playerDataImage = document.querySelector(".player-data-image");
let opponentHpImage = document.querySelector(".opponent-hp-image");
let attackImage = document.querySelector(".attack-image");

// choose pokemon images
let grassIconImage = document.querySelector(".grass-icon-image");
let grassPokeballImage = document.querySelector(".grass-pokeball-image");
let grassEffectImage = document.querySelector(".grass-effect-image");
let fireIconImage = document.querySelector(".fire-icon-image");
let firePokeballImage = document.querySelector(".fire-pokeball-image");
let fireEffectImage = document.querySelector(".fire-effect-image");
let waterIconImage = document.querySelector(".water-icon-image");
let waterPokeballImage = document.querySelector(".water-pokeball-image");
let waterEffectImage = document.querySelector(".water-effect-image");


// ********************
// Divs
// ********************

const divStart = document.querySelector(".start-container");
const divIntro = document.querySelector(".intro-container");
const divContainer = document.querySelector(".container");  // overall game container

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

// ======================================================================
// Choose Pokemon
// ======================================================================
// mouse hover on pokeball --> change poke icon image to color

// grass pokeball
grassPokeballImage.addEventListener('mouseover', () => {
    grassIconImage.src = "images/choose-ui/venusaur-color.png";
    grassEffectImage.style = "display: block";
});
grassPokeballImage.addEventListener('mouseout', () => {
    grassIconImage.src = "images/choose-ui/venusaur-sepia.png";
    grassEffectImage.style = "display: none";
});

// fire pokeball
firePokeballImage.addEventListener('mouseover', () => {
    fireIconImage.src = "images/choose-ui/charizard-color.png";
    fireEffectImage.style = "display: block";
});
firePokeballImage.addEventListener('mouseout', () => {
    fireIconImage.src = "images/choose-ui/charizard-sepia.png";
    fireEffectImage.style = "display: none";
});

// water pokeball
waterPokeballImage.addEventListener('mouseover', () => {
    waterIconImage.src = "images/choose-ui/blastoise-color.png";
    waterEffectImage.style = "display: block";
});
waterPokeballImage.addEventListener('mouseout', () => {
    waterIconImage.src = "images/choose-ui/blastoise-sepia.png";
    waterEffectImage.style = "display: none";
});


function colorPokemonIcon() {

}

function switchPokemonIconImage() {

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