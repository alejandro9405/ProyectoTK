<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "INSERT INTO alumnos (aPaterno, aMaterno, nombre, sexo, fNac, curp, domicilio, colonia, ciudad,
														estado, cp, tel, email, rfc, escolaridad, tRegistro )
VALUES ('$data->aPaterno', '$data->aMaterno', '$data->nombre', '$data->sexo',
	 			'$data->fNac', '$data->curp', '$data->domicilio', '$data->colonia',
			  '$data->ciudad', '$data->estado', '$data->cp', '$data->tel',
			  '$data->email', '$data->rfc', '$data->escolaridad', '$data->tRegistro')";

if($data->nombre){
	$qry = $conn->query($sql);
}
$conn->close();
?>
