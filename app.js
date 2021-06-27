document.addEventListener('DOMContentLoaded', function() { 

    // define butterfly images in game
    const butterflyImageOne = document.getElementById("butterfly_image_one");
    const butterflyImageTwo = document.getElementById("butterfly_image_two");
    const butterflyImageThree = document.getElementById("butterfly_image_three");
    const butterflyImageFour = document.getElementById("butterfly_image_four");

    document.getElementById('audio_button').addEventListener('click', volumeOn);

    function volumeOn() {
        document.getElementById('mute').classList.remove('hide-button');
        document.getElementById('audio_button').classList.add('hide-button');
        let audio = document.getElementsByTagName('audio_button');
        let i;
        for (i=0; i<audio.length; i++) {
            audio[i].muted=false;
        }
        console.log('vol on');
    }
    
    document.getElementById('mute').addEventListener('click', volumeOff);

    function volumeOff() {
        document.getElementById('audio_button').classList.remove('hide-button');
        document.getElementById('mute').classList.add('hide-button');
        let audio = document.getElementsByTagName('audio_button');
        let i;
        for (i=0; i<audio.length; i++) {
            audio[i].muted=true;
        }
        console.log('vol off');
    }

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
        }
    }

    // run function to apply randomly generated images
    randomButterflyImage();

    // Variables used in game
    let level = 1;
    let roundOrder = [];
    let runningSequence = [];
    let playerOrder = [];
    let awaiting_action=false; // when it's player's turn, JS awaits player's input
    let good = false;
    let win = false;

    function tryAgain() {
        level = 1;
        roundOrder = [];
        runningSequence = [];
        playerOrder = [];
        good = false;
        document.getElementById('play-game').style.visibility='visible';
        document.getElementById('play-game').classList.remove('hide-button');
        $('#level').text('Try again?');
    }

    // ensures variables are cleared at start of game, no butterflies have any colours and start button is hidden once game starts
    function startGame() {
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
        roundOrder = [];
        $('#level').text('Level'+' '+level);
        console.log("LEVEL: ", level)
        for (i = 0; i < level; i++) {
            roundOrder.push(Math.floor(Math.random()*4)+1);
            }
        setTimeout(function() {
            console.log("RoundOrder: ",roundOrder.length)
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
                }
                if (runningSequence.length === roundOrder.length) {
                    setTimeout (function() {
                        playerTurn();
                    }, 800);
                }   
        }, 800 * i);
    }

    function playerTurn() {
        document.getElementById('play-game').style.visibility='hidden';
        $('.butterflies').css("cursor", "pointer");
        awaiting_action = true;
    }


        
    $('#butterfly_image_one').click(function () {
        if (awaiting_action){
            playerOrder.push(1);
            check();
            butterflyOne();
        }
    });

    $('#butterfly_image_two').click(function () {
        if (awaiting_action){
            playerOrder.push(2);
            check();
            butterflyTwo();
        }
    });

    $('#butterfly_image_three').click(function () {
        if (awaiting_action){
            playerOrder.push(3);
            check();
            butterflyThree();
        }
    });

    $('#butterfly_image_four').click(function () {
        if (awaiting_action){
            playerOrder.push(4);
            check();
            butterflyFour();
        }
    });

    // Butterfly images to flash for half a second
    function butterflyOne() {
        butterflyImageOne.style.backgroundColor = '#00FF00';
        let audio = document.getElementById('sound-one');
        audio.play();
        setTimeout(function () {
        butterflyImageOne.style.backgroundColor = 'rgba(0,0,0,.0)';
        }, 400);
    }

    function butterflyTwo() {
        butterflyImageTwo.style.backgroundColor = '#800000';
        let audio = document.getElementById('sound-two');
        audio.play();
        setTimeout(function () {
            butterflyImageTwo.style.backgroundColor = 'rgba(0,0,0,.0)';
        }, 400);
    }

    function butterflyThree() {
        butterflyImageThree.style.backgroundColor = '#FFFF00';
        let audio = document.getElementById('sound-three');
        audio.play();
        setTimeout(function () {
            butterflyImageThree.style.backgroundColor = 'rgba(0,0,0,.0)';
        }, 400);
    }

    function butterflyFour() {
        butterflyImageFour.style.backgroundColor = '#0000FF';
        let audio = document.getElementById('sound-four');
        audio.play();
        setTimeout(function () {
            butterflyImageFour.style.backgroundColor = 'rgba(0,0,0,.0)';
        }, 400);
    }

    function check() {
        let firstArray = playerOrder.toString();
        let secondArray = roundOrder.toString();
        console.log("First: ", firstArray);
        console.log("Second: ", secondArray);
        if (firstArray.length !== secondArray.length) {
            playerTurn();
            // console.log(1, "firstArray.length !== secondArray.length")
        } else {        
            if (firstArray !== secondArray) {
                good = false;
                // console.log(2, "firstArray !== secondArray")
            } else if (firstArray == secondArray && !win) {
                // console.log(3, "firstArray == secondArray && !win")
                $('#level').text('Well done!');
                level++;
                setTimeout( function() {
                    clearColor();
                    firstArray = [];
                    secondArray = [];
                    runningSequence = [];
                    playerOrder = [];
                    roundOrder = [];
                    setTimeout(compTurn(), 800);
                }, 2000);
            }
        }
        

        if (good === false) {
            // console.log(4, "good === false")
            $('#level').text('Wrong butterfly...');
            butterflyImageOne.style.backgroundColor = '#00FF00';
            butterflyImageTwo.style.backgroundColor = '#800000';
            butterflyImageThree.style.backgroundColor = '#FFFF00';
            butterflyImageFour.style.backgroundColor = '#0000FF';
            setTimeout( function() {
                clearColor();
                firstArray = [];
                secondArray = [];
                runningSequence = [];
                playerOrder = [];
                setTimeout(tryAgain(), 800);
            }, 400);
        }

        if (playerOrder.length == 5 && good) {
            winGame();
        }

    }

    function winGame() {
        $('#level').text("Great job, you've won the game!");
        win = true;
    }

    function clearColor() {
        butterflyImageOne.style.backgroundColor = 'rgba(0,0,0,.0)';
        butterflyImageTwo.style.backgroundColor = 'rgba(0,0,0,.0)';
        butterflyImageThree.style.backgroundColor = 'rgba(0,0,0,.0)';
        butterflyImageFour.style.backgroundColor = 'rgba(0,0,0,.0)';
    }

});
