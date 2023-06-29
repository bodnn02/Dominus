<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require $_SERVER['DOCUMENT_ROOT'].'/libs/phpmailer/Exception.php';
require $_SERVER['DOCUMENT_ROOT'].'/libs/phpmailer/PHPMailer.php';
require $_SERVER['DOCUMENT_ROOT'].'/libs/phpmailer/SMTP.php';

$host = '';
$post = 465;
$login = '';
$password = '';
$mail = new PHPMailer(true);

if(isset($_GET['method'])) {
    $method = $_GET['method'];
    if($method == 'form') {
        if(isset($_GET['name']) && isset($_GET['phone']) && isset($_GET['city']) && isset($_GET['plan'])) {
            if(empty($_GET['name']) OR empty($_GET['phone']) OR empty($_GET['city']) OR empty($_GET['plan'])) {
                die(json_encode(array("status" => "error", "message" => "Заполните все поля!")));
            }
            $subject = 'Новое письмо с сайта, выбрана планировка';
            $body = '<h2>Данные:</h2><br/><br/><b>Имя:</b> '.$_GET['name'].'<br/><b>Телефон:</b> '.$_GET['phone'].'<br/><b>Город:</b> '.$_GET['city'].'</br><b>Планировка:</b> '.$_GET['plan'];
            $altbody = 'Данные: Имя: '.$_GET['name'].' Телефон: '.$_GET['phone'].' Город: '.$_GET['city'].' Планировка: '.$_GET['plan'];
            if(sendMail($body, $subject, $altbody)) {
                die(json_encode(array("status" => "success", "message" => "Mail sended")));
            } else {
                die(json_encode(array("status" => "error", "message" => "SMTP error")));
            }
        } elseif(isset($_GET['name']) && isset($_GET['phone'])) {
            if(empty($_GET['name']) OR empty($_GET['phone'])) {
                die(json_encode(array("status" => "error", "message" => "Заполните все поля!")));
            }
            $subject = 'Новоое письмо с сайта, контакт';
            $body = '<h2>Данные:</h2><br/><br/><b>Имя:</b> '.$_GET['name'].'<br/><b>Телефон:</b> '.$_GET['phone'];
            $altbody = 'Данные: Имя: '.$_GET['name'].' Телефон: '.$_GET['phone'];
            if(sendMail($body, $subject, $altbody)) {
                die(json_encode(array("status" => "success", "message" => "Mail sended")));
            } else {
                die(json_encode(array("status" => "error", "message" => "SMTP error")));
            }
        } else {
            die(json_encode(array("status" => "error", "message" => "Заполните все поля!")));
        }
    }
}

function sendMail($body, $subject, $altbody) {
    global $mail;
    global $host;
    global $login;
    global $password;
    global $port;
    try {
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host       = $host;
        $mail->SMTPAuth   = true;
        $mail->Username   = $login;
        $mail->Password   = $password;
        $mail->SMTPSecure = PHPMailer::PHPMailer::ENCRYPTION_STARTTLS; #ENCRYPTION_SMTPS
        $mail->Port       = $port;

        $mail->setFrom($login, 'Dominus');
        $mail->addAddress($login, 'Dominus');

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->AltBody = $altbody;
    
        $mail->send();
        return true;
    } catch (Exception $e) {
        return false;
    }
}