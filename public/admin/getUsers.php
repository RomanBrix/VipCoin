<?php


$type = $_GET['type'];
if($type === "getUsersInfo") {
    require_once '../connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if($link) {
        $result = mysqli_query($link, "SELECT id, login, email, hash, vipcoins_value, name, tel FROM users;");
//            print_r(json_encode($result));
        $arry = [];
        while($row = $result->fetch_assoc()) {
            $obj = (object) $row;
            $arry[] = $obj;
        }

        print_r(json_encode($arry));
        mysqli_close($link);
    }
}
?>