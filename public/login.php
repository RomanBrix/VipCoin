<?php
$type = $_GET['type'];


if($type === "in") {
    require_once 'connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {
        $log = $_GET['log'];
        $pass = $_GET['pass'];
        $result = mysqli_query($link, "SELECT password, hash FROM users WHERE login='" . mysqli_real_escape_string($link, $log) . "' LIMIT 1");
        $data = mysqli_fetch_assoc($result);
        if ($data['password']) {
            if ($data['password'] === md5(md5($pass))) {
            setcookie("user", $data['hash'], time() + (86400 / 2), "/");
                print_r(json_encode(true));
//            exit();
            }else{
                print_r(json_encode("fail_password"));
            }
        }else{
            print_r(json_encode("fail_login"));
        }
            mysqli_close($link);
        } else {
            print_r(json_encode('proverka'));
    }
}
?>