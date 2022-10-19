<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookies</title>
</head>
<body>
    <h1></h1>
    <?php

        if (!isset($_SERVER['PHP_AUTH_USER'])) {
            header("WWW-Authenticate: Basic Realm='Contenido restringido'"); 
            header("HTTP/1.0 401 Unauthorized");
            exit();
        } else {        
            if ($_SERVER["PHP_AUTH_USER"]!= "fidel" || $_SERVER["PHP_AUTH_PW"]!= "1234") { 
                echo "Usuario no reconocido!";
            } else {
                if (!isset($_COOKIE["ultima_visita"])){

                    echo "<h1>Bienvenid@!</h1>";
                    //Creamos cookie
                    setcookie("ultima_visita", time(), time()+ 3600);

                } else {
                    //ultima visita
                    echo "<h1>Bienvenid@ de nuevo!</h1>";
                    echo "<h2>Tu última visita fue:</h2>";
                    echo "<p>El ". date("d-m-Y", $_COOKIE["ultima_visita"]) ." a las ". date("H:i:s", $_COOKIE["ultima_visita"]) ."</p>";
                    setcookie("ultima_visita", time(), time()+ 3600);
                }
            }
        }

    ?>
</body>
</html>