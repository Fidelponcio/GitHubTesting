<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <?php //De locos amigo ?>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo 'PHPINFO.php' ?></title>
</head>
<body>
    <?php
    //  phpinfo(); 
    #   Comentario 2
    /*  Comentario 3 
        en diferentes líneas
    */
        $A= 'Hi';
        $a= 'Hello';
        $name = 'Fidelponcio';

        echo $A;
        
     /**
      * La siguiente función calcula la suma
      * de dos valores pasados como parámetros
      * @param a Primer operando
      * @param b Segundo operando
      *@return resultado Resultado de la operación de suma
      */
      function suma($a, $b){
        $resultado = $a + $b;
        return $resultado;
      }
     
     ?>
     <h1>Welcome back <?php echo $name ?> </h1>
</body>
</html>