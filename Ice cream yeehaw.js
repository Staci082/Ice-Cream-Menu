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

$("#flavor5").click(function () {
  if (this.checked) {
    $("#input5").show();
    $("#flavorOutput5").show();
  } else {
    $("#input5").hide();
    $("#flavorOutput5").hide();
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
