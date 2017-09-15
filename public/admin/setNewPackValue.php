<?php
$data = json_decode(file_get_contents("php://input"), true);
$type = $data['type'];

if($type === "setNewPackVal") {
    require_once '../connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {
        $id = $data['id'];
        $name = $data['name'];
        $cost = $data['cost'];
        $status = $data['status'];

        $sql = "UPDATE packages 
                SET name='". $name ."',
                    cost='". $cost ."',
                    status='". $status ."'
                WHERE id=".$id."";
        if ($link->query($sql) === TRUE) {
            print_r(json_encode("newValOk"));
        } else {
            print_r(json_encode(false));
        }
        mysqli_close($link);
    }
}
?>

