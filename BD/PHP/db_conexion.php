<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conexion a BD</title>
</head>
<body>
    <?php
        // Conectar con la base de datos
        $dwes = new mysqli();

        // Le pasamos los datos de conexión a través del método connect
        $dwes->connect('localhost:80','root','','dwes');

        // Si la conexión ha ido bien, mostramos la info del servidor
    $error = $dwes->connect_errno;
        if ($error != null){
            echo "<p>Error $error conectando a la base de datos: $dwes->connect_error</p>";
        } else {
            echo "Conexión existosa <br>";
            echo "$dwes->server_info";
            // Cerrar conexión
            $dwes->close();
        }
    ?>
</body>
</html>