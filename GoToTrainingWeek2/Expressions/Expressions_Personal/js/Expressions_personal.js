
 /*
Darrell Liles
0ct 09 2014
Expressions_Personal
*/

//Calculation for the cost of movie tickets for a family


//set up for the given variable
var adultTicket = 8;
var childTicket = 6;
var studentTicket = 5;

//I tested out the givens in the console to see if they were setup properly//
console.log(adultTicket);
console.log(childTicket);
console.log(studentTicket);

//This is the setup to prompt the user to input info//
//prompt("Lets calculate the cost of movie tickets for your family. Please enter the number of adults.");

//This is the variable setup to store input from the prompt//
var name = prompt(" Let's get started! Please enter your name");
console.log(name);
var adults = prompt("Hello "+name+"! Lets calculate the cost of movie tickets for your family. Please enter the number of adults.");
console.log (adults);
var child = prompt("Now enter the number of children");
console.log(child);
var students = prompt("Please enter the number of students ");
console.log (students);

//Created calculation using the givens and the info collected from prompts//
 var costOfTickets = (adultTicket * adults + childTicket * child + studentTicket * students);

//Tested calculation in console//
 console.log(costOfTickets);

//alert the user of the cost for tickets//
alert("Ok  "+name+" ! The cost of your tickets will be  "+costOfTickets+" dollars.");

//printed the cost in the console//
console.log("Ok  "+name+" ! The cost of your tickets will be  "+costOfTickets+" dollars.");

//alert("Testing 1, 2, 3!");