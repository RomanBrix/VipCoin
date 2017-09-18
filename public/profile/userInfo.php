<?php
$type = $_GET['type'];
if($type === "infooo") {
    $hash = $_GET['hash'];

    require_once 'connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if($link) {
        $result = mysqli_query($link, "SELECT * FROM users WHERE hash='". $hash ."'");
        $obj = '';
        while($row = $result->fetch_assoc()) {
            $obj = (object) $row;
//            array_push($albums_arr,$obj);
        }

        print_r(json_encode($obj));
        mysqli_close($link);
    }
}
if($type === "header"){
    $hash = $_GET['hash'];

    require_once 'connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if($link) {
        $result = mysqli_query($link, "SELECT login FROM users WHERE hash='". $hash ."'");
        $userName = mysqli_fetch_assoc($result);
        print_r(json_encode($userName['login']));

        //        $newUserCoins = $userCoins['vipcoins_value'] + $coins;
//        print_r(json_encode($userName['login']));
        mysqli_close($link);
    }
}


?>