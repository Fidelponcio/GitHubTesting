<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>
<!-- Aquí arriba valido el formulario -->

<?php
if (!empty($_POST)){
    echo 'Estoy en la parte de validación';

}

?>

<!-- A partir de aquí tengo el formulario -->

    <h1>Formulario de recogida de datos del alumno</h1>
    <form action='<?php htmlspecialchars($_SERVER["PHP_SELF"])?>' method="post" >
        Nombre y Apellidos:
        <input type="text" name="nombreApellidos" value=""><br>
        Curso:
        <input type="text" name="curso" value=""><br>
        Ciclo:
        <input type="text" name="ciclo" value=""><br><br>
        <input type="submit" value="Enviar información del alumno">
    </form>
</body>
</html>