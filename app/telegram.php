<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

    $response = [
        'res' => false,
        'error' => false
    ];

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = trim($_POST['user_name']) ?? '';
        $phone = trim($_POST['user_phone']) ?? '';
        $vk = trim($_POST['user_vk']) ?? '';
        $msg = trim($_POST['user_message']) ?? '';
        $address = trim($_POST['user_address']) ?? '';
        
        $token = "1477646798:AAFDMzcRFZaTqZM8zcPo_Rh-t3yjws3tmNo";
        $chat_id = "-417281943";
        
        if($name !== '') {
            
            $arr = [];
            $arr += ['Имя: ' => $name];
            
            if($phone !== '') {
                $arr += ['Телефон: ' => $phone];
            }
            if($vk !== '') {
                $arr += ['Вконтакте: ' => $vk];
            }
            if($address !== '') {
                $arr += ['Адрес: ' => $address];
            }
            if($msg !== '') {
                $arr += ['Сообщение: ' => $msg];
            }
            
        }
        else {
            $response['eror'] = true;
        }
        
        foreach($arr as $key => $value) {
            $txt .= "<b>".$key."</b> ".$value."%0A";
        };

        if(!$response['error']) {
            fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r")
            $response['res'] = true;
        }
        
    }

    echo json_encode($response);