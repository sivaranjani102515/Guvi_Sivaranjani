
function create() { 
  var userName = document.forms["register"]["name"].value;
  var userEmail = document.forms["register"]["email"].value;
  var userPassword = document.forms["register"]["password"].value;
  var confirmPassword = document.forms["register"]["confirmPassword"].value;
  var userMobile = document.forms["register"]["mobile"].value;

  // regular expressions for validation
  var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  var mobileRegex = /^[0-9]{10}$/;

  // validate form inputs
  if (!userName.match(nameRegex)) {
    alert("Please enter a valid name");
    return false;
  }
  if (!userEmail.match(emailRegex)) {
    alert("Please enter a valid email address");
    return false;
  }
  if (!userPassword.match(passwordRegex)) {
    alert("Please enter a valid password. Password should contain at least 8 characters including 1 uppercase letter, 1 lowercase letter, and 1 digit");
    return false;
  }
  if (!confirmPassword.match(passwordRegex)) {
    alert("Please enter a valid confirm password. Password should contain at least 8 characters including 1 uppercase letter, 1 lowercase letter, and 1 digit");
    return false;
  }
  if (userPassword != confirmPassword) {
    alert("Password and confirm password fields do not match");
    return false;
  }
  if (!userMobile.match(mobileRegex)) {
    alert("Please enter a valid mobile number");
    return false;
  }

  // send form data to server
  $.ajax({
      url: "./php/register.php",
      type: "POST",
      dataType: "json",
      data: {name: userName, email: userEmail, password: userPassword, mobile: userMobile},
      success: function(result) {
        window.location.href = "login.html";
      }
   });
}

