
 /*
Darrell Liles
Oct 09 2014
Expressions_Wacky
 */


//Calculate how many skittles were eaten

//setup the given variables
var yellowSkittle = 35;
var redSkittle = 162;
var greenSkittle = 150;

var  yellowEaten = prompt("Hello!" +" " + "Lets calculate how many skittles are left"
    + "Please enter how many yellow skittles you have eaten");
 console.log(yellowEaten);
var redEaten = prompt("please enter how many red you have eaten");
console.log(redEaten);
var greenEaten = prompt("Now enter how many green you have eaten");

var yellowLeft = (yellowSkittle - yellowEaten);
var redLeft = (redSkittle - redEaten);
var greenLeft = (greenSkittle - greenEaten);
//alert("Testing 1, 2, 3!");