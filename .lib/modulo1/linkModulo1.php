<?php

include("../_conexion.php");

//Inicializa controles para "Agregar Equipo"
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
		
		$Sentencia = "select * from `".BASEDATOS."`.mTipoImpresoras";
		$ListaTipoImpresoras = $Conexion -> query($Sentencia);
		while ($Fila = $ListaTipoImpresoras -> fetch_row())
			$Respuesta .= $Fila[0]."|".$Fila[1]."$";
		$Respuesta .= "%";
		
		$Sentencia = "select * from `".BASEDATOS."`.mTipoImpresion";
		$ListaTipoImpresion = $Conexion -> query($Sentencia);
		while ($Fila = $ListaTipoImpresion -> fetch_row())
			$Respuesta .= $Fila[0]."|".$Fila[1]."$";
		$Respuesta .= "%";

		$Conexion -> close();
	}
	echo $Respuesta;
}

//Inicializa controles para "Editar Equipo"
if (isset($_POST['initSubModulo2']))
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

		$Sentencia = "select * from `".BASEDATOS."`.mTipoImpresoras";
		$ListaTipoImpresoras = $Conexion -> query($Sentencia);
		while ($Fila = $ListaTipoImpresoras -> fetch_row())
			$Respuesta .= $Fila[0]."|".$Fila[1]."$";
		$Respuesta .= "%";
		
		$Sentencia = "select * from `".BASEDATOS."`.mTipoImpresion";
		$ListaTipoImpresion = $Conexion -> query($Sentencia);
		while ($Fila = $ListaTipoImpresion -> fetch_row())
			$Respuesta .= $Fila[0]."|".$Fila[1]."$";
		$Respuesta .= "%";

		$Conexion -> close();
	}
	echo $Respuesta;
}

//Inicializa controles para "Asignar Software"
if (isset($_POST['initSubModulo3']))
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

//Inicializa controles para "Remover Software"
if (isset($_POST['initSubModulo4']))
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

//Inicializa controles para "Reportes"
if (isset($_POST['initSubModulo5']))
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

//Carga datos de personal
if (isset($_POST['cargarPersonal']))
{
	$Dni = $_POST['cargarPersonal'];
	$Conexion = conexionBD();

	if (!$Conexion)
	$Respuesta = ERRORCONEXION;
	else
	{
		$Respuesta = "";

		$Sentencia = "select
							nCodigo,
							cCargo,
							cNombres
						from `".BASEDATOS."`.mPersonal where cDni like '".$Dni."'";

		$Personal = $Conexion -> query($Sentencia);
		while ($Fila = $Personal -> fetch_row())
			$Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."$";
		$Conexion -> close();

	}
	echo $Respuesta;
}

//Agrega un nuevo equipo a la BD
if (isset($_POST['agregarApode']))
{
       
	$Valores = explode("|",$_POST['agregarApode']);

	$Cadena = "'".$Valores[0]."', '".$Valores[1]."', '".$Valores[2]."', '".$Valores[3]."', '".$Valores[4]
				."',".$Valores[5];/*, '".$Valores[6]."', '".$Valores[7]."', '".$Valores[8]."', '".$Valores[9]
				."', '".$Valores[10]."', '".$Valores[11]."', '".$Valores[12]."', '".$Valores[13]."', '".$Valores[14]
				."', '".$Valores[15]."', '".$Valores[16]."', '".$Valores[17]."', '".$Valores[18]."', '".$Valores[19]
				."', '".$Valores[20]."'";*/

	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Sentencia = "insert into `".BASEDATOS."`.mApoderado
								(`cNomApod`, `cApeApod`, `cDirApod`, `cDniApod`,`cParentApod`,`nCodAnexo`)
						values (".$Cadena.")";

		$Conexion -> query($Sentencia);
		$Conexion -> close();
		$Respuesta = AGREGAROK;
	}
	echo $Respuesta;
}


//Agrega un nuevo equipo a la BD
if (isset($_POST['agregarInfant']))
{
       
	$Valores = explode("|",$_POST['agregarInfant']);

	$Cadena = "'".$Valores[0]."', '".$Valores[1]."', '".$Valores[2]."', '".$Valores[3]."',".$Valores[4];/*
				."',".$Valores[5];, '".$Valores[6]."', '".$Valores[7]."', '".$Valores[8]."', '".$Valores[9]
				."', '".$Valores[10]."', '".$Valores[11]."', '".$Valores[12]."', '".$Valores[13]."', '".$Valores[14]
				."', '".$Valores[15]."', '".$Valores[16]."', '".$Valores[17]."', '".$Valores[18]."', '".$Valores[19]
				."', '".$Valores[20]."'";*/

	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Sentencia = "insert into `".BASEDATOS."`.mInfante
								(`cNomInfan`, `cApeInfan`, `cDniInfan`,`dFecNacInfan`,`nCodApod`)
						values (".$Cadena.")";

		$Conexion -> query($Sentencia);
		$Conexion -> close();
		$Respuesta = AGREGAROK;
	}
	echo $Respuesta;
}
//Carga listado de equipos
if (isset($_POST['cargarEquipos']))
{
	$Val = $_POST['cargarEquipos'];
	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Respuesta = "";

		$Sentencia = "select
							nCodigo,
							nCodCategoria,
							cMarca,
							cModelo,
							nCodPersonalUser,
							(select cCargo from `".BASEDATOS."`.mPersonal where nCodigo=nCodPersonalUser) as cargo
						from `".BASEDATOS."`.mEquipos where nCodCategoria=".$Val;

		$ListaEquipos = $Conexion -> query($Sentencia);
		while ($Fila = $ListaEquipos -> fetch_row())
			$Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3]."|".$Fila[4]."|".$Fila[5]."$";
		$Respuesta .= "%";
		$Conexion -> close();
	}
	echo $Respuesta;
}

//Carga datos de un equipo para editarlos
if (isset($_POST['cargarEquipo']))
{
	$Val = $_POST['cargarEquipo'];
	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Respuesta = "";

		$Sentencia = "select
							nCodCategoria,
							nCodPersonalResp,
							(select cDni from `".BASEDATOS."`.mpersonal where nCodigo=nCodPersonalResp) as Dni1,
							(select cCargo from `".BASEDATOS."`.mpersonal where nCodigo=nCodPersonalResp) as Cargo1,
							(select cNombres from `".BASEDATOS."`.mpersonal where nCodigo=nCodPersonalResp) as Nombres1,
							nCodPersonalUser,
							(select cDni from `".BASEDATOS."`.mpersonal where nCodigo=nCodPersonalUser) as Dni2,
							(select cCargo from `".BASEDATOS."`.mpersonal where nCodigo=nCodPersonalUser) as Cargo2,
							(select cNombres from `".BASEDATOS."`.mpersonal where nCodigo=nCodPersonalUser) as Nombres2,
							cMarca,
							cModelo,
							cPlacaMadre,
							cProcesador,
							cNumNucleos,
							cMemoriaRam,
							cDiscoDuro,
							cTarjetaVideo,
							cTarjetaRed,
							cTarjetaSonido,
							cMonitor,
							cVelocidadEscaneo,
							cEscaneoAdf,
							cVelocidadImpresion,
							nCodTipoImpresora,
							nCodTipoImpresion,
							cImpresoraMultifuncional,
							cActivo
						from `".BASEDATOS."`.mEquipos where nCodigo=".$Val;

		$ListaEquipos = $Conexion -> query($Sentencia);
		while ($Fila = $ListaEquipos -> fetch_row())
			$Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3]."|".$Fila[4]."|".
							$Fila[5]."|".$Fila[6]."|".$Fila[7]."|".$Fila[8]."|".$Fila[9]."|".
							$Fila[10]."|".$Fila[11]."|".$Fila[12]."|".$Fila[13]."|".$Fila[14]."|".
							$Fila[15]."|".$Fila[16]."|".$Fila[17]."|".$Fila[18]."|".$Fila[19]."|".
							$Fila[20]."|".$Fila[21]."|".$Fila[22]."|".$Fila[23]."|".$Fila[24]."|".
							$Fila[25]."|".$Fila[26]."$";
		$Conexion -> close();
	}
	echo $Respuesta;
}

//Edita datos de un equipo existente
if (isset($_POST['editarApoderado']))
{
	$Valores = explode("|",$_POST['editarApoderado']);

	$Cadena = "'".$Valores[0]."', '".$Valores[1]."', '".$Valores[2]."', '".$Valores[3]."', '".$Valores[4]
	."', '".$Valores[5]."',".$Valores[6];/*, '".$Valores[7]."', '".$Valores[8]."', '".$Valores[9]
	."', '".$Valores[10]."', '".$Valores[11]."', '".$Valores[12]."', '".$Valores[13]."', '".$Valores[14]
	."', '".$Valores[15]."', '".$Valores[16]."', '".$Valores[17]."', '".$Valores[18]."', '".$Valores[19]
	."', '".$Valores[20]."'";*/

	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{		
		$Sentencia = "update `".BASEDATOS."`.mApoderado set
							`cNomApod`='".$Valores[1]."',
							`cApeApod`='".$Valores[2]."',
							`cDirApod`='".$Valores[3]."',
							`cDniApod`='".$Valores[4]."',
							`cParentApod`='".$Valores[5]."',
							`nCodAnexo`=".$Valores[6]."
					where `nCodigo`=".$Valores[0];

		$Conexion -> query($Sentencia);
		$Conexion -> close();
		$Respuesta = EDITAROK;
	}
	echo $Respuesta;
}

//Edita datos de un equipo existente
if (isset($_POST['editarInfante']))
{
	$Valores = explode("|",$_POST['editarInfante']);

	$Cadena = "'".$Valores[0]."', '".$Valores[1]."', '".$Valores[2]."', '".$Valores[3]."',".$Valores[4]
	.",".$Valores[5];/*, '".$Valores[7]."', '".$Valores[8]."', '".$Valores[9]
	."', '".$Valores[10]."', '".$Valores[11]."', '".$Valores[12]."', '".$Valores[13]."', '".$Valores[14]
	."', '".$Valores[15]."', '".$Valores[16]."', '".$Valores[17]."', '".$Valores[18]."', '".$Valores[19]
	."', '".$Valores[20]."'";*/

        
	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{		
		$Sentencia = "update `".BASEDATOS."`.mInfante set
							`cNomInfan`='".$Valores[0]."',
							`cApeInfan`='".$Valores[1]."',
							`cDniInfan`='".$Valores[2]."',
							`dFecNacInfan`='".$Valores[3]."',
							`nCodApod`=".$Valores[5]."
					where `nCodigo`=".$Valores[4];

		$Conexion -> query($Sentencia);
		$Conexion -> close();
		$Respuesta = EDITAROK;
	}
	echo $Respuesta;
}


//Carga datos de software (Asignar Software)
if (isset($_POST['cargarSoftwareNew']))
{
	$Val = $_POST['cargarSoftwareNew'];

	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Respuesta = "";

		$Sentencia = "select
							nCodigo,
							nCodSoftware,
							dFechaInstalacion,
							(select cDescripcion from `".BASEDATOS."`.`mSoftware` where nCodigo=nCodSoftware) cDesc
						from `".BASEDATOS."`.tEquiposSoftware where nCodEquipo=".$Val." order by dFechaInstalacion";

		$ListaSoftware = $Conexion -> query($Sentencia);
		while ($Fila = $ListaSoftware -> fetch_row())
			$Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3]."$";
		$Respuesta .= "%";

		$Sentencia = "select
							nCodigo,
							cDescripcion
						from `".BASEDATOS."`.mSoftware where cActivo=1 order by cDescripcion";

		$ListaSoftware = $Conexion -> query($Sentencia);
		while ($Fila = $ListaSoftware -> fetch_row())
			$Respuesta .= $Fila[0]."|".$Fila[1]."$";
			$Respuesta .= "%";

		$Conexion -> close();
	}
	echo $Respuesta;
}

//Carga datos de software (Remover Software)
if (isset($_POST['cargarSoftwareRmv']))
{
	$Val = $_POST['cargarSoftwareRmv'];

	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Respuesta = "";

		$Sentencia = "select
						nCodigo,
						nCodSoftware,
						(select cDescripcion from `".BASEDATOS."`.`mSoftware` where nCodigo=nCodSoftware) cDesc
					from `".BASEDATOS."`.tEquiposSoftware where nCodEquipo=".$Val." order by cDesc";

		$ListaSoftware = $Conexion -> query($Sentencia);
		while ($Fila = $ListaSoftware -> fetch_row())
			$Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."$";
		$Respuesta .= "%";

		$Conexion -> close();
	}
	echo $Respuesta;
}

//Agrega un nuevo equipo-software a la BD
if (isset($_POST['agregarEquipoSoftware']))
{
	$Valores = explode("|",$_POST['agregarEquipoSoftware']);

	$Cadena = "'".$Valores[0]."', '".$Valores[1]."', '".$Valores[2]."'";

	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Sentencia = "insert into `".BASEDATOS."`.tEquiposSoftware
							(`nCodEquipo`, `nCodSoftware`, `dFechaInstalacion`)
					values (".$Cadena.")";

		$Conexion -> query($Sentencia);
		$Conexion -> close();
		$Respuesta = AGREGAROK;
	}
	echo $Respuesta;
}

//Busca si equipo-software ya est� en la BD
if (isset($_POST['buscarEquipoSoftware']))
{
	$Valores = explode("|",$_POST['buscarEquipoSoftware']);

	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Respuesta = "";

		$Sentencia = "select count(nCodigo) from `".BASEDATOS."`.tEquiposSoftware
							where nCodEquipo=".$Valores[0]." and nCodSoftware=".$Valores[1];

		$ListaSoftware = $Conexion -> query($Sentencia);
		while ($Fila = $ListaSoftware -> fetch_row())
			$Respuesta .= $Fila[0]."$";
	}
	echo $Respuesta;
}

//Elimina un equipo-software de la BD
if (isset($_POST['removerEquipoSoftware']))
{
	$Valores = explode("|",$_POST['removerEquipoSoftware']);

	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Sentencia = "delete from `".BASEDATOS."`.tEquiposSoftware where nCodigo=".$Valores[0];

		$Conexion -> query($Sentencia);
		$Conexion -> close();
		$Respuesta = ELIMINAROK;
	}
	echo $Respuesta;
}

//Genera el reporte por equipos
if (isset($_POST['cargarReporte']))
{
	$Val = $_POST['cargarReporte'];
	
	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Respuesta = "";

		if ($Val==1)
		{
			$Sentencia = "select
								nCodigo,
								nCodCategoria,
								(select cDescripcion from `".BASEDATOS."`.mCategorias where nCodigo=nCodCategoria) as cCategoria,
								nCodPersonalResp,
								(select cNombres from `".BASEDATOS."`.mPersonal where nCodigo=nCodPersonalResp) as cResp,
								nCodPersonalUser,
								(select cNombres from `".BASEDATOS."`.mPersonal where nCodigo=nCodPersonalUser) as cUser,
								cMarca,
								cModelo,
								cPlacaMadre,
								cProcesador,
								cNumNucleos,
								cMemoriaRam,
								cDiscoDuro,
								cTarjetaVideo,
								cTarjetaRed,
								cTarjetaSonido,
								cMonitor
						from `".BASEDATOS."`.mEquipos where nCodCategoria=".$Val." and cActivo=1 order by cCategoria, nCodigo";

			$ListaEquipos = $Conexion -> query($Sentencia);
			while ($Fila = $ListaEquipos -> fetch_row())
				$Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3]."|".$Fila[4]."|".
								$Fila[5]."|".$Fila[6]."|".$Fila[7]."|".$Fila[8]."|".$Fila[9]."|".
								$Fila[10]."|".$Fila[11]."|".$Fila[12]."|".$Fila[13]."|".$Fila[14]."|".
								$Fila[15]."|".$Fila[16]."|".$Fila[17]."$";
			$Respuesta .= "%";
		}

		if ($Val==2)
		{
			$Sentencia = "select
								nCodigo,
								nCodCategoria,
								(select cDescripcion from `".BASEDATOS."`.mCategorias where nCodigo=nCodCategoria) as cCategoria,
								nCodPersonalResp,
								(select cNombres from `".BASEDATOS."`.mPersonal where nCodigo=nCodPersonalResp) as cResp,
								nCodPersonalUser,
								(select cNombres from `".BASEDATOS."`.mPersonal where nCodigo=nCodPersonalUser) as cUser,
								cMarca,
								cModelo,
								cPlacaMadre,
								cProcesador,
								cNumNucleos,
								cMemoriaRam,
								cDiscoDuro
						from `".BASEDATOS."`.mEquipos where nCodCategoria=".$Val." and cActivo=1 order by cCategoria, nCodigo";

			$ListaEquipos = $Conexion -> query($Sentencia);
			while ($Fila = $ListaEquipos -> fetch_row())
				$Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3]."|".$Fila[4]."|".
				$Fila[5]."|".$Fila[6]."|".$Fila[7]."|".$Fila[8]."|".$Fila[9]."|".
				$Fila[10]."|".$Fila[11]."|".$Fila[12]."|".$Fila[13]."$";
			$Respuesta .= "%";
		}

		if ($Val==3)
		{
			$Sentencia = "select
								nCodigo,
								nCodCategoria,
								(select cDescripcion from `".BASEDATOS."`.mCategorias where nCodigo=nCodCategoria) as cCategoria,
								nCodPersonalResp,
								(select cNombres from `".BASEDATOS."`.mPersonal where nCodigo=nCodPersonalResp) as cResp,
								nCodPersonalUser,
								(select cNombres from `".BASEDATOS."`.mPersonal where nCodigo=nCodPersonalUser) as cUser,
								cMarca,
								cModelo,
								cVelocidadEscaneo,
								cEscaneoAdf
						from `".BASEDATOS."`.mEquipos where nCodCategoria=".$Val." and cActivo=1 order by cCategoria, nCodigo";

			$ListaEquipos = $Conexion -> query($Sentencia);
			while ($Fila = $ListaEquipos -> fetch_row())
				$Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3]."|".$Fila[4]."|".
				$Fila[5]."|".$Fila[6]."|".$Fila[7]."|".$Fila[8]."|".$Fila[9]."|".
				$Fila[10]."$";
				$Respuesta .= "%";
		}

		if ($Val==4)
		{
			$Sentencia = "select
								nCodigo,
								nCodCategoria,
								(select cDescripcion from `".BASEDATOS."`.mCategorias where nCodigo=nCodCategoria) as cCategoria,
								nCodPersonalResp,
								(select cNombres from `".BASEDATOS."`.mPersonal where nCodigo=nCodPersonalResp) as cResp,
								nCodPersonalUser,
								(select cNombres from `".BASEDATOS."`.mPersonal where nCodigo=nCodPersonalUser) as cUser,
								cMarca,
								cModelo,
								cVelocidadImpresion,
								nCodTipoImpresora,
								(select cDescripcion from `".BASEDATOS."`.mTipoImpresoras where nCodigo=nCodTipoImpresora) as cTipoImpresora,
								nCodTipoImpresion,
								(select cDescripcion from `".BASEDATOS."`.mTipoImpresion where nCodigo=nCodTipoImpresion) as cTipoImpresion,
								cImpresoraMultifuncional
						from `".BASEDATOS."`.mEquipos where nCodCategoria=".$Val." and cActivo=1 order by cCategoria, nCodigo";

			$ListaEquipos = $Conexion -> query($Sentencia);
			while ($Fila = $ListaEquipos -> fetch_row())
				$Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3]."|".$Fila[4]."|".
				$Fila[5]."|".$Fila[6]."|".$Fila[7]."|".$Fila[8]."|".$Fila[9]."|".
				$Fila[10]."|".$Fila[11]."|".$Fila[12]."|".$Fila[13]."|".$Fila[14]."$";
				$Respuesta .= "%";
		}

		if ($Val==5)
		{
			$Sentencia = "select
								nCodigo,
								nCodCategoria,
								(select cDescripcion from `".BASEDATOS."`.mCategorias where nCodigo=nCodCategoria) as cCategoria,
								nCodPersonalResp,
								(select cNombres from `".BASEDATOS."`.mPersonal where nCodigo=nCodPersonalResp) as cResp,
								nCodPersonalUser,
								(select cNombres from `".BASEDATOS."`.mPersonal where nCodigo=nCodPersonalUser) as cUser,
								cMarca,
								cModelo,
								cPlacaMadre,
								cProcesador,
								cNumNucleos,
								cMemoriaRam,
								cDiscoDuro,
								cTarjetaVideo,
								cTarjetaRed,
								cTarjetaSonido,
								cMonitor
						from `".BASEDATOS."`.mEquipos where nCodCategoria=".$Val." and cActivo=1 order by cCategoria, nCodigo";

			$ListaEquipos = $Conexion -> query($Sentencia);
			while ($Fila = $ListaEquipos -> fetch_row())
				$Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3]."|".$Fila[4]."|".
				$Fila[5]."|".$Fila[6]."|".$Fila[7]."|".$Fila[8]."|".$Fila[9]."|".
				$Fila[10]."|".$Fila[11]."|".$Fila[12]."|".$Fila[13]."|".$Fila[14]."|".
				$Fila[15]."|".$Fila[16]."|".$Fila[17]."$";
				$Respuesta .= "%";
		}

		if ($Val==6)
		{
			$Sentencia = "select
								nCodigo,
								nCodCategoria,
								(select cDescripcion from `".BASEDATOS."`.mCategorias where nCodigo=nCodCategoria) as cCategoria,
								nCodPersonalResp,
								(select cNombres from `".BASEDATOS."`.mPersonal where nCodigo=nCodPersonalResp) as cResp,
								nCodPersonalUser,
								(select cNombres from `".BASEDATOS."`.mPersonal where nCodigo=nCodPersonalUser) as cUser,
								cMarca,
								cModelo
						from `".BASEDATOS."`.mEquipos where nCodCategoria=".$Val." and cActivo=1 order by cCategoria, nCodigo";

			$ListaEquipos = $Conexion -> query($Sentencia);
			while ($Fila = $ListaEquipos -> fetch_row())
				$Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3]."|".$Fila[4]."|".
				$Fila[5]."|".$Fila[6]."|".$Fila[7]."|".$Fila[8]."$";
				$Respuesta .= "%";
		}

		$Conexion -> close();
	}
	echo $Respuesta;
}

//Buscar Apoderado
if (isset($_POST['buscarApoderado']))
{
	$Valores = explode("|",$_POST['buscarApoderado']);

	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Respuesta = "";

		$Sentencia = "select * from `".BASEDATOS."`.mApoderado
							where cDniApod=".$Valores[0];

		$ListaSoftware = $Conexion -> query($Sentencia);
		while ($Fila = $ListaSoftware -> fetch_row())
                        $Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3]."|".$Fila[4]."|".$Fila[5]."|".$Fila[6];
                        $Respuesta .= "$";
	}
	echo $Respuesta;
}

//Buscar Infante
if (isset($_POST['buscarInfante']))
{
	$Valores = explode("|",$_POST['buscarInfante']);

	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Respuesta = "";

		$Sentencia = "select i.nCodigo,i.cNomInfan,i.cApeInfan,i.cDniInfan,i.dFecNacInfan,a.nCodigo nCodApod,a.cNomApod,a.cApeApod, a.cDniApod from `".BASEDATOS."`.mInfante i
                        inner join `".BASEDATOS."`.mapoderado a on
                            i.ncodApod = a.nCodigo
                            where i.cDniInfan =".$Valores[0];

		$ListaSoftware = $Conexion -> query($Sentencia);
		while ($Fila = $ListaSoftware -> fetch_row())
                        $Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3]."|".$Fila[4]."|".$Fila[5]."|".$Fila[6]."|".$Fila[7]."|".$Fila[8];
                        $Respuesta .= "$";
	}
	echo $Respuesta;
}

//Buscar Infante
if (isset($_POST['listarApoderados']))
{
	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Respuesta = "";

		$Sentencia = "select apod.cNomApod,apod.cApeApod, apod.cDirApod, apod.cDniApod, apod.cParentApod, anex.cDescAnexo from `".BASEDATOS."`.mApoderado apod
                        inner join `".BASEDATOS."`.mAnexo anex on
                            anex.ncodigo = apod.nCodAnexo";

		$ListaSoftware = $Conexion -> query($Sentencia);
		while ($Fila = $ListaSoftware -> fetch_row()) {
			$Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2] . "|" . $Fila[3] . "|" . $Fila[4] . "|" . $Fila[5];
			$Respuesta .= "$";
		}
	}
	echo $Respuesta;
}

if (isset($_POST['listarInfantes']))
{
	$Conexion = conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Respuesta = "";

		$Sentencia = "select inf.cNomInfan,inf.cApeInfan, inf.cDniInfan, inf.dFecNacInfan
						, TIMESTAMPDIFF( YEAR, inf.dFecNacInfan, now() ) as edad_anio
						, TIMESTAMPDIFF( MONTH, inf.dFecNacInfan, now() ) % 12 as edad_mes
 						,apod.cNomApod, apod.cApeApod from `".BASEDATOS."`.minfante inf
                        inner join `".BASEDATOS."`.mapoderado apod on
                            apod.ncodigo = inf.nCodApod";

		$ListaSoftware = $Conexion -> query($Sentencia);
		while ($Fila = $ListaSoftware -> fetch_row()) {
			$Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2] . "|" . $Fila[3] . "|" . $Fila[4] . "|" . $Fila[5]. "|" . $Fila[6] . "|" . $Fila[7];
			$Respuesta .= "$";
		}
	}
	echo $Respuesta;
}
?>