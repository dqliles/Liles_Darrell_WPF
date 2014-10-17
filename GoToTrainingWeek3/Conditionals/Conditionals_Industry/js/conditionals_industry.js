
 /*
Darrell Liles
Oct 07 2014
Conditionals_Industry
*/



 //Fitness club down town wants to track the age of people that are trying to become members. Only
// 18 and older are allowed to join, and senior citizens older than 50 get a 20% discount.


//Set up given variables
var minimumAgeToJoin = 18;
 console.log(minimumAgeToJoin);
var discountAge =50;
 console.log(discountAge);

//Setup prompt to obtain age from user
var ageInput = prompt("Thank you for your interest in our facility!" +" Before we continue registration we must verify that you are at least 18."+" Please enter your age.");
    console.log(ageInput);  //Tested prompt input in console

 //set up the condition for the input of age
 if(ageInput<minimumAgeToJoin){
    //you are not eligible
     var notEligible = prompt(" Im sorry!"+" You are not eligible.");
        console.log(notEligible) //Tested out in console
 }
 else if(ageInput>minimumAgeToJoin){

 }

//alert("Testing 1, 2, 3!");