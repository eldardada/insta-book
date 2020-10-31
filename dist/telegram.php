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
        $vk = trim($_POST['user_vk']) ?? '';
        $msg = trim($_POST['user_message']) ?? '';
        $address = trim($_POST['user_address']) ?? '';
        
        $token = "1477646798:AAFDMzcRFZaTqZM8zcPo_Rh-t3yjws3tmNo";
        $chat_id = "-417281943";
        
        
        if($vk === '') {
            $arr = array(
                'Тип заявки: ' => 'Обратный звонок',
                'Имя: ' => $name,
                'Телефон: ' => $phone,
                'Сообщение: ' => $msg,
            );
        }
        else if($phone === '') {
            $arr = array(
                'Тип заявки: ' => 'Заявка на книгу',
                'Имя пользователя: ' => $name,
                'Вк пользователя: ' => $vk,
                'Адрес пользователя: ' => $address,
            );
        }
        else {
            $arr = array(
                'Имя пользователя: ' => $name,
                'Вк пользователя: ' => $vk,
                'Адрес пользователя: ' => $address,
                'Телефон: ' => $phone,
                'Сообщение: ' => $msg,
            );
        }
        
        foreach($arr as $key => $value) {
            $txt .= "<b>".$key."</b> ".$value."%0A";
        };
        if($response['error'] === '') {
            $response['res'] = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
        }
        
    }

    echo json_encode($response);