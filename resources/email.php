<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>email sender</title>
</head>

<body>
<?php
// The message
$message = $_POST["message"];
$name = $_POST["name"];
$email = $_POST["email"];
// In case any of our lines are larger than 70 characters, we should use wordwrap()
$textEmail = "Email inviata da ".$name." E-mail: ".$email." Testo:".$message;
$textEmail = wordwrap($textEmail, 70);

// Send
mail('coglia@gmail.com', $_POST["subject"], $textEmail);
?>
</body>
</html>