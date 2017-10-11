<?php

$type = $_GET['type'];
if($type === "onlyForMe"){

    $hash = $_GET['secret'];

    require_once 'connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    if ($link) {
        $result = mysqli_fetch_assoc(mysqli_query($link, "SELECT * FROM users WHERE hash='".$hash."' LIMIT 1"));
//        print_r(json_encode($result));

        if($result['hash'] === $hash){
            echo "<h1>Hello, ". $result['login']."</h1>";
            echo "<form method='POST'>New password: <input type='password' name='new_pass' />";
            echo "<p>Re-paswword: <input type='password' name='new_pass2' /></p>";
            echo "<input type='submit' name='change' value ='CHANGE'/></form>";

            if(isset($_POST['change'])
                && mb_strlen($_POST['new_pass']) > 3
                && $_POST['new_pass'] === $_POST['new_pass2']){

                $okPass = md5(md5($_POST['new_pass']));

                mysqli_query($link,"UPDATE users SET password = '".$okPass."' WHERE hash='".$hash."'");
//                mysqli_query("DELETE FROM lost_pass WHERE user_code='".$_POST['code']."'");
                echo "Пароль сменен.";
                ///////////////////////////////////////
                header('Location: https://vipcoin.technology/');
                echo '<script type="text/javascript">window.location = "https://vipcoin.technology/";</script>';
                ///////////////////////////////////////
            } else {
                echo "incorrect password";
            }
        } else{
            echo "Не тот юзер";
            ///////////////////////////////////////
            header("Location: https://vipcoin.technology/");
            echo '<script type="text/javascript">window.location = "https://vipcoin.technology/";</script>';
            ///////////////////////////////////////
        }
    }
}
?>
<?php
////$res = mysqli_query("SELECT * FROM lost_pass WHERE code='".$_GET['code']."'");
////$row = mysqli_fetch_array($res);
//if(true){
//    //выводи поля новый пароль и повтор нового пароля
//    echo "<form method='POST'><input type='text' name='new_pass' />";
//    echo "<input type='text' name='new_pass2' />";
//    echo "<input type='hidden' name='code' value='".$_GET['code']."' />";
//    echo "<input type='submit' name='change' value ='сменить'/></form>";
//    if(isset($_POST['change'] && mysqli_num_rows($res)>0){
//        mysqli_query("UPDATE users SET password = '"md5($_POST['new_pass'])."' WHERE email='".$row['email']."'");
//                mysqli_query("DELETE FROM lost_pass WHERE user_code='".$_POST['code']."'");
//                echo "Пароль сменен.";
//        }
//
//
//}
//
//?>