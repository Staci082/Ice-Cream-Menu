const basketOutput = document.querySelector(".basket-output");

//scoop buttons

$(".scoopsList").on("click", ":checkbox", function (e) {   // this function turns checkboxes into radio buttons (only allowed to select one)
  $(".scoopsList :checkbox").each(function () {
    if (this != e.target) $(this).prop("checked", false);
  });
});


// try quantity buttons in the basket, less code



$("#scoop1").click(function () { // upon click
  if (this.checked) {
    $("#1eur").show();  // shows price in basket
    $("#2eur").hide();  // hides other prices in case they have been clicked on before 
    $("#3eur").hide();
    $("#flavorsCont").on("click", ":checkbox", function(event){  // sets maximum allowed flavors (works with form in HTML)
      $(":checkbox:not(:checked)", this.form).prop("disabled", function(){
        return $(this.form).find(":checkbox:checked").length == 1;
      });
      $(".quantity").hide();
    });
  } else {
    $("#1eur").hide();
  }
});

$("#scoop2").click(function () {
  if (this.checked) {
    $("#1eur").hide();
    $("#2eur").show();
    $("#3eur").hide();
    $("#flavorsCont").on("click", ":checkbox", function(event){
      $(":checkbox:not(:checked)", this.form).prop("disabled", function(){
        return $(this.form).find(":checkbox:checked").length == 2;
      });
      $(".quantity").attr({
        "max" : 2,
        "min" : 1
      })
    });
  } else {
    $("#2eur").hide();
  }
});

$("#scoop3").click(function () {
  if (this.checked) {
    $("#1eur").hide();
    $("#2eur").hide();
    $("#3eur").show();
    $("#flavorsCont").on("click", ":checkbox", function(event){
      $(":checkbox:not(:checked)", this.form).prop("disabled", function(){
        return $(this.form).find(":checkbox:checked").length == 3;
      });
      $(".quantity").attr({
        "max" : 3,
        "min" : 1
    })
    });
  } else {
    $("#3eur").hide();
  }
});


// bowl & cone buttons

$(".bowlConeList").on("click", ":checkbox", function (e) {   // this function turns checkboxes into radio buttons (only allowed to select one)
  $(".bowlConeList :checkbox").each(function () {
    if (this != e.target) $(this).prop("checked", false);
  });
});

$("#bowl").click(function () {
  if (this.checked) {
    $("#bowlOutput").show(); // shows bowl in basket
    $("#coneOutput").hide(); // hides cone in basket in case it was clicked before this
  } else {
    $("#bowlOutput").hide();  // hides bowl in basket
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


// flavor buttons 

$("#flavor1").click(function () {
  if (this.checked) {
    $("#input1").show();   // shows quantity button upon checking box
    $("#flavorOutput1").show();  //shows flavor in basket
  } else {
    $("#input1").hide();  // hides quantity button upon unchecking box
    $("#flavorOutput1").hide();  //hides flavor in basket
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

$("#toppingsCont").on("click", ":checkbox", function(event){    // this makes the maximum about of choices to 3
  $(":checkbox:not(:checked)", this.form).prop("disabled", function(){
    return $(this.form).find(":checkbox:checked").length == 3;
  });
});

$("#topping1").click(function () {
  if (this.checked) {  
    $("#toppingOutput1").show();  //show topping in basket
    $("#noToppingsOutput").hide();  // hides no toppings output in case it was clicked before this
    $("#noToppings").prop("checked", false);  // unchecks 'none' checkbox (no toppings)
  } else {
    $("#toppingOutput1").hide(); // hide topping in basket
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


// catagory slide down effect on mobile 

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


// delete buttons

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
  $("#flavor1").prop("checked", false);   // unchecks checkbox after deleting from basket
  $("#input1, #val1").hide();
});
$("#deleteF2").click(function () {
  $("#flavor2").prop("checked", false);
  $("#input2, #val2").hide();
});
$("#deleteF3").click(function () {
  $("#flavor3").prop("checked", false);
  $("#input3, #val3").hide();
});
$("#deleteF4").click(function () {
  $("#flavor4").prop("checked", false);
  $("#input4, #val4").hide();
});
$("#deleteF5").click(function () {
  $("#flavor5").prop("checked", false);
  $("#input5, #val5").hide();
});
$("#deleteF6").click(function () {
  $("#flavor6").prop("checked", false);
  $("#input6, #val6").hide();
});


// quantity value

function getVal() {  // function is executed in the HTML, onChange="()"
  let A = document.getElementById("input1").value;  // gets value from mentioned ID
  document.getElementById("val1").innerHTML = A;    // puts value into the HTML ID

  let B = document.getElementById("input2").value;
  document.getElementById("val2").innerHTML = B;

  let C = document.getElementById("input3").value;
  document.getElementById("val3").innerHTML = C;

  let D = document.getElementById("input4").value;
  document.getElementById("val4").innerHTML = D;

  let E = document.getElementById("input5").value;
  document.getElementById("val5").innerHTML = E;

  let F = document.getElementById("input6").value;
  document.getElementById("val6").innerHTML = F;
}


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
  location.reload(true);   // reloads whole page
});
