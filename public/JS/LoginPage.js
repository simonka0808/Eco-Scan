$(document).ready(function(){

// Functions which check the input in the fields ----------------------------------------------------------

function createErrors(){  

  var terms = document.getElementById("TermsAndConditions");
  var label = document.getElementsByTagName("label");

  var forms = document.getElementsByClassName("createForms");;
  var pass = $(forms[name = "pass"]).val();
  var name = $(forms[name = "name"]).val();

// If fields are empty colour the border red and change the placeholder to 'Required' 
  if( $.trim( $(forms).val()) == '' ){    
    $(forms).attr('placeholder', "Required field"); 
    $(forms).addClass('red');
    $(forms).addClass('error');

// Keep the red for 3 sec 
    setTimeout(function(){ 
      $(forms).removeClass("red");
      $(forms).removeClass("error");
      $(forms[0]).attr('placeholder', "Username:");
      $(forms[1]).attr('placeholder', "Email:"); 
      $(forms[2]).attr('placeholder', "Password:"); 
    }, 3000);
  }
//Set requirements for the username:
//Not empty, contain at least 5 symbols (letters and at least 1 number)
//Paint the border red for 3 sec if they're not met
  else if (!forms[0].checkValidity() || (name.length < 5) || (name.length > 25) ||
  (!name.match(/\d/)) || (!name.match(/[a-z]/)) ){
       $(forms[0]).addClass('error');
    setTimeout(function(){ 
       $(forms[0]).removeClass('error');
    }, 3000);
  }
//Set requirements for the email:
//Not empty, be a valid email input 
//Paint the border red for 3 sec if they're not met
  else if (!forms[1].checkValidity()){
       $(forms[1]).addClass('error');
    setTimeout(function(){ 
      $(forms[1]).removeClass('error');
    }, 3000);
  }
//Set requirements for the password field:
//Not empty, at least 8 symbols but no more than 30 (at least 1 upper and lower case and number)
//Paint the border red for 3 sec if they're not met
  else if (!forms[2].checkValidity() || (pass.length < 8) || (pass.length > 30) ||
  (!pass.match(/\d/)) || (!pass.match(/[A-Z]/)) || (!pass.match(/[a-z]/)) ){
       $(forms[2]).addClass('error');
    setTimeout(function(){ 
      $(forms[2]).removeClass('error');
    }, 3000);
  }
// Successfuly created message appears if all fields are correct
  else {
    $("#Signup").css("visibility","hidden");
    $("#SubmitCreate").css("visibility","hidden");
    terms.hidden = false;
    $("#ConfirmTerms").click(function() {
if((document.getElementById("CkeckTerms")).checked == true){
  terms.hidden = true;
  $("#AccountCreated").css("visibility","visible");
}
else{
  $(label).css("color","rgba(235, 37, 37, 0.692)");
  setTimeout(function(){ 
    $(label).css("color","black");
  }, 2000);
}  
 });

}
}

// Same as the Create account fields but for Logging in -------------------------------------------------
function loginErrors(){  
  var forms = document.getElementsByClassName("loginForms");
  var pass = $(forms[name = "pass"]).val();
  var name = $(forms[name = "name"]).val();
// Check if empty
  if( ($.trim( $(forms).val()) == '' )){
    $(forms).attr('placeholder', "Required field"); 
    $(forms).addClass('red');
    $(forms).addClass('error');
//Apply red for 3 sec   
    setTimeout(function(){ 
      $(forms).removeClass("red");
      $(forms).removeClass("error");
      $(forms[0]).attr('placeholder', "Username:");
      $(forms[1]).attr('placeholder', "Password:"); 
    }, 3000);
  }
//Check for the same username requirements
  else if (!forms[0].checkValidity() || (name.length < 5) || (name.length > 25) ||
  (!name.match(/\d/)) || (!name.match(/[a-z]/)) ){
      $(forms[0]).addClass('error');
    setTimeout(function(){ 
      $(forms[0]).removeClass('error');
    }, 3000);
  }
//Check for the same password requirements
  else if (!forms[1].checkValidity() || (pass.length < 8) || (pass.length > 30) ||
  (!pass.match(/\d/)) || (!pass.match(/[A-Z]/)) || (!pass.match(/[a-z]/)) ){
      $(forms[1]).addClass('error');
    setTimeout(function(){ 
      $(forms[1]).removeClass('error');
    }, 3000);
  }
//Successful login message if correct  
  else {
    $("#Login").css("visibility","hidden");
    $("#LoggedIn").css("visibility","visible");
  } 
}

// Hint boxes explaining the sign up requirements appear when mouse hovers on the white circle ----------
//Username hint
$("#NameHint").mouseover(function(){
  $("#NameHintBox").css("visibility","visible");
});
$("#NameHint").mouseleave (function(){
  $("#NameHintBox").css("visibility","hidden");
});
//Password hint
$("#PassHint").mouseover(function(){
  $("#PassHintBox").css("visibility","visible");
});
$("#PassHint").mouseleave (function(){
  $("#PassHintBox").css("visibility","hidden");
});

// Create the Create/ Login buttons and apply the above written functions on click ---------------------
var createButton = document.getElementById('SubmitCreate');
var loginButton = document.getElementById('SubmitLogin');

createButton.addEventListener('click', createErrors, true); 
loginButton.addEventListener('click', loginErrors, true);  
//------------------------------------------------------------------------------------------------------ 
});
