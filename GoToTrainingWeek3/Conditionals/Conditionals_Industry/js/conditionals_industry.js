
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

 // Created validation for blank entry
  if (ageInput=== "") {  // was entry left blank
     var blankEntry = prompt("Oops!" + " Your entry was blank." + " Please enter your age."); // prompt for entry left blank
 }
//set up the condition for the input of age
 else if(ageInput<minimumAgeToJoin){
    //you are not eligible
     var notEligible = alert(" Im sorry!"+" You are not eligible.");
        console.log(notEligible) //Tested out in console
 }

else {(ageInput>minimumAgeToJoin)  //Is the age input greater than 18
    var areEligible = alert("Congratulations!"+" You are eligible for membership!");// You are eligible
        console.log(areEligible) // Tested out prompt in console
}
 //set up conditional for senior citizens' discount
if (ageInput>=discountAge){
        var discount = alert("Also because you are at least 50; You are eligible for the senior citizen 20% discount");
            console.log(discount)// tested in console
}


//alert("Testing 1, 2, 3!");