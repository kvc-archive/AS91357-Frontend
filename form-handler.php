<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$comment = $_POST['comment'];

$email_from = 'info@PBC.com';
$email_subject = 'PBC - New Form Submission';
$email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n".
                "Comment: $comment.\n";
$to = 'vogiahy@gmail.com';
$headers = "From: $email_form \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
mail($to,$email_subject,$email_body,$header);
header("Location: contact.html");


?>