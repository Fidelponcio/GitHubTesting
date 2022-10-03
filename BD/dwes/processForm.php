
<?php
include 'functions.php';

$nombreApellidos = htmlspecialchars($_POST["nombreApellidos"]);
$curso = htmlspecialchars($_POST["curso"]);
$ciclo = htmlspecialchars($_POST["ciclo"]);



if (!empty($nombreApellidos)){
    if(!validar($nombreApellidos, 'nombre')){
        echo "Error de validación de nombre";
        exit();
    }
} else {
    exit();
}

if (!empty($curso)){
    if(!validar($curso, 'curso')){
        echo "Error de validación de curso";
        exit();
    }
} else {
    exit();
}

if (!empty($ciclo)){
    if(!validar($ciclo, 'ciclo')){
        echo "Error de validación de ciclo";
        exit();
    }
} else {
    exit();
}

echo "El alumno $nombreApellidos está matriculado en el curso $curso del ciclo $ciclo.";



?>