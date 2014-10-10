
 /*
Darrell Liles
Oct 09 2014
Expressions_industry
*/



 //calculate how many grapes and pears were leftover during snack time with the attendance of twenty children .

//created my given using an array//
var fruitBasket = ["grapes" + "pears" + "noSnack"];

//created variable to store value of each array//
var grapes = 20;
var pears = 20;
var noSnack = 0;
//tested out variable in the console//
console.log(grapes);

// Set up prompt to explain to user why we need some input from them//
var ateGrapes = prompt("Hello!" +" " +  "Lets calculate how many grapes and pears were left over from snack time with " +
"twenty children in attendance." + " "  + "Please enter the number of children who ate grapes.");

//tested variable in console//
console.log(ateGrapes);

//prompt user for more info
var atePears = prompt("Please enter the number of children who ate pears?");
console.log(atePears);

//setup prompt for more info from user//
var noSnack = prompt("Please enter the number of children who did not receive a snack");
console.log(noSnack);

//setup equation using input from prompt and the given//
var grapesLeftOver = (grapes - ateGrapes);

//tested out equation in console
console.log(grapesLeftOver);

//created equation for pears leftover
var pearsLeftOver = (pears - atePears);
console.log(pearsLeftOver);


alert ("Ok there was "+grapesLeftOver+" grapes leftover and "+pearsLeftOver+" pears left over.");
console.log("Ok there was "+grapesLeftOver+" grapes leftover and "+pearsLeftOver+" pears left over.");
//alert("Testing 1, 2, 3!");