<?php
$in = json_decode(file_get_contents("php://input"), true);
//print_r($in);
$type = $in['type'];
$hash = $in['hash'];
$currPassword = $in['currPassword'];
$new = $in['newItem'];
//print_r(json_encode([$type, $hash, $currPassword, $new]));
    if($type === "changePassword") {

        require_once 'connection.php';
        $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));
        if($link) {

            $result = mysqli_query($link, "SELECT password FROM users WHERE hash='" . $hash . "'");
            $data = mysqli_fetch_assoc($result);
            if ($data['password'] === md5(md5($currPassword))) {
                $sql = mysqli_query($link, "UPDATE users SET password='". md5(md5($new)) ."' WHERE hash='".$hash ."'");
                $end = mysqli_fetch_assoc($sql);
                 print_r(json_encode("passwordChanged"));
                mysqli_close($link);
            }else{
                print_r(json_encode("changePassword"));
            }

        }
    }elseif ($type === "changeEmail"){

        require_once 'connection.php';
        $link = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($link));
        if($link) {

            $result = mysqli_query($link, "SELECT password, email FROM users WHERE hash='" . $hash . "'");
            $data = mysqli_fetch_assoc($result);
            if ($data['password'] === md5(md5($currPassword))) {
                if($data['email'] !== $new){
                    $sql = mysqli_query($link, "UPDATE users SET email='". $new ."' WHERE hash='" .$hash ."'");
                    $end = mysqli_fetch_assoc($sql);

                    print_r(json_encode("emailChanged"));
                    mysqli_close($link);
                }else{
                    print_r(json_encode("changeEmail"));
                }
            }else{
                print_r(json_encode("changeEmailPassword"));
            }
        }
    }
?>