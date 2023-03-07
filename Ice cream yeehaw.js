
$(document).ready(function(){
    $(".resetbtn").click(function(){
        location.reload(true);
    });
});

$('#checkbox').click(function () {
    if (this.checked) {
      $('#input').show();
    } else {
      $('#input').hide();
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

