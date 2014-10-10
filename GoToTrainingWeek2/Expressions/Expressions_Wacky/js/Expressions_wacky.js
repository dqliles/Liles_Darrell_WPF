
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

var  yellowEaten = prompt("Hello!" +" " + "Lets calculate how many skittles are left."
    + " " + "Please enter how many yellow skittles you have eaten.");

 //check prompt in console
 console.log(yellowEaten);
var redEaten = prompt("Please enter how many red skittles you have eaten.");

 //check prompt in console
 console.log(redEaten);
 var greenEaten = prompt("Now enter how many green skittles you have eaten.");

 //check variable in console
 console.log(greenEaten);


 //set up variables for equation
 var yellowLeft = (yellowSkittle - yellowEaten);
 console.log(yellowLeft);
// set up another variable for equation
 var redLeft = (redSkittle - redEaten);
 console.log(redLeft);

 var greenLeft = (greenSkittle - greenEaten);
 console.log(greenLeft);

 alert("Ok! There was "+yellowLeft+" yellow skittles left, "+redLeft+" red skittles left and "+greenLeft+" green" +
     "skittles left.");

 //Printed alert to console
 console.log("Ok! There was "+yellowLeft+" yellow skittles left, "+redLeft+" red skittles left and "+greenLeft+" green" +
    "skittles left.");








