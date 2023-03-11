// bowl & cone buttons

/*$("#bowl").click(function () {
  if (this.checked) {
    $("#bowlOutput").show();
  } else {
    $("#bowlOutput").hide();
  }
});
$("#cone").click(function () {
  if (this.checked) {
    $("#coneOutput").show();
  } else {
    $("#coneOutput").hide();
  }
});

/* flavor buttons */

$("#checkbox1").click(function () {
  if (this.checked) {
    $("#input1").show(); /* shows quantity button upon checking box*/
    $("#vanillaOutput").show();
  } else {
    $("#input1").hide(); /* hides quantity button upon unchecking box*/
    $("#vanillaOutput").hide();
  }
});
$("#checkbox2").click(function () {
  if (this.checked) {
    $("#input2").show();
    $("#chocolateOutput").show();
  } else {
    $("#input2").hide();
    $("#chocolateOutput").hide();
  }
});
$("#checkbox3").click(function () {
  if (this.checked) {
    $("#input3").show();
    $("#strawberryOutput").show();
  } else {
    $("#input3").hide();
    $("#strawberryOutput").hide();
  }
});
$("#checkbox4").click(function () {
  if (this.checked) {
    $("#input4").show();
    $("#pistachioOutput").show();
  } else {
    $("#input4").hide();
    $("#pistachioOutput").hide();
  }
});
$("#checkbox5").click(function () {
  if (this.checked) {
    $("#input5").show();
    $("#bananaOutput").show();
  } else {
    $("#input5").hide();
    $("#bananaOutput").hide();
  }
});
$("#checkbox6").click(function () {
  if (this.checked) {
    $("#input6").show();
    $("#chocolateChipOutput").show();
  } else {
    $("#input6").hide();
    $("#chocolateChipOutput").hide();
  }
});

// topping buttons



/* catagory slide down effect on mobile */

$("#sizesBtn").click(function () {
  $("#sizesCont").slideToggle("fast");
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

/* reset button */

$(document).ready(function () {
  $("#resetBtn").click(function () {
    location.reload(true);
  });
});

// working for one id at a time
/*function flavorOutput1() {
  var checkBox = document.getElementById("checkbox1");
  var basketText = document.getElementById("vanillaOutput");
  if (checkBox.checked == true) {
    basketText.style.display = "block";
  } else {
    basketText.style.display = "none";
  }
}

//const flavorsList = document.querySelectorAll("#checkbox1, #checkbox2, #checkbox3, #checkbox4, #checkbox5, #checkbox6");

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
