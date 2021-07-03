document.addEventListener('DOMContentLoaded', function () {

    // Variables used in game
    let level = 1;
    let roundOrder = []; // order computer will flash in
    let runningSequence = []; // incrementing until sequence is same as roundOrder
    let playerOrder = []; // the player's chosen sequence
    let awaiting_action = false; // when it's player's turn, JS awaits player's input
    let good = false;
    let win = false;
    let isMuted = true;

    // define butterfly images in game
    const butterflyImageOne = document.getElementById("butterfly_image_one");
    const butterflyImageTwo = document.getElementById("butterfly_image_two");
    const butterflyImageThree = document.getElementById("butterfly_image_three");
    const butterflyImageFour = document.getElementById("butterfly_image_four");

    // start with audio button showing
    $('#mute_audio').hide();
    $('#play_audio').show();

    // toggle audio/ muted buttons
    $('#mute_audio').click(() => {
        $('#play_audio').show();
        $('#mute_audio').hide();
        isMuted = true;
    });

    $('#play_audio').click(() => {
        $('#play_audio').hide();
        $('#mute_audio').show();
        isMuted = false;
    });

    // RANDOM BUTTERFLY IMAGE STEP ONE: create random numbers
    let randomNum = Math.floor(Math.random() * 4) + 1;

    // RANDOM BUTTERFLY IMAGE STEP TWO: Change source of images to change picture (ref https://thisinterestsme.com/change-src-image-javascript/)
    function randomButterflyImage() {
        if (randomNum === 1) {
            butterflyImageOne.src = 'assets/images/adonis_blue.jpg';
            butterflyImageTwo.src = 'assets/images/brown_argus.jpg';
            butterflyImageThree.src = 'assets/images/chequered_skipper.jpg';
            butterflyImageFour.src = 'assets/images/comma.jpg';
        } else if (randomNum === 2) {
            butterflyImageOne.src = 'assets/images/common_blue.jpg';
            butterflyImageTwo.src = 'assets/images/dark_green_fritillary.jpg';
            butterflyImageThree.src = 'assets/images/large_tortoiseshell.jpg';
            butterflyImageFour.src = 'assets/images/large_white.jpg';
        } else if (randomNum === 3) {
            butterflyImageOne.src = 'assets/images/marbled_white.jpg';
            butterflyImageTwo.src = 'assets/images/adonis_blue.jpg';
            butterflyImageThree.src = 'assets/images/brown_argus.jpg';
            butterflyImageFour.src = 'assets/images/chequered_skipper.jpg';
        } else {
            butterflyImageOne.src = 'assets/images/dark_green_fritillary.jpg';
            butterflyImageTwo.src = 'assets/images/common_blue.jpg';
            butterflyImageThree.src = 'assets/images/large_tortoiseshell.jpg';
            butterflyImageFour.src = 'assets/images/large_white.jpg';
        }
    }

    // run function to apply randomly generated images
    randomButterflyImage();

    // function if game is won, or if player fails
    function tryAgain() {
        level = 1;
        roundOrder = [];
        runningSequence = [];
        playerOrder = [];
        good = false;
        document.getElementById('play-game').style.visibility = 'visible';
        document.getElementById('play-game').classList.remove('hide-button');
        $('#level').text('Try again?');
    }

    // starts game
    function startGame() {
        good = true;
        clearColor();
        roundOrder = [];
        runningSequence = [];
        playerOrder = [];
        compTurn();
        document.getElementById('play-game').classList.add('hide-button');
        $('#level').text('Level' + ' ' + level);
    }

    // Click start button to play game
    document.getElementById('play-game').addEventListener('click', () => {
        startGame();
    });

    // random number pushed into the 'round order' array
    function compTurn() {
        $('#level').text('Level' + ' ' + level);
        console.log("LEVEL: ", level);
        for (i = 0; i < 1; i++) {
            roundOrder.push(Math.floor(Math.random() * 4) + 1);
        }
        setTimeout(function () {
            console.log("RoundOrder: ", roundOrder.length);
            for (i = 0; i < roundOrder.length; i++) {
                butterflyFlash(i); // for the number of numbers in the 'round order' array, the butterflies will flash
            }
        }, 400);
    }

    // access each value in the 'round order' array, add a delay, and change the color of the background -n.b. https://stackoverflow.com/questions/37497872/how-to-save-clear-settimeouts-array-using-loops-index (was used to solve issue of everything flashing at once)
    function butterflyFlash(i) {
        setTimeout(function () {
            if (roundOrder[i] === 1) {
                runningSequence.push(i);
                butterflyOne();
            }
            if (roundOrder[i] === 2) {
                runningSequence.push(i);
                butterflyTwo();
            }
            if (roundOrder[i] === 3) {
                runningSequence.push(i);
                butterflyThree();
            }
            if (roundOrder[i] === 4) {
                runningSequence.push(i);
                butterflyFour();
            }
            if (runningSequence.length === roundOrder.length) {
                setTimeout(function () {
                    playerTurn();
                }, 800);
            }
        }, 800 * i);
    }

    // Player takes control and is able to click butterflies to select them
    function playerTurn() {
        document.getElementById('play-game').style.visibility = 'hidden';
        $('.butterflies').css("cursor", "pointer");
        awaiting_action = true;
    }

    // for each click, a number is pushed to the 'playerOrder' array, it checks to see if it is the end of the player's turn, and the butterfly flashes.
    $('#butterfly_image_one').click(function () {
        if (awaiting_action) {
            playerOrder.push(1);
            check();
            butterflyOne();
        }
    });

    $('#butterfly_image_two').click(function () {
        if (awaiting_action) {
            playerOrder.push(2);
            check();
            butterflyTwo();
        }
    });

    $('#butterfly_image_three').click(function () {
        if (awaiting_action) {
            playerOrder.push(3);
            check();
            butterflyThree();
        }
    });

    $('#butterfly_image_four').click(function () {
        if (awaiting_action) {
            playerOrder.push(4);
            check();
            butterflyFour();
        }
    });

    // Butterfly images to flash for half a second, and make sound
    function butterflyOne() {
        butterflyImageOne.style.backgroundColor = '#00FF00';
        if (isMuted !== true) {
            let audio = new Audio('assets/sounds/sound_one.mp3');
            audio.play();
        }
        setTimeout(function () {
            butterflyImageOne.style.backgroundColor = 'rgba(0,0,0,.0)';
        }, 400);
    }

    function butterflyTwo() {
        butterflyImageTwo.style.backgroundColor = '#800000';
        if (isMuted !== true) {
            let audio = new Audio('assets/sounds/sound_two.mp3');
            audio.play();
        }
        setTimeout(function () {
            butterflyImageTwo.style.backgroundColor = 'rgba(0,0,0,.0)';
        }, 400);
    }

    function butterflyThree() {
        butterflyImageThree.style.backgroundColor = '#FFFF00';
        if (isMuted !== true) {
            let audio = new Audio('assets/sounds/sound_three.mp3');
            audio.play();
        }
        setTimeout(function () {
            butterflyImageThree.style.backgroundColor = 'rgba(0,0,0,.0)';
        }, 400);
    }

    function butterflyFour() {
        butterflyImageFour.style.backgroundColor = '#0000FF';
        if (isMuted !== true) {
            let audio = new Audio('assets/sounds/sound_four.mp3');
            audio.play();
        }
        setTimeout(function () {
            butterflyImageFour.style.backgroundColor = 'rgba(0,0,0,.0)';
        }, 400);
    }

    // check to see the status after each player's button click
    function check() {
        let firstArray = playerOrder.toString();
        let secondArray = roundOrder.toString();
        console.log("First: ", firstArray); // help to ensure game is functioning correctly
        console.log("Second: ", secondArray);
        if (firstArray.length !== secondArray.length) {
            playerTurn(); // if player hasn't chosen the same number of butterflies as the computer, it continues to be their turn
            console.log('Player Order:', playerOrder)
        } else {
            if (firstArray !== secondArray) {
                good = false; // if player's choices don't match with computer's
            } else if (firstArray == secondArray && !win) {
                $('#level').text('Well done!');
                level++; // if, at the end of the round, the players' choices match with the computers...
                setTimeout(function () {
                    clearColor();
                    firstArray = [];
                    secondArray = [];
                    playerOrder = [];
                    setTimeout(compTurn(), 800);
                }, 2000);
            }
        }

        if (good === false) { // if player's choices don't match with computer's
            $('#level').text('Wrong butterfly...');
            butterflyImageOne.style.backgroundColor = '#00FF00';
            butterflyImageTwo.style.backgroundColor = '#800000';
            butterflyImageThree.style.backgroundColor = '#FFFF00';
            butterflyImageFour.style.backgroundColor = '#0000FF';
            setTimeout(function () {
                clearColor();
                firstArray = [];
                secondArray = [];
                runningSequence = [];
                playerOrder = [];
                setTimeout(tryAgain(), 800);
            }, 400);
        }

        //End of game
        if (playerOrder.length == 5 && good) {
            winGame();
        }

    }

    // what happens at the end of the game
    function winGame() {
        $('#level').text("Great job, you've won the game!");
        setTimeout(function () {
            clearColor();
            level = 1;
            firstArray = [];
            secondArray = [];
            runningSequence = [];
            playerOrder = [];
            roundOrder = [];
            setTimeout(tryAgain(), 1000);
        }, 2000);
    }

    // to clear and reset all butterflies
    function clearColor() {
        butterflyImageOne.style.backgroundColor = 'rgba(0,0,0,.0)';
        butterflyImageTwo.style.backgroundColor = 'rgba(0,0,0,.0)';
        butterflyImageThree.style.backgroundColor = 'rgba(0,0,0,.0)';
        butterflyImageFour.style.backgroundColor = 'rgba(0,0,0,.0)';
    }

});
