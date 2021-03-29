$(document).ready(function(){
// All the necessary vars
    var recovery = document.getElementById("Recover");
    var deactivateButton = document.getElementById("Deactivate");
    var warningScreen = document.getElementById("WarningScreen");
    var warningMessage = document.getElementById("WarningMessage");
    var warningTitle = document.getElementById("WarningTitle");
    var messageInfo = document.getElementById("MessageInfo");
    var status = document.getElementById("Status");
    var message = document.getElementById("DeletedScreen");
// Creating the password mask, which has length of the password, as a reminder 
var passwordMask = document.getElementById("PasswordMask");
for(var i = 0; i<document.getElementById ("Password").innerHTML.length; i++){
    passwordMask.innerText += "*";
}

// Function which displays the message box with explanation on when the account
// will be deleted and when it is recoverable
function deactivateAccount(){ 
// Creating field for a user input 'yes'
    var yesInput = document.createElement("input");        //user input field for confirmation
    yesInput.type = "text";
    yesInput.setAttribute("id", "YesInput");   //used for css additional styling
    $(yesInput).addClass('loginForms');        //reusing styling from the Login page

// Creating the button
   var deactivate = document.createElement("button");   
   deactivate.innerHTML = "Deactivate";
   deactivate.setAttribute("id", "FinalDeactivate");    //used for css additional styling
   $(deactivate).addClass('Leave');
   
   warningMessage.appendChild(yesInput);                //appending them to the box
   warningMessage.appendChild(deactivate);
   
   warningScreen.hidden = false;     // displaying the screen with the box
   
   // Setting the text of the box (changes for deactivating and restoring the account)
   warningTitle.innerText = "Are you sure you want to deactivate your account?";
   messageInfo.innerText = "If you deactivate your account, " + 
   "its status will change to Inactive and we will delete it in 3 days. " + 
   "Should you reconsider, you can reactivate it before the 3 days have passed. " +
   "Type 'yes' to confirm";
   
   // Creating a button to exit anytime
   $("#ExitWarning").click(function() {
    status.innerHTML = "Active"
    warningScreen.hidden = true;
    if (($(warningMessage).find(yesInput).length) && ($(warningMessage).find(deactivate).length)) {
        warningMessage.removeChild(yesInput);
        warningMessage.removeChild(deactivate);
    }
   }); 
   
 // When clicked it truggers the function which changes account status to inactive
 // and displays the message with the date on which it'll be deleted
   $(deactivate).click(function() {
      if ($(yesInput).val().toLowerCase() === "yes"){     //if user input is yes
          status.innerHTML = "Inactive"                   //changing the status

          warningMessage.removeChild(yesInput);           //removing the button and input field to switch them for the recovery function 
          warningMessage.removeChild(deactivate);

          $("#LogOut").css("visibility","hidden");        //hiding the now irrelevant buttons
          $("#Deactivate").css("visibility","hidden");
          $("#Recover").css("visibility","visible");      //displaying the recovery button
                
          warningScreen.hidden = true;                    //hiding the box
          message.hidden = false;                         //displaying the message with the date for 5 sec
            setTimeout(function(){ 
               message.hidden = true;
            }, 5000);
      }
      else{
        $(yesInput).addClass('error');                    //add a red border for 3 sec if wrong
           setTimeout(function(){   
              $(yesInput).removeClass('error');
           }, 3000);  
      }
   });
}

// Function which displays the message box again with an input form for the password
// and changes account status to active (restores account)
function recoverAccount(){                
    var passInput = document.createElement("input");         //user input field for password   
    passInput.type = "password";
    passInput.setAttribute("id", "RecoverInput");            //for css styling
    $(passInput).addClass('loginForms');

    var recover = document.createElement("button");          //creating a button
    recover.innerHTML = "Recover";                           
    recover.setAttribute("id", "FinalRecover");              //for css styling
    $(recover).addClass('Leave');

    warningTitle.innerText = "Are you sure you want to restore your account?";   //setting the text
    messageInfo.innerText = "Enter your password to restore your account:";
    
    warningMessage.appendChild(passInput);                    //appending the button and filed to the box
    warningMessage.appendChild(recover);

    warningScreen.hidden = false;                             //displaying the box

    // Creating a button to exit anytime  
    $("#ExitWarning").click(function() {      
        status.innerHTML = "Active"
        warningScreen.hidden = true;
        if (($(warningMessage).find(passInput).length) && ($(warningMessage).find(recover).length)) {
            warningMessage.removeChild(passInput);
            warningMessage.removeChild(recover);
        }
    }); 

//Similar to the deactivating function 
    $(recover).click(function() {
        if(passInput.value === document.getElementById ("Password").innerHTML){
        //displaying and hiding the opposites
           status.innerHTML = "Active"
          
           $("#LogOut").css("visibility","visible");
           $("#Deactivate").css("visibility","visible");
           $("#Recover").css("visibility","hidden");
          
           warningMessage.removeChild(passInput);
           warningMessage.removeChild(recover);
           warningScreen.hidden = true;
        }

       else{
        $(passInput).addClass('error');
        setTimeout(function(){ 
           $(passInput).removeClass('error');
        }, 3000);
       }
   });

}

//Hover effect for hint box
$("#DiscountHint").mouseover(function(){
    $("#DiscountHintBox").css("visibility","visible");
  });
  $("#DiscountHint").mouseleave (function(){
    $("#DiscountHintBox").css("visibility","hidden");
  });


// Calculating the date 3 days from the current 
// and apending it to the designated box
var deletedMessage = document.getElementById("DeletedMessage");    //the box
var today = new Date();
var newDate = new Date();
var daysToAdd = 3;

newDate.setDate(today.getDate() + daysToAdd);

var day = newDate.getDate();
var month = newDate.getMonth() + 1;
var year = newDate.getFullYear();

var formattedDate = day + '.' + month + '.' + year;    //formating the date

deletedMessage.innerHTML += formattedDate;             //appending it

document.getElementById("LogOut").onclick = function () {    //will log out the user and take them to the homepage
    location.href = "../HTML/MainPage.html";
};
document.getElementById("ScannerBox").onclick = function () {     //quick link to the scanner
    location.href = "../HTML/Scanner.html";
};


deactivateButton.addEventListener('click', deactivateAccount, true);   // Adding the deactivating and recovering
recovery.addEventListener('click', recoverAccount, true);              // to the appropriate buttond

});
