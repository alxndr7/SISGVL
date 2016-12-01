<?php
include("_config.php");

function conexionBD()
{
	$Mensaje="";
	$Conexion = new mysqli(SERVIDOR, USUARIO, PASSWORD, BASEDATOS);

	if ($Conexion)
		$Conexion->query("SET NAMES 'utf8'");

	return $Conexion;
}
?>