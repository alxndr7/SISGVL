<?php

include("../_conexion.php");

//Inicializa controles para "Agregar Intervenci�n"
if (isset($_POST['initSubModulo1']))
{
	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Respuesta = "";

		$Sentencia = "select * from `".BASEDATOS."`.mCategorias";
		$ListaCategorias = $Conexion -> query($Sentencia);
		while ($Fila = $ListaCategorias -> fetch_row())
			$Respuesta .= $Fila[0]."|".$Fila[1]."$";
		$Respuesta .= "%";

		$Conexion -> close();
	}
	echo $Respuesta;
}

//Inicializa controles para "Editar Intervenci�n"
if (isset($_POST['initSubModulo2']))
{
	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Respuesta = "";

		$Sentencia = "select * from `".BASEDATOS."`.mPeriodo order by cNomPeriodo";
		$ListaPeriodo = $Conexion -> query($Sentencia);
		while ($Fila = $ListaPeriodo -> fetch_row())
			$Respuesta .= $Fila[0]."|".$Fila[1]."$";
			$Respuesta .= "%";

			$Conexion -> close();
	}
	echo $Respuesta;
}


//Inicializa controles para "Editar Intervenci�n"
if (isset($_POST['initSubModulo3']))
{
	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Respuesta = "";

		$Sentencia = "select * from `".BASEDATOS."`.mPeriodo  order by cNomPeriodo";
		$ListaPeriodo = $Conexion -> query($Sentencia);
		while ($Fila = $ListaPeriodo -> fetch_row())
			$Respuesta .= $Fila[0]."|".$Fila[1]."$";


		$Conexion -> close();
	}
	echo $Respuesta;
}

//Inicializa controles para "Editar Intervenci�n"
if (isset($_POST['initSubModulo4']))
{
	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Respuesta = "";

		$Sentencia = "select * from `".BASEDATOS."`.mPeriodo where nCodigo in (select nCodPeriodo from
		`".BASEDATOS."`.mempadronado group by nCodPeriodo
		) order by cNomPeriodo";
		$ListaPeriodoinicial = $Conexion -> query($Sentencia);
		while ($Fila = $ListaPeriodoinicial -> fetch_row())
			$Respuesta .= $Fila[0]."|".$Fila[1]."$";

		$Respuesta .= "%";

		$Sentencia = "select * from `".BASEDATOS."`.mPeriodo order by cNomPeriodo";
		$ListaPeriodofinal = $Conexion -> query($Sentencia);
		while ($Fila = $ListaPeriodofinal -> fetch_row())
			$Respuesta .= $Fila[0]."|".$Fila[1]."$";

		$Conexion -> close();
	}
	echo $Respuesta;
}


//Agrega una nueva intervenci�n a la BD
if (isset($_POST['agregarPeriodo']))
{
	$Valores = explode("|",$_POST['agregarPeriodo']);

	$Cadena = "'".$Valores[0]."', '".$Valores[1]."','".$Valores[2]."','N'";

	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Sentencia = "insert into `" . BASEDATOS . "`.mPeriodo
								(`cNomPeriodo`,`cEstPeriodo`,`nCantBenef`,`cEstEntrega`)
						values (".$Cadena.")";

		$Conexion -> query($Sentencia);

		$Conexion -> close();
		$Respuesta = AGREGAROK;
	}
	echo $Respuesta;
}


//Agrega una nueva intervenci�n a la BD
if (isset($_POST['crearEntregas']))
{
	$Valores = explode("|",$_POST['crearEntregas']);

	$Cadena = "'".$Valores[0]."',1,'Primera Entrega','N'),
			   ('".$Valores[0]."',2,'Segunda Entrega','N'),
			    ('".$Valores[0]."',3,'Tercera Entrega','N'),
			     ('".$Valores[0]."',4,'Cuarta Entrega','N'),
			      ('".$Valores[0]."',5,'Quinta Entrega','N'),
			       ('".$Valores[0]."',6,'Sexta Entrega','N'";

	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Sentencia = "insert into `" . BASEDATOS . "`.dEntrega
								(`nCodPeriodo`,`nNumEntrega`,`cDescNumEntrega`,`cEstCreacion`)
						values (".$Cadena.")";

		$Conexion -> query($Sentencia);

		$Sentencia = "update `" . BASEDATOS . "`.mPeriodo set
							`cEstEntrega`= 'S' where `nCodigo`=".$Valores[0];

		$Conexion -> query($Sentencia);

		$Conexion -> close();
		$Respuesta = AGREGAROK;
	}
	echo $Respuesta;
}
//Carga datos de personal para editarlos
if (isset($_POST['cargarPeriodo']))
{
	$Val = $_POST['cargarPeriodo'];
	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Respuesta = "";

		$Sentencia = "select
							nCodigo,
							cNomPeriodo,
							nCantBenef
						from `" . BASEDATOS . "`.mPeriodo where nCodigo=".$Val. " order by cNomPeriodo";

		$ListaPersonal = $Conexion -> query($Sentencia);
		while ($Fila = $ListaPersonal -> fetch_row())
			$Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."$";
		$Conexion -> close();
	}
	echo $Respuesta;
}

//Edita datos de un personal existente
if (isset($_POST['editarPeriodo']))
{
	$Valores = explode("|",$_POST['editarPeriodo']);

	//$Cadena = "'".$Valores[0]."', '".$Valores[1]."', '".$Valores[2]."'";

	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{		
		$Sentencia = "update `" . BASEDATOS . "`.mPeriodo set
							`cNomPeriodo`='".$Valores[0]."',
							`nCantBenef`='".$Valores[2]."'
					where `nCodigo`=".$Valores[1];

		$Conexion -> query($Sentencia);
		$Conexion -> close();
		$Respuesta = EDITAROK;
	}
	echo $Respuesta;
}

//Carga datos de personal para editarlos
if (isset($_POST['cargarPersonal']))
{
	$Val = $_POST['cargarPersonal'];
	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Respuesta = "";

		$Sentencia = "select
							nCodArea,
							cDni,
							cCargo,
							cNombres,
							cActivo
						from `" . BASEDATOS . "`.mPersonal where nCodigo=".$Val;

		$ListaSoftware = $Conexion -> query($Sentencia);
		while ($Fila = $ListaSoftware -> fetch_row())
			$Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3]."|".$Fila[4]."$";
		$Conexion -> close();
	}
	echo $Respuesta;
}

//Edita datos de un personal existente
if (isset($_POST['editarPersonal']))
{
	$Valores = explode("|",$_POST['editarPersonal']);

	//$Cadena = "'".$Valores[0]."', '".$Valores[1]."', '".$Valores[2]."'";

	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{		
		$Sentencia = "update `" . BASEDATOS . "`.mPersonal set
							`nCodArea`='".$Valores[0]."',
							`cDni`='".$Valores[1]."',
							`cCargo`='".$Valores[2]."',
							`cNombres`='".$Valores[3]."',
							`cActivo`='".$Valores[4]."'
					where `nCodigo`=".$Valores[5];

		$Conexion -> query($Sentencia);
		$Conexion -> close();
		$Respuesta = EDITAROK;
	}
	echo $Respuesta;
}

//Inicializa controles para "Editar Software"
if (isset($_POST['periodoEntrega'])) {


	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else {
		$Respuesta = "";
		$Sentencia = "select * from `" . BASEDATOS . "`.mPeriodo
							where cEstPeriodo= 1 && cEstEntrega = 'S'";

		$ListaPeriodos = $Conexion->query($Sentencia);
		while ($Fila = $ListaPeriodos->fetch_row()) {
			$Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2];
			$Respuesta .= "$";
		}

		$Conexion->close();
	}
	echo $Respuesta;
}


if (isset($_POST['listarEmpadronados'])) {
	$Valores = explode("|", $_POST['listarEmpadronados']);
	//$nCodApod = 0;
	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else {
		$Respuesta = "";

		$Sentencia = "select emp.nCodigo,apod.nCodigo nCodApod,apod.cNomApod,apod.cApeApod,cat.nCodigo nCodCat,cat.cDesCat, per.nCodigo nCodPeriodo, per.cNomPeriodo, inf.nCodigo nCodInf, inf.cNomInfan, inf.cApeInfan, emp.cEstEmp,per.nCantBenef
                      , TIMESTAMPDIFF( YEAR, inf.dFecNacInfan, now() ) as edad_anio
                      , TIMESTAMPDIFF( MONTH, inf.dFecNacInfan, now() ) % 12 as edad_mes
                                from `" . BASEDATOS . "`.mempadronado emp
                                inner join `" . BASEDATOS . "`.mapoderado apod
                                    on apod.nCodigo = emp.nCodApod
                                inner join `" . BASEDATOS . "`.mcategoria cat
                                    on cat.nCodigo = emp.nCodCat
                                inner join `" . BASEDATOS . "`.mperiodo per
                                    on per.nCodigo = emp.nCodPeriodo
                                left join `" . BASEDATOS . "`.minfante inf
                                    on inf.nCodigo = emp.nCodInf
                                where emp.nCodPeriodo = '" . $Valores[0] . "' order by emp.cEstEmp desc, emp.dFecEmp";


		$ListaEmpadronados = $Conexion->query($Sentencia);
		while ($Fila = $ListaEmpadronados->fetch_row()) {
			$Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2] . "|" . $Fila[3] . "|" . $Fila[4] . "|" . $Fila[5] . "|" . $Fila[6] . "|" . $Fila[7] . "|" . $Fila[8] . "|" . $Fila[9] . "|" . $Fila[10]."|".$Fila[11]."|".$Fila[12]."|".$Fila[13]."|".$Fila[14];
			$Respuesta .= '$';
		}

		$Conexion->close();
	}
	echo $Respuesta;
}

//Buscar Empadronado por dni
if (isset($_POST['listarEmpadronadosInicial'])) {
	$Valores = explode("|", $_POST['listarEmpadronadosInicial']);
	//$nCodApod = 0;
	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else {
		$Respuesta = "";

		$Sentencia = "select emp.nCodigo,apod.nCodigo nCodApod,apod.cNomApod,apod.cApeApod,cat.nCodigo nCodCat,cat.cDesCat, per.nCodigo nCodPeriodo, per.cNomPeriodo, inf.nCodigo nCodInf, inf.cNomInfan, inf.cApeInfan, emp.cEstEmp,per.nCantBenef
                      , TIMESTAMPDIFF( YEAR, inf.dFecNacInfan, now() ) as edad_anio
                      , TIMESTAMPDIFF( MONTH, inf.dFecNacInfan, now() ) % 12 as edad_mes
                                from `" . BASEDATOS . "`.mempadronado emp
                                inner join `" . BASEDATOS . "`.mapoderado apod
                                    on apod.nCodigo = emp.nCodApod
                                inner join `" . BASEDATOS . "`.mcategoria cat
                                    on cat.nCodigo = emp.nCodCat
                                inner join `" . BASEDATOS . "`.mperiodo per
                                    on per.nCodigo = emp.nCodPeriodo
                                left join `" . BASEDATOS . "`.minfante inf
                                    on inf.nCodigo = emp.nCodInf
                                where emp.nCodPeriodo = '" . $Valores[0] . "' order by emp.cEstEmp desc, emp.dFecEmp";


		$ListaEmpadronados = $Conexion->query($Sentencia);
		while ($Fila = $ListaEmpadronados->fetch_row()) {
			$Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2] . "|" . $Fila[3] . "|" . $Fila[4] . "|" . $Fila[5] . "|" . $Fila[6] . "|" . $Fila[7] . "|" . $Fila[8] . "|" . $Fila[9] . "|" . $Fila[10]."|".$Fila[11]."|".$Fila[12]."|".$Fila[13]."|".$Fila[14];
			$Respuesta .= '$';
		}

		$Conexion->close();
	}
	echo $Respuesta;
}
//Edita datos de un software existente
if (isset($_POST['validarNuevosEmpadronados'])) {
	$Valores = explode("|", $_POST['validarNuevosEmpadronados']);

	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else {
		$Sentencia = "delete from `" . BASEDATOS . "`.mempadronado where nCodPeriodo =". $Valores[0];
		$Conexion->query($Sentencia);

		$Sentencia = "insert into `" . BASEDATOS . "`.mempadronado
		(nCodApod,nCodInf,nCodCat,nCodPeriodo, dFeceMP, cEstEmp,nContEntregas,nContEmpSi)
		select nCodApod,nCodInf,nCodCat ,". $Valores[0].",now(),'N',0,0 from `muniyrb-sisgvl`.mempadronado where nCodigo in(".$Valores[1].")";
		$Conexion->query($Sentencia);
		$Conexion->close();
		$Respuesta = "Operación realizada con éxito.";
	}
	echo $Respuesta;
}

?>