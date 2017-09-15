<?php
$data = json_decode(file_get_contents("php://input"), true);
$type = $data['type'];

if($type === "userGetCoins") {
    require_once '../connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {
        $hash = $data['hash'];
        $coins = $data['coins'];
        $getCoinsLeftSql ="SELECT coins FROM packages WHERE status='start';";
        $coinsLeft = mysqli_fetch_assoc(mysqli_query($link,$getCoinsLeftSql));
        $newCoinsLeft = $coinsLeft['coins'] - $coins;

        $getUserCoinsSql ="SELECT vipcoins_value FROM users WHERE hash='".$hash."';";
        $userCoins = mysqli_fetch_assoc(mysqli_query($link,$getUserCoinsSql));
        $newUserCoins = $userCoins['vipcoins_value'] + $coins;

//        print_r(json_encode($newUserCoins));
        $updatePackSql = "UPDATE packages
                          SET coins='". $newCoinsLeft ."'
                          WHERE status='start'";
        if ($link->query($updatePackSql) === TRUE) {
            $addСoinToUserSql = "UPDATE users 
                                 SET  vipcoins_value=".$newUserCoins." 
                                 WHERE hash='".$hash."';";

            if($link->query($addСoinToUserSql) === TRUE){
                print_r(json_encode("addedOk"));
            }else{
                print_r(json_encode("NotAdded"));

            }
        } else {
            print_r(json_encode(false));
        }
        mysqli_close($link);
    }
}
?>

