<?php
$type = $_GET['type'];
if($type === "package") {
    require_once 'connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if($link) {
        $result = mysqli_query($link, "SELECT * FROM packages where status='start'");

        $start = mysqli_fetch_assoc($result);
        $id = $start['id'] - 1;
        $ended = mysqli_query($link, "SELECT * FROM packages where id='". $id ."'");
        $end = mysqli_fetch_assoc($ended);
        $wait1 =  mysqli_fetch_assoc(
            mysqli_query($link, "SELECT * FROM packages where id='". ($id + 2) ."'")
        );
        $wait2 =  mysqli_fetch_assoc(
            mysqli_query($link, "SELECT * FROM packages where id='". ($id + 3) ."'")
        );
        $albums_arr = [$end, $start, $wait1, $wait2];

        //        while($row = $result->fetch_assoc()) {
//            $obj = (object) $row;
//            array_push($albums_arr,$obj);
//        }

        print_r(json_encode($albums_arr));
        mysqli_close($link);
    }
}


?>