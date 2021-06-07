// define butterfly images in game
const butterflyImageOne = document.getElementById("butterfly_image_one");
const butterflyImageTwo = document.getElementById("butterfly_image_two");
const butterflyImageThree = document.getElementById("butterfly_image_three");
const butterflyImageFour = document.getElementById("butterfly_image_four");

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