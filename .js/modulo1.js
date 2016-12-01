//Evalua el submódulo a cargar (Agregar Equipo, Editar Equipo, Reportes)
function cargarSubmodulo(id, desde) {
    $("#modules").load(desde);
    document.getElementById("modules").style.display = "block";

    if (id == 1)
    //Inicia Agregar Equipo
        initSubModulo1();
    if (id == 2)
    //Inicia Editar Equipo
        initSubModulo2();
    if (id == 3)
    //Inicia Asignar Software
        initSubModulo3();
    if (id == 4)
    //Inicia Remover Software
        initSubModulo4();
    if (id == 5)
    //Inicia Reportes
        initSubModulo5();
}

//Inicia controles para "Agregar Equipo"
function initSubModulo1() {
    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Cadena1 = xmlhttp.responseText.split('%');
            Cadena2 = Cadena1[0].split('$');
            for (i = 0; i < (Cadena2.length) - 1; i++) {
                Cadena3 = Cadena2[i].split('|');
                var opt = document.createElement("option");
                opt.value = Cadena3[0];
                opt.text = Cadena3[1];
                document.getElementById("newcategoria").add(opt);
            }

            Cadena2 = Cadena1[1].split('$');
            for (i = 0; i < (Cadena2.length) - 1; i++) {
                Cadena3 = Cadena2[i].split('|');
                var opt = document.createElement("option");
                opt.value = Cadena3[0];
                opt.text = Cadena3[1];
                document.getElementById("newtipoimpresora").add(opt);
            }

            Cadena2 = Cadena1[2].split('$');
            for (i = 0; i < (Cadena2.length) - 1; i++) {
                Cadena3 = Cadena2[i].split('|');
                var opt = document.createElement("option");
                opt.value = Cadena3[0];
                opt.text = Cadena3[1];
                document.getElementById("newtipoimpresion").add(opt);
            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo1=1");
}

//Inicia controles para "Editar Equipo"
function initSubModulo2() {
    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Cadena1 = xmlhttp.responseText.split('%');
            Cadena2 = Cadena1[0].split('$');
            for (i = 0; i < (Cadena2.length) - 1; i++) {
                Cadena3 = Cadena2[i].split('|');
                var opt1 = document.createElement("option");
                var opt2 = document.createElement("option");
                opt1.value = Cadena3[0];
                opt1.text = Cadena3[1];
                opt2.value = Cadena3[0];
                opt2.text = Cadena3[1];
                document.getElementById("selcategoria").add(opt1);
                document.getElementById("edtcategoria").add(opt2);
            }

            Cadena2 = Cadena1[1].split('$');
            for (i = 0; i < (Cadena2.length) - 1; i++) {
                Cadena3 = Cadena2[i].split('|');
                var opt = document.createElement("option");
                opt.value = Cadena3[0];
                opt.text = Cadena3[1];
                document.getElementById("edttipoimpresora").add(opt);
            }

            Cadena2 = Cadena1[2].split('$');
            for (i = 0; i < (Cadena2.length) - 1; i++) {
                Cadena3 = Cadena2[i].split('|');
                var opt = document.createElement("option");
                opt.value = Cadena3[0];
                opt.text = Cadena3[1];
                document.getElementById("edttipoimpresion").add(opt);
            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo2=1");
}

//Inicia controles para "Asignar Software"
function initSubModulo3() {
    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Cadena1 = xmlhttp.responseText.split('%');
            Cadena2 = Cadena1[0].split('$');
            for (i = 0; i < (Cadena2.length) - 1; i++) {
                Cadena3 = Cadena2[i].split('|');
                var opt = document.createElement("option");
                opt.value = Cadena3[0];
                opt.text = Cadena3[1];
                document.getElementById("selcategoria").add(opt);
            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo3=1");
}

//Inicia controles para "Remover Software"
function initSubModulo4() {
    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Cadena1 = xmlhttp.responseText.split('%');
            Cadena2 = Cadena1[0].split('$');
            for (i = 0; i < (Cadena2.length) - 1; i++) {
                Cadena3 = Cadena2[i].split('|');
                var opt = document.createElement("option");
                opt.value = Cadena3[0];
                opt.text = Cadena3[1];
                document.getElementById("selcategoria").add(opt);
            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo4=1");
}

//Inicia controles para "Reportes"
function initSubModulo5() {
    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Cadena1 = xmlhttp.responseText.split('%');
            Cadena2 = Cadena1[0].split('$');
            for (i = 0; i < (Cadena2.length) - 1; i++) {
                Cadena3 = Cadena2[i].split('|');
                var opt = document.createElement("option");
                opt.value = Cadena3[0];
                opt.text = Cadena3[1];
                document.getElementById("selcategoria").add(opt);
            }

            /*opt = document.createElement("option");
             opt.value = 99;
             opt.text = "Todas las Categorías";
             document.getElementById("selcategoria").add(opt);*/
        }
    }

    xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo5=1");
}

//Limita longitud de campo DNI a 8 caracteres
function limitarDNI(obj) {
    obj.value = obj.value.substring(0, 8);
}

//Busca DNI de apoderado
function buscarPorDni(val1) {
    var dni;

    if (val1 == 1) {
        dni = document.getElementById("buscarDniBenef").value;

    }

    if (val1 == 2) {
        dni = document.getElementById("buscarDniApodEdit").value;

    }


    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Cadena1 = xmlhttp.responseText.split('$');
            Cadena2 = Cadena1[0].split('|');

            //alert(1);
            if (val1 == 1) {

                if (Cadena2[0] != "") {
                    //document.getElementById("newcodresponsableequipo").value = Cadena2[0];
                    document.getElementById("msjBusquedaDni").style.display = "block";

                    document.getElementById("body2").style.display = "none";
                    document.getElementById("btnAgregar").style.display = "none";

                }
                else {
                    //document.getElementById("newcodresponsableequipo").value = 0;
                    document.getElementById("body2").style.display = "block";
                    document.getElementById("btnAgregar").style.display = "block";
                    document.getElementById("cDniApod").value = dni;
                    document.getElementById("msjBusquedaDni").style.display = "none";

                }

            }
            if (val1 == 2) {
                if (Cadena2[0] != "") {
                    document.getElementById("msjBusquedaDni").style.display = "none";
                    document.getElementById("body2").style.display = "block";
                    document.getElementById("nCodigo").value = Cadena2[0];
                    document.getElementById("cNomApod").value = Cadena2[1];
                    document.getElementById("cApeApod").value = Cadena2[2];
                    document.getElementById("cDirApod").value = Cadena2[3];
                    document.getElementById("cDniApod").value = Cadena2[4];
                    document.getElementById("cParentApod").value = Cadena2[5];
                    document.getElementById("nCodAnexo").value = Cadena2[6];
                    document.getElementById("btnAgregar").style.display = "block";
                }
                else {
                    document.getElementById("body2").style.display = "none";
                    document.getElementById("btnAgregar").style.display = "none";
                    document.getElementById("cDniApod").value = dni;
                    document.getElementById("msjBusquedaDni").style.display = "block";
                }
            }

        }
    }

    xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("buscarApoderado=" + dni);
}

//Buscar por DNI de infante
function buscarPorDniInf(val1) {
    var dni;

    if (val1 == 1) {
        dni = document.getElementById("buscarDniInf").value;

    }

    if (val1 == 2) {
        dni = document.getElementById("buscarDniInfEdit").value;

    }


    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Cadena1 = xmlhttp.responseText.split('$');
            Cadena2 = Cadena1[0].split('|');

            //alert(Cadena2);
            if (val1 == 1) {

                if (Cadena2[0] != "") {
                    //document.getElementById("newcodresponsableequipo").value = Cadena2[0];
                    document.getElementById("msjBusquedaDni").style.display = "block";

                    document.getElementById("body2").style.display = "none";
                    document.getElementById("btnAgregar").style.display = "none";

                }
                else {
                    //document.getElementById("newcodresponsableequipo").value = 0;
                    document.getElementById("body2").style.display = "block";
                    document.getElementById("btnAgregar").style.display = "block";
                    document.getElementById("cDniInfan").value = dni;
                    document.getElementById("msjBusquedaDni").style.display = "none";

                }

            }
            if (val1 == 2) {
                if (Cadena2[0] != "") {
                    document.getElementById("msjBusquedaDni").style.display = "none";
                    document.getElementById("body2").style.display = "block";
                    document.getElementById("nCodigo").value = Cadena2[0];
                    document.getElementById("cNomInfan").value = Cadena2[1];
                    document.getElementById("cApeInfan").value = Cadena2[2];
                    document.getElementById("cDniInfan").value = Cadena2[3];
                    document.getElementById("dFecNacInfan").value = Cadena2[4];
                    document.getElementById("nCodApod").value = Cadena2[5];
                    document.getElementById("nomApod").value = Cadena2[6] + " " + Cadena2[7];
                    document.getElementById("buscarDniApodInf").value = Cadena2[8];
                    document.getElementById("btnAgregar").style.display = "block";
                }
                else {
                    document.getElementById("body2").style.display = "none";
                    document.getElementById("btnAgregar").style.display = "none";
                    document.getElementById("cDniInfan").value = dni;
                    document.getElementById("msjBusquedaDni").style.display = "block";
                }
            }

        }
    }

    xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("buscarInfante=" + dni);


}

function buscarApodHij(val1) {
    var dni;

    if (val1 == 1) {
        dni = document.getElementById("buscarDniApodInf").value;

    }

    if (val1 == 2) {
        dni = document.getElementById("buscarDniApodEdit").value;

    }


    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Cadena1 = xmlhttp.responseText.split('$');
            Cadena2 = Cadena1[0].split('|');

            //alert(1);
            if (val1 == 1) {

                if (Cadena2[0] != "") {
                    //document.getElementById("newcodresponsableequipo").value = Cadena2[0];
                    document.getElementById("nomApod").value = Cadena2[1] + " " + Cadena2[2];
                    document.getElementById("nCodApod").value = Cadena2[0];
                    document.getElementById("msjBuscDni").style.display = "none";

                }
                else {
                    document.getElementById("msjBuscDni").style.display = "block";
                    document.getElementById("nomApod").value = "";
                    //document.getElementById("newcodresponsableequipo").value = 0;
                }

            }
            if (val1 == 2) {
                if (Cadena2[0] != "") {
                    document.getElementById("msjBusquedaDni").style.display = "none";
                    document.getElementById("body2").style.display = "block";
                    document.getElementById("nCodigo").value = Cadena2[0];
                    document.getElementById("cNomApod").value = Cadena2[1];
                    document.getElementById("cApeApod").value = Cadena2[2];
                    document.getElementById("cDirApod").value = Cadena2[3];
                    document.getElementById("cDniApod").value = Cadena2[4];
                    document.getElementById("cParentApod").value = Cadena2[5];
                    document.getElementById("nCodAnexo").value = Cadena2[6];
                    document.getElementById("btnAgregar").style.display = "block";
                }
                else {
                    document.getElementById("body2").style.display = "none";
                    document.getElementById("btnAgregar").style.display = "none";
                    document.getElementById("cDniApod").value = dni;
                    document.getElementById("msjBusquedaDni").style.display = "block";
                }
            }

        }
    }

    xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("buscarApoderado=" + dni);
}


//Carga el listado de equipos
function cargarEquipos(obj) {
    document.getElementById("mod-body2").style.display = "none";
    document.getElementById("mod-footer").style.display = "none";

    var idCategoria = obj.value;

    if (idCategoria == 0)
        document.getElementById("mod-body1right").style.display = "none";
    else {
        var xmlhttp;

        if (window.XMLHttpRequest)
        // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();

        else
        // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var lonEquipos = document.getElementById("selequipo").length;
                for (i = lonEquipos - 1; i > 0; i--)
                    document.getElementById("selequipo").remove(i);

                Cadena1 = xmlhttp.responseText.split('%');
                Cadena2 = Cadena1[0].split('$');
                for (i = 0; i < (Cadena2.length) - 1; i++) {
                    Cadena3 = Cadena2[i].split('|');
                    var opt = document.createElement("option");
                    opt.value = Cadena3[0];
                    opt.text = Cadena3[2] + " | " + Cadena3[3] + " | " + Cadena3[5];
                    document.getElementById("selequipo").add(opt);
                }
                document.getElementById("mod-body1right").style.display = "block";
            }
        }

        xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("cargarEquipos=" + idCategoria);
    }
}

//Carga datos de equipo a editar
function cargarEquipo(obj) {
    document.getElementById("msjcategoria").style.display = "none";
    document.getElementById("msjresponsableequipo").style.display = "none";
    document.getElementById("msjusuarioequipo").style.display = "none";
    document.getElementById("msjmarcaequipo").style.display = "none";
    document.getElementById("msjmodeloequipo").style.display = "none";
    document.getElementById("msjescaner").style.display = "none";
    document.getElementById("msjmultifuncional").style.display = "none";
    document.getElementById("msjactivo").style.display = "none";
    var idEquipo = obj.value;
    if (idEquipo == 0) {
        document.getElementById("mod-body2").style.display = "none";
        document.getElementById("mod-footer").style.display = "none";
    }
    else {
        var xmlhttp;

        if (window.XMLHttpRequest)
        // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();

        else
        // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                Cadena1 = xmlhttp.responseText.split('$');
                Cadena2 = Cadena1[0].split('|');
                document.getElementById("edtcategoria").value = Cadena2[0];
                document.getElementById("edtcodresponsableequipo").value = Cadena2[1];
                document.getElementById("edtdniresponsable").value = Cadena2[2];
                document.getElementById("edtresponsableequipo").value = Cadena2[3] + " | " + Cadena2[4];
                document.getElementById("edtcodusuarioequipo").value = Cadena2[5];
                document.getElementById("edtdniusuario").value = Cadena2[6];
                document.getElementById("edtusuarioequipo").value = Cadena2[7] + " | " + Cadena2[8];
                document.getElementById("edtmarcaequipo").value = Cadena2[9];
                document.getElementById("edtmodeloequipo").value = Cadena2[10];
                document.getElementById("edtmodeloplaca").value = Cadena2[11];
                document.getElementById("edtmodeloprocesador").value = Cadena2[12];
                document.getElementById("edtnucleosprocesador").value = Cadena2[13];
                document.getElementById("edtmemoriaram").value = Cadena2[14];
                document.getElementById("edtdiscoduro").value = Cadena2[15];
                document.getElementById("edtmodelovideo").value = Cadena2[16];
                document.getElementById("edtmodelored").value = Cadena2[17];
                document.getElementById("edtmodelosonido").value = Cadena2[18];
                document.getElementById("edtmodelomonitor").value = Cadena2[19];
                document.getElementById("edtvelocidadescaneo").value = Cadena2[20];
                document.getElementById("edtescaner").value = Cadena2[21];
                document.getElementById("edtvelocidadimpresion").value = Cadena2[22];
                document.getElementById("edttipoimpresora").value = Cadena2[23];
                document.getElementById("edttipoimpresion").value = Cadena2[24];
                document.getElementById("edtmultifuncional").value = Cadena2[25];
                document.getElementById("edtactivo").value = Cadena2[26];

                document.getElementById("mod-body2").style.display = "block";
                document.getElementById("mod-footer").style.display = "block";
            }
        }

        xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("cargarEquipo=" + idEquipo);
    }
}

//Carga listado de software ya instalado en equipo (Asignar Software)
function cargarSoftwareNew(obj) {
    document.getElementById("msjsoftware").style.display = "none";
    document.getElementById("msjfechainstalacion").style.display = "none";

    var idEquipo = obj.value;
    if (idEquipo == 0) {
        document.getElementById("mod-body2").style.display = "none";
        document.getElementById("mod-footer").style.display = "none";
    }
    else {
        var xmlhttp;

        if (window.XMLHttpRequest)
        // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();

        else
        // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var lonSoftware1 = document.getElementById("selsoftware").length;
                for (i = lonSoftware1 - 1; i >= 0; i--)
                    document.getElementById("selsoftware").remove(i);

                var lonSoftware2 = document.getElementById("newsoftware").length;
                for (i = lonSoftware2 - 1; i > 0; i--)
                    document.getElementById("newsoftware").remove(i);

                Cadena1 = xmlhttp.responseText.split('%');
                Cadena2 = Cadena1[0].split('$');
                for (i = 0; i < (Cadena2.length) - 1; i++) {
                    Cadena3 = Cadena2[i].split('|');
                    var opt = document.createElement("option");
                    opt.value = Cadena3[0];
                    opt.text = Cadena3[2] + " | " + Cadena3[3];
                    document.getElementById("selsoftware").add(opt);
                }

                Cadena2 = Cadena1[1].split('$');
                for (i = 0; i < (Cadena2.length) - 1; i++) {
                    Cadena3 = Cadena2[i].split('|');
                    var opt = document.createElement("option");
                    opt.value = Cadena3[0];
                    opt.text = Cadena3[1];
                    document.getElementById("newsoftware").add(opt);
                }

                document.getElementById("mod-body2").style.display = "block";
                document.getElementById("mod-footer").style.display = "block";
            }
        }

        xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("cargarSoftwareNew=" + idEquipo);
    }
}

//Carga listado de software ya instalado en equipo (Remover Software)
function cargarSoftwareRmv(obj) {
    document.getElementById("msjsoftware").style.display = "none";

    var idEquipo = obj.value;
    if (idEquipo == 0) {
        document.getElementById("mod-body2").style.display = "none";
        document.getElementById("mod-footer").style.display = "none";
    }
    else {
        var xmlhttp;

        if (window.XMLHttpRequest)
        // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();

        else
        // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var lonSoftware1 = document.getElementById("selsoftware").length;
                for (i = lonSoftware1 - 1; i > 0; i--)
                    document.getElementById("selsoftware").remove(i);

                Cadena1 = xmlhttp.responseText.split('%');
                Cadena2 = Cadena1[0].split('$');
                for (i = 0; i < (Cadena2.length) - 1; i++) {
                    Cadena3 = Cadena2[i].split('|');
                    var opt = document.createElement("option");
                    opt.value = Cadena3[0];
                    opt.text = Cadena3[2];
                    document.getElementById("selsoftware").add(opt);
                }

                document.getElementById("mod-body2").style.display = "block";
                document.getElementById("mod-footer").style.display = "block";
            }
        }

        xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("cargarSoftwareRmv=" + idEquipo);
    }
}

//Valida que equipo-software no este en BD
function buscarEquipoSoftware(val1, val2) {
    var error = 0;
    if (val1 == 0) {
        error = 1;
    }
    else {
        var cadena = val2 + "|" + val1 + "|";
        var xmlhttp;

        if (window.XMLHttpRequest)
        // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();

        else
        // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", false);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("buscarEquipoSoftware=" + cadena);
        Cadena1 = xmlhttp.responseText.split('$');
        if (Cadena1[0] == 1)
            error = 1;
    }
    return error;
}

//Carga el reporte de equipos
function cargarReporte1(obj) {
    var rep = document.getElementById("selectReporte").value;

    switch (rep) {

        case '0':
            document.getElementById("divPeriodo").style.display = "none";
            document.getElementById("divEntrega").style.display = "none";
            document.getElementById("msjReporte").style.display = 'none';
            break;

        case '1':
            document.getElementById("body3").style.display = 'none';
            //document.getElementById("body4").style.display = 'none';
            listarApoderados();
            break;
        case '2':
            document.getElementById("body2").style.display = 'none';
            //document.getElementById("body2").style.display = 'none';
            listarInfantes();
            break;
        case '3':
            document.getElementById("body3").style.display = 'none';
            document.getElementById("body2").style.display = 'none';
            reporteBenefPeriodoPorDni();
            break;
        default:

            document.getElementById("msjReporte").style.display = 'block';
            break;
    }
}

function imprimirReporte1(){

    var rep = document.getElementById("selectReporte").value;

    switch(rep){

        case '0':
            document.getElementById("divPeriodo").style.display = "none";
            document.getElementById("divEntrega").style.display = "none";
            document.getElementById("msjReporte").style.display = 'none';
            break;

        case '1':
            imprimirApoderados();
            break;
        case '2':
            imprimirInfantes();
            break;
        case '3':
            imprimirReporteBenefPorDni();
            break;
        default:
            document.getElementById("msjReporte").style.display = 'block';
            break;
    }
}

//Imprime el reporte generado
function imprimirApoderados() {
    document.getElementById("head3").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("mod-header").style.display="none";
    document.getElementById("body1").style.display="none";
    document.getElementById("mod-bodyreport-label").className="mod-bodyreport-label-print";
    document.getElementById("tablareport1").className="mod-tablereporte-print";
    //document.getElementById("mod-footer").style.display="none";
    document.getElementById("footer").style.display="none";
    document.getElementById("spaceBlank1").style.display="none";
    document.getElementById("spaceBlank2").style.display="none";

    if (window.print)
    {
        window.print();
    }
    else
    {
        alert("La función de impresion no esta soportada por su navegador");
    }

    document.getElementById("head3").style.display="block";
    document.getElementById("main").style.display="block";
    document.getElementById("mod-header").style.display="block";
    document.getElementById("body1").style.display="block";
    document.getElementById("mod-bodyreport-label").className="mod-bodyreport-label";
    document.getElementById("tablareport1").className="mod-tablereporte";
    //document.getElementById("mod-footer").style.display="block";
    document.getElementById("footer").style.display="block";
    document.getElementById("spaceBlank1").style.display="block";
    document.getElementById("spaceBlank2").style.display="block";
}


//Imprime el reporte generado
function imprimirInfantes() {
    document.getElementById("head3").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("mod-header").style.display="none";
    document.getElementById("body1").style.display="none";
    document.getElementById("mod-bodyreport-label").className="mod-bodyreport-label-print";
    document.getElementById("tablareport3").className="mod-tablereporte-print";
    //document.getElementById("mod-footer").style.display="none";
    document.getElementById("footer").style.display="none";
    document.getElementById("spaceBlank1").style.display="none";
    document.getElementById("spaceBlank2").style.display="none";

    if (window.print)
    {
        window.print();
    }
    else
    {
        alert("La función de impresion no esta soportada por su navegador");
    }

    document.getElementById("head3").style.display="block";
    document.getElementById("main").style.display="block";
    document.getElementById("mod-header").style.display="block";
    document.getElementById("body1").style.display="block";
    document.getElementById("mod-bodyreport-label").className="mod-bodyreport-label";
    document.getElementById("tablareport3").className="mod-tablereporte";
    //document.getElementById("mod-footer").style.display="block";
    document.getElementById("footer").style.display="block";
    document.getElementById("spaceBlank1").style.display="block";
    document.getElementById("spaceBlank2").style.display="block";
}
//Valida datos de equipo antes de agregar en BD
function validarSubMod1() {
    var ctr1 = document.getElementById("cNomApod").value;
    var ctr2 = document.getElementById("cApeApod").value;
    var ctr3 = document.getElementById("cDirApod").value;
    var ctr4 = document.getElementById("cDniApod").value;
    var ctr5 = document.getElementById("cParentApod").value;
    var ctr6 = document.getElementById("nCodAnexo").value;

    /*
     ar ctr5 = document.getElementById("newmodeloequipo").value.trim();
     var ctr6 = document.getElementById("newmodeloplaca").value.trim();
     var ctr7 = document.getElementById("newmodeloprocesador").value.trim();
     var ctr8 = document.getElementById("newnucleosprocesador").value;
     var ctr9 = document.getElementById("newmemoriaram").value.trim();
     var ctr10 = document.getElementById("newdiscoduro").value.trim();
     var ctr11 = document.getElementById("newmodelovideo").value.trim();
     var ctr12 = document.getElementById("newmodelored").value.trim();
     var ctr13 = document.getElementById("newmodelosonido").value.trim();
     var ctr14 = document.getElementById("newmodelomonitor").value.trim();
     var ctr15 = document.getElementById("newvelocidadescaneo").value.trim();
     var ctr16 = document.getElementById("newescaner").value;
     var ctr17 = document.getElementById("newvelocidadimpresion").value.trim();
     var ctr18 = document.getElementById("newtipoimpresora").value;
     var ctr19 = document.getElementById("newtipoimpresion").value;
     var ctr20 = document.getElementById("newmultifuncional").value;
     var ctr21 = "1";
     */
    document.getElementById("msjNombre").style.display = "none";
    document.getElementById("msjApe").style.display = "none";
    document.getElementById("msjDni").style.display = "none";
    document.getElementById("msjDir").style.display = "none";
    document.getElementById("msjParent").style.display = "none";


    var error = 0;

    if (ctr1 == 0) {
        document.getElementById("msjNombre").style.display = "block";
        error = 1;
    }
    if (ctr2 == 0) {
        document.getElementById("msjApe").style.display = "block";
        error = 1;
    }
    if (ctr3 == 0) {
        document.getElementById("msjDir").style.display = "block";
        error = 1;
    }
    if (ctr4 == 0) {
        document.getElementById("msjDni").style.display = "block";
        error = 1;
    }

    if (ctr5 == 0) {
        document.getElementById("msjParent").style.display = "block";
        error = 1;
    }


    if (!error) {
        var cadena = ctr1 + "|" + ctr2 + "|" + ctr3 + "|" + ctr4 + "|" + ctr5 + "|" + ctr6;
        /* + "|" + ctr7 + "|" + ctr8 + "|" + ctr9 + "|" + ctr10 + "|" +
         ctr11 + "|" + ctr12 + "|" + ctr13 + "|" + ctr14 + "|" + ctr15 + "|" + ctr16 + "|" + ctr17 + "|" + ctr18 + "|" + ctr19 + "|" + ctr20 + "|" + ctr21 + "|";*/
        //alert("Add: "+cadena);
        agregarApoderado(cadena);
    }
}

//Valida datos de equipo antes de editar en BD
function validarSubMod2() {
    var ctr0 = document.getElementById("nCodigo").value;
    var ctr1 = document.getElementById("cNomApod").value;
    var ctr2 = document.getElementById("cApeApod").value;
    var ctr3 = document.getElementById("cDirApod").value;
    var ctr4 = document.getElementById("cDniApod").value;
    var ctr5 = document.getElementById("cParentApod").value;
    var ctr6 = document.getElementById("nCodAnexo").value;

    document.getElementById("msjNombre").style.display = "none";
    document.getElementById("msjApe").style.display = "none";
    document.getElementById("msjDni").style.display = "none";
    document.getElementById("msjDir").style.display = "none";
    document.getElementById("msjParent").style.display = "none";
    var error = 0;


    if (ctr1 == 0) {
        document.getElementById("msjNombre").style.display = "block";
        error = 1;
    }
    if (ctr2 == 0) {
        document.getElementById("msjApe").style.display = "block";
        error = 1;
    }
    if (ctr3 == 0) {
        document.getElementById("msjDir").style.display = "block";
        error = 1;
    }
    if (ctr4 == 0) {
        document.getElementById("msjDni").style.display = "block";
        error = 1;
    }

    if (ctr5 == 0) {
        document.getElementById("msjParent").style.display = "block";
        error = 1;
    }


    if (!error) {
        var cadena = ctr0 + "|" + ctr1 + "|" + ctr2 + "|" + ctr3 + "|" + ctr4 + "|" + ctr5 + "|" + ctr6;
        /* + "|" + ctr7 + "|" + ctr8 + "|" + ctr9 + "|" + ctr10 + "|" +
         ctr11 + "|" + ctr12 + "|" + ctr13 + "|" + ctr14 + "|" + ctr15 + "|" + ctr16 + "|" + ctr17 + "|" + ctr18 + "|" + ctr19 + "|" + ctr20 + "|" + ctr21 + "|";*/
        //alert("Add: "+cadena);
        editarApoderado(cadena);
    }
}

//Valida datos de equipo-software antes de agregar en BD
function validarSubMod03() {
    //alert(1);
    var ctr1 = document.getElementById("cNomInfan").value;
    var ctr2 = document.getElementById("cApeInfan").value;
    var ctr3 = document.getElementById("cDniInfan").value;
    var ctr4 = document.getElementById("dFecNacInfan").value;
    var ctr5 = document.getElementById("nCodApod").value;


    document.getElementById("msjNombre").style.display = "none";
    document.getElementById("msjApe").style.display = "none";
    document.getElementById("msjDni").style.display = "none";
    document.getElementById("msjNac").style.display = "none";
    document.getElementById("msjNombreApod").style.display = "none";
    document.getElementById("msjValidarFecNac").style.display = "none";

    //alert(validarFormatoFecha(ctr4));

    var error = 0;


    if (ctr1 == 0) {
        document.getElementById("msjNombre").style.display = "block";
        error = 1;
    }
    if (ctr2 == 0) {
        document.getElementById("msjApe").style.display = "block";
        error = 1;
    }
    if (ctr3 == 0) {
        document.getElementById("msjDni").style.display = "block";
        error = 1;
    }
    if (ctr4 == 0) {
        document.getElementById("msjNac").style.display = "block";
        error = 1;
    }

    if (ctr5 == 0) {
        document.getElementById("msjNombreApod").style.display = "block";
        error = 1;
    }
    if(!validarFormatoFecha(ctr4))
    {
        document.getElementById("msjValidarFecNac").style.display = "block";
        error = 1;
    }

    if (!error) {
        var cadena = ctr1 + "|" + ctr2 + "|" + ctr3 + "|" + ctr4 + "|" + ctr5;
        /*+ "|" + ctr6; + "|" + ctr7 + "|" + ctr8 + "|" + ctr9 + "|" + ctr10 + "|" +
         ctr11 + "|" + ctr12 + "|" + ctr13 + "|" + ctr14 + "|" + ctr15 + "|" + ctr16 + "|" + ctr17 + "|" + ctr18 + "|" + ctr19 + "|" + ctr20 + "|" + ctr21 + "|";*/
        //alert("Add: "+cadena);
        agregarInfante(cadena);
    }
}

//Valida datos de equipo-software antes de quitar en BD
function validarSubMod4() {
    //alert(1);
    var ctr1 = document.getElementById("cNomInfan").value;
    var ctr2 = document.getElementById("cApeInfan").value;
    var ctr3 = document.getElementById("cDniInfan").value;
    var ctr4 = document.getElementById("dFecNacInfan").value;
    var ctr5 = document.getElementById("nCodigo").value;
    var ctr6 = document.getElementById("nCodApod").value;


    document.getElementById("msjNombre").style.display = "none";
    document.getElementById("msjApe").style.display = "none";
    document.getElementById("msjDni").style.display = "none";
    document.getElementById("msjNac").style.display = "none";
    document.getElementById("msjNombreApod").style.display = "none";
    document.getElementById("msjValidarFecNac").style.display = "none";

    var error = 0;


    if (ctr1 == 0) {
        document.getElementById("msjNombre").style.display = "block";
        error = 1;
    }
    if (ctr2 == 0) {
        document.getElementById("msjApe").style.display = "block";
        error = 1;
    }
    if (ctr3 == 0) {
        document.getElementById("msjDni").style.display = "block";
        error = 1;
    }
    if (ctr4 == 0) {
        document.getElementById("msjNac").style.display = "block";
        error = 1;
    }

    if (ctr5 == 0) {
        document.getElementById("msjNombreApod").style.display = "block";
        error = 1;
    }

    if(!validarFormatoFecha(ctr4))
    {
        document.getElementById("msjValidarFecNac").style.display = "block";
        error = 1;
    }

    alert(1);

    if (!error) {
        var cadena = ctr1 + "|" + ctr2 + "|" + ctr3 + "|" + ctr4 + "|" + ctr5 + "|" + ctr6;
        /*+ "|" + ctr6; + "|" + ctr7 + "|" + ctr8 + "|" + ctr9 + "|" + ctr10 + "|" +
         ctr11 + "|" + ctr12 + "|" + ctr13 + "|" + ctr14 + "|" + ctr15 + "|" + ctr16 + "|" + ctr17 + "|" + ctr18 + "|" + ctr19 + "|" + ctr20 + "|" + ctr21 + "|";*/
        //alert("Add: "+cadena);
        editarInfante(cadena);
    }
}

//Agrega datos de nuevo equipo en BD
function agregarInfante(cadena) {
    var xmlhttp;

    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Respuesta = xmlhttp.responseText;
            document.body.scrollTop = 0;
            document.getElementById("msjsuccess").innerHTML = Respuesta;
            cargarSubmodulo(1, ".html/modulo1/m1submod3.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }
//alert(cadena);
    xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("agregarInfant=" + cadena);
}


//Agrega datos de nuevo equipo en BD
function agregarApoderado(cadena) {
    //alert(cadena);
    var xmlhttp;

    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Respuesta = xmlhttp.responseText;
            document.body.scrollTop = 0;
            document.getElementById("msjsuccess").innerHTML = Respuesta;
            cargarSubmodulo(1, ".html/modulo1/m1submod1.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }
//alert(cadena);
    xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("agregarApode=" + cadena);
}
//Edita datos de equipo en BD
function editarApoderado(cadena) {
    var xmlhttp;

    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Respuesta = xmlhttp.responseText;
            document.body.scrollTop = 0;
            document.getElementById("msjsuccess").innerHTML = Respuesta;
            cargarSubmodulo(2, ".html/modulo1/m1submod2.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }

    xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("editarApoderado=" + cadena);
}


//Edita datos de equipo en BD
function editarInfante(cadena) {
    var xmlhttp;

    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Respuesta = xmlhttp.responseText;
            document.body.scrollTop = 0;
            document.getElementById("msjsuccess").innerHTML = Respuesta;
            cargarSubmodulo(2, ".html/modulo1/m1submod4.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }

    xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("editarInfante=" + cadena);
}

//Agrega datos de nuevo equipo-software en BD
function agregarEquipoSoftware(cadena) {
    var xmlhttp;

    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Respuesta = xmlhttp.responseText;
            document.body.scrollTop = 0;
            document.getElementById("msjsuccess").innerHTML = Respuesta;
            cargarSubmodulo(3, ".html/modulo1/m1submod3.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }

    xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("agregarEquipoSoftware=" + cadena);
}

//Elimina datos de equipo-software en BD
function removerEquipoSoftware(cadena) {
    var xmlhttp;

    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Respuesta = xmlhttp.responseText;
            document.body.scrollTop = 0;
            document.getElementById("msjsuccess").innerHTML = Respuesta;
            cargarSubmodulo(4, ".html/modulo1/m1submod4.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }

    xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("removerEquipoSoftware=" + cadena);
}


function mostrarOpciones1(obj) {

    //alert(obj.value);
    //var periodo =

    switch (obj.value) {

        case '0':
            document.getElementById("divPeriodo").style.display = "none";
            document.getElementById("divEntrega").style.display = "none";
            document.getElementById("msjReporte").style.display = 'none';
            document.getElementById("divDni").style.display = "none";
            break;

        case '1':
            break;
        case '2':
            break;
        case '3':
            cargarOpciones();
            document.getElementById("divPeriodo").style.display = "block";
            document.getElementById("divDni").style.display = "block";
            document.getElementById("divEntrega").style.display = "none";
            break;
        default:
            document.getElementById("msjReporte").style.display = 'block';
            break;
    }

}

function listarApoderados() {

    // alert(1);
    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            Cadena1 = xmlhttp.responseText.split('$');
            Cadena2 = Cadena1[0].split('|');

            if (Cadena2[0] != "") {

                var tabla = document.getElementById("tablareport1");
                var longTabla = tabla.rows.length;

                if (longTabla > 1)
                    for (i = longTabla - 1; i > 0; i--)
                        tabla.deleteRow(i);

                document.getElementById("body2").style.display = "block";

                for (var i = 0; i < Cadena1.length - 1; i++) {

                    Cadena2 = Cadena1[i].split('|');

                    var fila = document.createElement("tr");
                    fila.id = "f" + Cadena2[0];
                    var col1 = document.createElement("td");
                    col1.align = "center";
                    var col2 = document.createElement("td");
                    col2.align = "center";
                    var col3 = document.createElement("td");
                    col3.align = "center";
                    var col4 = document.createElement("td");
                    col4.align = "center";
                    var col5 = document.createElement("td");
                    col5.align = "center";

                    col1.innerHTML = Cadena2[0];
                    col2.innerHTML = Cadena2[1];
                    col3.innerHTML = Cadena2[2];
                    col4.innerHTML = Cadena2[3];
                    col5.innerHTML = Cadena2[5];

                    fila.appendChild(col1);
                    fila.appendChild(col2);
                    fila.appendChild(col3);
                    fila.appendChild(col4);
                    fila.appendChild(col5);

                    tabla.appendChild(fila);

                }

            }
            else {

            }


        }

    }
    xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("listarApoderados=1");
}

function listarInfantes() {

    // alert(1);
    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            Cadena1 = xmlhttp.responseText.split('$');
            Cadena2 = Cadena1[0].split('|');

            //alert(Cadena1);

            if (Cadena2[0] != "") {

                var tabla = document.getElementById("tablareport3");
                var longTabla = tabla.rows.length;

                if (longTabla > 1)
                    for (i = longTabla - 1; i > 0; i--)
                        tabla.deleteRow(i);

                document.getElementById("body3").style.display = "block";

                for (var i = 0; i < Cadena1.length - 1; i++) {

                    Cadena2 = Cadena1[i].split('|');

                    var fila = document.createElement("tr");
                    fila.id = "f" + Cadena2[0];
                    var col1 = document.createElement("td");
                    col1.align = "center";
                    var col2 = document.createElement("td");
                    col2.align = "center";
                    var col3 = document.createElement("td");
                    col3.align = "center";
                    var col4 = document.createElement("td");
                    col4.align = "center";
                    var col5 = document.createElement("td");
                    col5.align = "center";
                    var col6 = document.createElement("td");
                    col6.align = "center";

                    col1.innerHTML = Cadena2[0];
                    col2.innerHTML = Cadena2[1];
                    col3.innerHTML = Cadena2[2];
                    col4.innerHTML = Cadena2[3];
                    col5.innerHTML = Cadena2[4] + " A&ntilde;os ,"+ Cadena2[5] + " Meses";
                    col6.innerHTML = Cadena2[7] + " " +Cadena2[6];

                    fila.appendChild(col1);
                    fila.appendChild(col2);
                    fila.appendChild(col3);
                    fila.appendChild(col4);
                    fila.appendChild(col5);
                    fila.appendChild(col6);

                    tabla.appendChild(fila);

                }

            }
            else {

            }


        }

    }
    xmlhttp.open("POST", ".lib/modulo1/linkModulo1.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("listarInfantes=1");
}

function soloNumeros(e) {
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46))
        return true;

    return /\d/.test(String.fromCharCode(keynum));
}

function validarFormatoFecha(campo) {

    var RegExPattern = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
    if ((campo.match(RegExPattern)) && (campo!='')) {
        return true;
    } else {
        return false;
    }
}
