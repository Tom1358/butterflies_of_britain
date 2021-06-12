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

// click functions to confirm functionality, and change background color of butterfly images
butterflyImageOne.addEventListener('click', myFunction);
butterflyImageTwo.addEventListener('click', myFunctionTwo);
butterflyImageThree.addEventListener('click', myFunctionThree);
butterflyImageFour.addEventListener('click', myFunctionFour);

function myFunction() {
    console.log("Holy sh*t!");
    butterflyImageOne.style.backgroundColor = "#00FF00";
}

function myFunctionTwo() {
    console.log("And again!");
    butterflyImageTwo.style.backgroundColor = "#800000";
}

function myFunctionThree() {
    console.log("It works!");
    butterflyImageThree.style.backgroundColor = "#FFFF00";
}

function myFunctionFour() {
    console.log("I'm programming!");
    butterflyImageFour.style.backgroundColor = "#0000FF";
}

// Click start button to play game - n.b. for now just console.log to confirm working
document.getElementById('play-game').addEventListener('click', (event) => {startGame();}); // or could be '...'click, function() {startGame()...}

// Gets random butterfly image
let randomButterfly = [
    butterflyImageOne,
    butterflyImageTwo,
    butterflyImageThree,
    butterflyImageFour
];

let flash = function() {
    butterflyImageOne.style.backgroundColor = "#00FF00";
    butterflyImageTwo.style.backgroundColor = "#800000";
    butterflyImageThree.style.backgroundColor = "#FFFF00";
    butterflyImageFour.style.backgroundColor = "#0000FF";
};

async function getRandomButterfly() {
    return randomButterfly [parseInt(Math.random()*randomButterfly.length)];
}

getRandomButterfly().then(flash());

console.log(randomButterfly)

let level = 0;
let win = false;
let compTurn = true;

function clearColor() {
    butterflyImageOne.style.backgroundColor = 'auto';
    butterflyImageTwo.style.backgroundColor = 'auto';
    butterflyImageThree.style.backgroundColor = 'auto';
    butterflyImageFour.style.backgroundColor = 'auto';
};

function increaseLevel(){
    win = true;
    level++; 
    clearColor();
}

function startGame() {
    level=1;
    document.getElementById('level').innerHTML="Level 1";
}

function playGame() {
    compTurn = true;
}


