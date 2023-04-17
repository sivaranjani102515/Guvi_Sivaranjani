function loginCheck() 
{ 
  var Email = document.forms["myform"]["email"].value;
  var Password = document.forms["myform"]["password"].value;

 /* $.ajax({
    url: "login.php",
    type: "POST",
    dataType: "json",
    data: {email: Email,  password: Password},
  
    success: function(result) {
      window.location.href = "profile.html";
    }
 });
}*/
$(document).ready(function() {
  $('#butlogin').on('click', function() {
  $("#butlogin").attr("disabled", "disabled");
  
  if(Email!="" && Password!="" ){
    $.ajax({
      url: "../php/login.php",
      type: "POST",
      data: {
        email: Email,
        password: Password			
      },
      async:false,
      cache: false,
      success: function(dataResult){
        // var dataResult = JSON.parse(dataResult);
        if(dataResult=="success"){
          $("#butlogin").removeAttr("disabled");
          $('#fupForm').find('input:text').val('');
          $("#success").show();
          $('#success').html('success !');
        }
        else {
          alert(dataResult);
        }
      }
    });
    }
    else{
      alert('Please fill all the field !');
    }
  });
  });
}