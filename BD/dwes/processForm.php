<?php

$nombreApellidos = htmlspecialchars($_POST["nombreApellidos"]);
$curso = htmlspecialchars($_POST["curso"]);
$ciclo = htmlspecialchars($_POST["ciclo"]);

if (!empty($nombreApellidos)){
    if(!validarNombre($nombreApellidos)){
        echo "Error de validación de nombre";
    }
}


echo "El alumno $nombreApellidos está matriculado en el curso $curso del ciclo $ciclo.";

function validarNombre($datoAValidar){

    //Valido el campo de nombre y apellidos /([A-Z]{1}[a-z]*\s{1})+/g
    if (preg_match('/([A-ZÁ-Ú]{1}[a-zá-ú]*\s{1})+/g', $datoAValidar)){
        return true;
    } else {
        return false;
    }
}
?>