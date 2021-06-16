// define butterfly images in game
const butterflyImageOne = document.getElementById("butterfly_image_one");
const butterflyImageTwo = document.getElementById("butterfly_image_two");
const butterflyImageThree = document.getElementById("butterfly_image_three");
const butterflyImageFour = document.getElementById("butterfly_image_four");

// RANDOM BUTTERFLY IMAGE STEP ONE: create random numbers
let randomNum = Math.floor(Math.random()*4)+1;

// RANDOM BUTTERFLY IMAGE STEP TWO: Change source of images to change picture (ref https://thisinterestsme.com/change-src-image-javascript/)
function randomButterflyImage() {
    if (randomNum === 1) {
        butterflyImageOne.src ='assets/images/brown_argus.jpg';
        butterflyImageTwo.src ='assets/images/comma.jpg';
        butterflyImageThree.src ='assets/images/dark_green_fritillary.jpg';
        butterflyImageFour.src ='assets/images/marbled_white.jpg';
    } else if (randomNum === 2) {
        butterflyImageOne.src ='assets/images/marbled_white.jpg';
        butterflyImageTwo.src ='assets/images/brown_argus.jpg';
        butterflyImageThree.src ='assets/images/comma.jpg';
        butterflyImageFour.src ='assets/images/dark_green_fritillary.jpg';
    } else if (randomNum === 3) {
        butterflyImageOne.src ='assets/images/marbled_white.jpg';
        butterflyImageTwo.src ='assets/images/dark_green_fritillary.jpg';
        butterflyImageThree.src ='assets/images/brown_argus.jpg';
        butterflyImageFour.src ='assets/images/comma.jpg';
    } else {
        butterflyImageOne.src ='assets/images/dark_green_fritillary.jpg';
        butterflyImageTwo.src ='assets/images/marbled_white.jpg';
        butterflyImageThree.src ='assets/images/comma.jpg';
        butterflyImageFour.src ='assets/images/brown_argus.jpg';
    };
};

// run function to apply randomly generated images
randomButterflyImage();

// Variables used in game
let level = 8;
let win = false;
let roundLength = [];

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

// Number of flashes per level - 'round length'
for (let i = 0; i < level; i++) {
    roundLength.push([i]);
};

// the order that they will flash in - the 'round order'
let roundOrder = Math.floor(Math.random()*4)+1;
console.log(roundOrder);

// the computer's turn
function compTurn() {
    for (i = 0; i < roundLength.length; i++) {
        if (roundOrder === 1) {
            setTimeout (butterflyOne(), 1000)
        } else if (roundOrder === 2) {
            setTimeout (butterflyTwo(), 1000)
        } else if (roundOrder === 3) {
            setTimeout (butterflyThree(), 1000)
        } else {
            setTimeout (butterflyFour(), 1000)
        }
    }
}

compTurn();

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
