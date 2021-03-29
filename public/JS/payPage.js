$(document).ready(function () {
  $("#Navigation").click(
    function () { 
      $("#HomeDropdown").css("visibility","hidden");
      $("#RecycleDropdown").css("visibility","hidden");
      $('#Main').toggle();
});       

$("#Main").hide(); 

//-------------------------------------------------------------------- 
$("#Account").mouseover(function(){
      $("#HomeDropdown").css("visibility","visible");
      $("#RecycleDropdown").css("visibility","hidden");
});
$("#HomeDropdown").mouseleave (function(){
      $("#HomeDropdown").css("visibility","hidden");
});
//-------------------------------------------------------------------- 
$("#System").mouseover(function(){
      $("#RecycleDropdown").css("visibility","visible");
      $("#HomeDropdown").css("visibility","hidden");
});
//--------------------------------------------------------------------
$("#RecycleDropdown").mouseleave (function(){
      $("#RecycleDropdown").css("visibility","hidden");
});
//-------------------------------------------------------------------
$("#EcoShop").mouseover(function(){
      $("#HomeDropdown").css("visibility","hidden");
      $("#RecycleDropdown").css("visibility","hidden");
});
//-------------------------------------------------------------------
$("#Scanner").mouseover(function(){
      $("#HomeDropdown").css("visibility","hidden");
      $("#RecycleDropdown").css("visibility","hidden");
});   
});

$(function () {
  $("#pay").addClass("disabled"); //initially disable the button so that user cannot proceed on the next page
  $("input[type=text]").keyup(function () {
    var empty = check();

    if (empty) {  // if all the inputs are in the correct format(continue)
      $("#pay").removeClass("disabled");
    } 
    else {
      $("#pay").addClass("disabled");//if not the button is still disabled
    }
  });

  //if the pay button is clicked do the following checks:
  $("#pay").click(function () {
    $("#p1").html("");
    $("#p2").html("");
    $("#p3").html("");
    $("#p4").html("");
    //if the input is false display the appropriate message
    if (checkCardHolder() != true) {
      $(".card-holder").after(`<p id="p1">${checkCardHolder()}</p>`);
    }
    if (checkCardNumber() != true) {
      $(".card-number").after(`<p id="p2">${checkCardNumber()}</p>`);
    }
    if (checkExpDate() != true) {
      $(".exp-date").after(`<p id="p3">${checkExpDate()}</p>`);
    }
    if (checkCVC() != true) {
      $(".cvc").after(`<p id="p4">${checkCVC()}</p>`);
    }
    if ($(this).hasClass("disabled")) return false;
  });
});

//function which returns true or false based on the user input
function check() {
  var empty = false;
  if (
    checkCVC() === true &&
    checkCardHolder() === true &&
    checkCardNumber() === true &&
    checkExpDate() === true
  ) {
    empty = true;
  } else {
    empty = false;
  }
  return empty;
}

//4 main functions which check the user`s inputs
function checkCardHolder() {
  let inputUser = document.getElementById("inputUser").value;
  let error = "";
  const letters = /^[A-Za-z\s]+$/; //only alphabetis symbols

  if (inputUser === null || inputUser === "") {
    error = "&bull; Please enter valid Card Holder<br>";
  } else if (inputUser.length < 2 && inputUser.length > 35) {
    error = "&bull; Please enter valid name<br>";
  } else if (!letters.test(inputUser)) {
    error = "&bull;Use a correct format<br>";
  } else {
    error = true;
  }

  return error;
}

function checkCardNumber() {
  let cardNum = document.getElementById("cardNum").value;
  const numbers = /^[\d]{16}$/; //only numerics numbers with length of 16
  let error = "";

  if (cardNum === null || cardNum === "") {
    error = "&bull; Please enter a valid card number<br>";
  } else if (!numbers.test(cardNum)) {
    error = "&bull;Use a correct format<br>";
  } else {
    error = true;
  }

  return error;
}

function checkCVC() {
  let cvc = document.getElementById("cvc").value;
  const numbers = /^[\d]{3}$/; //only numeric value with length of 3
  let error = "";

  if (cvc === null || cvc === "") {
    error = "Empty Content! Try again! <br>";
  } else if (!numbers.test(cvc)) {
    error = "Invalid!<br>";
  } else {
    error = true;
  }
  return error;
}
function checkExpDate() {
  let expDate = document.getElementById("expDate").value;
  const numbers = /^[\d\/\d]{5}$/;//two numbers separeted by a slash(5 symbols) 05 / 02
  let error = "";

  if (expDate === null || expDate === "") {
    error = " Empty content!Try again <br>";
  } else if (!numbers.test(expDate)) {
    error = "Use a correct format <br>";
  } else {
    error = true;
  }
  return error;
}
