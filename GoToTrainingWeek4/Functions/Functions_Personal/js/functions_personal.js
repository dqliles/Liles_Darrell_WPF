
 /*
Darrell Liles
Oct 23 2014
WPF Section 02

 */


 //calculate the cost of chocolate,lemon, and strawberry cake for Thanksgiving

//Setup variable to collect info from prompt




 var strawberryPrice = 5; //set up variable for cost of strawberry cake.
    console.log(strawberryPrice);
 var chocolatePrice = 4 ;// setup variable for cost of chocolate cake.
    console.log(chocolatePrice);
 var lemonPrice = 3; // setup variable for cost of lemon cake.
    console.log(lemonPrice);

  var strawberryCake = prompt("Hello!" + " Please enter the number of strawberry cakes you will need.");
    console.log(strawberryCake);   //checked out prompt in console

        while(isNaN(strawberryCake) || strawberryCake===""){ //setup validation with a while loop

            strawberryCake = prompt("Please enter the number of strawberry cakes you will need"); // setup strawberry cake prompt w

        }
//setup second variable and prompt for chocolate cake
 var chocolateCake = prompt("Hello!" + " Please enter the number of chocolate cakes you will need.");
                    console.log(chocolateCake);
        while(isNaN(chocolateCake) || chocolateCake===""){ //setup validation with a while loop

            chocolateCake = prompt("Please enter the number of chocolate cakes you will need.");
 }

var lemonCake = prompt("Hello!" + " Please enter the number of lemon cakes you will need."); // setup variable and prompt for lemon cake.

        while(isNaN(lemonCake) || lemonCake===""){ //setup validation with a while loop

           var  lemonCake = prompt("Please enter the number of lemon cakes you will need.");
               console.log(lemonCake); //tested lemon cake prompt in the console.
 }



  var  youOwe =cakePrice(strawberryPrice,chocolatePrice,lemonPrice);


 function cakePrice(strawberry,chocolate,lemon){

      var totalPrice = (strawberryCake * strawberry)+(chocolateCake * chocolate)+(lemonCake * lemon);
                 return cakePrice()
                    console.log(youOwe);


 }















//alert("Testing 1, 2, 3!");