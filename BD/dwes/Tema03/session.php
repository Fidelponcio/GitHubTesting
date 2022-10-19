<?php

//Paso 1: abrir sesión
session_start();

//Paso 2: almaceno información de sesión
$_SESSION["fechaHoraActual"] = date("d-m-Y H:i.s");
$_SESSION["nombreUsuario"] = "pepe";
// var_dump($_SESSION);

//Paso 3: borramos la información de sesión
unset($_SESSION["nombreUsuario"]);
var_dump($_SESSION);

//Paso 4: borramos toda la información de sesión
session_unset();

//Paso 5: destruir la sesión
//session_destroy();
var_dump($_SESSION);

//Paso 6: elimino la cookie
if (isset($_COOKIE["PHPSESSID"])){
    //La borro
    unset($_COOKIE["PHPSESSID"]);
    setcookie("PHPSESSID", null, -1, '/');
}

?>