<?php

include 'config.php';
include 'lib.php';

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: login.php');
}

function login($username, $password) {
    global $db;
    $query = $db->prepare('SELECT * FROM users WHERE username = ? AND password = ?');
    $query->execute([$username, $password]);
    return $query->rowCount() > 0;
}

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    if (login($username, $password)) {
        header('Location: index.php');
    } else {
        header('Location: login.php');
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <form action="" method="post">
        <label for="username">Username</label>
        <input type="text" name="username" id="username">
        <label for="password">Password</label>
        <input type="password" name="password" id="password">
        <input type="submit" value="Login">
    </form>
</body>
</html>