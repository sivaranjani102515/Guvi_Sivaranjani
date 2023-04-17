
<?php

echo '<script>alert("Php 1")</script>';

$conn = mysqli_connect("localhost", "root", "", "n");



if(!$conn){
    die("Connection failed: " . mysqli_connect_error());
}


  $email = $_POST["email"];
  $password = $_POST["password"];

  $user = mysqli_query($conn, "SELECT password FROM persons WHERE email = '$email'");

  if(mysqli_num_rows($user) > 0){

    $row = mysqli_fetch_assoc($user);

    if($password == $row['password']){
      
      $_SESSION["login"] = true;
      $_SESSION["id"] = $row["id"];
      echo json_encode("success");
      <script type="text/javascript">location.href = 'https://www.google.co.in';</script>
    }
    else{
      echo json_encode("wrong password");
      exit;
    }
  }
  else{
    echo json_encode( "User Not Registered" );
    
    exit;
  }

mysqli_close($conn);

?>