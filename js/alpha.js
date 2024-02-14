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
    hiddenElementId('home-screen');
    showElementByID('play-ground');
    continueGame()
}
