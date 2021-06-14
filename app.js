// define butterfly images in game
const butterflyImageOne = document.getElementById("butterfly_image_one");
const butterflyImageTwo = document.getElementById("butterfly_image_two");
const butterflyImageThree = document.getElementById("butterfly_image_three");
const butterflyImageFour = document.getElementById("butterfly_image_four");

// RANDOM BUTTERFLY IMAGE STEP ONE: create random numbers
let randomNumOne = Math.floor(Math.random()*4)+1;
let randomNumTwo = Math.floor(Math.random()*4)+1;
let randomNumThree = Math.floor(Math.random()*4)+1;
let randomNumFour = Math.floor(Math.random()*4)+1;

// RANDOM BUTTERFLY IMAGE STEP TWO: Change source of images to change picture (ref https://thisinterestsme.com/change-src-image-javascript/)
function randomButterflyImageOne() {
    if (randomNumOne === 1) {
        butterflyImageOne.src ='assets/images/brown_argus.jpg';
    } else if (randomNumOne === 2) {
        butterflyImageOne.src ='assets/images/comma.jpg';
    } else if (randomNumOne === 3) {
        butterflyImageOne.src ='assets/images/dark_green_fritillary.jpg';
    } else if (randomNumOne === 4) {
        butterflyImageOne.src ='assets/images/marbled_white.jpg';
    } else if (randomNumOne === 4) {
        butterflyImageOne.src ='assets/images/meadow.jpg';
    };
};

function randomButterflyImageTwo() {
    if (randomNumTwo === 1) {
        butterflyImageTwo.src ='assets/images/brown_argus.jpg';
    } else if (randomNumTwo === 2) {
        butterflyImageTwo.src ='assets/images/comma.jpg';
    } else if (randomNumTwo === 3) {
        butterflyImageTwo.src ='assets/images/dark_green_fritillary.jpg';
    } else if (randomNumTwo === 4) {
        butterflyImageTwo.src ='assets/images/marbled_white.jpg';
    } else if (randomNumTwo === 4) {
        butterflyImageTwo.src ='assets/images/meadow.jpg';
    };
};

function randomButterflyImageThree() {
    if (randomNumThree === 1) {
        butterflyImageThree.src ='assets/images/brown_argus.jpg';
    } else if (randomNumThree === 2) {
        butterflyImageThree.src ='assets/images/comma.jpg';
    } else if (randomNumThree === 3) {
        butterflyImageThree.src ='assets/images/dark_green_fritillary.jpg';
    } else if (randomNumThree === 4) {
        butterflyImageThree.src ='assets/images/marbled_white.jpg';
    } else if (randomNumThree === 4) {
        butterflyImageThree.src ='assets/images/meadow.jpg';
    };
};

function randomButterflyImageFour() {
    if (randomNumFour === 1) {
        butterflyImageFour.src ='assets/images/brown_argus.jpg';
    } else if (randomNumFour === 2) {
        butterflyImageFour.src ='assets/images/comma.jpg';
    } else if (randomNumFour === 3) {
        butterflyImageFour.src ='assets/images/dark_green_fritillary.jpg';
    } else if (randomNumFour === 4) {
        butterflyImageFour.src ='assets/images/marbled_white.jpg';
    } else if (randomNumFour === 4) {
        butterflyImageFour.src ='assets/images/meadow.jpg';
    };
};

// run function to apply randomly generated images
randomButterflyImageOne();
randomButterflyImageTwo();
randomButterflyImageThree();
randomButterflyImageFour();

// Variables used in game
let level = 5;
let win = false;
let compSequence = [];

// Butterfly images to flash for half a second
function butterflyOne() {
    butterflyImageOne.style.backgroundColor = '#00FF00';
    setTimeout(function () {
        butterflyImageOne.style.backgroundColor = 'rgba(0,0,0,.0)';
    }, 500);
};

function butterflyTwo() {
    butterflyImageTwo.style.backgroundColor = '#800000';;
    setTimeout(function () {
        butterflyImageTwo.style.backgroundColor = 'rgba(0,0,0,.0)';
    }, 500);
};

function butterflyThree() {
    butterflyImageThree.style.backgroundColor = '#FFFF00';
    setTimeout(function () {
        butterflyImageThree.style.backgroundColor = 'rgba(0,0,0,.0)';
    }, 500);
};

function butterflyFour() {
    butterflyImageFour.style.backgroundColor = '#0000FF';
    setTimeout(function () {
        butterflyImageFour.style.backgroundColor = 'rgba(0,0,0,.0)';
    }, 500);
};

// click functions to confirm functionality, and change background color of butterfly images
butterflyImageOne.addEventListener('click', butterflyOne);
butterflyImageTwo.addEventListener('click', butterflyTwo);
butterflyImageThree.addEventListener('click', butterflyThree);
butterflyImageFour.addEventListener('click', butterflyFour);

function clearColor() {
    butterflyImageOne.style.backgroundColor = 'rgba(0,0,0,.0)';
    butterflyImageTwo.style.backgroundColor = 'rgba(0,0,0,.0)';
    butterflyImageThree.style.backgroundColor = 'rgba(0,0,0,.0)';
    butterflyImageFour.style.backgroundColor = 'rgba(0,0,0,.0)';
};

// Click start button to play game
document.getElementById('play-game').addEventListener('click', () => {startGame();});

function startGame() {
    $('#level').text('Level'+' '+level);
    clearColor();
}

// a randomly generated series of numbers
function compTurn() {
    for (i=0; i<level; i++) {
        compSequence.push(Math.floor(Math.random()*4)+1);
    }
};

compTurn();
console.log(compSequence);
