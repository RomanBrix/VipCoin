<?php
$type = $_GET['type'];
if($type === "package") {
    require_once 'connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if($link) {
        $result = mysqli_query($link, "SELECT cost, coins FROM packages WHERE status='start';");
//        $albums_arr = [];
//        while($row = $result->fetch_assoc()) {
//            $obj = (object) $row;
//            array_push($albums_arr,$obj);
//        }
        $row = $result->fetch_assoc();
        print_r(json_encode([$row['cost'],$row['coins']]));
        mysqli_close($link);
    }
}

if($type === "coinCost") {
    require_once 'connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if($link) {
        $result = mysqli_query($link, "SELECT costOfOneCoin FROM generally WHERE id=1;");
//        $albums_arr = [];
//        while($row = $result->fetch_assoc()) {
//            $obj = (object) $row;
//            array_push($albums_arr,$obj);
//        }
        $row = $result->fetch_assoc();
        print_r(json_encode($row['costOfOneCoin']));
        mysqli_close($link);
    }
}

?>