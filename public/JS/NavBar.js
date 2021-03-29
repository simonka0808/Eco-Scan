$(document).ready(function(){
  
    // Nav bar drop down/ toggle with the rectangle in the top right -------------------------------------------     
    $("#Navigation").click(
        function () { 
          $("#HomeDropdown").css("visibility","hidden");
          $("#RecycleDropdown").css("visibility","hidden");
          $('#Main').toggle();
    });       
    
    $("#Main").hide(); 
    
    // Additional drop downs appear (on the left) on mouse hover ------------------------ 
    $("#Account").mouseover(function(){
          $("#HomeDropdown").css("visibility","visible");
          $("#RecycleDropdown").css("visibility","hidden");
    });
    $("#HomeDropdown").mouseleave (function(){
          $("#HomeDropdown").css("visibility","hidden");
    });
    //----------------------------------------------------------------------------------- 
    $("#System").mouseover(function(){
          $("#RecycleDropdown").css("visibility","visible");
          $("#HomeDropdown").css("visibility","hidden"); //hide the other dropdown
    });
    $("#RecycleDropdown").mouseleave (function(){
          $("#RecycleDropdown").css("visibility","hidden");
    });
    
    // Remove the dropdowns when mouse hover on the other unrelated boxes ---------------
    $("#EcoShop").mouseover(function(){
          $("#HomeDropdown").css("visibility","hidden");
          $("#RecycleDropdown").css("visibility","hidden");
    });
    //-----------------------------------------------------------------------------------
    $("#Login-Signup").mouseover(function(){
          $("#HomeDropdown").css("visibility","hidden");
          $("#RecycleDropdown").css("visibility","hidden");
    });   
    $("#ArticlesBox").mouseover(function(){
      $("#HomeDropdown").css("visibility","hidden");
      $("#RecycleDropdown").css("visibility","hidden");
    });

});