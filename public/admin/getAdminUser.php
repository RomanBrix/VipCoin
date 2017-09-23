<?php


$type = $_GET['type'];
if($type === "@secret?Code/For|Admin\User@") {
    require_once '../connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {
        $log = $_GET['login'];
        $pass = $_GET['password'];
        $mdPass = md5(md5($pass));
        $getUser = mysqli_fetch_assoc(mysqli_query($link, "SELECT pass FROM admin_user WHERE login='" . $log . "';"));
//        print_r(json_encode($getUser));

        if ($getUser) {
            if ($mdPass === $getUser['pass']) {
                $getHash = mysqli_fetch_assoc(mysqli_query($link, "SELECT hash FROM admin_user WHERE login='" . $log . "';"));
                if($getHash) {
                    setcookie("admin_user", $getHash['hash'], time() + (86400 / 2), "/");
                    print_r(json_encode($getHash['hash']));
                }else{
                    print_r(json_encode("haveNoConnectionSecond"));

                }
            }
        } else {
            print_r(json_encode("haveNoConnection"));
        }
        mysqli_close($link);
    }
}

if($type === "@secret?Code/For|Admin\\UserCheck@") {
    require_once '../connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {
        $cookieHash = $_GET['login'];
        $getHash = mysqli_fetch_assoc(mysqli_query($link, "SELECT hash FROM admin_user WHERE hash='" . $cookieHash . "';"));
//        print_r(json_encode($getUser));

        if ($getHash['hash'] === $cookieHash) {
            print_r(json_encode("HelloAdmin"));
        } else {
            print_r(json_encode("different"));
        }
        mysqli_close($link);
    }
}
?>

