<?php

include("../_conexion.php");


//Inicializa controles para "Editar Software"
if (isset($_POST['initSubModulo1'])) {
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";
        $Sentencia = "select * from `" . BASEDATOS . "`.mPeriodo
							where cEstPeriodo= 1";

        $ListaPeriodos = $Conexion->query($Sentencia);
        while ($Fila = $ListaPeriodos->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2];
            $Respuesta .= "$";
        }
        $Respuesta .= "%";

        $Sentencia = "select * from `" . BASEDATOS . "`.mCategoria";

        $ListaPeriodos = $Conexion->query($Sentencia);
        while ($Fila = $ListaPeriodos->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1];
            $Respuesta .= "$";
        }

        $Conexion->close();
    }
    echo $Respuesta;
}

//Inicializa controles para "Editar Software"
if (isset($_POST['initSubModulo2'])) {
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";
        $Sentencia = "select * from `" . BASEDATOS . "`.mPeriodo
							where cEstPeriodo= 1";

        $ListaPeriodos = $Conexion->query($Sentencia);
        while ($Fila = $ListaPeriodos->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2];
            $Respuesta .= "$";
        }
        $Respuesta .= "%";

        $Sentencia = "select * from `" . BASEDATOS . "`.mCategoria";

        $ListaPeriodos = $Conexion->query($Sentencia);
        while ($Fila = $ListaPeriodos->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1];
            $Respuesta .= "$";
        }

        $Conexion->close();
    }
    echo $Respuesta;
}

//Inicializa controles para "Editar Software"
if (isset($_POST['initSubModulo3'])) {
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";
        $Sentencia = "select * from `" . BASEDATOS . "`.mPeriodo
							where cEstPeriodo= 1";

        $ListaPeriodos = $Conexion->query($Sentencia);
        while ($Fila = $ListaPeriodos->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2];
            $Respuesta .= "$";
        }

        $Conexion->close();
    }
    echo $Respuesta;
}

//Inicializa controles para "Editar Software"
if (isset($_POST['initSubModulo4'])) {
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";
        $Sentencia = "select * from `" . BASEDATOS . "`.mPeriodo
							where cEstPeriodo= 1";

        $ListaPeriodos = $Conexion->query($Sentencia);
        while ($Fila = $ListaPeriodos->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2];
            $Respuesta .= "$";
        }

        $Conexion->close();
    }
    echo $Respuesta;
}

//Agrega un nuevo software a la BD
if (isset($_POST['agregarEmpadronado'])) {
    $Valores = explode("|", $_POST['agregarEmpadronado']);

    $Cadena = "'" . $Valores[0] . "', '" . $Valores[1] . "','" . $Valores[2] . "','" . $Valores[3] . "',NOW(),'E',0,0";

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Sentencia = "insert into `" . BASEDATOS . "`.mEmpadronado
								(`nCodApod`, `nCodInf`,`nCodCat`, `nCodPeriodo`, `dFecEmp`,`cEstEmp`,`nContEntregas`,`nContEmpSi`)
						values (" . $Cadena . ")";

        $Conexion->query($Sentencia);
        $Conexion->close();
        $Respuesta = AGREGAROK;
    }
    echo $Respuesta;
}

//Carga datos de un software para editarlos
if (isset($_POST['validarCreacionEntrega'])) {

    $Val = explode("|", $_POST['validarCreacionEntrega']);

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select  nCodigo,cEstCreacion from `" . BASEDATOS . "`.dentrega where nCodPeriodo = " . $Val[0] . " && nNumEntrega = " .$Val[1];

        $Estado = $Conexion->query($Sentencia);
        while ($Fila = $Estado->fetch_row())
            $Respuesta .= $Fila[0] . "|" . $Fila[1] ;
        $Conexion->close();
    }
    echo $Respuesta;
}

//Carga datos de un software para editarlos
if (isset($_POST['crearBeneficiarios'])) {

    $Val = $_POST['crearBeneficiarios'];

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "insert into `" . BASEDATOS . "`.dbeneficiario (`nCodEmpa`,`nCodEntrega`,`cEstEntrega`,`cEstEmpa`)
                          select nCodigo nCodEmpad, " . $Val . " nCodEntrega, 'N', cEstEmp
                         from `MUNIYRB-SISGVL`.mempadronado
                         where cEstEmp = 'S' OR  cEstEmp = 'E'";

        $Conexion->query($Sentencia);

        $Sentencia = "update `" . BASEDATOS . "`.mEmpadronado set
							`nContEmpSi`= `nContEmpSi` + 1
					 where `cEstEmp`= 'S'" ;

        $Conexion->query($Sentencia);

        $Sentencia = "update `" . BASEDATOS . "`.dentrega set
							 `cEstCreacion`='S'
					 where `nCodigo`=" . $Val;

        $Conexion->query($Sentencia);

        $Conexion->close();
    }
    echo $Respuesta;
}


//Edita datos de un software existente
if (isset($_POST['editarEmpadronado'])) {
    $Valores = explode("|", $_POST['editarEmpadronado']);

    $Cadena = "'" . $Valores[0] . "', '" . $Valores[1] . "','" . $Valores[2] . "','" . $Valores[3] . "','" . $Valores[4] . "'";

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Sentencia = "update `" . BASEDATOS . "`.mEmpadronado set
							`nCodApod`='" . $Valores[1] . "',
							`nCodInf`='" . $Valores[2] . "',
							`nCodCat`='" . $Valores[3] . "',
							`nCodPeriodo`='" . $Valores[4] . "'
					 where `nCodigo`=" . $Valores[0];

        $Conexion->query($Sentencia);
        $Conexion->close();
        $Respuesta = EDITAROK;
    }
    echo $Respuesta;
}

//Buscar Apoderado
if (isset($_POST['buscarPersona'])) {
    $Valores = explode("|", $_POST['buscarPersona']);
    $nCodApod = 0;
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select * from `" . BASEDATOS . "`.mApoderado
							where cDniApod=" . $Valores[0];

        $ListaApoderado = $Conexion->query($Sentencia);
        while ($Fila = $ListaApoderado->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2];
            $nCodApod = $Fila[0];
        }

        $Respuesta .= "%";

        $Sentencia = "select * from `" . BASEDATOS . "`.mInfante where nCodApod=" . $nCodApod;

        $ListaPeriodos = $Conexion->query($Sentencia);
        while ($Fila = $ListaPeriodos->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2];
            $Respuesta .= "$";
        }

        $Conexion->close();
    }
    echo $Respuesta;
}


//Buscar Empadronado por dni
if (isset($_POST['buscarEmpadronado'])) {
    $Valores = explode("|", $_POST['buscarEmpadronado']);
    $nCodApod = 0;
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select emp.nCodigo,apod.nCodigo nCodApod,apod.cNomApod,apod.cApeApod,cat.nCodigo nCodCat,cat.cDesCat, per.nCodigo nCodPeriodo, per.cNomPeriodo, inf.nCodigo nCodInf, inf.cNomInfan, inf.cApeInfan

                                from `" . BASEDATOS . "`.mempadronado emp
inner join `" . BASEDATOS . "`.mapoderado apod
on apod.nCodigo = emp.nCodApod 
inner join `" . BASEDATOS . "`.mcategoria cat
on cat.nCodigo = emp.nCodCat 
inner join `" . BASEDATOS . "`.mperiodo per
on per.nCodigo = emp.nCodPeriodo 
left join `" . BASEDATOS . "`.minfante inf
on inf.nCodigo = emp.nCodInf 
 where emp.nCodApod = (select ncodigo from `muniyrb-sisgvl`.mapoderado where cDniApod = '" . $Valores[0] . "') and emp.nCodPeriodo = " . $Valores[1];

        $ListaPeriodos = $Conexion->query($Sentencia);
        while ($Fila = $ListaPeriodos->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2] . "|" . $Fila[3] . "|" . $Fila[4] . "|" . $Fila[5] . "|" . $Fila[6] . "|" . $Fila[7] . "|" . $Fila[8] . "|" . $Fila[9] . "|" . $Fila[10];
            $nCodApod = $Fila[1];
            $Respuesta .= "$";
        }
        $Respuesta .= "%";

        $Sentencia = "select * from `" . BASEDATOS . "`.mInfante where nCodApod=" . $nCodApod;

        $ListaPeriodos = $Conexion->query($Sentencia);
        while ($Fila = $ListaPeriodos->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2];
            $Respuesta .= "$";
        }
        $Conexion->close();
    }
    echo $Respuesta;
}


//Buscar Empadronado por dni
if (isset($_POST['buscarEmpadronadoCodigo'])) {
    $Valores = explode("|", $_POST['buscarEmpadronadoCodigo']);
    //$nCodApod = 0;
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select emp.nCodigo,apod.nCodigo nCodApod,apod.cNomApod,apod.cApeApod,cat.nCodigo nCodCat,cat.cDesCat, per.nCodigo nCodPeriodo, per.cNomPeriodo, inf.nCodigo nCodInf, inf.cNomInfan, inf.cApeInfan

                                from `" . BASEDATOS . "`.mempadronado emp
inner join `" . BASEDATOS . "`.mapoderado apod
on apod.nCodigo = emp.nCodApod
inner join `" . BASEDATOS . "`.mcategoria cat
on cat.nCodigo = emp.nCodCat
inner join `" . BASEDATOS . "`.mperiodo per
on per.nCodigo = emp.nCodPeriodo
left join `" . BASEDATOS . "`.minfante inf
on inf.nCodigo = emp.nCodInf
 where emp.nCodigo = '" . $Valores[0] . "'";

        $ListaPeriodos = $Conexion->query($Sentencia);
        while ($Fila = $ListaPeriodos->fetch_row())
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2] . "|" . $Fila[3] . "|" . $Fila[4] . "|" . $Fila[5] . "|" . $Fila[6] . "|" . $Fila[7] . "|" . $Fila[8] . "|" . $Fila[9] . "|" . $Fila[10];

        $Respuesta .= '%';

        $Sentencia = "select * from `" . BASEDATOS . "`.mInfante where nCodApod = '" . $Valores[1] . "'";
        $ListaHijos = $Conexion->query($Sentencia);
        while ($Fila = $ListaHijos->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2];
            $Respuesta .= '$';
        }

        $Conexion->close();
    }
    echo $Respuesta;
}


//Buscar
if (isset($_POST['listarBeneficiarios'])) {
    $Val =  explode("|",$_POST['listarBeneficiarios']);
    //$nCodApod = 0;
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select benef.nCodEmpa,benef.nCodEntrega,apod.cNomApod,apod.cApeApod,cat.cDesCat, per.cNomPeriodo, inf.cNomInfan, inf.cApeInfan, benef.cEstEntrega, entr.cDescNumEntrega
                               , TIMESTAMPDIFF( YEAR, inf.dFecNacInfan, now() ) as edad_anio
                      , TIMESTAMPDIFF( MONTH, inf.dFecNacInfan, now() ) % 12 as edad_mes
                      , per.nCodigo periodo
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
    where benef.nCodEntrega = " . $Val[0] . " and benef.cEstEmpa = 'S' order by benef.cEstEntrega asc, emp.dFecEmp";

        $ListaBenef = $Conexion->query($Sentencia);
        while ($Fila = $ListaBenef->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2] . "|" . $Fila[3] . "|" . $Fila[4] . "|" . $Fila[5] . "|" . $Fila[6] . "|" . $Fila[7]."|".$Fila[8]."|".$Fila[9]."|".$Fila[10]."|".$Fila[11]."|".$Fila[12];
            $Respuesta .= '$';
        }

        $Respuesta .= '%';

        $Sentencia = "select i.nCodigo,i.cDescInsumo,i.nCantInsumo, t.nCantRac from `".BASEDATOS."`.tracion t
         inner join `".BASEDATOS."` .minsumo i
        on i.nCodigo = t.nCodInsumo
        where t.nCodPeriodo = ".$Val[1];
        $Insumos = $Conexion->query($Sentencia);
        while ($Fila = $Insumos->fetch_row()) {
            $Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3];
            $Respuesta .= "$";
        }

        $Conexion->close();
    }
    echo $Respuesta;
}

//Buscar
if (isset($_POST['listarBeneficiariosReporte'])) {
    $Val =  explode("|",$_POST['listarBeneficiariosReporte']);
    //$nCodApod = 0;
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select benef.nCodEmpa,benef.nCodEntrega,apod.cNomApod,apod.cApeApod,cat.cDesCat, per.cNomPeriodo, inf.cNomInfan, inf.cApeInfan, benef.cEstEntrega, entr.cDescNumEntrega
                               , TIMESTAMPDIFF( YEAR, inf.dFecNacInfan, now() ) as edad_anio
                      , TIMESTAMPDIFF( MONTH, inf.dFecNacInfan, now() ) % 12 as edad_mes
                      , per.nCodigo periodo, benef.cEstEmpa
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
    where benef.nCodEntrega = " . $Val[0] . " and benef.cEstEmpa = 'S'  order by benef.cEstEmpa desc, emp.dFecEmp";

        $ListaBenef = $Conexion->query($Sentencia);
        while ($Fila = $ListaBenef->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2] . "|" . $Fila[3] . "|" . $Fila[4] . "|" . $Fila[5] . "|" . $Fila[6] . "|" . $Fila[7]."|".$Fila[8]."|".$Fila[9]."|".$Fila[10]."|".$Fila[11]."|".$Fila[12]."|".$Fila[13];
            $Respuesta .= '$';
        }

        $Respuesta .= '%';

        $Sentencia = "select i.nCodigo,i.cDescInsumo,i.nCantInsumo, t.nCantRac from `".BASEDATOS."`.tracion t
         inner join `".BASEDATOS."` .minsumo i
        on i.nCodigo = t.nCodInsumo
        where t.nCodPeriodo = ".$Val[1];
        $Insumos = $Conexion->query($Sentencia);
        while ($Fila = $Insumos->fetch_row()) {
            $Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3];
            $Respuesta .= "$";
        }

        $Conexion->close();
    }
    echo $Respuesta;
}


//Buscar
if (isset($_POST['listarBeneficiariosReportePorAnexoSA'])) {
    $Val =  explode("|",$_POST['listarBeneficiariosReportePorAnexoSA']);
    //$nCodApod = 0;
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select benef.nCodEmpa,benef.nCodEntrega,apod.cNomApod,apod.cApeApod,cat.cDesCat, per.cNomPeriodo, inf.cNomInfan, inf.cApeInfan, benef.cEstEntrega, entr.cDescNumEntrega
                               , TIMESTAMPDIFF( YEAR, inf.dFecNacInfan, now() ) as edad_anio
                      , TIMESTAMPDIFF( MONTH, inf.dFecNacInfan, now() ) % 12 as edad_mes
                      , per.nCodigo periodo, benef.cEstEmpa, anex.cDescAnexo
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
    inner join `" . BASEDATOS . "`.manexo anex
    on anex.nCodigo = apod.nCodAnexo
    left join `" . BASEDATOS . "`.minfante inf
    on inf.nCodigo = emp.nCodInf
    where benef.nCodEntrega = " . $Val[0] . " and benef.cEstEmpa = 'S' and apod.nCodAnexo = 1  order by benef.cEstEmpa desc, emp.dFecEmp";

        $ListaBenef = $Conexion->query($Sentencia);
        while ($Fila = $ListaBenef->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2] . "|" . $Fila[3] . "|" . $Fila[4] . "|" . $Fila[5] . "|" . $Fila[6] . "|" . $Fila[7]."|".$Fila[8]."|".$Fila[9]."|".$Fila[10]."|".$Fila[11]."|".$Fila[12]."|".$Fila[13]."|".$Fila[14];
            $Respuesta .= '$';
        }

        $Respuesta .= '%';

        $Sentencia = "select i.nCodigo,i.cDescInsumo,i.nCantInsumo, t.nCantRac from `".BASEDATOS."`.tracion t
         inner join `".BASEDATOS."` .minsumo i
        on i.nCodigo = t.nCodInsumo
        where t.nCodPeriodo = ".$Val[1];
        $Insumos = $Conexion->query($Sentencia);
        while ($Fila = $Insumos->fetch_row()) {
            $Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3];
            $Respuesta .= "$";
        }

        $Conexion->close();
    }
    echo $Respuesta;
}


//Buscar
if (isset($_POST['listarBeneficiariosReportePorAnexoYara'])) {
    $Val =  explode("|",$_POST['listarBeneficiariosReportePorAnexoYara']);
    //$nCodApod = 0;
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select benef.nCodEmpa,benef.nCodEntrega,apod.cNomApod,apod.cApeApod,cat.cDesCat, per.cNomPeriodo, inf.cNomInfan, inf.cApeInfan, benef.cEstEntrega, entr.cDescNumEntrega
                               , TIMESTAMPDIFF( YEAR, inf.dFecNacInfan, now() ) as edad_anio
                      , TIMESTAMPDIFF( MONTH, inf.dFecNacInfan, now() ) % 12 as edad_mes
                      , per.nCodigo periodo, benef.cEstEmpa, anex.cDescAnexo
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
    inner join `" . BASEDATOS . "`.manexo anex
    on anex.nCodigo = apod.nCodAnexo
    left join `" . BASEDATOS . "`.minfante inf
    on inf.nCodigo = emp.nCodInf
    where benef.nCodEntrega = " . $Val[0] . " and benef.cEstEmpa = 'S' and apod.nCodAnexo = 2  order by benef.cEstEmpa desc, emp.dFecEmp";

        $ListaBenef = $Conexion->query($Sentencia);
        while ($Fila = $ListaBenef->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2] . "|" . $Fila[3] . "|" . $Fila[4] . "|" . $Fila[5] . "|" . $Fila[6] . "|" . $Fila[7]."|".$Fila[8]."|".$Fila[9]."|".$Fila[10]."|".$Fila[11]."|".$Fila[12]."|".$Fila[13]."|".$Fila[14];
            $Respuesta .= '$';
        }

        $Respuesta .= '%';

        $Sentencia = "select i.nCodigo,i.cDescInsumo,i.nCantInsumo, t.nCantRac from `".BASEDATOS."`.tracion t
         inner join `".BASEDATOS."` .minsumo i
        on i.nCodigo = t.nCodInsumo
        where t.nCodPeriodo = ".$Val[1];
        $Insumos = $Conexion->query($Sentencia);
        while ($Fila = $Insumos->fetch_row()) {
            $Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3];
            $Respuesta .= "$";
        }

        $Conexion->close();
    }
    echo $Respuesta;
}




//Buscar
if (isset($_POST['listarBeneficiariosEsperaReporte'])) {
    $Val =  explode("|",$_POST['listarBeneficiariosEsperaReporte']);
    //$nCodApod = 0;
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select benef.nCodEmpa,benef.nCodEntrega,apod.cNomApod,apod.cApeApod,cat.cDesCat, per.cNomPeriodo, inf.cNomInfan, inf.cApeInfan, benef.cEstEntrega, entr.cDescNumEntrega
                               , TIMESTAMPDIFF( YEAR, inf.dFecNacInfan, now() ) as edad_anio
                      , TIMESTAMPDIFF( MONTH, inf.dFecNacInfan, now() ) % 12 as edad_mes
                      , per.nCodigo periodo, benef.cEstEmpa
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
    where benef.nCodEntrega = " . $Val[0] . " and  benef.cEstEmpa = 'E' order by benef.cEstEmpa desc, emp.dFecEmp";

        $ListaBenef = $Conexion->query($Sentencia);
        while ($Fila = $ListaBenef->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2] . "|" . $Fila[3] . "|" . $Fila[4] . "|" . $Fila[5] . "|" . $Fila[6] . "|" . $Fila[7]."|".$Fila[8]."|".$Fila[9]."|".$Fila[10]."|".$Fila[11]."|".$Fila[12]."|".$Fila[13];
            $Respuesta .= '$';
        }

        $Respuesta .= '%';

        $Sentencia = "select i.nCodigo,i.cDescInsumo,i.nCantInsumo, t.nCantRac from `".BASEDATOS."`.tracion t
         inner join `".BASEDATOS."` .minsumo i
        on i.nCodigo = t.nCodInsumo
        where t.nCodPeriodo = ".$Val[1];
        $Insumos = $Conexion->query($Sentencia);
        while ($Fila = $Insumos->fetch_row()) {
            $Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3];
            $Respuesta .= "$";
        }

        $Conexion->close();
    }
    echo $Respuesta;
}



//Buscar Empadronado por dni
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
if (isset($_POST['listControlEntregas'])) {
    $Valores = explode("|", $_POST['listControlEntregas']);
    $nCodPeriodo = 0;
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select benef.nCodEmpa,benef.dFecEntrega, apod.cNomApod,apod.cApeApod,inf.cNomInfan,inf.cApeInfan,cat.cDesCat
                        , per.cNomPeriodo, entr.cDescNumEntrega,benef.cEstEntrega, benef.cEstEmpa, emp.nContEntregas
                        , emp.nContEmpSi numEntr
                        /*, (select count(nCodEmpa) from `" . BASEDATOS . "`.dbeneficiario where nCodEmpa = benef.nCodEmpa and cEstEmpa = 'S') */
                        , TIMESTAMPDIFF( YEAR, inf.dFecNacInfan, now() ) as edad_anio
                        , TIMESTAMPDIFF( MONTH, inf.dFecNacInfan, now() ) % 12 as edad_mes
                        , benef.nCodEmpa, benef.nCodEntrega,per.nCodigo,(emp.nContEmpSi - emp.nContEntregas) noRecogidos
                        from `" . BASEDATOS . "`.dbeneficiario benef
                        inner join  `" . BASEDATOS . "`.mempadronado emp
                        on emp.nCodigo = benef.nCodEmpa
                        inner join  `" . BASEDATOS . "`.mapoderado apod
                        on apod.nCodigo = emp.nCodApod
                        inner join  `" . BASEDATOS . "`.mcategoria cat
                        on cat.nCodigo = emp.nCodCat
                        inner join  `" . BASEDATOS . "`.dentrega entr
                        on entr.nCodigo = benef.nCodEntrega
                        inner join  `" . BASEDATOS . "`.mperiodo per
                        on per.ncodigo = entr.nCodPeriodo
                        left join  `" . BASEDATOS . "`.minfante inf
                        on inf.nCodigo = emp.nCodInf
                        where nCodEntrega = (
                        SELECT nCodigo FROM `" . BASEDATOS . "`.dentrega where nCodPeriodo
                        in (select nCodigo from `" . BASEDATOS . "`.mperiodo where cNomPeriodo like '%".$Valores[0]."%')
                        and cDescNumEntrega like '%".$Valores[1]."%') AND benef.cEstEntrega = 'N' order by emp.dFecEmp asc, benef.cEstEmpa" ;

        $ListaEmpadronados = $Conexion->query($Sentencia);
        while ($Fila = $ListaEmpadronados->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2] . "|" . $Fila[3] . "|" . $Fila[4]
                     . "|" . $Fila[5] . "|" . $Fila[6] . "|" . $Fila[7] . "|" . $Fila[8] . "|" . $Fila[9]
                    . "|" . $Fila[10]."|".$Fila[11]."|".$Fila[12]."|".$Fila[13]."|".$Fila[14]."|".$Fila[15]."|".$Fila[16]."|".$Fila[17]."|".$Fila[18];
            $Respuesta .= '$';
            $nCodPeriodo = $Fila[17];
        }

        $Respuesta .= '%';

        $Sentencia = "select i.nCodigo,i.cDescInsumo,i.nCantInsumo, t.nCantRac from `".BASEDATOS."`.tracion t
         inner join `".BASEDATOS."` .minsumo i
        on i.nCodigo = t.nCodInsumo
        where t.nCodPeriodo = ".$nCodPeriodo;
        $Insumos = $Conexion->query($Sentencia);
        while ($Fila = $Insumos->fetch_row()) {
            $Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2]."|".$Fila[3];
            $Respuesta .= "$";
        }

        $Conexion->close();
    }
    echo $Respuesta;
}

//Edita datos de un software existente
if (isset($_POST['updateEstado'])) {
    $Valores = explode("|", $_POST['updateEstado']);

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Sentencia = "update `" . BASEDATOS . "`.mEmpadronado set
							`cEstEmp`='" . $Valores[1] . "'
					 where `nCodigo`=" . $Valores[0];

        $Conexion->query($Sentencia);

        $Sentencia = "update `" . BASEDATOS . "`.dBeneficiario set
							`cEstEmpa`='" . $Valores[1] . "'
					 where `nCodEmpa`=" . $Valores[0] . " and `nCodEntrega`= ". $Valores[2];

        $Conexion->query($Sentencia);

        $Conexion->close();
        $Respuesta = EDITAROK;
    }
    echo $Respuesta;
}

//Edita datos de un software existente
if (isset($_POST['updateEstadoControl'])) {
    $Valores = explode("|", $_POST['updateEstadoControl']);

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Sentencia = "update `" . BASEDATOS . "`.mEmpadronado set
							`cEstEmp`='" . $Valores[1] . "'
					 where `nCodigo`=" . $Valores[0];

        $Conexion->query($Sentencia);
        $Conexion->close();
        $Respuesta = EDITAROK;
    }
    echo $Respuesta;
}

//Edita datos de un software existente
if (isset($_POST['updateEstadoBenef'])) {
    $Valores = explode("|", $_POST['updateEstadoBenef']);

    $Respuesta = "";
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Sentencia = "update `" . BASEDATOS . "`.dbeneficiario set
							`cEstEntrega`='" . $Valores[2] . "',
							`dFecEntrega`= now()
					 where `nCodEmpa`=" . $Valores[0]. " && nCodEntrega = " . $Valores[1];

        $Conexion->query($Sentencia);

        if($Valores[2] == 'S'){
            $Sentencia = "update `" . BASEDATOS . "`.mEmpadronado set
							`nContEntregas`= `nContEntregas` + 1
					 where `nCodigo`=" . $Valores[0]. " and cEstEmp = 'S'";
            $Conexion->query($Sentencia);

            $Sentencia = "select nCodInsumo from `" . BASEDATOS . "`.tracion where nCodPeriodo = ". $Valores[3];

            $ListaInsumo = $Conexion->query($Sentencia);
            while ($Fila = $ListaInsumo->fetch_row()) {
                $Respuesta .= $Fila[0];
                $Respuesta .= "$";
            }

            $Sentencia = "update `".BASEDATOS."`.minsumo SET nCantInsumo = CASE nCodigo";
            $Sentencia2 = "  END WHERE nCodigo IN (";
            $codInsumos = explode("$", $Respuesta);
            for($i = 0; $i<count($codInsumos)-1;$i++){
                $Sentencia .= " when ". $codInsumos[$i] . " then nCantInsumo - (select nCantRac from `".BASEDATOS."`.tracion where nCodPeriodo = ".$Valores[3]." and nCodInsumo = ".$codInsumos[$i]. ")";
                $Sentencia2 .= $codInsumos[$i].",";
            }
            $Sentencia2 = substr($Sentencia2, 0, -1);
            $Sentencia .= $Sentencia2 . ")";
            $Conexion->query($Sentencia);

        }
        else{
            $Sentencia = "update `" . BASEDATOS . "`.mEmpadronado set
							`nContEntregas`= `nContEntregas` -1
					 where `nCodigo`=" . $Valores[0]." and cEstEmp = 'S'";
            $Conexion->query($Sentencia);

            $Sentencia = "select nCodInsumo from `" . BASEDATOS . "`.tracion where nCodPeriodo = ". $Valores[3];

            $ListaInsumo = $Conexion->query($Sentencia);
            while ($Fila = $ListaInsumo->fetch_row()) {
                $Respuesta .= $Fila[0];
                $Respuesta .= "$";
            }

            $Sentencia = "update `".BASEDATOS."`.minsumo SET nCantInsumo = CASE nCodigo";
            $Sentencia2 = "  END WHERE nCodigo IN (";
            $codInsumos = explode("$", $Respuesta);
            for($i = 0; $i<count($codInsumos)-1;$i++){
                $Sentencia .= " when ". $codInsumos[$i] . " then nCantInsumo + (select nCantRac from `".BASEDATOS."`.tracion where nCodPeriodo = ".$Valores[3]." and nCodInsumo = ".$codInsumos[$i].")";
                $Sentencia2 .= $codInsumos[$i].",";
            }
            $Sentencia2 = substr($Sentencia2, 0, -1);
            $Sentencia .= $Sentencia2 . ")";
            $Conexion->query($Sentencia);
        }
        $Respuesta = "";

        $Sentencia = "select i.nCodigo,i.cDescInsumo,i.nCantInsumo from `".BASEDATOS."`.tracion t
         inner join `".BASEDATOS."` .minsumo i
        on i.nCodigo = t.nCodInsumo
        where t.nCodPeriodo = ".$Valores[3];
        $Insumos = $Conexion->query($Sentencia);
        while ($Fila = $Insumos->fetch_row()) {
            $Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2];
            $Respuesta .= "$";
        }

        $Conexion->close();
        //$Respuesta = EDITAROK;
    }
    echo $Respuesta;
}


//Edita datos de un software existente
if (isset($_POST['validarStock'])) {
    $Valores =  $_POST['validarStock'];

    $Respuesta = "";
    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Sentencia = "select i.nCodigo,i.cDescInsumo,if(i.nCantInsumo - t.nCantRac>=0,'S','N') stock from `".BASEDATOS."`.tracion t
         inner join `".BASEDATOS."` .minsumo i
        on i.nCodigo = t.nCodInsumo
        where t.nCodPeriodo = ".$Valores;
        $Insumos = $Conexion->query($Sentencia);
        while ($Fila = $Insumos->fetch_row()) {
            $Respuesta .= $Fila[0]."|".$Fila[1]."|".$Fila[2];
            $Respuesta .= "$";
        }

        $Conexion->close();
        //$Respuesta = EDITAROK;
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

//Inicializa controles para "Editar Software"
if (isset($_POST['entregasPorPeriodo'])) {

    $Val = $_POST['entregasPorPeriodo'];

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";


        $Sentencia = "select ent.nCodigo, ent.cDescNumEntrega, per.nCantBenef from `" . BASEDATOS . "`.dentrega ent
                            inner join mPeriodo per
                            on per.ncodigo = ent.nCodPeriodo
							where nCodPeriodo = " . $Val. " and cEstCreacion = 'N'" ;

         $ListaEntrega = $Conexion->query($Sentencia);
                while ($Fila = $ListaEntrega->fetch_row()) {
                    $Respuesta .= $Fila[0] . "|" . $Fila[1]."|".$Fila[2];
                    $Respuesta .= "$";
                }

        $Conexion->close();

        echo $Respuesta;

    }
}

//Inicializa controles para "Editar Software"
if (isset($_POST['entregasPorPeriodoBenef'])) {

    $Val = $_POST['entregasPorPeriodoBenef'];

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";


        $Sentencia = "select ent.nCodigo, ent.cDescNumEntrega, per.nCantBenef from `" . BASEDATOS . "`.dentrega ent
                            inner join mPeriodo per
                            on per.ncodigo = ent.nCodPeriodo
							where nCodPeriodo = " . $Val. " and cEstCreacion = 'S'" ;

        $ListaEntrega = $Conexion->query($Sentencia);
        while ($Fila = $ListaEntrega->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1]."|".$Fila[2];
            $Respuesta .= "$";
        }

        $Conexion->close();

        echo $Respuesta;

    }
}


//Inicializa controles para "Editar Software"
if (isset($_POST['validarCreacionBenef'])) {

    $Val = $_POST['validarCreacionBenef'];

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";


        $Sentencia = "select count(nCodEntrega) from `" . BASEDATOS . "`.dbeneficiario
							where nCodEntrega = " . $Val ;

        $ListaEntrega = $Conexion->query($Sentencia);
        while ($Fila = $ListaEntrega->fetch_row()) {
            $Respuesta .= $Fila[0];
        }

        $Conexion->close();

        echo $Respuesta;

    }
}



//Buscar Empadronado por dni
if (isset($_POST['reporteBenefPorMes'])) {
    $Val =  $_POST['reporteBenefPorMes'];
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


if (isset($_POST['reporteBenefPeriodoPorDni'])) {

    $Valores = explode("|", $_POST['reporteBenefPeriodoPorDni']);
    $nCodPeriodo = 0;

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "select apod.cNomApod, apod.cApeApod, inf.cNomInfan, inf.cApeInfan, cat.cDesCat, per.cNomPeriodo, entr.cDescNumEntrega, benef.cEstEntrega
                      , per.nCodigo
                       , TIMESTAMPDIFF( YEAR, inf.dFecNacInfan,benef.dFecEntrega ) as edad_anio
                      , TIMESTAMPDIFF( MONTH, inf.dFecNacInfan, benef.dFecEntrega ) % 12 as edad_mes
                      , benef.dFecEntrega
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
    where benef.nCodEntrega  in (select nCodigo FROM `".BASEDATOS."`.dEntrega where ncodPeriodo = " . $Valores[0] .") and apod.cDniApod = '".$Valores[1]."' order by per.nCodigo, entr.nCodigo";

        $ListaBenef = $Conexion->query($Sentencia);
        while ($Fila = $ListaBenef->fetch_row()) {
            $Respuesta .= $Fila[0] . "|" . $Fila[1] . "|" . $Fila[2] . "|" . $Fila[3] . "|" . $Fila[4] . "|" . $Fila[5] . "|" . $Fila[6] . "|" . $Fila[7]."|" . $Fila[8] . "|" . $Fila[9]."|" . $Fila[10]."|" . $Fila[11];
            $Respuesta .= '$';
            $nCodPeriodo = $Fila[8];
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


if (isset($_POST['eliminarEmpadronado'])) {

    $Valores = explode("|", $_POST['eliminarEmpadronado']);

    $Conexion = conexionBD();

    if (!$Conexion)
        $Respuesta = ERRORCONEXION;
    else {
        $Respuesta = "";

        $Sentencia = "delete from `" . BASEDATOS . "`.mEmpadronado where nCodigo = ".$Valores[0]." and nCodPeriodo = ".$Valores[1];

        $Respuesta = $Conexion->query($Sentencia);
        $Conexion->close();
    }
    echo $Respuesta;
}
?>