<?php


$type = $_GET['type'];
if($type === "getPackInfo") {
    require_once '../connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if($link) {
        $result = mysqli_query($link, "SELECT * FROM packages;");
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