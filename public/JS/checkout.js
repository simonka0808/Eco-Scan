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
  $("#Continue").addClass("disabled");//initially disable this button so that the user cant proceed to the next page

  $("input[type=text]").keyup(function () {
    var empty = check();
    if (empty) { //if everything is true remove the class
      $("#Continue").removeClass("disabled");
    } else {
      $("#Continue").addClass("disabled"); // if there is a mistake at the fields activate the disable button
    }
  });

  $("#Continue").click(function () { //if the button continue is clicked check the fields
    //delete the previous information
    $("#p1").html("");
    $("#p2").html("");
    $("#p3").html("");
    // if it is not true display the appropirate message 
    if (checkAddress() != true) {
      $(".shipping-address").after(`<p id="p1">${checkAddress()}</p>`);
    }
    if (checkEmail() != true) {
      $(".email").after(`<p id="p2">${checkEmail()}</p>`);
    }
    if (checkPhone() != true) {
      $(".phone").after(`<p id="p3">${checkPhone()}</p>`);
    }
    if ($(this).hasClass("disabled")) return false;
  });
});

function check() {
  empty = false;
  if (
    checkAddress() === true &&
    checkEmail() === true &&
    checkPhone() === true
  ) {
    empty = true;
  } else {
    empty = false;
  }
  return empty;
}

//function that checks the addess
function checkAddress() {
  let shippingAddress = document.getElementById("inputAddress").value;
  let error = "";
  const lettersNumbs = /^[A-Za-z\d\s]+$/; //any alphabetic or numeric character
  if (shippingAddress === null || shippingAddress === "") { 
    error = "&bull; Please enter valid shipping address<br>";
  } else if (!(shippingAddress.length > 5 && shippingAddress.length < 50)) {
    error = "&bull; Invalid<br>";
  } else if (!lettersNumbs.test(shippingAddress)) {
    error = "&bull;Use a correct format<br>";
  } else {
    error = true;
  }
  return error;
}
//function that checks if the phone input contains other symbols
function checkPhone() {
  let phone = document.getElementById("inputPhone").value;
  let error = "";
  phone = phone + "";
  phone.trim();//removes whitespaces
  const numbers = /^[\d]+$/; //only numbers
  if (phone === null || phone == "") {
    error = "&bull; Please enter a valid phone number<br>";
  } else if (!(phone.length === 10 || phone.length === 15)) {
    error = "&bull; Invalid<br>";
  } else if (!numbers.test(phone)) { //if contains anything different from a number
    error = "&bull;Use a correct format<br>";
  } else {
    error = true;
  }
  return error;
}
//function that checks if the email is in correct format
function checkEmail() {
  let email = document.getElementById("inputEmail").value;
  let error = "";
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email == null || email == "") {
    error = "&bull; Please enter valid email<br>";
  } else if (!emailRegex.test(email)) {
    error = "&bull;Use a correct format<br>";
  } else {
    error = true;
  }
  return error;
}
