var elementos = [];
var estado = [];
var j = 0;
var cont = 1;

//Evalua el submódulo a cargar (Agregar Personal, Editar Personal, Reportes)
function cargarSubmodulo(id, desde) {
    $("#modules").load(desde);
    document.getElementById("modules").style.display = "block";

    if (id == 1)
    //Inicia Agregar Personal
        initSubModulo1();
    if (id == 2)
    //Inicia Editar Personal
        initSubModulo2();
    if (id == 3)
    //Inicia Agregar Área
        initSubModulo3();
    if (id == 4)
    //Inicia Editar Área
        initSubModulo4();
    if (id == 5)
    //Inicia Reportes
        initSubModulo5();
    if (id == 6)
    //Inicia Reportes
        initSubModulo6();
}
//Inicia controles para "Agregar Personal"
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
                document.getElementById("newarea").add(opt);
            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo1=1");
}

//Inicia controles para "Editar Personal"
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
                document.getElementById("selecInsumo").add(opt1);
            }

        }
    }

    xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo2=1");
}

//Inicia controles para "Agregar Área"
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
            //alert(Cadena2);
            for (i = 0; i < (Cadena2.length) - 1; i++) {
                Cadena3 = Cadena2[i].split('|');
                var opt1 = document.createElement("option");
                opt1.value = Cadena3[0];
                opt1.text = Cadena3[1];
                document.getElementById("selectPeriodo").add(opt1);
            }

            Cadena2 = Cadena1[1].split('$');
            for (i = 0; i < (Cadena2.length) - 1; i++) {
                Cadena3 = Cadena2[i].split('|');
                var opt = document.createElement("option");
                opt.value = Cadena3[0];
                opt.text = Cadena3[1];
                document.getElementById("selecInsumoRac").add(opt);
            }

        }
    }

    xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo3=1");
}

//Inicia controles para "Editar Área"
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
            //alert(Cadena2);
            for (i = 0; i < (Cadena2.length) - 1; i++) {
                Cadena3 = Cadena2[i].split('|');
                var opt1 = document.createElement("option");
                opt1.value = Cadena3[0];
                opt1.text = Cadena3[1];
                document.getElementById("selectPeriodo").add(opt1);
            }

            Cadena2 = Cadena1[1].split('$');
            for (i = 0; i < (Cadena2.length) - 1; i++) {
                Cadena3 = Cadena2[i].split('|');
                var opt = document.createElement("option");
                opt.value = Cadena3[0];
                opt.text = Cadena3[1];
                document.getElementById("selecInsumoRac").add(opt);
            }

        }
    }

    xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
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
                document.getElementById("selarea").add(opt);
            }

            /*opt = document.createElement("option");
             opt.value = 99;
             opt.text = "Todas las Categorías";
             document.getElementById("selcategoria").add(opt);*/
        }
    }

    xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo5=1");
}

//Inicia controles para "Editar Personal"
function initSubModulo6() {
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
                document.getElementById("selecInsumo").add(opt1);
            }

        }
    }

    xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo2=1");
}

//Limita longitud de campo DNI a 8 caracteres
function limitarDNI(obj) {
    obj.value = obj.value.substring(0, 8);
}

//Verifica que el DNI sea válido y además no esté registrado (Agregar Personal)
function validarNewDni(val) {
    var error = 0;
    if (val.length < 8) {
        error = 1;
    }
    else {
        var xmlhttp;

        if (window.XMLHttpRequest)
        // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();

        else
        // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", false);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("validarNewDni=" + val);

        Cadena1 = xmlhttp.responseText.split('$');
        if (Cadena1[0] == 1)
            error = 1;
    }
    return error;
}

//Verifica que el DNI sea válido y además no esté registrado (Editar Personal)
function validarEdtDni(val1, val2) {
    var cadena = val1 + "|" + val2 + "|";
    var error = 0;

    if (val1.length < 8) {
        error = 1;
    }
    else {
        var xmlhttp;

        if (window.XMLHttpRequest)
        // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();

        else
        // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", false);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("validarEdtDni=" + cadena);

        Cadena1 = xmlhttp.responseText.split('$');
        if (Cadena1[0] == 1)
            error = 1;
    }
    return error;
}

//Carga datos de personal a editar
function cargarInsumo(obj) {
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
                Cadena2 = Cadena1[0].split('|');
                document.getElementById("cDescInsumo").value = Cadena2[1];
                document.getElementById("nCodInsumo").value = Cadena2[0];
                document.getElementById("nCantInsumo").value = Cadena2[2];

                document.getElementById("mod-body2").style.display = "block";
                document.getElementById("mod-footer").style.display = "block";
            }
        }

        xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("cargarInsumo=" + idPersonal);
    }
}


//Carga datos de personal a editar
function cargarCreacionRacion(obj) {
    var idPersonal = obj.value;
    //alert(idPersonal);
    if (idPersonal == 0) {
        document.getElementById("mod-body2").style.display = "none";
        document.getElementById("mod-footer").style.display = "none";
    }
    else {

        document.getElementById("mod-body2").style.display = "block";
        document.getElementById("mod-footer").style.display = "block";
    }
}

//Carga datos de personal a editar
function cargarEditarRacion(obj) {
    cont = 1;
    elementos = [];
    estado = [];
    j = 0;
    var idPeriodo = obj.value;
    //alert(idPersonal);
    if (idPeriodo == 0) {
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
                var tabla = document.getElementById("tablaInsumos");

                var longTabla = tabla.rows.length;

                if (longTabla > 1)
                    for (i = longTabla - 1; i > 0; i--)
                        tabla.deleteRow(i);

                //alert(Cadena1.length);

                for (var i = 0; i < Cadena1.length - 1; i++) {
                    Cadena2 = Cadena1[i].split('|');
                    elementos[j] = Cadena2[3] + "|" + Cadena2[1];
                    //alert(elementos[j]);
                    estado[j] = 1;

                    var fila = document.createElement("tr");
                    fila.id = cont;
                    var col1 = document.createElement("td");
                    col1.align = "center";
                    var col2 = document.createElement("td");
                    col2.align = "center";
                    var col3 = document.createElement("td");
                    col3.align = "center";
                    //alert(1);

                    col1.innerHTML = Cadena2[2];
                    col2.innerHTML = Cadena2[1];
                    col3.innerHTML = '<button type="button" id="ingresar" class="button-remove btn btn-danger" onClick="removerElemento(' + cont + ')"><span class="glyphicon glyphicon-remove"></span></button>';
                    fila.appendChild(col1);
                    fila.appendChild(col2);
                    fila.appendChild(col3);
                    //alert(2);
                    tabla.appendChild(fila);
                    cont++;
                    j++;

                }
                document.getElementById("mod-body2").style.display = "block";
                document.getElementById("mod-footer").style.display = "block";
            }
        }

        xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("cargarEditarRacion=" + idPeriodo);
    }

}

//Carga datos de area a editar
function cargarArea(obj) {
    var idArea = obj.value;
    if (idArea == 0) {
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
                document.getElementById("edtdescarea").value = Cadena2[0];
                document.getElementById("edtactivo").value = Cadena2[1];

                document.getElementById("mod-body2").style.display = "block";
                document.getElementById("mod-footer").style.display = "block";
            }
        }

        xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("cargarArea=" + idArea);
    }
}

function cargarReporte3() {


    var rep = document.getElementById("selectReporte").value;
    var per = document.getElementById("selectPeriodo").value;


    switch (rep) {

        case '0':
            document.getElementById("msjReporte").style.display = 'block';
            document.getElementById("divPeriodo").style.display = "none";
            break;

        case '1':
            if (per != '0') {
                document.getElementById("msjPeriodo").style.display = 'none';
                document.getElementById("body3").style.display = 'none';
                reporteGeneral();
            }
            else
                document.getElementById("msjPeriodo").style.display = 'block';
            break;
        case '2':
            document.getElementById("msjPeriodo").style.display = 'none';
            document.getElementById("body2").style.display = 'none';
            reporteDeInsumos();
            break;
        default:

            document.getElementById("msjReporte").style.display = 'block';
            break;
    }


}

function reporteGeneral() {

    var per = document.getElementById("selectPeriodo").value;
    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            Cadena0 = xmlhttp.responseText.split('$');

            //alert(Cadena0);
            Cadena2 = Cadena0[0].split('|');

            if (Cadena2[0] != "") {

                var tabla = document.getElementById("tablaReporte");
                var longTabla = tabla.rows.length;

                if (longTabla > 2)
                    for (i = longTabla - 1; i > 1; i--)
                        tabla.deleteRow(i);

                document.getElementById("body2").style.display = "block";

                for (var i = 0; i < Cadena0.length - 1; i++) {
                    Cadena2 = Cadena0[i].split('|');

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
                    var col7 = document.createElement("td");
                    col7.align = "center";
                    var col8 = document.createElement("td");
                    col8.align = "center";
                    var col9 = document.createElement("td");
                    col9.align = "center";

                    col1.innerHTML = Cadena2[1];
                    col2.innerHTML = Cadena2[2];
                    col3.innerHTML = Cadena2[4];
                    col4.innerHTML = Cadena2[4] - Cadena2[3];
                    col5.innerHTML = Cadena2[3];
                    col6.innerHTML = Cadena2[8];
                    col7.innerHTML = Cadena2[6];
                    col8.innerHTML = Cadena2[7];
                    var tmpInsumos = Cadena2[5].split(',');
                    var tmphtml = "";

                    for (var j = 0; j < tmpInsumos.length; j++) {

                        tmphtml += tmpInsumos[j] + "<br>";
                    }
                    col9.innerHTML = tmphtml;
                    //alert(2);

                    fila.appendChild(col1);
                    fila.appendChild(col2);
                    fila.appendChild(col3);
                    fila.appendChild(col4);
                    fila.appendChild(col5);
                    fila.appendChild(col6);
                    fila.appendChild(col7);
                    fila.appendChild(col8);
                    fila.appendChild(col9);

                    tabla.appendChild(fila);

                }

            }

            else {

            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("reporteGeneral=" + per);
}

function reporteDeInsumos() {

    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            Cadena0 = xmlhttp.responseText.split('$');

            //alert(Cadena0);
            Cadena2 = Cadena0[0].split('|');

            if (Cadena2[0] != "") {

                var tabla = document.getElementById("tablaReporte1");
                var longTabla = tabla.rows.length;

                if (longTabla > 2)
                    for (i = longTabla - 1; i > 1; i--)
                        tabla.deleteRow(i);

                document.getElementById("body2").style.display = "none";
                document.getElementById("body3").style.display = "block";


                for (var i = 0; i < Cadena0.length - 1; i++) {
                    Cadena2 = Cadena0[i].split('|');

                    var fila = document.createElement("tr");
                    fila.id = "f" + Cadena2[0];
                    var col1 = document.createElement("td");
                    col1.align = "center";
                    var col2 = document.createElement("td");
                    col2.align = "center";


                    col1.innerHTML = Cadena2[1];
                    col2.innerHTML = Cadena2[2];

                    fila.appendChild(col1);
                    fila.appendChild(col2);

                    tabla.appendChild(fila);

                }

            }

            else {

            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("listarInsumos=1");
}

//Carga el reporte de equipos por área
function cargarReporte0(obj) {
    document.getElementById("mod-body2").style.display = "none";
    document.getElementById("mod-footer").style.display = "none";

    var idArea = obj.value;

    if (idArea == 0) {
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
                var tabla = document.getElementById("tablareporte");

                var longTabla = tabla.rows.length;

                if (longTabla > 1)
                    for (i = longTabla - 1; i > 0; i--)
                        tabla.deleteRow(i);

                Cadena1 = xmlhttp.responseText.split('%');
                Cadena2 = Cadena1[0].split('$');

                for (i = 0; i < (Cadena2.length) - 1; i++) {
                    Cadena3 = Cadena2[i].split('|');
                    var fila = document.createElement("tr");
                    var col1 = document.createElement("td");
                    col1.align = "center";
                    var col2 = document.createElement("td");
                    col2.align = "center";
                    var col3 = document.createElement("td");
                    var col4 = document.createElement("td");
                    var col5 = document.createElement("td");
                    col1.innerHTML = Cadena3[1];
                    col2.innerHTML = Cadena3[28];
                    col3.innerHTML = "Responsable: " + Cadena3[5] + "<br>Usuario: " + Cadena3[7];
                    col4.innerHTML = "Marca: " + Cadena3[8] + "<br>Modelo: " + Cadena3[9];

                    if (Cadena3[27] == 1)
                        col5.innerHTML = "Placa: " + Cadena3[10] +
                            "<br>Procesador: " + Cadena3[11] +
                            "<br>Nro. N&uacute;cleos: " + Cadena3[12] +
                            "<br>Memoria RAM: " + Cadena3[13] +
                            "<br>Disco Duro: " + Cadena3[14] +
                            "<br>Tarjeta de Video: " + Cadena3[15] +
                            "<br>Tarjeta de Red: " + Cadena3[16] +
                            "<br>Tarjeta de Sonido: " + Cadena3[17] +
                            "<br>Monitor: " + Cadena3[18];
                    if (Cadena3[27] == 2)
                        col5.innerHTML = "Placa: " + Cadena3[10] +
                            "<br>Procesador: " + Cadena3[11] +
                            "<br>Nro. N&uacute;cleos: " + Cadena3[12] +
                            "<br>Memoria RAM: " + Cadena3[13] +
                            "<br>Disco Duro: " + Cadena3[14];
                    if (Cadena3[27] == 3)
                        if (Cadena3[20] == 1)
                            col5.innerHTML = "Velocidad Escaneo: " + Cadena3[19] +
                                "<br>Escaneo ADF: S&iacute;";
                        else
                            col5.innerHTML = "Velocidad Escaneo: " + Cadena3[19] +
                                "<br>Escaneo ADF: No";
                    if (Cadena3[27] == 4)
                        if (Cadena3[26] == 1)
                            col5.innerHTML = "Velocidad Impresi&oacute;n: " + Cadena3[21] +
                                "<br>Tipo de Impresora: " + Cadena3[23] +
                                "<br>Tipo de Impresi&oacute;n: " + Cadena3[25] +
                                "<br>Impresora Multifuncional: S&iacute;";
                        else
                            col5.innerHTML = "Velocidad Impresi&oacute;n: " + Cadena3[21] +
                                "<br>Tipo de Impresora: " + Cadena3[23] +
                                "<br>Tipo de Impresi&oacute;n: " + Cadena3[25] +
                                "<br>Impresora Multifuncional: No";
                    if (Cadena3[27] == 5)
                        col5.innerHTML = "Placa: " + Cadena3[10] +
                            "<br>Procesador: " + Cadena3[11] +
                            "<br>Nro. N&uacute;cleos: " + Cadena3[12] +
                            "<br>Memoria RAM: " + Cadena3[13] +
                            "<br>Disco Duro: " + Cadena3[14] +
                            "<br>Tarjeta de Video: " + Cadena3[15] +
                            "<br>Tarjeta de Red: " + Cadena3[16] +
                            "<br>Tarjeta de Sonido: " + Cadena3[17] +
                            "<br>Monitor: " + Cadena3[18];
                    if (Cadena3[27] == 6)
                        col5.innerHTML = "";

                    fila.appendChild(col1);
                    fila.appendChild(col2);
                    fila.appendChild(col3);
                    fila.appendChild(col4);
                    fila.appendChild(col5);
                    tabla.appendChild(fila);
                }

                document.getElementById("mod-body2").style.display = "block";
                document.getElementById("mod-footer").style.display = "block";
            }
        }

        xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("cargarReporte=" + idArea);
    }
}

//Imprime el reporte generado
function imprimirReporte3() {
    var rep = document.getElementById("selectReporte").value;

    switch (rep) {

        case '0':
            document.getElementById("divPeriodo").style.display = "none";
            document.getElementById("msjReporte").style.display = 'none';
            break;

        case '1':
            imprimirReporteGeneral();
            break;
        case '2':
            imprimirReporteInsumo();
            break;

        default:
            document.getElementById("msjReporte").style.display = 'block';
            break;
    }
}

function imprimirReporteGeneral() {
    document.getElementById("head3").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("mod-header").style.display = "none";
    document.getElementById("body1").style.display = "none";
    document.getElementById("mod-bodyreport-label").className = "mod-bodyreport-label-print";
    document.getElementById("tablaReporte").className = "mod-tablereporte-print";
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
    document.getElementById("mod-bodyreport-label").className = "mod-bodyreport-label";
    document.getElementById("tablaReporte").className = "mod-tablereporte";
    //document.getElementById("mod-footer").style.display="block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("spaceBlank1").style.display = "block";
    document.getElementById("spaceBlank2").style.display = "block";
}


function imprimirReporteInsumo() {
    document.getElementById("head3").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("mod-header").style.display = "none";
    document.getElementById("body1").style.display = "none";
    document.getElementById("mod-bodyreport-label1").className = "mod-bodyreport-label-print";
    document.getElementById("tablaReporte1").className = "mod-tablereporte-print";
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
    document.getElementById("mod-bodyreport-label1").className = "mod-bodyreport-label";
    document.getElementById("tablaReporte1").className = "mod-tablereporte";
    //document.getElementById("mod-footer").style.display="block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("spaceBlank1").style.display = "block";
    document.getElementById("spaceBlank2").style.display = "block";
}

//Valida datos de personal antes de agregar en BD
function validarSubMod1() {
    var ctr1 = document.getElementById("cDescInsumo").value;
    var ctr2 = document.getElementById("nCantInsumo").value;

    document.getElementById("msjInsumo").style.display = "none";
    document.getElementById("msjCantidad").style.display = "none";

    var error = 0;

    if (ctr1 == 0) {
        document.getElementById("msjInsumo").style.display = "block";
        error = 1;
    }
    if (ctr2 == 0) {
        document.getElementById("msjCantidad").style.display = "block";
        error = 1;
    }

    if (!error) {
        var cadena = ctr1 + '|' + ctr2;
        //alert("Add: "+cadena);
        agregarInsumo(cadena);
    }
}

//Valida datos de personal antes de editar en BD
function validarSubMod2() {
    var ctr1 = document.getElementById("cDescInsumo").value;
    var ctr2 = document.getElementById("nCodInsumo").value;
    var ctr3 = document.getElementById("nCantInsumo").value;


    document.getElementById("msjInsumo").style.display = "none";
    document.getElementById("msjCantidad").style.display = "none";

    var error = 0;

    if (ctr1 == 0) {
        document.getElementById("msjInsumo").style.display = "block";
        error = 1;
    }

    if (ctr2 == 0) {
        document.getElementById("msjCantidad").style.display = "block";
        error = 1;
    }

    if (!error) {
        var cadena = ctr1 + "|" + ctr2 + "|" + ctr3;
        //alert("Add: "+cadena);
        editarInsumo(cadena);
    }
}

//Valida datos de área antes de agregar en BD
function validarSubMod3() {

    var ctr1 = document.getElementById("selectPeriodo").value;
    var ctr2 = 0;

    for (var i = 0; i < estado.length; i++) {
        if (estado[i] == 1) {
            ctr2 = 1;
            break;
        }

    }

    document.getElementById("msjPeriodo").style.display = "none";
    document.getElementById("msjTabla").style.display = "none";

    var error = 0;

    if (ctr1 == 0) {
        document.getElementById("msjPeriodo").style.display = "block";
        error = 1;
    }

    if (ctr2 == 0) {
        document.getElementById("msjTabla").style.display = "block";
        error = 1;
    }

    if (!error) {
        var elemen;
        var cadenar = "";
        for (var i = 0; i < estado.length; i++) {

            if (estado[i] == 1) {
                //alert(elementos[i]);
                elemen = elementos[i].split('|');
                //alert(elemen[0] + "/"+ elemen[1]);
                cadenar = cadenar + ctr1 + "|" + ctr1 + "|" + elemen[0] + "|" + elemen[1] + '%';
                //alert(cadenar);

            }
            //Cadena1 = xmlhttp.responseText.split('%');
            //Cadena2 = Cadena1[0].split('$');
        }
        //var cadena = "00" + ctr1 + "|" + ctr2 + "|" + elementos[0] + "|" + elementos[1];
        //alert("Add: "+cadena);
        crearRacion(cadenar);
    }
}

//Valida datos de area antes de editar en BD
function validarSubMod4() {
    var ctr1 = document.getElementById("selectPeriodo").value;
    var ctr2 = 0;

    for (var i = 0; i < estado.length; i++) {
        if (estado[i] == 1) {
            ctr2 = 1;
            break;
        }

    }

    document.getElementById("msjPeriodo").style.display = "none";
    document.getElementById("msjTabla").style.display = "none";

    var error = 0;

    if (ctr1 == 0) {
        document.getElementById("msjPeriodo").style.display = "block";
        error = 1;
    }

    if (ctr2 == 0) {
        document.getElementById("msjTabla").style.display = "block";
        error = 1;
    }

    if (!error) {
        var elemen;
        var cadenar = "";
        for (var i = 0; i < estado.length; i++) {

            if (estado[i] == 1) {
                //alert(elementos[i]);
                elemen = elementos[i].split('|');
                //alert(elemen[0] + "/"+ elemen[1]);
                cadenar = cadenar + ctr1 + "|" + ctr1 + "|" + elemen[0] + "|" + elemen[1] + '%';
                //alert(cadenar);

            }
            //Cadena1 = xmlhttp.responseText.split('%');
            //Cadena2 = Cadena1[0].split('$');
        }
        //var cadena = "00" + ctr1 + "|" + ctr2 + "|" + elementos[0] + "|" + elementos[1];
        //alert("Add: "+cadena);
        editarRacion(cadenar);
    }
}

function validarSubMod6() {
    var ctr2 = document.getElementById("nCodInsumo").value;
    var ctr3 = document.getElementById("addInsumo").value;


    document.getElementById("msjAddInsumo").style.display = "none";

    var error = 0;

    if (ctr3 == 0) {
        document.getElementById("msjAddInsumo").style.display = "block";
        error = 1;
    }

    if (!error) {
        var cadena = ctr2 + "|" + ctr3;
        //alert("Add: "+cadena);
        editarStock(cadena);
    }
}

//Agrega datos de nuevo personal en BD
function agregarInsumo(cadena) {
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
            cargarSubmodulo(1, ".html/modulo3/m3submod1.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }

    xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("agregarInsumo=" + cadena);
}

//Edita datos de personal en BD
function editarStock(cadena) {
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
            cargarSubmodulo(6, ".html/modulo3/m3submod6.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }

    xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("editarStock=" + cadena);
}


//Edita datos de personal en BD
function editarInsumo(cadena) {
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
            cargarSubmodulo(2, ".html/modulo3/m3submod2.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }

    xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("editarInsumo=" + cadena);
}

//Agrega datos de nueva área en BD
function crearRacion(cadena) {

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
            cargarSubmodulo(3, ".html/modulo3/m3submod3.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }

    xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("agregarRacion=" + cadena);
}

//Editar racion

function editarRacion(cadena) {

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
            cargarSubmodulo(4, ".html/modulo3/m3submod4.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }

    xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("editarRacion=" + cadena);
}


//Agregar elemento a la racion
function agregarElemento() {
    //alert(estado);
    document.getElementById("msjTabla").style.display = "none";
    var ctr2 = document.getElementById("selecInsumoRac").value;
    var ctr3 = document.getElementById("nCantRac").value;

    document.getElementById("msjCantidad").style.display = "none";
    document.getElementById("msjInsumoRac").style.display = "none";

    var error = 0;

    if (ctr2 == 0) {
        document.getElementById("msjInsumoRac").style.display = "block";
        error = 1;
    }

    if (ctr3 == 0) {
        document.getElementById("msjCantidad").style.display = "block";
        error = 1;
    }

    if (!error) {
        elementos[j] = ctr2 + "|" + ctr3;
        //alert(elementos[i]);
        estado[j] = 1;

        var tabla = document.getElementById("tablaInsumos");
        //alert("Add: "+cadena);
        var fila = document.createElement("tr");
        fila.id = cont;
        var col1 = document.createElement("td");
        col1.align = "center";
        var col2 = document.createElement("td");
        col2.align = "center";
        var col3 = document.createElement("td");
        col3.align = "center";
        //alert(1);
        var combo = document.getElementById("selecInsumoRac");
        col1.innerHTML = combo.options[combo.selectedIndex].text;
        col2.innerHTML = document.getElementById("nCantRac").value;
        col3.innerHTML = '<button type="button" id="ingresar" class="button-remove btn btn-danger" onClick="removerElemento(' + cont + ')"><span class="glyphicon glyphicon-remove"></span></button>';
        fila.appendChild(col1);
        fila.appendChild(col2);
        fila.appendChild(col3);
        //alert(2);
        tabla.appendChild(fila);
        cont++;
        //alert(estado);
        //alert(elementos);
        j++;
    }
}

function removerElemento(tr) {
    var fila = document.getElementById(tr);
    fila.parentNode.removeChild(fila);
    estado[tr - 1] = 0;
    //alert(estado);
}

//Edita datos de área en BD
function editarArea(cadena) {
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
            cargarSubmodulo(4, ".html/modulo3/m3submod4.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }

    xmlhttp.open("POST", ".lib/modulo3/linkModulo3.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("editarArea=" + cadena);
}

function mostrarOpciones3(obj) {

    //alert(obj.value);
    //var periodo =

    switch (obj.value) {

        case '0':
            document.getElementById("body2").style.display = "none";
            document.getElementById("divPeriodo").style.display = "none";
            document.getElementById("msjReporte").style.display = 'none';
            break;

        case '1':
            cargarOpciones(1);
            document.getElementById("msjReporte").style.display = 'none';
            document.getElementById("divPeriodo").style.display = "block";
            break;
        case '2':
            document.getElementById("divPeriodo").style.display = "none";
            document.getElementById("divEntrega").style.display = "none";
            break;
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

function soloNumeros(e) {
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46))
        return true;

    return /\d/.test(String.fromCharCode(keynum));
}

