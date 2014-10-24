
 /*
Darrell Liles
Oct 23 2014
Functions_Industry
*/



// The new Jordan sneakers just came out. People have been camped out all night to purchase them, and they are almost sold out.
//You have to now purchase them online.



 var jordanSneakersLeft = 4; //  the amount of Jordan sneakers left for inventory
 console.log(jordanSneakersLeft); // tested variable for jordan sneakers in console
 var lebronSneakersLeft =6;// amount of Lebron sneakers left
 console.log(lebronSneakersLeft);// tested in console


 //Setup prompt to obtain info from user
 var jordanPurchase = prompt("Thank you for your interest in our sneakers!"+" Please enter the number of Jordan sneakers you would like to purchase!");
 console.log(jordanPurchase);  //Tested prompt input in console


 while(isNaN(jordanPurchase) || jordanPurchase==="") { //setup validation with a while loop

     var  jordanPurchase = prompt("Please enter the number of Jordan sneakers you will need.");
     console.log(jordanPurchase); //tested jordanPurchase prompt in the console.
}


//Setup ternary condition
var soldOut =(jordanPurchase > jordanSneakersLeft) ? prompt("Im sorry but we do not have that many pair left!"):prompt("Great!");



var  lebronPurchase = prompt("Please enter the number of Lebron sneakers you will need.");
 console.log(lebronPurchase); //tested jordanPurchase prompt in the console.


 while(isNaN(lebronPurchase) || lebronPurchase==="") { //setup validation with a while loop

     var  lebronPurchase = prompt("Please enter the number of Lebron sneakers you will need.");
     console.log(lebronPurchase); //tested jordanPurchase prompt in the console.

 }

alert("Thank you!"+" I hope you enjoy your purchase!");



//alert("Testing 1, 2, 3!");