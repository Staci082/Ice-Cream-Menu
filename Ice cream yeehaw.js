// radio buttons //
$(document).ready(function(){


document.querySelector('input[name="scoopbtn"]:checked') 

document.querySelector('input[name="bowl-conebtn"]:checked') 

$(document).ready(function(){
    $(".resetbtn").click(function(){
        location.reload(true);
    });
});

$('#checkbox').click(function () {
    if (this.checked) {
      $('#input').hide();
    } else {
      $('#input').show();
    }
  })

function ValidateFlavorSelection()  {  
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

  $("#catagorie-btn").click(function(){
    $("#choice-cont").slideToggle("slow");
  });
})
