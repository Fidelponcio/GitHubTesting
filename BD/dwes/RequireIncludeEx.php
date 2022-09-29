<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Require Include</title>
</head>
<body>
    <?php

    include 'config.php';
    echo "El nombre de la base de datos a la que me tengo que conectar es 
    " . DBNAME . " en en HOST " . HOST . " con el usuario " . USER . " y la contraseña que tú yo sabemos";
    ?>
</body>
</html>