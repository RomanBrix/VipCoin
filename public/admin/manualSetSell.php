<?php
$data = json_decode(file_get_contents("php://input"), true);
$type = $data['type'];

if($type === "manualSetSell") {
    require_once '../connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {
        $hash = $data['hash'];
        $coins = $data['coins'];

                $today = date("d.m.y");
                $lastPurch = "INSERT INTO last_purchase (hash, coins, insert_date) VALUES ('".$hash."',". $coins.",'".
                    $today."')";

                if($link->query($lastPurch) === TRUE) {
                    print_r(json_encode("addedOk"));
                }
            }else{
                print_r(json_encode("NotAdded"));
            }
        mysqli_close($link);
}
?>

