// function play(){
//     // hide the home screen to hide the screen and the class hidden to the home section
//     const homeSection=document.getElementById('home-screen')
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden')
//     // show the playground
//     const playGroundSection=document.getElementById('play-ground')
//     // console.log(playGroundSection);
//     playGroundSection.classList.remove('hidden')
// }
function handlekeyboardUpEvent(event){
    const playerPressed=event.key;
    console.log('player pressed',playerPressed);
    // stop the game if pressed 'ESC'
    if(playerPressed==='Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase()
    console.log(expectedAlphabet,playerPressed);
    // check matched or not
    if(playerPressed===expectedAlphabet){
        console.log('you get a point');
        console.log('you have pressed correctly',expectedAlphabet);
        // update score:
        // get the current score
        const currentScore=getTextElementValueById('current-score');
        const updatedScore=currentScore +1;
        setTextElementValueById('current-score',updatedScore)

        // const currentScoreElement=document.getElementById('current-score');
        // const currentScoreText=currentScoreElement.innerText;
        // const currentScore=parseInt(currentScoreText);
        // // increase the score by 1
        // const newScore=currentScore+1;
        // // show the update score
        // currentScoreElement.innerText=newScore;
        // start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        console.log('you missed.you lost a life');
        const currentLife=getTextElementValueById('current-life');
        const updatedLife=currentLife -1;
        setTextElementValueById('current-life',updatedLife)

        if(updatedLife===0){
            gameOver();
        }
        // step 1:get the current life number
        // const currentLifeElement=document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife=parseInt(currentLifeText);
        // // step 2:reduce the life count
        // const newLife=currentLife-1;
        // // step3:display the updated life count
        // currentLifeElement.innerText=newLife;
    }
}
document.addEventListener('keyup',handlekeyboardUpEvent)
function continueGame(){
// generate a random alphabet
    const alphabet=getARandomAlphabet();
    console.log('your random alphabet',alphabet);
// set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;
    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    // hide everything show only the playground
    hiddenElementId('home-screen');
    hiddenElementId('final-score');
    showElementByID('play-ground');
    // reset score and life
    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)
    continueGame()
}

function gameOver(){
    hiddenElementId('play-ground')
    showElementByID('final-score');
    // update final score
    // get the final score
    const lastScore=getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore)
    // clear the last selected alphabet highlet
    const currentAlphabet=getElementTextById('current-alphabet')
    removeBackgroundColorById(currentAlphabet)
}