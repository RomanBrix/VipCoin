<?php
$type = $_GET['type'];
if($type === "infooo") {
    $hash = $_GET['hash'];

    require_once 'connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if($link) {
        $result = mysqli_query($link, "SELECT * FROM users WHERE hash='". $hash ."'");
        $albums_arr = [];
        while($row = $result->fetch_assoc()) {
            $obj = (object) $row;
            array_push($albums_arr,$obj);
        }

        print_r(json_encode($albums_arr));
        mysqli_close($link);
    }
}


?>