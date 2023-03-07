/* reset button */

$(document).ready(function(){
    $(".resetbtn").click(function(){
        location.reload(true);
    });
});


/* quantity buttons */

$('#checkbox1').click(function () {
    if (this.checked) {
      $('#input1').show();  /* shows quantity button apon checking*/
    } else {
      $('#input1').hide();  /* hides quantity button apon unchecking*/
    }
  })

  $('#checkbox2').click(function () {
    if (this.checked) {
      $('#input2').show();
    } else {
      $('#input2').hide();
    }
  })
  $('#checkbox3').click(function () {
    if (this.checked) {
      $('#input3').show();
    } else {
      $('#input3').hide();
    }
  })
  $('#checkbox4').click(function () {
    if (this.checked) {
      $('#input4').show();
    } else {
      $('#input4').hide();
    }
  })
  $('#checkbox5').click(function () {
    if (this.checked) {
      $('#input5').show();
    } else {
      $('#input5').hide();
    }
  })
  $('#checkbox6').click(function () {
    if (this.checked) {
      $('#input6').show();
    } else {
      $('#input6').hide();
    }
  })


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

  $("#catagorie-btn").click(function(){
    $("#choice-cont").slideToggle("slow");
  }); */

