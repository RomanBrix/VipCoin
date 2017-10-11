<?php

$type = $_GET['type'];
if($type === "fgt"){

    $mail = $_GET['mail'];

    require_once 'connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {
        $result = mysqli_fetch_assoc(mysqli_query($link, "SELECT hash FROM users WHERE email='" . $mail . "' LIMIT 1"));
//        print_r(json_encode($result));
        if ($result) {
            $sbj = "Password Recovery";
            $hash = $result['hash'];
//            $newType = "onlyForMe";
            $href = "fcxjtdwcbglic.php?type=onlyForMe&secret=" . $hash;
            $msg = '<a href="http://localhost:8888/vipcoin/' . $href . '"> Recover the password</a>';
//            print_r(json_encode($msg));

            if(mail($mail,$sbj,$msg)) {
                print_r(json_encode("Mail was send"));
//                print_r(json_encode($mail));
            }

        } else {
            print_r(json_encode("Not this email"));
        }
    }
}





?>