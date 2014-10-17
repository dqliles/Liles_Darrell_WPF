
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
 var fiftyPhotosOrMore = 50;
    console.log(fiftyPhotosOrMore);
 var oneHundredPhotosOrMore = 100;
  console.log(oneHundredPhotosOrMore);

//setup prompt to get input from user
 var photoInput = prompt("Welcome!"+ " Please enter the number of photos you will be bringing in."+" You must have at least twenty!");
    console.log(photoInput); //tested prompt in console

 if(photoInput ===""){ //created validation prompt for blank entry
     entryBlank = prompt("Oops!"+" You made a blank entry."+" Enter your amount of photos.");
 }
else if(photoInput >= twentyPhotosOrMore){ //true?
    var twentyDollars = prompt("That will be $20"+" The more photos you bring the cheaper the price!"); //prompt for the price  of 20 photos
 }
else if(photoInput >= fiftyPhotosOrMore){
    var fifteenDollars = prompt("That will be $15"+" The more photos you bring the cheaper the price!")
 }
else{ (photoInput >= oneHundredPhotosOrMore)
      var eightDollars = prompt("That will be $8");

 }


























//alert("Testing 1, 2, 3!");