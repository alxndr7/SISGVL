//Evalua el submódulo a cargar (Agregar Personal, Editar Personal, Reportes)

var nuevosEmpadronados = [];

function cargarSubmodulo(id, desde) {
    $("#modules").load(desde);
    document.getElementById("modules").style.display = "block";

    if (id == 1)
        initSubModulo1();
    if (id == 2)
        initSubModulo2();
    if (id == 3)
        initSubModulo3();
    if (id == 4)
        initSubModulo4();
}
//Inicia controles para "Agregar Intervención"
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
                document.getElementById("selcategoria").add(opt);
            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo4/linkModulo4.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo1=1");
}

//Inicia controles para "Editar Intervención"
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
            //alert(Cadena2);
            for (i = 0; i < (Cadena2.length) - 1; i++) {
                Cadena3 = Cadena2[i].split('|');
                var opt1 = document.createElement("option");
                opt1.value = Cadena3[0];
                opt1.text = Cadena3[1];
                document.getElementById("selecPeriodo").add(opt1);
            }

        }
    }

    xmlhttp.open("POST", ".lib/modulo4/linkModulo4.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo2=1");
}

//Iniciar sub modulo
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

            Cadena1 = xmlhttp.responseText.split('$');
            //alert(Cadena1);

            for (i = 0; i < (Cadena1.length) - 1; i++) {
                Cadena3 = Cadena1[i].split('|');
                var opt = document.createElement("option");
                opt.value = Cadena3[0];
                opt.text = Cadena3[1];
                document.getElementById("selecPeriodo").add(opt);
            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo4/linkModulo4.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo3=1");
}


//Iniciar sub modulo
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
            //alert();
            Cadena0 = xmlhttp.responseText.split('%');
            Cadena1 = Cadena0[0].split('$');


            for (i = 0; i < (Cadena1.length) - 1; i++) {
                Cadena3 = Cadena1[i].split('|');
                var opt = document.createElement("option");
                opt.value = Cadena3[0];
                opt.text = Cadena3[1];
                document.getElementById("selectPeriodoInicio").add(opt);
            }
            Cadena1 = Cadena0[1].split('$');

            for (i = 0; i < (Cadena1.length) - 1; i++) {
                Cadena3 = Cadena1[i].split('|');
                var opt = document.createElement("option");
                opt.value = Cadena3[0];
                opt.text = Cadena3[1];
                document.getElementById("selectPeriodoFinal").add(opt);
            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo4/linkModulo4.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo4=1");
}


//Carga datos de personal a editar
function cargarPeriodo(obj) {
    var idPersonal = obj.value;
    //alert(idPersonal);
    if (idPersonal == 0) {
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
                //alert(Cadena1);
                Cadena2 = Cadena1[0].split('|');
                document.getElementById("cNomPeriodo").value = Cadena2[1];
                document.getElementById("nCodPeriodo").value = Cadena2[0];
                document.getElementById("nCantBenef").value = Cadena2[2];

                document.getElementById("mod-body2").style.display = "block";
                document.getElementById("mod-footer").style.display = "block";
            }
        }

        xmlhttp.open("POST", ".lib/modulo4/linkModulo4.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("cargarPeriodo=" + idPersonal);
    }
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

//Carga opciones para agregar nueva intervención
function cargarIntervencion(obj) {
    document.getElementById("msjintervencion").style.display = "none";
    document.getElementById("msjfechaintervencion").style.display = "none";

    var idEquipo = obj.value;
    if (idEquipo == 0) {
        document.getElementById("mod-body2").style.display = "none";
        document.getElementById("mod-footer").style.display = "none";
    }
    else {
        document.getElementById("mod-body2").style.display = "block";
        document.getElementById("mod-footer").style.display = "block";
        document.getElementById("newintervencion").value = "";
        document.getElementById("newfechaintervencion").value = "";
    }
}

//Valida datos de intervención antes de agregar en BD
function validarSubMod1() {
    var ctr1 = document.getElementById("cNomPeriodo").value;
    var ctr2 = document.getElementById("nCantBenef").value;

    document.getElementById("msjPeriodo").style.display = "none";

    var error = 0;

    if (ctr1 == 0) {
        document.getElementById("msjPeriodo").style.display = "block";
        error = 1;
    }

    if (ctr2 == 0) {
        document.getElementById("msjCantidad").style.display = "block";
        error = 1;
    }


    if (!error) {
        var cadena = ctr1 + '|' + '0' + '|' + ctr2;
        //alert("Add: "+cadena);
        agregarPeriodo(cadena);
    }
}

//Valida datos de intervención antes de editar en BD
function validarSubMod2() {
    var ctr1 = document.getElementById("cNomPeriodo").value;
    var ctr2 = document.getElementById("nCodPeriodo").value;
    var ctr3 = document.getElementById("nCantBenef").value;

    document.getElementById("msjPeriodo").style.display = "none";
    document.getElementById("msjCantidad").style.display = "none";

    var error = 0;

    if (ctr1 == 0) {
        document.getElementById("msjPeriodo").style.display = "block";
        error = 1;
    }
    if (ctr3 == 0) {
        document.getElementById("msjCantidad").style.display = "block";
        error = 1;
    }

    if (!error) {
        var cadena = ctr1 + "|" + ctr2 + "|" + ctr3;
        //alert("Add: "+cadena);
        editarPeriodo(cadena);
    }
}

//Valida datos de intervención antes de editar en BD
function validarSubMod3() {
    var ctr1 = document.getElementById("selecPeriodo").value;

    document.getElementById("msjPeriodo").style.display = "none";


    var error = 0;

    if (ctr1 == 0) {
        document.getElementById("msjPeriodo").style.display = "block";
        error = 1;
    }

    if (!error) {
        var cadena = ctr1;
        //alert("Add: "+cadena);
        crearEntregas(cadena);
    }
}

//Edita datos de personal en BD
function editarPeriodo(cadena) {
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
            cargarSubmodulo(2, ".html/modulo4/m4submod2.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }

    xmlhttp.open("POST", ".lib/modulo4/linkModulo4.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("editarPeriodo=" + cadena);
}

//Agrega datos de nueva intervención en BD
function agregarPeriodo(cadena) {
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
            cargarSubmodulo(1, ".html/modulo4/m4submod1.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }

    xmlhttp.open("POST", ".lib/modulo4/linkModulo4.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("agregarPeriodo=" + cadena);
}


//Agrega datos de nueva intervención en BD
function crearEntregas(cadena) {
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
            cargarSubmodulo(3, ".html/modulo4/m4submod3.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }

    xmlhttp.open("POST", ".lib/modulo4/linkModulo4.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("crearEntregas=" + cadena);
}


function soloNumeros(e) {
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46))
        return true;

    return /\d/.test(String.fromCharCode(keynum));
}

function mostrarOpciones4(obj) {

    //alert(obj.value);
    //var periodo =

    switch (obj.value) {

        case '0':
            document.getElementById("divPeriodo").style.display = "none";
            document.getElementById("divEntrega").style.display = "none";
            document.getElementById("msjReporte").style.display = 'none';
            document.getElementById("divDni").style.display = "none";
            document.getElementById("body2").style.display = "none";
            break;

        case '1':
            cargarOpciones();
            document.getElementById("divPeriodo").style.display = "block";
            break;
        case '2':
            break;
        case '3':

        default:
            document.getElementById("msjReporte").style.display = 'block';
            break;
    }

}

function cargarOpciones() {

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Cadena1 = xmlhttp.responseText.split('$');
            var opt1 = document.getElementById("selectPeriodo");
            while (opt1.options.length > 0) {
                opt1.remove(0);
            }
            var opt2 = document.createElement("option");
            opt2.value = 0;
            opt2.text = "-- Seleccione --";
            document.getElementById("selectPeriodo").add(opt2);

            for (i = 0; i < (Cadena1.length) - 1; i++) {
                Cadena2 = Cadena1[i].split('|');
                var opt1 = document.createElement("option");
                opt1.value = Cadena2[0];
                opt1.text = Cadena2[1];
                document.getElementById("selectPeriodo").add(opt1);
            }

        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("periodoEntrega=1");
}

//Carga el reporte de equipos
function cargarReporte4(obj) {
    var rep = document.getElementById("selectReporte").value;

    switch (rep) {

        case '0':
            document.getElementById("divPeriodo").style.display = "none";
            document.getElementById("divEntrega").style.display = "none";
            document.getElementById("msjReporte").style.display = 'none';
            break;

        case '1':
            //document.getElementById("body3").style.display = 'none';
            //document.getElementById("body4").style.display = 'none';
            listarEmpadronadosPeriodo();
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

function imprimirReporte4() {

    var rep = document.getElementById("selectReporte").value;

    switch (rep) {

        case '0':
            document.getElementById("divPeriodo").style.display = "none";
            document.getElementById("divEntrega").style.display = "none";
            document.getElementById("msjReporte").style.display = 'none';
            break;

        case '1':
            imprimirReporteEmpadronados();
            break;
        case '2':
            imprimirReporteBenefPorMes();
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
function imprimirReporteEmpadronados() {
    document.getElementById("head3").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("mod-header").style.display = "none";
    document.getElementById("body1").style.display = "none";
    document.getElementById("mod-bodyreport-label2").className = "mod-bodyreport-label-print";
    document.getElementById("tablareport2").className = "mod-tablereporte-print";
    //document.getElementById("mod-footer").style.display="none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("spaceBlank1").style.display = "none";
    document.getElementById("spaceBlank2").style.display = "none";

    if (window.print) {
        window.print();
    }
    else {
        alert("La función de impresion no esta soportada por su navegador");
    }

    document.getElementById("head3").style.display = "block";
    document.getElementById("main").style.display = "block";
    document.getElementById("mod-header").style.display = "block";
    document.getElementById("body1").style.display = "block";
    document.getElementById("mod-bodyreport-label2").className = "mod-bodyreport-label";
    document.getElementById("tablareport2").className = "mod-tablereporte";
    //document.getElementById("mod-footer").style.display="block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("spaceBlank1").style.display = "block";
    document.getElementById("spaceBlank2").style.display = "block";
}


function listarEmpadronadosPeriodo() {


    var nCodPeriodo = document.getElementById("selectPeriodo").value;
    var estado = 'NO';
    var combo = document.getElementById("selectPeriodo");

    document.getElementById("mod-bodyreport-label2").innerHTML = "Lista de empadronados, periodo: " + combo.options[combo.selectedIndex].text;
    //alert(nCodPeriodo);

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

            //alert(Cadena1);

            Cadena2 = Cadena1[0].split('|');

            if (Cadena2[0] != "") {

                var tabla = document.getElementById("tablareport2");
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
                    var col5 = document.createElement("td");
                    col5.align = "center";
                    var col6 = document.createElement("td");
                    col6.align = "center";

                    //alert(Cadena2[11]);

                    if (Cadena2[11] == 'N')
                        estado = 'NO';
                    else {
                        estado = 'SI';
                    }


                    col1.innerHTML = Cadena2[2] + " " + Cadena2[3];

                    col2.innerHTML = Cadena2[9] + " " + Cadena2[10];
                    col3.innerHTML = Cadena2[5];
                    //col4.innerHTML = Cadena2[7];
                    if (Cadena2[13] != 0)
                        col5.innerHTML = Cadena2[13] + " a&ntilde;os, " + Cadena2[14] + " meses";

                    col6.innerHTML = estado;

                    //alert(1);
                    fila.appendChild(col1);
                    fila.appendChild(col2);
                    fila.appendChild(col3);
                    //fila.appendChild(col4);
                    fila.appendChild(col5);
                    fila.appendChild(col6);

                    tabla.appendChild(fila);


                }
                document.getElementById("cantidad").innerHTML = contBenef;
            }

            else {

                var tabla = document.getElementById("tablareport2");
                var longTabla = tabla.rows.length;

                if (longTabla > 1)
                    for (i = longTabla - 1; i > 0; i--)
                        tabla.deleteRow(i);


            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo4/linkModulo4.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("listarEmpadronados=" + nCodPeriodo);

}

function cargarEmpadronadosInicial() {

    var nCodPeriodo = document.getElementById("selectPeriodoInicio").value;
    var estado = 'NO';
    var combo = document.getElementById("selectPeriodoInicio");


    //alert(nCodPeriodo);


    if (nCodPeriodo != 0) {
        var xmlhttp;

        if (window.XMLHttpRequest)
        // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();

        else
        // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        document.getElementById("mod-bodyreport-label10").innerHTML = "Lista de empadronados, periodo: " + combo.options[combo.selectedIndex].text;

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                Cadena1 = xmlhttp.responseText.split('$');

                //alert(Cadena1);

                Cadena2 = Cadena1[0].split('|');

                if (Cadena2[0] != "") {

                    var tabla = document.getElementById("tableEmpadronados");
                    var longTabla = tabla.rows.length;

                    if (longTabla > 1)
                        for (i = longTabla - 1; i > 0; i--)
                            tabla.deleteRow(i);

                    document.getElementById("body2").style.display = "block";

                    document.getElementById("msjperiodoinicial").style.display = "none";

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

                        col1.innerHTML = Cadena2[2] + " " + Cadena2[3];

                        col2.innerHTML = Cadena2[9] + " " + Cadena2[10];
                        col3.innerHTML = Cadena2[5];
                        col4.innerHTML = Cadena2[7];
                        if (Cadena2[13] != 0)
                            col5.innerHTML = Cadena2[13] + " a&ntilde;os, " + Cadena2[14] + " meses";

                        col6.innerHTML = '<button type="button" id="' + Cadena2[0] + '" class="button-remove btn btn-danger" onClick="agregarEmpadronado(' + Cadena2[0] + ')">' + estado + '</button>';

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

                    var tabla = document.getElementById("tableEmpadronados");
                    var longTabla = tabla.rows.length;

                    if (longTabla > 1)
                        for (i = longTabla - 1; i > 0; i--)
                            tabla.deleteRow(i);


                }
            }
        }

        xmlhttp.open("POST", ".lib/modulo4/linkModulo4.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("listarEmpadronadosInicial=" + nCodPeriodo);

    }
    else {

        document.getElementById("msjperiodoinicial").style.display = 'block';
    }


}

function agregarEmpadronado(est) {

    var estado = document.getElementById(est).innerHTML;


    if (estado == "NO") {
        nuevosEmpadronados.push(est);
        document.getElementById(est).className = "button-remove btn btn-success";
        document.getElementById(est).innerHTML = "SI"
    }
    if (estado == "SI") {
        for(var i = nuevosEmpadronados.length; i--;) {
            if(nuevosEmpadronados[i] === est) {
                nuevosEmpadronados.splice(i, 1);
            }
        }
        document.getElementById(est).className = "button-remove btn btn-danger";
        document.getElementById(est).innerHTML = "NO"
    }

    //alert(nuevosEmpadronados);
}


function validarNuevosEmpadronados(){

    var codPeriodoNuevo = document.getElementById("selectPeriodoFinal").value;
    var codigos = '';
    var cadena =  codPeriodoNuevo + "|" + nuevosEmpadronados ;

    //alert(cadena);
    if (codPeriodoNuevo != 0) {

        document.getElementById("msjperiodofinal").style.display = "none";
/*
        for(var i = 0;i <nuevosEmpadronados.length;i++){

                codigos = codigos + nuevosEmpadronados[i]+ ",";
        }*/

        //cadena = cadena + "|" + codigos;

        var xmlhttp;

        if (window.XMLHttpRequest)
        // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();

        else
        // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                Respuesta = xmlhttp.responseText;
                //alert(Respuesta);
                document.body.scrollTop = 0;
                document.getElementById("msjsuccess").innerHTML = Respuesta;
                cargarSubmodulo(4, ".html/modulo4/m4submod4.html");
                document.getElementById("msjsuccess").style.display = "block";
                setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
            }
        }

        xmlhttp.open("POST", ".lib/modulo4/linkModulo4.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("validarNuevosEmpadronados=" + cadena);

    }
    else {
        document.getElementById("msjperiodofinal").style.display = "block";

    }
}
