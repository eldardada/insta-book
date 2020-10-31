<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

    $response = [
        'res' => false,
        'error' => ''
    ];

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = trim($_POST['user_name']) ?? '';
        $phone = trim($_POST['user_phone']) ?? '';
        $vk = trim($_POST['user_vk']) ?? 'v';
        $msg = trim($_POST['user_message']) ?? '';
        $address = trim($_POST['user_address']) ?? '';
        
        $token = "1477646798:AAFDMzcRFZaTqZM8zcPo_Rh-t3yjws3tmNo";
        $chat_id = "-417281943";
        
        
        if($vk === '') {
            if($name === '' || $phone === '') {
                $response['error'] = 'Заполните все поля!'
            }
            else if(mb_strlen($name, 'UTF8' < 2)) {
                $err = 'Имя не короче 2-х символов!';
            }
            else {
                $arr = array(
                    'Тип заявки: ' => 'Обратный звонок',
                    'Имя: ' => $name,
                    'Телефон: ' => $phone,
                    'Сообщение: ' => $msg,
                );
            }
        }
        else {
            $arr = array(
                'Тип заявки: ' => 'Заявка на книгу',
                'Имя пользователя: ' => $name,
                'Вк пользователя: ' => $vk,
                'Адрес пользователя: ' => $address,
            );
        }
        
        foreach($arr as $key => $value) {
            $txt .= "<b>".$key."</b> ".$value."%0A";
        };
        
        $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
        
        $response['res'] = $sendToTelegram;
    }

    echo json_encode($response);