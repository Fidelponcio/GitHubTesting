<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zona restrigida</title>
</head>
<body>
    <h1>Bienvenid@ a la zona restringida</h1>
    <?php
        // var_dump($_SERVER);

        if (!isset($_SERVER['PHP_AUTH_USER'])) {
            header("WWW-Authenticate: Basic Realm='Contenido restringido'"); 
            header("HTTP/1.0 401 Unauthorized");
            exit();
        } else {        
            if ($_SERVER["PHP_AUTH_USER"]!= "fidel" || $_SERVER["PHP_AUTH_PW"]!= "1234") { 
                echo "Usuario no reconocido!";
            } else {
                echo "<h1>Bienvenid@!</h1>";
                
            }
        }

    ?>
</body>
</html>