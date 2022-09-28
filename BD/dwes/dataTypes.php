<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Booleans</h1>
    <?php

    $a = 3.45;
    var_dump($a);
    echo '<br>';
    $b = settype($a, "integer");
    var_dump($b);
    var_dump($a);
    echo '<br>';

    //Booleano puro
    $boolVar = true;
    echo "$boolVar es: ";
    var_dump($boolVar);

    //Booleano casteado
    echo '<br>';
    echo 'El cast a bool del entero 0 es: ';
    var_dump((bool) 0);
    echo '<br>';

    ?>
</body>
</html>