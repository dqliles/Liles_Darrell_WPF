
 /*
Darrell Liles
Oct 07 2014
Conditionals_Wacky
 */


//We are calculating for a wacky photo store. The deal for today is the more pics you bring in to get developed,
//the cheaper the price will be.

//setup givens for photo prices

 var twentyPhotosOrMore = 20;
    console.log(twentyPhotosOrMore);// tested in console
 var fiftyPhotosOrMore = 15;
    console.log(fiftyPhotosOrMore);
 var oneHundredPhotosOrMore = 8;
  console.log(oneHundredPhotosOrMore);

//setup prompt to get input from user
 var photoInput = prompt("Welcome!"+ " Please enter the number of photos you will be bringing in."+" You must have at least twenty!");
    console.log(photoInput); //tested prompt in console

 if(photoInput ===""){ //created validation prompt for blank entry
     entryBlank = prompt("Oops!"+" You made a blank entry."+" Enter your amount of photos.");
 }
else if(photoInput >= twentyPhotosOrMore){
    var twentyDollars = prompt("That will be $20"+" The more photos you bring the cheaper the price!");
 }
else if(photoInput){

 }



























//alert("Testing 1, 2, 3!");