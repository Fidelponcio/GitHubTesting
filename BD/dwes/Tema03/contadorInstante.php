<!-- <?php

//Que no caduque la cookie
session_set_cookie_params(30, '/');

//Inicio sesión
session_start();
$index = 0;

//Comprobar si existe el contador de Instantes
if (!isset($_SESSION["contadorInstante"])){
    //Creo el contador
    $_SESSION["contadorInstante"][$index] = date("d-m-Y H:i.s");
    
} else {
    //Incremento el valor
    $_SESSION["contadorInstantes"][$index] += $_SESSION["contadorInstante"][$index];
    $index++;
    
}
//Informo al usuario
echo "<h2>Has visitado la página a estas horas: {$_SESSION['contadorInstantes']}</h2>";

?> -->