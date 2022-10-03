<?php
//Transformar las tres funciones en una
// https://extendsclass.com/regex-tester.html#pcre

function validar($datoAValidar, $tipoDeDato){
    if ($tipoDeDato === 'nombre'){
        if (preg_match('/([A-ZÁ-Ú]{1}[-a-zá-ú]+\s?)+/A', $datoAValidar)){

            return true;
        } else {
            return false;
        }
    } else if ($tipoDeDato === 'curso'){

        if (preg_match('/([1-2]{1}\º{1})+/A', $datoAValidar)){
            return true;
        } else {
            return false;
        }
    } else if($tipoDeDato === 'ciclo'){

        if (preg_match('/(DAM|DAW|ASIR{1})/A', $datoAValidar)){
            return true;
        } else {
            return false;
        }
    }
}


/*function validarNombre($datoAValidar){

    // Valido el campo de nombre y apellidos
    
    if (preg_match('/([A-ZÁ-Ú]{1}[-a-zá-ú]+\s?)+/A', $datoAValidar)){
        return true;
    } else {
        return false;
    }
}

function validarCurso($datoAValidar){

    // Valido el campo de curso // (1º|2º)/A
    if (preg_match('/([1-2]{1}\º{1})+/A', $datoAValidar)){
        return true;
    } else {
        return false;
    }
}

function validarCiclo($datoAValidar){

    // Valido el campo de ciclo
    if (preg_match('/(DAM|DAW|ASIR{1})/A', $datoAValidar)){
        return true;
    } else {
        return false;
    }
}*/

?>