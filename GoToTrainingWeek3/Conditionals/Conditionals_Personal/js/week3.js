
 /*
Darrell Liles
Oct 16 2014
Conditionals_Personal
*/



//I forgot my password to my email account and must create a new one.


//setup the given variables
var firstAndLastName = "Darrell"+" Liles";
//tested variable setup in console
console.log(firstAndLastName); //Tested in the console
var email = "dqliles@fullsail.edu";
console.log(email);

//setup prompt to collect input from user
nameInputByUser =prompt("Hello!"+" To create a new password please enter your first and last name.");
console.log(nameInputByUser);

//Setup up condition for info collected from prompt
 if(nameInputByUser === ""){ //true?
   // set up validation
     blankEntryForName =  prompt("Oops!"+" You left this entry blank."+" Please enter your name.");
        console.log (blankEntryForName);  //Tested in console
 }else if(nameInputByUser=== firstAndLastName){  //True?
     emailInputByUser = prompt("Now Please enter your email address."); //
        console.log(emailInputByUser);  //tested out in console
 }else{ wrongNameEntry = prompt("The name you have entered does not match our records."+" Please re-enter your first and last name.")
        console.log(wrongNameEntry); //Tested in console

 }
 //Setup up condition for info collected from prompt
if (emailInputByUser === email){
    PasswordResetSuccess = prompt("Great!"+" A link was sent to your email address to reset your password.");

}else{wrongEmailEntry = prompt ("The email you have entered does not match our records."+" Please re-enter your email.");
    console.log(wrongEmailEntry);
}

























//alert("Testing 1, 2, 3!");