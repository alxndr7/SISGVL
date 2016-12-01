<?php

include("_conexion.php");

if (isset($_POST['init']))
{
	$Respuesta = CLIENTE."|".SISTEMA."|".ALIAS."|".AUTOR;
	echo utf8_encode($Respuesta);
}

if (isset($_POST['ingresar']))
{
	$Conexion=conexionBD();

	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
		else
		{
			$Respuesta = "";

			$Valores = explode("|",$_POST['ingresar']);
			$Valores[0] = trim($Valores[0]);
			//$Valores[1] = trim($Valores[1]);
			$Valores[2] = trim($Valores[2]);

			$Sentencia = "select count(nCodigo) as nroreg, nCodigo, cUsuario, cActivo
							from `" . BASEDATOS . "`.mUsuarios
							where cUsuario='".$Valores[0]."' and cPass='".$Valores[1]."'";

			$NroReg = $Conexion -> query($Sentencia);
			while ($Fila = $NroReg -> fetch_row())
				for ($i=0; $i<4; $i++)
					$Respuesta .= $Fila[$i]."|";

			$Fila = explode("|",$Respuesta);

			/*if ($Fila[0]==1)
			{
				$Cadena = "'".$Fila[1]."', '".$Valores[2]."'";
				$Sentencia = "insert into `" . BASEDATOS . "`.tUsuarios (`nCodUsuario`, `dTimeStamp`) values (".$Cadena.")";
				$NroReg = $Conexion->query($Sentencia);
			}*/

			$Conexion -> close();
		}
		echo $Respuesta;
}

/*if (isset($_POST['cargarProximaPelea']))
{
	$Conexion=conexionBD();
	
	if (!$Conexion)
		$Respuesta = ERRORCONEXION;
	else
	{
		$Sentencia = "select a.cNomProg,
							a.cEscProg,
							(select cDistrito from mdistritos where nCodDist=a.nCodDist) as distrito,
							a.dFecProg,
							dayofweek(a.dFecProg) as dialetras,
							dayofmonth(a.dFecProg) as dia,
							month(a.dFecProg) as mes,
							year(a.dFecProg) as anio
					from mprogramas a where (year(a.dFecProg)-year(now()))>=0 order by a.dFecProg";
		$ListaProgramas = $Conexion->query($Sentencia);
		$Respuesta = "";
		while ($Fila = $ListaProgramas->fetch_row())
		{
			for ($i=0; $i<8; $i++)
				if ($i==4)
					switch ($Fila[$i])
					{
						case 1:
							$Respuesta .= "Domingo|";
							break;
						case 2:
							$Respuesta .= "Lunes|";
							break;
						case 3:
							$Respuesta .= "Martes|";
							break;
						case 4:
							$Respuesta .= "Miércoles|";
							break;
						case 5:
							$Respuesta .= "Jueves|";
							break;
						case 6:
							$Respuesta .= "Viernes|";
							break;
						case 7:
							$Respuesta .= "Sábado|";
							break;
					}
				else if ($i==6)
					{
						switch ($Fila[$i])
						{
							case 1:
								$Respuesta .= "enero|";
								break;
							case 2:
								$Respuesta .= "febrero|";
								break;
							case 3:
								$Respuesta .= "marzo|";
								break;
							case 4:
								$Respuesta .= "abril|";
								break;
							case 5:
								$Respuesta .= "mayo|";
								break;
							case 6:
								$Respuesta .= "junio|";
								break;
							case 7:
								$Respuesta .= "julio|";
								break;
							case 8:
								$Respuesta .= "agosto|";
								break;
							case 9:
								$Respuesta .= "septiembre|";
								break;
							case 10:
								$Respuesta .= "octubre|";
								break;
							case 11:
								$Respuesta .= "noviembre|";
								break;
							case 12:
								$Respuesta .= "diciembre|";
								break;
						}
					}
					else
						$Respuesta .= $Fila[$i]."|";
			$Respuesta .= "%";
		}
		$Conexion->close();
	}
	echo $Respuesta;
}*/

?>