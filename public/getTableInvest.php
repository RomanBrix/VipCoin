<?php
$type = $_GET['type'];
if($type === "getLastInvestors") {
    require_once 'connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {
        $result = mysqli_query($link, "SELECT last_purchase.id, users.login, last_purchase.coins, last_purchase.insert_date FROM  last_purchase JOIN users ON last_purchase.hash = users.hash ORDER BY last_purchase.id DESC");
//            print_r(json_encode($result));
//        $obj = "";
//        print_r(json_encode( mysqli_fetch_assoc($result)));
        $arr = [];
        while ($row = $result->fetch_assoc()) {
            $obj = (object)$row;
            array_push($arr,$obj);
        }
        print_r(json_encode($arr));
        mysqli_close($link);
    }
}
?>