// bowl & cone buttons

$('.bowlConeList').on('click', ':checkbox', function(e) {   // this function turns checkboxes into radio buttons
  $('.bowlConeList :checkbox').each(function() {
    if (this != e.target)
      $(this).prop('checked', false);
  });
});
$("#bowl").click(function () {
  if (this.checked) {
    $("#bowlOutput").show();
    $("#coneOutput").hide();
  } else {
    $("#bowlOutput").hide();
  }
});
$("#cone").click(function () {
  if (this.checked) {
    $("#coneOutput").show();
    $("#bowlOutput").hide();
  } else {
    $("#coneOutput").hide();
  }
});

/* flavor buttons */

$("#flavor1").click(function () {
  if (this.checked) {
    $("#input1").show(); /* shows quantity button upon checking box*/
    $("#flavorOutput1").show();
  } else {
    $("#input1").hide(); /* hides quantity button upon unchecking box*/
    $("#flavorOutput1").hide();
  }
});
$("#flavor2").click(function () {
  if (this.checked) {
    $("#input2").show();
    $("#flavorOutput2").show();
  } else {
    $("#input2").hide();
    $("#flavorOutput2").hide();
  }
});
$("#flavor3").click(function () {
  if (this.checked) {
    $("#input3").show();
    $("#flavorOutput3").show();
  } else {
    $("#input3").hide();
    $("#flavorOutput3").hide();
  }
});
$("#flavor4").click(function () {
  if (this.checked) {
    $("#input4").show();
    $("#flavorOutput4").show();
  } else {
    $("#input4").hide();
    $("#flavorOutput4").hide();
  }
});
$("#flavor5").click(function () {
  if (this.checked) {
    $("#input5").show();
    $("#flavorOutput5").show();
  } else {
    $("#input5").hide();
    $("#flavorOutput5").hide();
  }
});
$("#flavor6").click(function () {
  if (this.checked) {
    $("#input6").show();
    $("#flavorOutput6").show();
  } else {
    $("#input6").hide();
    $("#flavorOutput6").hide();
  }
});

// topping buttons

$("#topping1").click(function () {
  if (this.checked) {
    $("#toppingOutput1").show();
  } else {
    $("#toppingOutput1").hide();
  }
});
$("#topping2").click(function () {
  if (this.checked) {
    $("#toppingOutput2").show();
  } else {
    $("#toppingOutput2").hide();
  }
});
$("#topping3").click(function () {
  if (this.checked) {
    $("#toppingOutput3").show();
  } else {
    $("#toppingOutput3").hide();
  }
});
$("#topping4").click(function () {
  if (this.checked) {
    $("#toppingOutput4").show();
  } else {
    $("#toppingOutput4").hide();
  }
});
$("#topping5").click(function () {
  if (this.checked) {
    $("#toppingOutput5").show();
  } else {
    $("#toppingOutput5").hide();
  }
});
$("#topping6").click(function () {  // no toppings
  if (this.checked) {
    $("#toppingOutput6").show();
    //removing other toppings when none is checked
    $("p").remove("#toppingOutput1, #toppingOutput2, #toppingOutput3, #toppingOutput4, #toppingOutput5");
    $( "#topping1, #topping2, #topping3, #topping4, #topping5" ).prop( "checked", false );
  } else {
    $("#toppingOutput6").hide();
  }
});

// prices

$('.scoopsList').on('click', ':checkbox', function(e) {   // this function turns checkboxes into radio buttons
  $('.scoopsList :checkbox').each(function() {
    if (this != e.target)
      $(this).prop('checked', false);
  });
});
$("#scoop1").click(function () {
  if (this.checked) {
    $("#1eur").show();
    $("#2eur").hide();
    $("#3eur").hide();
  } else {
    $("#1eur").hide();
  }
});
$("#scoop2").click(function () {
  if (this.checked) {
    $("#1eur").hide();
    $("#2eur").show();
    $("#3eur").hide();
  } else {
    $("#2eur").hide();
  }
});
$("#scoop3").click(function () {
  if (this.checked) {
    $("#1eur").hide();
    $("#2eur").hide();
    $("#3eur").show();
  } else {
    $("#3eur").hide();
  }
});

/* catagory slide down effect on mobile */

$("#sizesBtn").click(function () {
  $("#sizesCont, #bowlConeCont").slideToggle("fast");
});
$("#flavorsBtn").click(function () {
  $("#flavorsCont").slideToggle("fast");
});
$("#toppingsBtn").click(function () {
  $("#toppingsCont").slideToggle("fast");
});
$("#basketBtn").click(function () {
  $("#basketCont").slideToggle("fast");
});

//delete buttons

//flavors
  $("#deleteF1").click(function(){
    $("p").remove("#flavorOutput1");
    $( "#flavor1" ).prop( "checked", false );
    $("#input1").hide();
  });
  $("#deleteF2").click(function(){
    $("p").remove("#flavorOutput2");
    $( "#flavor2" ).prop( "checked", false );
    $("#input2").hide();
  });
  $("#deleteF3").click(function(){
    $("p").remove("#flavorOutput3");
    $( "#flavor3" ).prop( "checked", false );
    $("#input3").hide();
  });
  $("#deleteF4").click(function(){
    $("p").remove("#flavorOutput4");
    $( "#flavor4" ).prop( "checked", false );
    $("#input4").hide();
  });
  $("#deleteF5").click(function(){
    $("p").remove("#flavorOutput5");
    $( "#flavor5" ).prop( "checked", false );
    $("#input5").hide();
  });
  $("#deleteF6").click(function(){
    $("p").remove("#flavorOutput6");
    $( "#flavor6" ).prop( "checked", false );
    $("#input6").hide();
  });


//toppings
  $("#deleteT1").click(function(){
    $("p").remove("#toppingOutput1");
    $( "#topping1" ).prop( "checked", false );
  });
  $("#deleteT2").click(function(){
    $("p").remove("#toppingOutput2");
    $( "#topping2" ).prop( "checked", false );
  });
  $("#deleteT3").click(function(){
    $("p").remove("#toppingOutput3");
    $( "#topping3" ).prop( "checked", false );
  });
  $("#deleteT4").click(function(){
    $("p").remove("#toppingOutput4");
    $( "#topping4" ).prop( "checked", false );
  });
  $("#deleteT5").click(function(){
    $("p").remove("#toppingOutput5");
    $( "#topping5" ).prop( "checked", false );
  });
  $("#deleteT6").click(function(){
    $("p").remove("#toppingOutput6");
    $( "#topping6" ).prop( "checked", false );
  });



/* reset button */

  $("#resetBtn").click(function () {
    location.reload(true);
  });



// working for one id at a time
/*function flavorOutput1() {
  var checkBox = document.getElementById("flavor1");
  var basketText = document.getElementById("flavorOutput1");
  if (checkBox.checked == true) {
    basketText.style.display = "block";
  } else {
    basketText.style.display = "none";
  }
}

//const flavorsList = document.querySelectorAll("#flavor1, #flavor2, #flavor3, #flavor4, #flavor5, #flavor6");

/* function ValidateFlavorSelection()  {  
      var checkboxes = document.getElementsByName("flavor");  
      var numberOfCheckedItems = 0;  
      for(var i = 0; i < checkboxes.length; i++)  
      {  
          if(checkboxes[i].checked)  
              numberOfCheckedItems++;  
      }  
      if(numberOfCheckedItems > 3)  
      {  
          alert("You can't select more than three flavors!");  
          return false;  
      }  
  }  
  ValidateFlavorSelection()
 */
