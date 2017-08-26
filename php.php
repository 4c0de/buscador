<?php

$data = json_decode(file_get_contents('php://input',TRUE));
$mysqli = new mysqli ('localhost','root','','spring');
$x=[];

$result = $mysqli->query('SELECT * FROM alumnos');



while ($obj = $result->fetch_object())
{
    $x['data'] [] = $obj->nombre;
            
}
$result->close();
$mysqli->close();

sleep(2);
print json_encode($x);
?>
