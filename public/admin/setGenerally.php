<?php
    $data = json_decode(file_get_contents("php://input"), true);
    $type = $data['type'];
    $newValue = $data['newValue'];

    if($type === "OneCost") {
        require_once '../connection.php';

        $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));
        if ($link) {
            $sql = "UPDATE generally SET costOfOneCoin='". $newValue ."' WHERE id=1";
            if ($link->query($sql) === TRUE) {
                print_r(json_encode("newCostOk"));
            } else {
                print_r(json_encode(false));
            }
            mysqli_close($link);
        }
    }
    if ($type === "AllCoins"){
        require_once '../connection.php';

        $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));
        if ($link) {
            $sql = "UPDATE generally SET maxCoinsHave='". $newValue ."' WHERE id=1";
            if ($link->query($sql) === TRUE) {
                print_r(json_encode("newCoinsCountOk"));
            } else {
                print_r(json_encode(false));
            }
            mysqli_close($link);
        }
    }

if ($type === "TotalSold"){
    require_once '../connection.php';

    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {
        $sql = "UPDATE generally SET totalSold='". $newValue ."' WHERE id=1";
        if ($link->query($sql) === TRUE) {
            print_r(json_encode("newTotalSoldOk"));
        } else {
            print_r(json_encode(false));
        }
        mysqli_close($link);
    }
}

if($type === "RefreshTotalSold"){

    require_once '../connection.php';

    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {
        $sql = "SELECT SUM(vipcoins_value) FROM users";
        $result = mysqli_query($link, $sql);
        $res = mysqli_fetch_assoc($result);

        $totalSold = $res['SUM(vipcoins_value)'];

        $newSql = "UPDATE generally SET totalSold='". $totalSold ."' WHERE id=1";
        if ($link->query($newSql) === TRUE) {
            print_r(json_encode("newTotalSoldOk"));
        } else {
            print_r(json_encode(false));
        }

        mysqli_close($link);
    }

}

?>

