
// ======================================================================
// Trainer instantiations
// ======================================================================
const playerPokemon = {
    type: null,
    name: null,
    move: null,
    trainer: 'player'
}

const player = {
    name: "RED",
    pokemon: playerPokemon,
    score: 0
}

const opponentPokemon = {
    type: null,
    name: null,
    move: null,
    trainer: 'opponent'
}

const opponent = {
    name: "BLUE",
    pokemon: opponentPokemon,
    score: 0
}


// ======================================================================
// Variable instantiations
// ======================================================================

// ********************
// Rock Paper Scissors
// ********************
let currentRound = 1;
const numRoundsToWin = 3;


// ********************
// Buttons
// ********************

const btnStart = document.querySelector("#startbutton");

const btnTest = document.querySelector("#TESTBUTTON");

// ********************
// Sources 
// ********************

// moves sources
const srcLeafBladePlayer = "images/moves/Player-Leaf-Blade.png";
const srcLeafBladeOpponent = "images/moves/Opponent-Leaf-Blade.png";

const srcFireBlastPlayer = "images/moves/Player-Fire-Blast.png";
const srcFireBlastOpponent = "images/moves/Opponent-Fire-Blast.png";

const srcHydroCannonPlayer = "images/moves/Player-Hydro-Cannon.png";
const srcHydroCannonOpponent = "images/moves/Opponent-Hydro-Cannon.png";

// pokemon sources
const srcVenusaurPlayer = "images/pokemon/venusaur_player.png";
const srcVenusaurOpponent = "images/pokemon/venusaur_opponent.png";
const srcCharizardPlayer = "images/pokemon/charizard_player.png";
const srcCharizardOpponent = "images/pokemon/charizard_opponent.png";
const srcBlastoisePlayer = "images/pokemon/blastoise_player.png";
const srcBlastoiseOpponent = "images/pokemon/blastoise_opponent.png";

const srcPlayerDataboxVenusaur = "images/battle-ui/Player-Databox-Venusaur.png";
const srcPlayerDataboxCharizard = "images/battle-ui/Player-Databox-Charizard.png";
const srcPlayerDataboxBlastoise = "images/battle-ui/Player-Databox-Blastoise.png";

const srcOpponentDataboxVenusaur = "images/battle-ui/Opponent-Databox-Venusaur.png";
const srcOpponentDataboxCharizard = "images/battle-ui/Opponent-Databox-Charizard.png";
const srcOpponentDataboxBlastoise = "images/battle-ui/Opponent-Databox-Blastoise.png";

// ********************
// Images 
// ********************

// battle images
const playerHpImage = document.querySelector(".player-hp-image");
const playerDataImage = document.querySelector(".player-data-image");
const opponentHpImage = document.querySelector(".opponent-hp-image");
const opponentDataImage = document.querySelector(".opponent-data-image");
const attackImage = document.querySelector(".attack-image");

// choose pokemon images
const grassIconImage = document.querySelector(".grass-icon-image");
const grassPokeballImage = document.querySelector(".grass-pokeball-image");
const grassEffectImage = document.querySelector(".grass-effect-image");
const fireIconImage = document.querySelector(".fire-icon-image");
const firePokeballImage = document.querySelector(".fire-pokeball-image");
const fireEffectImage = document.querySelector(".fire-effect-image");
const waterIconImage = document.querySelector(".water-icon-image");
const waterPokeballImage = document.querySelector(".water-pokeball-image");
const waterEffectImage = document.querySelector(".water-effect-image");

// pokemon images
const playerPokemonImage = document.querySelector(".player-pokemon-image");
const opponentPokemonImage = document.querySelector(".opponent-pokemon-image");


// ********************
// Divs
// ********************

// start container
const divStartContainer = document.querySelector(".start-container");
// intro container
const divIntroContainer = document.querySelector(".intro-container");
// overall game container
const divSwitchContainer = document.querySelector(".switch-container");
// score container
const divScoreContainer = document.querySelector(".score-container");
const divPlayerScoreContainer = document.querySelector(".player-score-container");
const divOpponentScoreContainer = document.querySelector(".opponent-score-container");
// choose container
const divChooseContainer = document.querySelector(".choose-container");
// battle container
const divBattleContainer = document.querySelector(".battle-container");
// text container
const divTextContainer = document.querySelector(".text-container");


// ======================================================================
// Other variables
// ======================================================================
const attackDuration = 2400;
const hpDepletionDuration = 1600;
const roundDuration = 5000;


// ======================================================================
// Check for "START" and transition to animation
// ======================================================================

// temp: get rid of START animation for faster testing
divStartContainer.style.display = "none";
divIntroContainer.style.display = "none";
divSwitchContainer.style.display = "flex";

btnStart.addEventListener('click', transitionIntro);

function transitionIntro() {
    divStartContainer.style.display = "none";    // hide Start button
    divIntroContainer.style.display = "none";   // show Intro div

    divSwitchContainer.style.display = "flex";    // show main game container
}

// ======================================================================
// Reset Round
// ======================================================================
function resetRound() {
    divTextContainer.innerHTML = "Choose your Pokémon!";


}


// ======================================================================
// Choose Pokemon
// ======================================================================

function setAttackImage(trainer, type) {
    if (trainer === player) {
        switch (type) {
            case 'grass':
                attackImage.src = srcLeafBladePlayer;
                break;
            case 'fire':
                attackImage.src = srcFireBlastPlayer;
                break;
            case 'water':
                attackImage.src = srcHydroCannonPlayer;
                break;
            default:
                console.error("Invalid choice.");
        }
    }
    else if (trainer === opponent) {
        switch (type) {
            case 'grass':
                attackImage.src = srcLeafBladeOpponent;
                break;
            case 'fire':
                attackImage.src = srcFireBlastOpponent;
                break;
            case 'water':
                attackImage.src = srcHydroCannonOpponent;
                break;
            default:
                console.error("Invalid choice.");
        }
    }
}

function setPlayerParameters(type) {
    switch (type) {
        case 'grass':
            player.pokemon.name = 'VENUSAUR';
            player.pokemon.type = 'grass';
            player.pokemon.move = 'LEAF BLADE';
            playerPokemonImage.src = srcVenusaurPlayer;
            playerDataImage.src = srcPlayerDataboxVenusaur;
            break;
        case 'fire':
            player.pokemon.name = 'CHARIZARD';
            player.pokemon.type = 'fire';
            player.pokemon.move = 'FIRE BLAST';
            playerPokemonImage.src = srcCharizardPlayer;
            playerDataImage.src = srcPlayerDataboxCharizard;
            break;
        case 'water':
            player.pokemon.name = 'BLASTOISE';
            player.pokemon.type = 'water';
            player.pokemon.move = 'HYDRO CANNON';
            playerPokemonImage.src = srcBlastoisePlayer;
            playerDataImage.src = srcPlayerDataboxBlastoise;
            break;
        default:
            console.error("Invalid choice.")
    }
}

function setOpponentParameters(type) {
    switch (type) {
        case 'grass':
            opponent.pokemon.name = 'VENUSAUR';
            opponent.pokemon.type = 'grass';
            opponent.pokemon.move = 'LEAF BLADE';
            opponentPokemonImage.src = srcVenusaurOpponent;
            opponentDataImage.src = srcOpponentDataboxVenusaur;
            break;
        case 'fire':
            opponent.pokemon.name = 'CHARIZARD';
            opponent.pokemon.type = 'fire';
            opponent.pokemon.move = 'FIRE BLAST';
            opponentPokemonImage.src = srcCharizardOpponent;
            opponentDataImage.src = srcOpponentDataboxCharizard;
            break;
        case 'water':
            opponent.pokemon.name = 'BLASTOISE';
            opponent.pokemon.type = 'water';
            opponent.pokemon.move = 'HYDRO CANNON';
            opponentPokemonImage.src = srcBlastoiseOpponent;
            opponentDataImage.src = srcOpponentDataboxBlastoise;
            break;
        default:
            console.error("Invalid choice.")
    }
}

function chooseOpponentPokemon() {
    let r = Math.floor(Math.random() * 3);
    switch (r) {
        case 0:
            setOpponentParameters('grass');
            break;
        case 1:
            setOpponentParameters('fire');
            break;
        case 2:
            setOpponentParameters('water');
            break;
        default:
            console.error("Invalid opponent pokemon choice.")
    }
}

// grass pokeball
grassPokeballImage.addEventListener('mouseover', () => {
    grassIconImage.src = "images/choose-ui/venusaur-color.png";
    grassEffectImage.style = "display: block";
});
grassPokeballImage.addEventListener('mouseout', () => {
    grassIconImage.src = "images/choose-ui/venusaur-sepia.png";
    grassEffectImage.style = "display: none";
});
grassPokeballImage.addEventListener('click', () => {
    setPlayerParameters('grass');
    determineRoundWinner();
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
firePokeballImage.addEventListener('click', () => {
    setPlayerParameters('fire');
    determineRoundWinner();
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
waterPokeballImage.addEventListener('click', () => {
    setPlayerParameters('water');
    determineRoundWinner();
});


function determineRoundWinner() {
    chooseOpponentPokemon();

    divChooseContainer.style.display = "none";
    divBattleContainer.style.display = "flex";

    if (player.pokemon.type === opponent.pokemon.type) {
        tieRound();
    }

    // player wins
    else if ((player.pokemon.type === "grass" && opponent.pokemon.type === "water") || (player.pokemon.type === "fire" && opponent.pokemon.type === "grass") || (player.pokemon.type === "water" && opponent.pokemon.type === "fire")) {
        player.score++;
        
        setAttackImage(player, player.pokemon.type)
        startBattleAnimation(player);
    }

    // opponent wins
    else if ((player.pokemon.type === "grass" && opponent.pokemon.type === "fire") || (player.pokemon.type === "fire" && opponent.pokemon.type === "water") || (player.pokemon.type === "water" && opponent.pokemon.type === "grass")) {
        opponent.score++;

        setAttackImage(opponent, opponent.pokemon.type);
        startBattleAnimation(opponent);
    }



}

function tieRound() {
    divTextContainer.innerHTML = "It's a tie!";
    setTimeout(() => {
        divBattleContainer.style.display = "none";
        divChooseContainer.style.display = "flex";
    }, roundDuration);
}

function playerWinsRound(player, opponent) {
}

function opponentWinsRound(player, opponent) {
}



// ======================================================================
// Pokemon Battle Animation
// ======================================================================
function startBattleAnimation(roundWinner) {

    // change text to display move used
    setTimeout(() => { 
        divTextContainer.innerHTML = `${roundWinner.name}'s ${roundWinner.pokemon.name} used ${roundWinner.pokemon.move}.<br>It was super effective!`; 

        // divScoreContainer.innerHTML = `<span style="color: red">RED: </span>&nbsp${player.score}&nbsp&nbsp&nbsp&nbsp&nbsp<span style="color: rgb(0, 96, 255)">BLUE: </span>&nbsp${opponent.score}`;

        divPlayerScoreContainer.innerHTML = `<span style="color: red">RED:</span>&nbsp${player.score}`;
        divOpponentScoreContainer.innerHTML = `<span style="color: rgb(0, 96, 255)">BLUE:</span>&nbsp${opponent.score}`;

    }, 1000);

    // show pokemon move animation
    setTimeout(() => {
        attackImage.style.display = "block";
        moveAnimation(roundWinner.pokemon.name);
    }, 1000);


    if (roundWinner === opponent) {
        setTimeout(() => {
            // Animation to deplete HP to 0
            depleteHpAnimation(playerHpImage);
            // Changes databox from Full HP to Empty HP
            changeDataboxHp(playerDataImage);
        }, attackDuration);

    }
    else if (roundWinner === player) {
        setTimeout(() => { depleteHpAnimation(opponentHpImage); }, attackDuration);
    }

    setTimeout(() => {
        resetRound();
        divBattleContainer.style.display = "none";
        divChooseContainer.style.display = "flex";

    }, roundDuration);

}

function moveAnimation(pokemon) {

    switch (pokemon) {
        case 'VENUSAUR':
            attackImage.style.animation = `moveSpriteSheet_Y ${attackDuration}ms steps(31)`;
            break;
        case 'CHARIZARD':
            attackImage.style.animation = `moveSpriteSheet_Y ${attackDuration}ms steps(26)`;
            break;
        case 'BLASTOISE':
            attackImage.style.animation = `moveSpriteSheet_Y ${attackDuration}ms steps(36)`;
            break;
    }

    setTimeout(() => { attackImage.style.display = "none"; }, attackDuration);
    setTimeout(() => { attackImage.style.animationPlayState = 'paused'; }, attackDuration);
}


function depleteHpAnimation(trainerHpImage) {
    trainerHpImage.style.animation = `deplete-hp ${hpDepletionDuration}ms`;
    trainerHpImage.style.width = "0%";

    setTimeout(() => { trainerHpImage.style.animationPlayState = 'paused'; }, hpDepletionDuration);

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