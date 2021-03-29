$(document).ready(function(){

//Reveal all boxes at once for accessibility and to have the option (from green to white with black text) 
  function revealMenu(){  
    //console.log("function triggered"); 
  var menu = document.getElementsByClassName("menuBox");  //get menu the boxes
  var menuText =  document.getElementsByClassName("menuText");  //get the text of the boxes
  
   for (var i = 0; i< menu.length; i++){  //loop through the collection of the boxes
    //console.log("loop triggered");           
      menu.item(i).style.backgroundColor = "#ebede2";  //change colour to white
      menu.item(i).style.opacity = "1";                //return to full opacity
      menuText.item(i).style.color = "#0a1208";        //change text to black
      menuText.item(i).style.opacity = "1";            //return to full opacity
    // console.log("divs triggered");  
  } 
}
//Add the function with oncklick event to the text (serves as a button)
 var button = document.getElementById('Button');
button.addEventListener('click', revealMenu, true); 

//----------------------------------------------------------------------------------------------------------
// JS code to change the Quicklinks images to green ones on mouse hover ------------------------------------
// First box -----------------------------------------------------------------------------------------------
function recycleToGreen(){  
  document.getElementById("BlackRecycle").src = "../Images/GreenRecycle-icon.png";
}
function recycleToBlack(){
  document.getElementById("BlackRecycle").src = "../Images/BlackRecycle-icon.png";
}
var AboutLink= document.getElementById("AboutLink");
AboutLink.addEventListener('mouseover', recycleToGreen, true); 
AboutLink.addEventListener("mouseout", recycleToBlack, true);

// Second box ----------------------------------------------------------------------------------------------
function pinToGreen(){  
  document.getElementById("BlackPin").src = "../Images/GreenPin-icon.png";
}
function pinToBlack(){
  document.getElementById("BlackPin").src = "../Images/BlackPin-icon.png";
}
var WhereLink= document.getElementById("WhereLink");
WhereLink.addEventListener('mouseover', pinToGreen, true); 
WhereLink.addEventListener("mouseout", pinToBlack, true);

// Third box ------------------------------------------------------------------------------------------------
function barcodeToGreen(){  
  document.getElementById("BlackBarcode").src = "../Images/GreenBarcode-icon.png";
}
function barcodeToBlack(){
  document.getElementById("BlackBarcode").src = "../Images/BlackBarcode-icon.jpg";
}
var ScannerLink= document.getElementById("ScannerLink");
ScannerLink.addEventListener('mouseover', barcodeToGreen, true); 
ScannerLink.addEventListener("mouseout", barcodeToBlack, true);

// Fourth box =----------------------------------------------------------------------------------------------
function shoppingToGreen(){  
  document.getElementById("BlackShopping").src = "../Images/GreenShopping-icon.png";
}
function shoppingToBlack(){
  document.getElementById("BlackShopping").src = "../Images/BlackShopping-bag-icon.png";
}
var ScannerLink= document.getElementById("ShopLink");
ShopLink.addEventListener('mouseover', shoppingToGreen, true); 
ShopLink.addEventListener("mouseout", shoppingToBlack, true);
//-----------------------------------------------------------------------------------------------------------

}); 

