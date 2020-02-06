<?php
// Get the form fields, removes html tags and whiteplace.
$name = strip_tags(trim($_POST["name"]));
$name = str_replace(array("\r", "\n"),array(" "," "),$name);
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

// Check the data.
if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
     header("Location: https://roshanbandara.github.io/dharma5/index.php?success=-1#form");
}

// Set the recipient email address. Update this to YOUR desired email address.
$recipient = "roshan5500@gmail.com";

// Set the email subject.
$subject = "New contact form $name";

// Build the email content.
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message:\n$message\n";

// Build the email headers.
$email_headers = "From: $name <$email>";

// Send the email.
mail($recipient, $subject, $email_content, $email_headers);

// Redirect to the index.html page with success code
header("Location: https://roshanbandara.github.io/dharma5/index.php?success=1#form");

?>