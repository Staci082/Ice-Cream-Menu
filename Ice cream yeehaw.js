const basketOutput = document.querySelector(".basket-output");

//scoop buttons

$(".scoopsList").on("click", ":checkbox", function (e) {
  // this function turns checkboxes into radio buttons
  $(".scoopsList :checkbox").each(function () {
    if (this != e.target) $(this).prop("checked", false);
  });
});

// bowl & cone buttons
$(".bowlConeList").on("click", ":checkbox", function (e) {
  $(".bowlConeList :checkbox").each(function () {
    if (this != e.target) $(this).prop("checked", false);
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

// controls how many checkboxes are allowed to be checked at once

$("input[type='checkbox']").change(function () {
  var max_allowed = 3;
  // count how many boxes have been checked.
  var checked = $("input[type='checkbox']:checked").size();
  // perform test
  if (checked > max_allowed) {
    // is more than the max so uncheck.
    $(this).attr("checked", false);
  }
});

// topping buttons

$("#topping1").click(function () {
  if (this.checked) {
    $("#toppingOutput1").show();
    $("#noToppingsOutput").hide();
    $("#noToppings").prop("checked", false);
  } else {
    $("#toppingOutput1").hide();
  }
});
$("#topping2").click(function () {
  if (this.checked) {
    $("#toppingOutput2").show();
    $("#noToppingsOutput").hide();
    $("#noToppings").prop("checked", false);
  } else {
    $("#toppingOutput2").hide();
  }
});
$("#topping3").click(function () {
  if (this.checked) {
    $("#toppingOutput3").show();
    $("#noToppingsOutput").hide();
    $("#noToppings").prop("checked", false);
  } else {
    $("#toppingOutput3").hide();
  }
});
$("#topping4").click(function () {
  if (this.checked) {
    $("#toppingOutput4").show();
    $("#noToppingsOutput").hide();
    $("#noToppings").prop("checked", false);
  } else {
    $("#toppingOutput4").hide();
  }
});
$("#topping5").click(function () {
  if (this.checked) {
    $("#toppingOutput5").show();
    $("#noToppingsOutput").hide();
    $("#noToppings").prop("checked", false);
  } else {
    $("#toppingOutput5").hide();
  }
});

$("#noToppings").click(function () {
  // no toppings
  if (this.checked) {
    $("#noToppingsOutput").show();
    //removing other toppings when none is checked
    $("#toppingOutput1, #toppingOutput2, #toppingOutput3, #toppingOutput4, #toppingOutput5"
    ).hide();
    $("#topping1, #topping2, #topping3, #topping4, #topping5").prop(
      "checked", false);
  } else {
    $("#noToppingsOutput").hide();
  }
});

// prices

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

basketOutput.addEventListener("click", deleteCheck);

function deleteCheck(e) {
  const item = e.target;

  if (item.classList[0] === "delete") {
    const trash = item.parentElement;
    trash.remove();
  }
}

//flavors

$("#deleteF1").click(function () {
  $("#flavor1").prop("checked");
  $("#input1").hide();
});
$("#deleteF2").click(function () {
  $("#flavor2").prop("checked", false);
  $("#input2").hide();
});
$("#deleteF3").click(function () {
  $("#flavor3").prop("checked", false);
  $("#input3").hide();
});
$("#deleteF4").click(function () {
  $("#flavor4").prop("checked", false);
  $("#input4").hide();
});
$("#deleteF5").click(function () {
  $("#flavor5").prop("checked", false);
  $("#input5").hide();
});
$("#deleteF6").click(function () {
  $("#flavor6").prop("checked", false);
  $("#input6").hide();
});

//toppings

$("#deleteT1").click(function () {
  $("#topping1").prop("checked", false);
});
$("#deleteT2").click(function () {
  $("#topping2").prop("checked", false);
});
$("#deleteT3").click(function () {
  $("#topping3").prop("checked", false);
});
$("#deleteT4").click(function () {
  $("#topping4").prop("checked", false);
});
$("#deleteT5").click(function () {
  $("#topping5").prop("checked", false);
});
$("#deleteT6").click(function () {
  $("#noToppings").prop("checked", false);
});

/* reset button */

$("#resetBtn").click(function () {
  location.reload(true);
});
