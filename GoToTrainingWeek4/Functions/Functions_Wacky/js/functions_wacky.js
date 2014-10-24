
 /*
Darrell Liles
Oct 23 2014
Functions_Wacky

 */

// we are calculating for a all you can eat charity event, the more people you bring the more cost you occur

 //setup givens

 var tenPeopleOrMore = 10;
 console.log(tenPeopleOrMore);// tested in console
 var twentyPeopleOrMore = 20;
 console.log(twentyPeopleOrMore);
 var thirtyPeopleOrMore = 30;
 console.log(thirtyPeopleOrMore);//tested in console



 //setup prompt to get input from user
 var peopleInput = prompt("Welcome!"+ " Please enter the number of people you have brought with you."+" You must have at least 2!");
 console.log(peopleInput); //tested prompt in console

 while(isNaN(peopleInput) || peopleInput==="") { //created validation prompt for blank entry
     entryBlank = prompt("Oops!" + " You made a blank entry." + " Enter your amount of guests.");
     console.log(entryBlank);   // Tested out in console
 }

  if(peopleInput = tenPeopleOrMore){ //true?
     var tenDollars = prompt("That will be $10"+!"); //prompt for the price
     console.log(tenDollars);  //tested out in console
 }
 else {(peopleInput >= twentyPeopleOrMore)
     var twentyDollars = prompt("That will be $20"+" The more photos you bring the cheaper the price!")
     console.log(twentyDollars); //tested in console
 }
 if (peopleInput >= thirtyPeopleOrMore){ //true?
     var thirtyDollars = prompt("That will be $30");

 }

 //alert("Testing 1, 2, 3!");