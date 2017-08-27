<?php
function generateCode($length=6) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRQSTUVWXYZ0123456789";
    $code = "";
    $clen = strlen($chars) - 1;
    while (strlen($code) < $length) {
        $code .= $chars[mt_rand(0,$clen)];
    }
    return $code;
}


    require_once 'connection.php';
    $data = json_decode(file_get_contents("php://input"), true);
    $type = $data['type'];
    if($type === "checkLogin") {

        $login = $data['login'];
        $mail = $data['mail'];
        $pass = md5(md5($data['pass']));
        $hash = md5(generateCode(10));


        $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));
        if ($link) {
        $result_login = mysqli_query($link, "SELECT * FROM users WHERE login=\"". $login ."\"");
        $row = $result_login->fetch_assoc();
        if($row !== null) {
            print_r(json_encode(false));
        }else{
            $result_email = mysqli_query($link, "SELECT * FROM users WHERE email=\"". $mail ."\"");
            $row_mail = $result_login->fetch_assoc();
            if($row_mail !== null){
                print_r(json_encode(false));
            }else {
                $sql = "INSERT INTO users (login,password,email,hash) VALUES ('" . $login . "','" . $pass . "','" . $mail . "','" . $hash . "');";
                if ($link->query($sql) === TRUE) {
                    setcookie("user", $hash, time() + (86400 / 2), "/");
                    print_r(json_encode(true));
                } else {
                    print_r(json_encode(false));
                }
            }
        }
            mysqli_close($link);
        }
    } elseif ($type === "checkMail"){
        $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));

        if ($link) {
            mysqli_close($link);
        }
    } elseif ($type === "addUser"){
        $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));
        if ($link) {
            mysqli_close($link);
        }
    }
?>