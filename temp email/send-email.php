<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

// Handle preflight requests
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    exit; // Exit for OPTIONS requests
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    // Check if the required fields are present
    if (isset($data['name'], $data['email'], $data['message'], $data['mobile'])) {
        $name = htmlspecialchars($data['name']);
        $email = htmlspecialchars($data['email']);
        $message = htmlspecialchars($data['message']);
        $mobile = htmlspecialchars($data['mobile']);
        
        $template = file_get_contents('feedback_template.html');

        // Replace placeholders with actual values
        $template = str_replace('{{name}}', $name, $template);
        $template = str_replace('{{email}}', $email, $template);
        $template = str_replace('{{message}}', nl2br($message), $template);
        $template = str_replace('{{mobile}}', nl2br($mobile), $template);

        $mail = new PHPMailer(true);
        try {
            // SMTP Configuration
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';              
            $mail->SMTPAuth = true;
            $mail->Username = 'mananrathod214@gmail.com';     
            $mail->Password = '';                 
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            // Set the email headers
            $mail->setFrom('mananrathod214@gmail.com', 'Contact Form');
            $mail->addAddress('mananrathod214@gmail.com');    

            // Email content
            $mail->isHTML(true);                               
            $mail->Subject = "New Message from Contact Form";
            $mail->Body = $template;

            // Send the email
            if ($mail->send()) {
                echo json_encode(["message" => "Email successfully sent!"]);
            }
        } catch (Exception $e) {
            echo json_encode(["message" => "Failed to send email. Error: " . $mail->ErrorInfo]);
        }
    } else {
        echo json_encode(["message" => "Invalid input."]);
    }
}
?>
