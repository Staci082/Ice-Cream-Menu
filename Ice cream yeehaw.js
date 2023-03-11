/* quantity flavor buttons */

$("#checkbox1").click(function () {
  if (this.checked) {
    $("#input1").show(); /* shows quantity button upon checking box*/
  } else {
    $("#input1").hide(); /* hides quantity button upon unchecking box*/
  }
});

$("#checkbox2").click(function () {
  if (this.checked) {
    $("#input2").show();
  } else {
    $("#input2").hide();
  }
});
$("#checkbox3").click(function () {
  if (this.checked) {
    $("#input3").show();
  } else {
    $("#input3").hide();
  }
});
$("#checkbox4").click(function () {
  if (this.checked) {
    $("#input4").show();
  } else {
    $("#input4").hide();
  }
});
$("#checkbox5").click(function () {
  if (this.checked) {
    $("#input5").show();
  } else {
    $("#input5").hide();
  }
});
$("#checkbox6").click(function () {
  if (this.checked) {
    $("#input6").show();
  } else {
    $("#input6").hide();
  }
});

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
function flavorOutput1() {
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
