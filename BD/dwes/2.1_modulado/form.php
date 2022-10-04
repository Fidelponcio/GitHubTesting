<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
    <style>
        .error{
            color: #FF0000;
        }

    </style>
</head>
<body>
<!-- Aquí arriba valido el formulario -->

<?php

//Declaro las variables a utilizar
$_nombreApellidos = $_curso = $_ciclo = "";
$_nombreApellidosErr = $_cursoErr = $_cicloErr = "";


if (!empty($_POST)){
    include 'funciones.php';

    // Variables
    $nombreAp = htmlspecialchars($_POST["nombreApellidos"]);
    $curso = htmlspecialchars($_POST["curso"]);
    $ciclo = htmlspecialchars($_POST["ciclo"]);

    // Compruebo que los campos no están vacíos y que validan
    if (!empty($nombreAp)) {
        if(!validar($nombreAp, VALIDA_NOMBREAP)) {
            // echo "error de validación del nombre";
            $_nombreApellidosErr = "No has escrito bien el nombre y/o los apellidos";
        } else {
            $_nombreApellidos = $nombreAp;
        }
    } else {
        $_nombreApellidosErr = "El campo nombre y apellidos no puede estar vacío.";
    }
    if (!empty($curso)) {
        if(!validar($curso, VALIDA_CURSO)) {
            // echo "error de validación del curso";
            $_cursoErr = "No has escrito bien el curso: 1º o 2º";
        } else {
            $_curso = $curso;
        }
    } else {
        $_cursoErr = "El campo curso no puede estar vacío";
    }
    if (!empty($ciclo)) {
        if(!validar($ciclo, VALIDA_CICLO)) {
            // echo "error de validación del ciclo";
            $_cicloErr = "El ciclo introducido no es ninguno de los válidos";
        } else {
            $_ciclo = $ciclo;
        }
    } else {
        $_cicloErr = "El campo ciclo no puede estar vacío";
    }

    if ($_nombreApellidos != "" && $_curso != "" && $_ciclo != ""){
        // Muestro el mensaje final
        echo "El alumno $nombreAp está matriculado en el curso $curso del ciclo $ciclo";
        exit();
    }

}

?>

<!-- A partir de aquí tengo el formulario -->

    <h1>Formulario de recogida de datos del alumno</h1>
    <p><span class="error">* = campo obligatorio</span></p>
    <form action='<?php htmlspecialchars($_SERVER["PHP_SELF"])?>' method="post" >
        Nombre y Apellidos:
        <input type="text" name="nombreApellidos" value="<?php echo $_nombreApellidos; ?>">
        <span class="error">* <?php echo $_nombreApellidosErr;?></span>
        <br>
        Curso:
        <input type="text" name="curso" value="<?php echo $_curso; ?>">
        <span class="error">* <?php echo $_cursoErr;?></span>
        <br>
        Ciclo:
        <input type="text" name="ciclo" value="<?php echo $_ciclo; ?>">
        <span class="error">* <?php echo $_cicloErr;?></span>
        <br>
        <input type="submit" value="Enviar información del alumno">
    </form>
</body>
</html>