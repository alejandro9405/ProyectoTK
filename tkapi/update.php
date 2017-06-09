<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "UPDATE alumnos SET


aPaterno ='$data->aPaterno', aMaterno ='$data->aMaterno',
nombre ='$data->nombre', sexo ='$data->sexo', fNac ='$data->fNac',
curp ='$data->curp', domicilio ='$data->domicilio', colonia ='$data->colonia',
ciudad ='$data->ciudad', estado ='$data->estado', cp ='$data->cp', tel ='$data->tel',
email ='$data->email', rfc ='$data->rfc', escolaridad ='$data->escolaridad',
tRegistro ='$data->tRegistro'

WHERE id = $data->id";
$qry = $conn->query($sql);
if($data->aPaterno){
}
$conn->close();
?>
