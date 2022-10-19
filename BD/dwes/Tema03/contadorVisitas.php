<?php

//Que no caduque la cookie
session_set_cookie_params(30, '/');

//Inicio sesión
session_start();


//Comprobar si existe el contador de visitas
if (isset($_SESSION["contadorVisitas"])){
    //Incremento el valor
    $_SESSION["contadorVisitas"] += 1;
    
} else {
    //Creo el contador
    $_SESSION["contadorVisitas"] = 1;

    
}
//Informo al usuario
echo "<h2>Has visitado la página {$_SESSION['contadorVisitas']} veces</h2>";

?>