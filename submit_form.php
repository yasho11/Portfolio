<?php
$serverName = "localhost";
$userName = "root";
$password = "";
$dbName = "response";

// Create connection
$conn = new mysqli($serverName, $userName, $password, $dbName);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$fullname = $_POST['fullname'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$sql = "INSERT INTO response (name, email, subject, message, date, time) VALUES ('$fullname', '$email', '$subject', '$message', NOW(), NOW())";

if ($conn->query($sql) === TRUE) {
  echo "Thank you for reaching out! I'll be in touch with you shortly.";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
