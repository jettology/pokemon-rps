
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

// ********************
// Sources 
// ********************

// pokemon sources
const srcVenusaurPlayer = "images/pokemon/venusaur_player.png";
const srcVenusaurOpponent = "images/pokemon/venusaur_opponent.png";
const srcCharizardPlayer = "images/pokemon/charizard_player.png";
const srcCharizardOpponent = "images/pokemon/charizard_opponent.png";
const srcBlastoisePlayer = "images/pokemon/blastoise_player.png";
const srcBlastoiseOpponent = "images/pokemon/blastoise_opponent.png";

// moves sources
const srcLeafBladePlayer = "images/moves/Player-Leaf-Blade.png";
const srcLeafBladeOpponent = "images/moves/Opponent-Leaf-Blade.png";

const srcFireBlastPlayer = "images/moves/Player-Fire-Blast.png";
const srcFireBlastOpponent = "images/moves/Opponent-Fire-Blast.png";

const srcHydroCannonPlayer = "images/moves/Player-Hydro-Cannon.png";
const srcHydroCannonOpponent = "images/moves/Opponent-Hydro-Cannon.png";

// databox sources
const srcPlayerDataboxVenusaur = "images/battle-ui/Player-Databox-Venusaur.png";
const srcPlayerDataboxCharizard = "images/battle-ui/Player-Databox-Charizard.png";
const srcPlayerDataboxBlastoise = "images/battle-ui/Player-Databox-Blastoise.png";

const srcOpponentDataboxVenusaur = "images/battle-ui/Opponent-Databox-Venusaur.png";
const srcOpponentDataboxCharizard = "images/battle-ui/Opponent-Databox-Charizard.png";
const srcOpponentDataboxBlastoise = "images/battle-ui/Opponent-Databox-Blastoise.png";

// trainer sources
const srcRedWinner = "images/winner/red-victory.png";
const srcBlueWinner = "images/winner/blue-victory.png";

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

// winner image
const resultsImage = document.querySelector(".results-image");

// ********************
// Divs
// ********************

// switch container
const divSwitchContainer = document.querySelector(".switch-container");
// intro container
const divIntroContainer = document.querySelector(".intro-container");
// overall game container
const divGameContainer = document.querySelector(".game-container");
// score container
const divScoreContainer = document.querySelector(".score-container");
const divPlayerScoreContainer = document.querySelector(".player-score-container");
const divOpponentScoreContainer = document.querySelector(".opponent-score-container");
// choose container
const divChooseContainer = document.querySelector(".choose-container");
// battle container
const divBattleContainer = document.querySelector(".battle-container");
// faceoff container
const divFaceoffContainer = document.querySelector(".faceoff-container");
// text container
const divTextContainer = document.querySelector(".text-container");
// results container
const divResultsContainer = document.querySelector(".results-container");

// ======================================================================
// Sounds + Music
// ======================================================================
const audioBattleBGM = document.querySelector(".battle-bgm");
const audioTieBGM = document.querySelector(".tie-bgm");
const audioNintendoFX = document.querySelector(".nintendo-fx");
const audioSelectFX = document.querySelector(".select-fx");
const audioAttackFX = document.querySelector(".attack-fx");
const audioHitFX = document.querySelector(".hit-fx");
const audioDeadFX = document.querySelector(".dead-fx");
const audioChooseBGM = document.querySelector(".choose-bgm");
const audioStartFX = document.querySelector(".start-fx");
const audioEndFX = document.querySelector(".end-fx");
const audioGameOverFX = document.querySelector(".gameover-fx");
const audioVictoryFX = document.querySelector(".victory-fx");
const audioExplainBGM = document.querySelector(".explain-bgm");
const audioStartBGM = document.querySelector(".start-bgm");

// ======================================================================
// Text Container Messages
// ======================================================================

// messages used during the introduction
const intro_1 = "Rival BLUE challenges you to a battle!";
const intro_2_A = "The rules abide by classic Ro-Sham-Bo";
const intro_2_B = "standards."
const intro_3_A = "The winner shall be the first to score";
const intro_3_B = "3 points."
const intro_4_A = "Pokémon will be revived to full health";
const intro_4_B = "at the end of each round.";
const intro_5 = "3 ... ";
const intro_6 = "2 ... ";
const intro_7 = "1 ... ";
const intro_8 = "GO!";

const battle_1 = "It was super effective!";

const red_winner_1 = "Congratulations!";
const red_winner_2 = "You are the new champion!";

const blue_winner_1 = "Rival BLUE is the champion.";
const blue_winner_2 = "Better luck next time."

// ======================================================================
// Duration
// ======================================================================
const attackDuration = 2400;
const hpDepletionDuration = 2400;
const roundDuration = 9000;
const roundTieDuration = 4500;

// ======================================================================
// Other
// ======================================================================

// checks if in intro state; used for preventing ENTER press
let isIntroState = false;   

// array for the timeouts used in the intro text sequence
let introTimeouts = [];

// Returns a Promise that resolves after "ms" Milliseconds
const timer = ms => new Promise(res => setTimeout(res, ms))

// ======================================================================
// Event Listeners
// ======================================================================

// check for START (start the match)
btnStart.addEventListener('click', transitionIntro);

// check for ENTER (skip explanation)
// Skip explanation
window.addEventListener("keydown", enterKeyDown);

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
    playSelectSound();
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
    playSelectSound();
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
    playSelectSound();
    setPlayerParameters('water');
    determineRoundWinner();
});


// **********************************************************************
// **********************************************************************
// **********************************************************************
// **********************************************************************
// **********************************************************************
// **********************************************************************
// **********************************************************************


// ======================================================================
// Transitions
// ======================================================================

// from START screen to INTRO + EXPLANATION
function transitionIntro() {
    // removed listener to only allow ONE click
    btnStart.removeEventListener('click', transitionIntro);

    playNintendoSound();
    stopStartMusic();

    setTimeout( () => {
        playExplainMusic();
        divIntroContainer.style.display = "none";   // hide intro screen
        divFaceoffContainer.style.display = "flex"; // show faceoff screen
        startIntroTextMessages();
        divGameContainer.style.display = "flex";    // show main game container
    
        // display the scores
        divPlayerScoreContainer.innerHTML = `<span style="color: lightcoral">RED:</span>&nbsp&nbsp${player.score}`;
        divOpponentScoreContainer.innerHTML = `<span style="color: lightblue">BLUE:</span>&nbsp&nbsp${opponent.score}`;
    }, 1500);
}

// from INTRO + EXPLANATION to BATTLE
function transitionBattle() {

    resetRound();

    // turn off faceoff container
    divFaceoffContainer.style.display = "none";
    // turn on choice + score
    divChooseContainer.style.display = "flex";
    divScoreContainer.style.display = "flex";
}

// from RESULTS to START
function transitionStart() {
    // reset parameters for new match
    setTimeout(() => {
        // reset START btn listener
        btnStart.addEventListener('click', transitionIntro);
        
        displayNewMessage("");
        player.score = 0;
        opponent.score = 0;
        divResultsContainer.style.display = "none";
        divGameContainer.style.display = "none";
        divIntroContainer.style.display = "flex";

        playStartMusic();
    }, 9000);
}

// ======================================================================
// Introduction Text Sequence
// ======================================================================

function startIntroTextMessages() {

    isIntroState = true;    // user can skip with ENTER at this point

    // intro explanation
    introTimeouts.push(setTimeout(() => { displayNewMessage(intro_1); }, 100));
    introTimeouts.push(setTimeout(() => { displayTwoLineMessage(intro_2_A, intro_2_B); }, 2600));
    introTimeouts.push(setTimeout(() => { displayTwoLineMessage(intro_3_A, intro_3_B); }, 6000));
    introTimeouts.push(setTimeout(() => { displayTwoLineMessage(intro_4_A, intro_4_B); }, 9000));
    introTimeouts.push(setTimeout(() => { displayNewMessage(intro_5); }, 14000));
    introTimeouts.push(setTimeout(() => { playSelectSound(); }, 14000));
    introTimeouts.push(setTimeout(() => { displayAddonMessage(intro_6); }, 15000));
    introTimeouts.push(setTimeout(() => { playSelectSound(); }, 15000));
    introTimeouts.push(setTimeout(() => { displayAddonMessage(intro_7); }, 16000));
    introTimeouts.push(setTimeout(() => { playSelectSound(); }, 16000));
    introTimeouts.push(setTimeout(() => { displayAddonMessage(intro_8); }, 17000));
    introTimeouts.push(setTimeout(() => { playStartSound(); }, 17000));

    // transition to battle scene
    introTimeouts.push(setTimeout(stopExplainMusic, 18000));
    introTimeouts.push(setTimeout(transitionBattle, 18000));

    // user can no longer skip at this point
    setTimeout( () => { isIntroState = false; }, 18000);
}

// ======================================================================
// Text Container Functions
// ======================================================================

// clear out text container and write new text
async function displayNewMessage(msg) {

    divTextContainer.innerHTML = "";

    // prevent clicking on pokeballs
    grassPokeballImage.style.pointerEvents = "none";
    firePokeballImage.style.pointerEvents = "none";
    waterPokeballImage.style.pointerEvents = "none";

    let i = 0;

    // type-writer effect
    while (i < msg.length) {
        divTextContainer.innerHTML += msg.charAt(i);
        i++;
        await timer(25);
    }

    // allow clicking on pokeballs
    grassPokeballImage.style.pointerEvents = "auto";
    firePokeballImage.style.pointerEvents = "auto";
    waterPokeballImage.style.pointerEvents = "auto";
}

// add text to whatever is already in the text container
async function displayAddonMessage(msg) {

    let i = 0;

    while (i < msg.length) {
        divTextContainer.innerHTML += msg.charAt(i);
        i++;
        await timer(25);
    }
}

// add two rows of text
async function displayTwoLineMessage(msg1, msg2) {

    divTextContainer.innerHTML = "";

    let i = 0;

    while (i < msg1.length) {
        divTextContainer.innerHTML += msg1.charAt(i);
        i++;
        await timer(25);
    }

    divTextContainer.innerHTML += "<br>";

    i = 0;

    while (i < msg2.length) {
        divTextContainer.innerHTML += msg2.charAt(i);
        i++;
        await timer(25);
    }
}

// ======================================================================
// Reset Round
// ======================================================================
function resetRound() {
    displayNewMessage("");
    displayNewMessage("Choose your Pokémon!");

    setHpFull(playerHpImage);
    setHpFull(opponentHpImage);

    playChooseMusic();
}

// ======================================================================
// Choose Pokemon
// ======================================================================

// set which trainer's pokemon attacks w/ the appropriate move
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

// set player's pokemon parameters
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

// set opponent's pokemon parameters
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

// randomly choose opponent's pokemon
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

// ======================================================================
// Round + Match Outcomes
// ======================================================================

function determineRoundWinner() {
    chooseOpponentPokemon();

    divChooseContainer.style.display = "none";
    divBattleContainer.style.display = "flex";

    if (player.pokemon.type === opponent.pokemon.type) {
        tieRound();
    }

    // player wins
    else if ((player.pokemon.type === "grass" && opponent.pokemon.type === "water") || (player.pokemon.type === "fire" && opponent.pokemon.type === "grass") || (player.pokemon.type === "water" && opponent.pokemon.type === "fire")) {
        setAttackImage(player, player.pokemon.type)
        startBattleAnimation(player);
    }

    // opponent wins
    else if ((player.pokemon.type === "grass" && opponent.pokemon.type === "fire") || (player.pokemon.type === "fire" && opponent.pokemon.type === "water") || (player.pokemon.type === "water" && opponent.pokemon.type === "grass")) {
        setAttackImage(opponent, opponent.pokemon.type);
        startBattleAnimation(opponent);
    }
}

function tieRound() {
    displayNewMessage("It's a tie!");

    playTieMusic();

    setTimeout(() => {
        resetRound();
        divBattleContainer.style.display = "none";
        divChooseContainer.style.display = "flex";
    }, roundTieDuration);
}

function awardPoint(trainer) {
    trainer.score++;
    divPlayerScoreContainer.innerHTML = `<span style="color: lightcoral">RED:</span>&nbsp&nbsp${player.score}`;
    divOpponentScoreContainer.innerHTML = `<span style="color: lightblue">BLUE:</span>&nbsp&nbsp${opponent.score}`;
}

function playerWinsMatch() {
    divBattleContainer.style.display = "none";
    playVictorySound();
    divResultsContainer.style.display = "flex";
    resultsImage.src = srcRedWinner;
    displayTwoLineMessage(red_winner_1, red_winner_2);
    transitionStart();
}

function opponentWinsMatch() {
    divBattleContainer.style.display = "none";
    playGameOverSound();
    divResultsContainer.style.display = "flex";
    resultsImage.src = srcBlueWinner;
    displayTwoLineMessage(blue_winner_1, blue_winner_2);
    transitionStart();
}

// ======================================================================
// Pokemon Battle Animation
// ======================================================================
function startBattleAnimation(roundWinner) {

    displayNewMessage("");

    // start battle music
    playBattleMusic();

    // change text to display move used
    let battleMessage = `${roundWinner.name}'s ${roundWinner.pokemon.name} used ${roundWinner.pokemon.move}!`;

    // battle sound effects
    setTimeout(playAttackSound, 2000);
    setTimeout(playHitSound, 3000);
    setTimeout(playDeadSound, 6000);

    // battle text
    setTimeout(() => { displayNewMessage(battleMessage); }, 1000);
    setTimeout(() => { displayNewMessage(battle_1); }, 6000);

    // show pokemon move animation
    setTimeout(() => {
        attackImage.style.display = "block";
        moveAnimation(roundWinner.pokemon.name);
    }, 1500);

    // deplete pokemon health
    if (roundWinner === opponent) {
        setTimeout(() => {
            // Animation to deplete HP to 0
            depleteHpAnimation(playerHpImage);
            // Changes databox from Full HP to Empty HP
            changeDataboxHp(playerDataImage);
        }, attackDuration + 900);
    }
    else if (roundWinner === player) {
        setTimeout(() => { depleteHpAnimation(opponentHpImage); }, attackDuration + 900);
    }

    // determine winner and award points; transition to reset round
    setTimeout(() => {
        awardPoint(roundWinner);

        // check for MATCH winner
        if (player.score === numRoundsToWin) {
            playEndSound();
            setTimeout(() => {
                playerWinsMatch();
            }, 1000);
        }
        else if (opponent.score === numRoundsToWin) {
            playEndSound();
            setTimeout(() => {
                opponentWinsMatch();
            }, 1000);
        }
        // reset round
        else {
            divBattleContainer.style.display = "none";
            resetRound();
            divChooseContainer.style.display = "flex";
        }
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

    trainerHpImage.style.animation = `deplete-hp ${hpDepletionDuration}ms ease-out`;

    setTimeout(() => { setHpCaution(trainerHpImage); }, hpDepletionDuration * 0.3);
    setTimeout(() => { setHpCritical(trainerHpImage); }, hpDepletionDuration * 0.6);
    setTimeout(() => { setHpEmpty(trainerHpImage); }, hpDepletionDuration);

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

// Functions to set the hp-bar
function setHpFull(trainerHpImage) {
    trainerHpImage.src = "images/battle-ui/hp-full.png";
}

function setHpCaution(trainerHpImage) {
    trainerHpImage.src = "images/battle-ui/hp-caution.png";
}

function setHpCritical(trainerHpImage) {
    trainerHpImage.src = "images/battle-ui/hp-critical.png";
}

function setHpEmpty(trainerHpImage) {
    trainerHpImage.src = "images/battle-ui/hp-empty.png";
}

// ======================================================================
// Skip Explanation
// ======================================================================
function enterKeyDown(event) {
    if (event.keyCode == 13 && isIntroState) {

        isIntroState = false;

        for(let i=0; i<introTimeouts.length; i++) {
            clearTimeout(introTimeouts[i]);
        }

        introTimeouts = [];

        displayNewMessage("");

        setTimeout( () => {
            displayNewMessage("");

            stopExplainMusic();
            transitionBattle();
    
            divGameContainer.style.display = "flex";    // show main game container
            divPlayerScoreContainer.innerHTML = `<span style="color: lightcoral">RED:</span>&nbsp&nbsp${player.score}`;
            divOpponentScoreContainer.innerHTML = `<span style="color: lightblue">BLUE:</span>&nbsp&nbsp${opponent.score}`;
        }, 1000);
    }
 }

// ======================================================================
// Sound + Music
// ======================================================================

// =============
// SOUND
// =============
function playNintendoSound() {
    audioNintendoFX.play();
}

function playSelectSound() {
    audioSelectFX.play();
}

function playStartSound() {
    audioStartFX.play();
}

function playAttackSound() {
    audioAttackFX.play();
}

function playHitSound() {
    audioHitFX.play();
}

function playDeadSound() {
    audioDeadFX.play();
}

function playEndSound() {
    audioEndFX.play();
}

function playGameOverSound() {
    audioGameOverFX.play();
}

function playVictorySound() {
    audioVictoryFX.play();
}

// =============
// MUSIC
// =============
function playStartMusic() {
    audioStartBGM.play();
}

function stopStartMusic() {
    audioStartBGM.pause();
    audioStartBGM.currentTime = 0;
}

function playExplainMusic() {
    audioExplainBGM.play();
}

function stopExplainMusic() {
    audioExplainBGM.pause();
    audioExplainBGM.currentTime = 0;
}

function playChooseMusic() {
    audioChooseBGM.play();
}

function stopChooseMusic() {
    audioChooseBGM.pause();
    audioChooseBGM.currentTime = 0;
}

function playBattleMusic() {
    stopChooseMusic();

    audioBattleBGM.play();

    setTimeout(() => {
        audioBattleBGM.pause();
        audioBattleBGM.currentTime = 0;
    }, roundDuration);
}

function playTieMusic() {
    stopChooseMusic();

    audioTieBGM.play();

    setTimeout(() => {
        audioTieBGM.pause();
        audioTieBGM.currentTime = 0;
    }, roundTieDuration);
}