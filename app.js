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
}

function myFunctionTwo() {
    console.log("And again!");
}

function myFunctionThree() {
    console.log("It works!");
}

function myFunctionFour() {
    console.log("I'm programming!");
}