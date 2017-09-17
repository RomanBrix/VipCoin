<?php


    $type = $_GET['type'];
    if($type === "coinsInfo") {
        require_once 'connection.php';
        $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));
        if($link) {
            $result = mysqli_query($link, "SELECT maxCoinsHave,totalSold FROM generally WHERE id=1;");
//            print_r(json_encode($result));
            $obj = "";
            while($row = $result->fetch_assoc()) {
                $obj = (object) $row;
            }

            print_r(json_encode($obj));
            mysqli_close($link);
        }
    }
    if($type === "coinCost") {
        require_once 'connection.php';
        $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));
        if($link) {
            $result = mysqli_query($link, "SELECT costOfOneCoin FROM generally");
            $obj = "";
//            while($row = $result->fetch_assoc()) {
//                $obj = (object) $row;
//            }
            $cost = $result->fetch_assoc();
            print_r(json_encode($cost['costOfOneCoin']));
            mysqli_close($link);
        }
    }


?>