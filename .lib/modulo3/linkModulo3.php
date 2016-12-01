<?php

include("../_conexion.php");

//Inicializa controles para "Agregar Personal"
if (isset($_POST['initSubModulo1'])) {
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select
							nCodigo,
							cDescripcion
						from `" . BASEDATOS . "`.mAreas where cActivo=1 order by cDescripcion";
        $ListaCategorias = $Conexion->query($Sentencia);
        while ($Fila = $ListaCategorias->fetch_row())
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "$";
        $Respuesta .= "%";

        $Conexion->close();
    }
    echo $Respuesta;
}

//Inicializa controles para "Editar Personal"
if (isset($_POST['initSubModulo2'])) {
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select
							nCodigo,
							cDescInsumo
						from `" . BASEDATOS . "`.mInsumo";
        $ListaCargos = $Conexion->query($Sentencia);
        while ($Fila = $ListaCargos->fetch_row())
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "$";
        $Respuesta .= "%";

        $Conexion->close();
    }
    echo $Respuesta;
}

//Inicializa controles
if (isset($_POST['initSubModulo3'])) {
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select
							nCodigo,
							cNomPeriodo
						from `" . BASEDATOS . "`.mPeriodo where cEstPeriodo = 0 order by cNomPeriodo";
        $ListaCargos = $Conexion->query($Sentencia);
        while ($Fila = $ListaCargos->fetch_row())
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "$";
        $Respuesta .= "%";

        $Sentencia = "select * from `" . BASEDATOS . "`.mInsumo";
        $ListaTipoImpresoras = $Conexion->query($Sentencia);
        while ($Fila = $ListaTipoImpresoras->fetch_row())
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "$";
        $Respuesta .= "%";

        $Conexion->close();
    }
    echo $Respuesta;
}
//Inicializa controles para "Editar �rea"
if (isset($_POST['initSubModulo4'])) {
     $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select
							nCodigo,
							cNomPeriodo
						from `" . BASEDATOS . "`.mPeriodo where cEstPeriodo = 1 order by cNomPeriodo";
        $ListaCargos = $Conexion->query($Sentencia);
        while ($Fila = $ListaCargos->fetch_row())
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "$";
        $Respuesta .= "%";

        $Sentencia = "select * from `" . BASEDATOS . "`.mInsumo";
        $ListaTipoImpresoras = $Conexion->query($Sentencia);
        while ($Fila = $ListaTipoImpresoras->fetch_row())
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "$";
        $Respuesta .= "%";
        
        /*$Sentencia = "select r.nCantRac,i.cDescInsumo from `" . BASEDATOS . "`.tracion r 
            inner join ". BASEDATOS . ".minsumo i
            on r.nCodInsumo = i.nCodigo
            where nCodPeriodo = ";
        $ListaTipoImpresoras = $Conexion->query($Sentencia);
        while ($Fila = $ListaTipoImpresoras->fetch_row())
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "$";
        $Respuesta .= "%";*/

        $Conexion->close();
        }
echo $Respuesta;
}

//Inicializa controles para "Reportes"
if (isset($_POST['initSubModulo5'])) {
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select
							nCodigo,
							cDescripcion
						from `" . BASEDATOS . "`.mAreas where cActivo=1";
        $ListaAreas = $Conexion->query($Sentencia);
        while ($Fila = $ListaAreas->fetch_row())
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "$";
        $Respuesta .= "%";

        $Conexion->close();
    }
    echo $Respuesta;
}

//Verifica que el DNI del personal no est� registrado en la BD (Agregar Personal)
if (isset($_POST['validarNewDni'])) {
    $Dni = $_POST['validarNewDni'];
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select
							count(nCodigo)
						from `" . BASEDATOS . "`.mPersonal where cDni like '" . $Dni . "'";

        $Personal = $Conexion->query($Sentencia);
        while ($Fila = $Personal->fetch_row())
            $Respuesta .= $Fila[0] . "$";
        $Conexion->close();
    }
    echo $Respuesta;
}

//Verifica que el DNI del personal no est� registrado en la BD (Editar Personal)
if (isset($_POST['validarEdtDni'])) {
    $Valores = explode("|", $_POST['validarEdtDni']);
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select
						count(nCodigo)
					from `" . BASEDATOS . "`.mPersonal where nCodigo<>" . $Valores[1] . " and cDni like '" . $Valores[0] . "'";

        $Personal = $Conexion->query($Sentencia);
        while ($Fila = $Personal->fetch_row())
            $Respuesta .= $Fila[0] . "$";
        $Conexion->close();
    }
    echo $Respuesta;
}

//Agrega un nuevo personal a la BD
if (isset($_POST['agregarInsumo'])) {
    $Valores = explode("|", $_POST['agregarInsumo']);

    $Cadena = "'" . $Valores[0] . "','".$Valores[1]."'";

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Sentencia = "insert into `" . BASEDATOS . "`.mInsumo
								(`cDescInsumo`,`nCantInsumo`)
						values (" . $Cadena . ")";

        $Conexion->query($Sentencia);
        $Conexion->close();
        $Respuesta = AGREGAROK;
    }
    echo $Respuesta;
}


//Agrega un nuevo personal a la BD
if (isset($_POST['agregarRacion'])) {
    $Valores0 = explode("%", $_POST['agregarRacion']);
    $values = count($Valores0);
    $Cadena = "";

    for ($i = 0; $i < $values - 1; $i++) {
        $Valores = explode("|", $Valores0[$i]);
        //$Cadena[i] = "'".$Valores[0]."'";
        $Cadena = $Cadena . "('" . $Valores[0] . "', '" . $Valores[2] . "','" . $Valores[1] . "','" . $Valores[3] . "'),";
    }
    $Cadena = substr($Cadena, 0, -1);


    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Sentencia = "insert into `" . BASEDATOS . "`.tRacion
                                            (`cCodRacion`,`nCodInsumo`,`nCodPeriodo`,`nCantRac`)
      values " . $Cadena;
        
        

        $Conexion->query($Sentencia);
        
        $Sentencia = "update `" . BASEDATOS . "`.mPeriodo set
							`cEstPeriodo`= 1
					where `nCodigo`=" . $Valores[0];
        $Conexion->query($Sentencia);
        $Conexion->close();
        $Respuesta = AGREGAROK;
    }
    echo $Respuesta;
}


//Carga datos de personal para editarlos
if (isset($_POST['cargarInsumo'])) {
    $Val = $_POST['cargarInsumo'];
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select
							nCodigo,
							cDescInsumo,
							nCantInsumo
						from `" . BASEDATOS . "`.mInsumo where nCodigo=" . $Val;

        $ListaPersonal = $Conexion->query($Sentencia);
        while ($Fila = $ListaPersonal->fetch_row())
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2] ."$";
        $Conexion->close();
    }
    echo $Respuesta;
}


//Carga datos de personal para editarlos
if (isset($_POST['listarInsumos'])) {

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select
							nCodigo,
							cDescInsumo,
							nCantInsumo
						from `" . BASEDATOS . "`.mInsumo";

        $ListaPersonal = $Conexion->query($Sentencia);
        while ($Fila = $ListaPersonal->fetch_row())
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2] ."$";
        $Conexion->close();
    }
    echo $Respuesta;
}

//Carga datos de personal para editarlos
if (isset($_POST['cargarEditarRacion'])) {
    
    $Val = $_POST['cargarEditarRacion'];
    $Conexion = conexionBD();
    
    

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select r.nCodPeriodo, r.nCantRac,i.cDescInsumo, r.nCodInsumo from
						 `" . BASEDATOS . "`.tracion r 
                                                     inner join `".BASEDATOS."`.minsumo i
                                                    on r.nCodInsumo = i.nCodigo
                                                    where r.nCodPeriodo = " . $Val;

        $ListaPersonal = $Conexion->query($Sentencia);
     
        while ($Fila = $ListaPersonal->fetch_row())
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|".$Fila[2]. "|".$Fila[3]."$";
        $Conexion->close();
    }
    
    echo $Respuesta;
    
}

//Edita datos de un personal existente
if (isset($_POST['editarInsumo'])) {
    $Valores = explode("|", $_POST['editarInsumo']);

    //$Cadena = "'".$Valores[0]."', '".$Valores[1]."', '".$Valores[2]."'";

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Sentencia = "update `" . BASEDATOS . "`.mInsumo set
							`cDescInsumo`='" . $Valores[0] . "'
							,`nCantInsumo`='" . $Valores[2] . "'
					where `nCodigo`=" . $Valores[1];

        $Conexion->query($Sentencia);
        $Conexion->close();
        $Respuesta = EDITAROK;
    }
    echo $Respuesta;
}


//Edita datos de un personal existente
if (isset($_POST['editarStock'])) {
    $Valores = explode("|", $_POST['editarStock']);

    //$Cadena = "'".$Valores[0]."', '".$Valores[1]."', '".$Valores[2]."'";

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Sentencia = "update `" . BASEDATOS . "`.mInsumo set
							 `nCantInsumo`= `nCantInsumo` + " . $Valores[1] . "
					where `nCodigo`=" . $Valores[0];

        $Conexion->query($Sentencia);
        $Conexion->close();
        $Respuesta = EDITAROK;
    }
    echo $Respuesta;
}
//Agrega una nueva area a la BD
if (isset($_POST['crearRacion'])) {
    $Valores = explode("|", $_POST['crearRacion']);

    $Cadena = "'" . $Valores[0] . "', '" . $Valores[1] . "'";

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Sentencia = "insert into `" . BASEDATOS . "`.mAreas
							(`cDescripcion`, `cActivo`)
					values (" . $Cadena . ")";

        $Conexion->query($Sentencia);
        $Conexion->close();
        $Respuesta = AGREGAROK;
    }
    echo $Respuesta;
}

//Carga datos de un area para editarlos
if (isset($_POST['cargarArea'])) {
    $Val = $_POST['cargarArea'];
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select
						cDescripcion,
						cActivo
					from `" . BASEDATOS . "`.mAreas where nCodigo=" . $Val;

        $ListaAreas = $Conexion->query($Sentencia);
        while ($Fila = $ListaAreas->fetch_row())
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "$";
        $Conexion->close();
    }
    echo $Respuesta;
}

//Edita datos de un area existente
if (isset($_POST['editarArea'])) {
    $Valores = explode("|", $_POST['editarArea']);

    //$Cadena = "'".$Valores[0]."', '".$Valores[1]."', '".$Valores[2]."'";

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Sentencia = "update `" . BASEDATOS . "`.mAreas set
						`cDescripcion`='" . $Valores[0] . "',
						`cActivo`='" . $Valores[1] . "'
				where `nCodigo`=" . $Valores[2];

        $Conexion->query($Sentencia);
        $Conexion->close();
        $Respuesta = EDITAROK;
    }
    echo $Respuesta;
}


//Edita datos de una racion existente
if (isset($_POST['editarRacion'])) {
    
    $Valores0 = explode("%", $_POST['editarRacion']);
    $values = count($Valores0);
    $Cadena = "";
   

    for ($i = 0; $i < $values - 1; $i++) {
        $Valores = explode("|", $Valores0[$i]);
        //$Cadena[i] = "'".$Valores[0]."'";
        $Cadena = $Cadena . "('" . $Valores[0] . "', '" . $Valores[2] . "','" . $Valores[1] . "','" . $Valores[3] . "'),";
    }
    $Cadena = substr($Cadena, 0, -1);

    
    
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
         $Sentencia = "delete  from `" . BASEDATOS . "`.tracion 
					where `nCodPeriodo`=" . $Valores[0];
        $Conexion->query($Sentencia);
        
        $Sentencia = "insert into `" . BASEDATOS . "`.tRacion
                                            (`cCodRacion`,`nCodInsumo`,`nCodPeriodo`,`nCantRac`)
        values " . $Cadena;
        
        

        $Conexion->query($Sentencia);
        
       
        $Conexion->close();
        $Respuesta = AGREGAROK;
    }
    echo $Respuesta;
}

if (isset($_POST['reporteRacionBenef'])) {
    $Val =  $_POST['reporteRacionBenef'];
    $nCodPeriodo = 0;

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select apod.cNomApod,apod.cApeApod,cat.cDesCat, per.cNomPeriodo, inf.cNomInfan, inf.cApeInfan, benef.cEstEntrega, entr.cDescNumEntrega, benef.dFecEntrega, entr.cDescNumEntrega
                               , TIMESTAMPDIFF( YEAR, inf.dFecNacInfan,benef.dFecEntrega ) as edad_anio
                      , TIMESTAMPDIFF( MONTH, inf.dFecNacInfan, benef.dFecEntrega ) % 12 as edad_mes
                      , per.nCodigo
                                from `" . BASEDATOS . "`.dbeneficiario benef
                            inner join `" . BASEDATOS ."`.dEntrega entr
    on entr.nCodigo = benef.nCodEntrega
                                 inner join `" . BASEDATOS . "`.mempadronado emp
    on benef.nCodEmpa = emp.nCodigo
    inner join `" . BASEDATOS . "`.mapoderado apod
    on apod.nCodigo = emp.nCodApod
    inner join `" . BASEDATOS . "`.mcategoria cat
    on cat.nCodigo = emp.nCodCat
    inner join `" . BASEDATOS . "`.mperiodo per
    on per.nCodigo = emp.nCodPeriodo
    left join `" . BASEDATOS . "`.minfante inf
    on inf.nCodigo = emp.nCodInf
    where benef.nCodEntrega = " . $Val . " order by benef.cEstEntrega asc, emp.dFecEmp";

        $ListaBenef = $Conexion->query($Sentencia);
        while ($Fila = $ListaBenef->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2] . "|" . $Fila[3] . "|" . $Fila[4] . "|" . $Fila[5] . "|" . $Fila[6] . "|" . $Fila[7]."|".$Fila[8]."|".$Fila[9]."|".$Fila[10]."|".$Fila[11];
            $Respuesta .= '$';
            $nCodPeriodo = $Fila[12];
        }

        $Respuesta .= '%';

        $Sentencia = "SELECT rac.nCantRac, ins.cDescInsumo FROM  `" . BASEDATOS . "`.tracion rac
                        inner join `muniyrb-sisgvl`.minsumo ins on
                            ins.nCodigo = rac.nCodInsumo
                        where rac.nCodPeriodo = ".$nCodPeriodo;

        $insumosRacion= $Conexion->query($Sentencia);
        while ($Fila = $insumosRacion->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1];
            $Respuesta .= '$';
        }
        $Conexion->close();
    }
    echo $Respuesta;
}


//Genera el reporte por equipos por �rea
if (isset($_POST['reporteGeneral'])) {

    $Periodo = $_POST['reporteGeneral'];

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";


        $Sentencia = "select
							 per.nCodigo, per.cNomPeriodo, entr.cDescNumEntrega, per.nCantBenef maxBenef
					        ,(SELECT count(*) FROM `" . BASEDATOS . "`.mempadronado where nCodPeriodo = per.nCodigo) numEmp
                            ,(SELECT group_concat(concat(rac.nCantRac,' - ',ins.cDescInsumo))
                            FROM `" . BASEDATOS . "`.tRacion rac
                            inner join `" . BASEDATOS . "`.mInsumo ins
                            on ins.nCodigo = rac.nCodInsumo
                            where nCodPeriodo = per.nCodigo ) detalleInsumos
                            , count(if(benef.cEstEntrega ='S',1,null)) si, count(if(benef.cEstEntrega ='N',1,null)) nos
                            , count(benef.nCodEmpa) numBenef
                            from `" . BASEDATOS . "`.dbeneficiario benef
                            inner join `" . BASEDATOS . "`.dEntrega entr
                            on entr.nCodigo = benef.nCodEntrega
                            inner join `" . BASEDATOS . "`.mempadronado emp
                            on benef.nCodEmpa = emp.nCodigo
                            inner join `" . BASEDATOS . "`.mperiodo per
                            on per.nCodigo = emp.nCodPeriodo
                            WHERE per.nCodigo = ". $Periodo . "
                            group by benef.nCodEntrega";

       $ListaEquipos = $Conexion->query($Sentencia);
        while ($Fila = $ListaEquipos->fetch_row())
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2] . "|" . $Fila[3] . "|" . $Fila[4] . "|" .
                    $Fila[5] . "|" . $Fila[6] . "|" . $Fila[7] . "|" . $Fila[8] . "$";

        $Conexion->close();
    }
    echo $Respuesta;
}
?>