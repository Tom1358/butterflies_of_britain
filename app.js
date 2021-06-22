document.addEventListener('DOMContentLoaded', function() { 

    // define butterfly images in game
    const butterflies = document.getElementsByClassName('butterflies');
    const butterflyImageOne = document.getElementById("butterfly_image_one");
    const butterflyImageTwo = document.getElementById("butterfly_image_two");
    const butterflyImageThree = document.getElementById("butterfly_image_three");
    const butterflyImageFour = document.getElementById("butterfly_image_four");

    document.getElementById('audio').addEventListener('click', volumeOn);

    function volumeOn() {
        document.getElementById('mute').classList.remove('hide-button');
        document.getElementById('audio').classList.add('hide-button');
        let audio = document.getElementsByTagName('audio');
        let i;
        for (i=0; i<audio.length; i++) {
            audio[i].muted=false;
        };
        console.log('vol on');
    };
    
    document.getElementById('mute').addEventListener('click', volumeOff);

    function volumeOff() {
        document.getElementById('audio').classList.remove('hide-button');
        document.getElementById('mute').classList.add('hide-button');
        let audio = document.getElementsByTagName('audio');
        let i;
        for (i=0; i<audio.length; i++) {
            audio[i].muted=true;
        };
        console.log('vol off');
    };

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
    let level = 0;
    let roundOrder = [];
    let runningSequence = [];
    let playerOrder = [];
    let counter=0;
    let good = false;

    function baseScreen() {
        level = 0;
        roundOrder = [];
        runningSequence = [];
        playerOrder = [];
        counter=0;
        good = false;
        document.getElementById('play-game').style.visibility='visible';
        document.getElementById('play-game').classList.remove('hide-button');
        $('#level').text('Try again?');
    }

    // ensures variables are cleared at start of game, no butterflies have any colours and start button is hidden once game starts
    function startGame() {
        level = 1;
        counter=0;
        good = true;
        clearColor();
        roundOrder = []; // the random order of butterflies that will flash each turn, incrementally increased
        runningSequence = []; // as the butterflies flash, this array builds, until it hits the same as the 'roundOrder' array number
        playerOrder = [];
        compTurn();
        document.getElementById('play-game').classList.add('hide-button');
        $('#level').text('Level'+' '+level);
    }

    // Click start button to play game
    document.getElementById('play-game').addEventListener('click', () => {startGame();});

    // random number pushed into the 'round order' array
    function compTurn() {
        for (i = 0; i < level; i++) {
            roundOrder.push(Math.floor(Math.random()*4)+1);
            };
        setTimeout(function() {
            for (i = 0; i < roundOrder.length; i++) {
                butterflyFlash(i); // for the number of numbers in the 'round order' array, the butterflies will flash
            }
        }, 400);
    } 

    // access each value in the 'round order' array, add a delay, and change the color of the background -n.b. https://stackoverflow.com/questions/37497872/how-to-save-clear-settimeouts-array-using-loops-index (was used to solve issue of everything flashing at once)
    function butterflyFlash(i) {
        setTimeout (function() {
            if (roundOrder[i] === 1) {
                    runningSequence.push(i);
                    butterflyOne();
                } if (roundOrder[i] === 2) {
                    runningSequence.push(i);
                    butterflyTwo();
                } if (roundOrder[i] === 3) {
                    runningSequence.push(i);
                    butterflyThree();
                } if (roundOrder[i] === 4) {
                    runningSequence.push(i);
                    butterflyFour();
                };
                if (runningSequence.length === roundOrder.length) {
                    setTimeout (function() {
                        playerTurn();
                    }, 1600);
                };   
        }, 800 * i);
    };

    function playerTurn() {
        document.getElementById('play-game').style.visibility='hidden';
        $('.butterflies').css("cursor", "pointer");
        $('#butterfly_image_one').click(function () {
            playerOrder.push(1);
            check();
            butterflyOne();
        });
        $('#butterfly_image_two').click(function () {
            playerOrder.push(2);
            check();
            butterflyTwo();
        });
        $('#butterfly_image_three').click(function () {
            playerOrder.push(3);
            check();
            butterflyThree();
        });
        $('#butterfly_image_four').click(function () {
            playerOrder.push(4);
            check();
            butterflyFour();
        });
        
        /*$('.butterflies').on('click', () => {
            setTimeout ( 
                () => 
                {$('.butterflies').css("cursor", ""); 
                compareOrders();
                }), 3000});*/
};

    // Butterfly images to flash for half a second
    function butterflyOne() {
        butterflyImageOne.style.backgroundColor = '#00FF00';
        let audio = document.getElementById('sound-one');
        audio.play();
        setTimeout(function () {
        butterflyImageOne.style.backgroundColor = 'rgba(0,0,0,.0)';
        }, 400);
    };

    function butterflyTwo() {
        butterflyImageTwo.style.backgroundColor = '#800000';
        let audio = document.getElementById('sound-two');
        audio.play();
        setTimeout(function () {
            butterflyImageTwo.style.backgroundColor = 'rgba(0,0,0,.0)';
        }, 400);
    };

    function butterflyThree() {
        butterflyImageThree.style.backgroundColor = '#FFFF00';
        let audio = document.getElementById('sound-three');
        audio.play();
        setTimeout(function () {
            butterflyImageThree.style.backgroundColor = 'rgba(0,0,0,.0)';
        }, 400);
    };

    function butterflyFour() {
        butterflyImageFour.style.backgroundColor = '#0000FF';
        let audio = document.getElementById('sound-four');
        audio.play();
        setTimeout(function () {
            butterflyImageFour.style.backgroundColor = 'rgba(0,0,0,.0)';
        }, 400);
    };

    function check() {
        let firstArray = playerOrder.toString();
        let secondArray = roundOrder.toString();
        if (firstArray != secondArray) {
            good = false;
        }

        if (good === false) {
            $('#level').text('Wrong butterfly...');
            butterflyImageOne.style.backgroundColor = '#00FF00';
            butterflyImageTwo.style.backgroundColor = '#800000';
            butterflyImageThree.style.backgroundColor = '#FFFF00';
            butterflyImageFour.style.backgroundColor = '#0000FF';
            setTimeout( function() {
                clearColor();
                setTimeout(baseScreen(), 800);
            }, 400);
        }

        if (playerOrder.length == 10 && good) {
            winGame();
        }
    }

    function winGame() {
        console.log('well done, have a cup of tea');
    }

    /*function compareOrders() {
        let firstArray = playerOrder.toString();
        let secondArray = roundOrder.toString()
        if (firstArray !== secondArray) { // if the array is not the same, player loses
            $('#level').text('incorrect butterfly...');
            setTimeout(function() {
                document.getElementById('play-game').style.visibility='visible';
                console.log('fail');
            }, 500);
        } else {
            if (roundOrder.length === playerOrder.length) { // if the player is correct, and the arrays are the same length, the next round begins
                $('#level').text('well done!'); 
                level++;
                compTurn()
            } else { // the player's turn continues
                //$('.butterflies').css("cursor", "pointer"); 
                //playerTurn();
                //counter++;
            }; 
        };
    }; */

    function clearColor() {
        butterflyImageOne.style.backgroundColor = 'rgba(0,0,0,.0)';
        butterflyImageTwo.style.backgroundColor = 'rgba(0,0,0,.0)';
        butterflyImageThree.style.backgroundColor = 'rgba(0,0,0,.0)';
        butterflyImageFour.style.backgroundColor = 'rgba(0,0,0,.0)';
    };

})
