/* Code references:
https://www.sitepoint.com/create-qr-code-reader-mobile-website/
(Barcode Image processing library)
https://github.com/zxing/zxing
(.getUserMedia())
https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
(Block css animation)
https://freefrontend.com/css-animation-examples/

(Needs wifi to link properly)
*/

$(document).ready(function(){
// Delay appearance of 'Start the scanner button' for effect ------------------------------------------------------ 
  $('#ScannerButton').delay(3785).fadeIn(2000);

//---------------------------------------------------------------------------------------------------
// Creating the camera window/ video ------------------------------------------------------------------------------
var qrcode = window.qrcode;
var video = document.createElement("video");
var canvasElement = document.getElementById("qr-canvas");
var canvas = canvasElement.getContext("2d");

//Buttons --------------------------------------------------------------------------------------------------------
var scannerButton = document.getElementById("ScannerButton");     //Initial, start the scanner
var retryButton = document.getElementById("Retry");               //Scan again
var stopScan = document.getElementById("Stop");                   //Stop scaning
var backToAccount = document.getElementById("BackToAccount");     //Back to My account
var inputProduct = document.getElementById("ProductInfoInput");   //Submit input product info
//Result of the scan --------------------------------------------------------------------------------------------
//Will be used later with databases to store the actual information provided by the QR code
var results = document.getElementById("Result");
//var outputData = document.getElementById("outputData"); //Will be used later with databases

//The Scanning function ----------------------------------------------------------------------------------
let scanning = false;
qrcode.callback = res => {
  if (res) {
//--------------------------------------------------------------------------------------
    console.log("Successful scan");
    scanning = false;
        video.srcObject.getTracks().forEach(track => {
        track.stop();
        });
// On a successful scan: ---------------------------------------------------------------
    canvasElement.hidden = true;                      //hide the video
    scannerButton.hidden = false;                     //show the start scanning button
    inputProduct.style.display = "inline-block";      //display the input fields
  }
//--------------------------------------------------------------------------------------
  else{
    alert("Unable to scan. Please try another barcode!");
    canvasElement.hidden = true;
    scannerButton.hidden = false;
  }
};

//Button hoover effects (changes colours) -----------------------------------------------------------------
$("#ScannerButton").mouseover(function(){
  $("#ClickHere").css("-webkit-text-fill-color", "#ffe761"); 
});
$("#ScannerButton").mouseleave (function(){
  $("#ClickHere").css("-webkit-text-fill-color", "black");
});
//--------------------------------------------------------------------
$("#BackToAccount").mouseover(function(){
  $("#AccountLink").css("color", "white");
});
$("#BackToAccount").mouseleave (function(){
  $("#AccountLink").css("color", "black");
});

//Start scanner when initial white rectangle is clicked -----------------------------------------------------
scannerButton.onclick = () => {
//Uses MediaDevices's getUserMedia() method to propt the user for camera access permission 
   navigator.mediaDevices.getUserMedia({video: {facingMode: "environment"} } ).then(function(stream) {
      scanning = true;
      console.log("Triggered");  //check
//--------------------------------------------------------------------
      scannerButton.style.display = "none";          //hide the big rectangle
      canvasElement.hidden = false;                  //show the canvas element which contains the video
      stopScan.style.display = "inline-block";       //show the 'stop scanning' button
      backToAccount.style.display = "inline-block";  //show the 'back to account' button
//--------------------------------------------------------------------
      video.setAttribute("playsinline", true);  //required for safari to not display the video on full screen
      video.srcObject = stream;                 //video stream
      video.play();                             //play video
      tick();                                   //start tracking (successful if there is a valid QRcode on screen) 
      console.log("Searching");               
      scan();                                   //start scanning
      console.log("Scanning");
  });
};

//Stopping the scanner with the 'stop scanning' button (returns to the starting point) -----------------------
stopScan.onclick = () => {
  scanning = false;                                 //stop the scanning function 
  results.style.display = "none";                   //hide the results
  scannerButton.style.display = "block";            //display the intial big rectangle again
  canvasElement.hidden = true;                      //hide the canvas for the video
//Hide the small buttons 
  stopScan.style.display = "none";                  
  retryButton.style.display = "none";               
  backToAccount.style.display = "none";
//Hide the input fields             
  inputProduct.style.display = "none";
//Stop the trancing function
  video.srcObject.getTracks().forEach(track => {
     track.stop();
  });
};
//Starting the scanner again after a successful scan --------------------------------------------------------
retryButton.onclick = () => {
  navigator.mediaDevices.getUserMedia({video: {facingMode: "environment"} } ).then(function(stream) {
      scannerButton.style.display = "none";  //hide the big white starting rectange
      retryButton.style.display = "none";    //hide the 'scan again button'
      results.style.display = "none";        //hide the results
//--------------------------------------------------------------------
      scanning = true;                           //start the scanning
      canvasElement.hidden = false;              //display the canvas for the video
      video.setAttribute("playsinline", true);   //tell safari not to put video on full screen
      video.srcObject = stream;
      video.play();                              //play video, track and scan
      tick();
      scan();
//--------------------------------------------------------------------
    stopScan.style.display = "inline-block";        //display the two buttons below the video canvas
    backToAccount.style.display = "inline-block";
  });
};

// User inputs product's information ---------------------------------------------------------------------------
//Reuses the function for checking the input in the fields from the Login Page
function createErrors(){  
  var forms = document.getElementsByClassName("InfoInput");
  var name = $(forms[name = "name"]).val();
  var brand = $(forms[name = "brand"]).val();
//--------------------------------------------------------------------
  if( $.trim( $(forms).val()) == '' ){
    $(forms).attr('placeholder', "Required field"); 
    $(forms).addClass('red');
    $(forms).addClass('error');
  
    setTimeout(function(){ 
       $(forms).removeClass("red");
       $(forms).removeClass("error");
       $(forms[0]).attr('placeholder', "Username:");
       $(forms[1]).attr('placeholder', "Email:"); 
       $(forms[2]).attr('placeholder', "Password:"); 
    }, 3000);
  }
//--------------------------------------------------------------------
  else if (!forms[0].checkValidity() || (name.length < 1)){
       $(forms[0]).addClass('error');
       setTimeout(function(){ 
          $(forms[0]).removeClass('error');
       }, 3000);
  }
//--------------------------------------------------------------------
  else if (!forms[1].checkValidity() || (brand.length < 1)){
       $(forms[1]).addClass('error');
       setTimeout(function(){ 
          $(forms[1]).removeClass('error');
       }, 3000);
  }
//--------------------------------------------------------------------
  else if (!forms[2].checkValidity()){
     $(forms[2]).addClass('error');
     setTimeout(function(){ 
        $(forms[2]).removeClass('error');
     }, 3000);
  }
// If requirements met, display the result (circle with the number of points) and all small buttons ---------
  else {
    retryButton.style.display = "inline-block";
    inputProduct.style.display = "none";
    results.style.display = "inline-block";
  } 
}

//Creating the submit field input button and adding the function to it --------------------------------------
var submitProduct = document.getElementById('SubmitProduct');
submitProduct.addEventListener('click', createErrors, true); 

//Decoding/ scanning and tracking functions ------------------------------------------------------------------
function tick() {
  canvasElement.height = video.videoHeight;
  canvasElement.width = video.videoWidth;
  canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
  scanning && requestAnimationFrame(tick);
}
//--------------------------------------------------------------------
function scan() {
  try {
     qrcode.decode();
  }
  catch (e) {
     setTimeout(scan, 300);
  }
}
//------------------------------------------------------------------------------------------------------------
});