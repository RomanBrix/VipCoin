<?php
$type = $_GET['type'];
if($type === "package") {
    require_once 'connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if($link) {
        $result = mysqli_query($link, "SELECT * FROM packages where status='start'");

        $start = mysqli_fetch_assoc($result);
        if($start['id'] != 1 && $start['id'] != 10 ) {
            $id = $start['id'] - 1;
            $ended = mysqli_query($link, "SELECT * FROM packages where id='" . $id . "'");
            $end = mysqli_fetch_assoc($ended);
            $wait1 = mysqli_fetch_assoc(
                mysqli_query($link, "SELECT * FROM packages where id='" . ($id + 2) . "'")
            );
            $wait2 = mysqli_fetch_assoc(
                mysqli_query($link, "SELECT * FROM packages where id='" . ($id + 3) . "'")
            );

            $albums_arr = [$end, $start, $wait1, $wait2];
            print_r(json_encode($albums_arr));


        } elseif ($start['id'] == 1){
            $id = $start['id'] + 1;
            $wait1 = mysqli_fetch_assoc(
                mysqli_query($link, "SELECT * FROM packages where id='" . ($id) . "'")
            );
            $wait2 = mysqli_fetch_assoc(
                mysqli_query($link, "SELECT * FROM packages where id='" . ($id + 1) . "'")
            );
            $wait3 = mysqli_fetch_assoc(
                mysqli_query($link, "SELECT * FROM packages where id='" . ($id + 2) . "'")
            );

            $albums_arr = [$start, $wait1, $wait2, $wait3];
            print_r(json_encode($albums_arr));


        } elseif ($start['id'] == 10){
            $id = $start['id'] - 1;
            $wait3 = mysqli_fetch_assoc(
                mysqli_query($link, "SELECT * FROM packages where id='" . ($id) . "'")
            );
            $wait2 = mysqli_fetch_assoc(
                mysqli_query($link, "SELECT * FROM packages where id='" . ($id - 1) . "'")
            );
            $wait1 = mysqli_fetch_assoc(
                mysqli_query($link, "SELECT * FROM packages where id='" . ($id - 2) . "'")
            );

            $albums_arr = [$wait1, $wait2, $wait3,$start];
            print_r(json_encode($albums_arr));


        }

        //        while($row = $result->fetch_assoc()) {
//            $obj = (object) $row;
//            array_push($albums_arr,$obj);
//        }

        mysqli_close($link);
    }
}


?>