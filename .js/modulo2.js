//Evalua el submódulo a cargar (Agregar Software, Editar Software, Reportes)

var contBenef = 0;
function cargarSubmodulo(id, desde) {
    $("#modules").load(desde);
    document.getElementById("modules").style.display = "block";

    if (id == 1)
    //Inicia Agregar Software
        initSubModulo1();
    if (id == 2)
    //Inicia Editar Software
        initSubModulo2();
    if (id == 3)
    //Inicia Editar Software
        initSubModulo3();
    if (id == 4)
    //Inicia Editar Software
        initSubModulo4();
    if (id == 6)
    //Inicia Editar Software
        initSubModulo6();
    if (id == 7)
    //Inicia Editar Software
        initSubModulo7();
}
//Inicia controles para "Agregar Software"
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
                var opt1 = document.createElement("option");
                opt1.value = Cadena3[0];
                opt1.text = Cadena3[1];
                document.getElementById("selectPeriodo").add(opt1);
            }

            Cadena2 = Cadena1[1].split('$');

            for (i = 0; i < (Cadena2.length) - 1; i++) {
                Cadena3 = Cadena2[i].split('|');
                var opt1 = document.createElement("option");
                opt1.value = Cadena3[0];
                opt1.text = Cadena3[1];
                document.getElementById("selectCategoria").add(opt1);
            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo1=1");
}

//Inicia controles para "Editar Software"
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
                opt1.value = Cadena3[0];
                opt1.text = Cadena3[1];
                document.getElementById("selectPeriodo").add(opt1);
                document.getElementById("selectPeriodoEmp").add(opt1);
            }


            Cadena2 = Cadena1[1].split('$');

            for (i = 0; i < (Cadena2.length) - 1; i++) {
                Cadena3 = Cadena2[i].split('|');
                var opt1 = document.createElement("option");
                opt1.value = Cadena3[0];
                opt1.text = Cadena3[1];
                document.getElementById("selectCategoria").add(opt1);
            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo2=1");
}

//Inicia controles para "Agregar Software"
function initSubModulo3() {
    contBenef = 0;
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
    xmlhttp.send("initSubModulo3=1");
}

//Inicia controles para "Agregar Software"
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
            Cadena1 = xmlhttp.responseText.split('$');


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
    xmlhttp.send("initSubModulo4=1");
}

//Inicia controles para "Editar Software"
function initSubModulo7() {
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
                opt1.value = Cadena3[0];
                opt1.text = Cadena3[1];
                document.getElementById("selectPeriodo").add(opt1);
            }

            Cadena2 = Cadena1[1].split('$');

            for (i = 0; i < (Cadena2.length) - 1; i++) {
                Cadena3 = Cadena2[i].split('|');
                var opt1 = document.createElement("option");
                opt1.value = Cadena3[0];
                opt1.text = Cadena3[1];
                document.getElementById("selectCategoria").add(opt1);
            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo2=1");
}

//Carga datos de software a editar
function cargarSoftware(obj) {
    var idSoftware = obj.value;
    if (idSoftware == 0) {
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
                document.getElementById("edtdescsoftware").value = Cadena2[0];
                document.getElementById("edtactivo").value = Cadena2[1];

                document.getElementById("mod-body2").style.display = "block";
                document.getElementById("mod-footer").style.display = "block";
            }
        }

        xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("cargarSoftware=" + idSoftware);
    }
}

//Valida datos de software antes de agregar en BD
function validarSubMod1() {
    var ctr1 = document.getElementById("nCodApod").value;
    var ctr2 = document.getElementById("selectInfant").value;
    var ctr3 = document.getElementById("selectCategoria").value;
    var ctr4 = document.getElementById("selectPeriodo").value;


    document.getElementById("msjNombre").style.display = "none";
    document.getElementById("msjInfante").style.display = "none";
    document.getElementById("msjCategoria").style.display = "none";
    document.getElementById("msjPeriodo").style.display = "none";

    var error = 0;

    if (ctr1 == 0) {
        document.getElementById("msjNombre").style.display = "block";
        error = 1;
    }
    if (ctr3 == 0) {
        document.getElementById("msjCategoria").style.display = "block";
        error = 1;
    }
    if (ctr4 == 0) {
        document.getElementById("msjPeriodo").style.display = "block";
        error = 1;
    }

    if ((ctr3 == 2 || ctr3 == 3) && ctr2 == 0) {
        document.getElementById("msjInfante").style.display = "block";
        error = 1;
    }


    if (!error) {
        var cadena = ctr1 + "|" + ctr2 + "|" + ctr3 + "|" + ctr4;
        //alert("Add: "+cadena);
        agregarEmpadronado(cadena);
    }
}

//Valida datos de software antes de editar en BD
function validarSubMod2() {
    var ctr0 = document.getElementById("nCodigo").value;
    var ctr1 = document.getElementById("nCodApod").value;
    var ctr2 = document.getElementById("selectInfant").value;
    var ctr3 = document.getElementById("selectCategoria").value;
    var ctr4 = document.getElementById("selectPeriodo").value;


    document.getElementById("msjNombre").style.display = "none";
    document.getElementById("msjInfante").style.display = "none";
    document.getElementById("msjCategoria").style.display = "none";
    document.getElementById("msjPeriodo").style.display = "none";

    var error = 0;

    if (ctr1 == 0) {
        document.getElementById("msjNombre").style.display = "block";
        error = 1;
    }
    if (ctr3 == 0) {
        document.getElementById("msjCategoria").style.display = "block";
        error = 1;
    }
    if (ctr4 == 0) {
        document.getElementById("msjPeriodo").style.display = "block";
        error = 1;
    }

    if ((ctr3 == 2 || ctr3 == 3) && ctr2 == 0) {
        document.getElementById("msjInfante").style.display = "block";
        error = 1;
    }


    if (!error) {
        var cadena = ctr0 + "|" + ctr1 + "|" + ctr2 + "|" + ctr3 + "|" + ctr4;
        //alert("Add: "+cadena);
        editarEmpadronado(cadena);
    }
}

//Agrega datos de nuevo software en BD
function agregarEmpadronado(cadena) {
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
            cargarSubmodulo(1, ".html/modulo2/m2submod1.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("agregarEmpadronado=" + cadena);
}

//Edita datos de software en BD
function editarEmpadronado(cadena) {
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
            cargarSubmodulo(2, ".html/modulo2/m2submod2.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("editarEmpadronado=" + cadena);
}

//Busca DNI de apoderado
function buscarPersona(val1) {
    var dni;


    if (val1 == 1) {
        dni = document.getElementById("buscarDniPers").value;

    }

    if (val1 == 2) {
        dni = document.getElementById("buscarDniEditar").value;

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
            Cadena1 = xmlhttp.responseText.split('%');
            Cadena2 = Cadena1[0].split('|');

            //alert(Cadena2[0] + " " + Cadena2[1] + " " + Cadena2[2]);
            if (val1 == 1) {
                //alert(Cadena2[0]);

                if (Cadena2[0] != "") {
                    //document.getElementById("newcodresponsableequipo").value = 0;

                    document.getElementById("body2").style.display = "block";
                    document.getElementById("btnAgregar").style.display = "block";
                    document.getElementById("msjBusquedaDni").style.display = "none";

                    document.getElementById("nCodApod").value = Cadena2[0];
                    document.getElementById("cNomApod").value = Cadena2[1] + " " + Cadena2[2];

                    var opt1 = document.getElementById("selectInfant");
                    while (opt1.options.length > 0) {
                        opt1.remove(0);
                    }
                    var opt2 = document.createElement("option");
                    opt2.value = 0;
                    opt2.text = "-- Seleccione --";
                    document.getElementById("selectInfant").add(opt2);

                    Cadena2 = Cadena1[1].split('$');

                    for (i = 0; i < (Cadena2.length) - 1; i++) {
                        Cadena3 = Cadena2[i].split('|');
                        var opt1 = document.createElement("option");
                        opt1.value = Cadena3[0];
                        opt1.text = Cadena3[1] + " " + Cadena3[2];
                        document.getElementById("selectInfant").add(opt1);
                    }

                }
                else {

                    //document.getElementById("newcodresponsableequipo").value = Cadena2[0];
                    document.getElementById("msjBusquedaDni").style.display = "block";
                    document.getElementById("body2").style.display = "none";
                    document.getElementById("btnAgregar").style.display = "none";

                    var opt1 = document.getElementById("selectInfant");
                    while (opt1.options.length > 0) {
                        opt1.remove(0);
                    }
                    var opt2 = document.createElement("option");
                    opt2.value = 0;
                    opt2.text = "-- Seleccione --";
                    document.getElementById("selectInfant").add(opt2);

                }

            }
            if (val1 == 2) {
                if (Cadena2[0] != "") {

                    document.getElementById("msjBusquedaDniEditar").style.display = "none";
                    document.getElementById("nCodApod").value = Cadena2[0];
                    document.getElementById("cNomApod").value = Cadena2[1] + " " + Cadena2[2];

                    var opt1 = document.getElementById("selectInfant");
                    while (opt1.options.length > 0) {
                        opt1.remove(0);
                    }
                    var opt2 = document.createElement("option");
                    opt2.value = 0;
                    opt2.text = "-- Seleccione --";
                    document.getElementById("selectInfant").add(opt2);

                    Cadena2 = Cadena1[1].split('$');

                    for (i = 0; i < (Cadena2.length) - 1; i++) {
                        Cadena3 = Cadena2[i].split('|');
                        var opt1 = document.createElement("option");
                        opt1.value = Cadena3[0];
                        opt1.text = Cadena3[1] + " " + Cadena3[2];
                        document.getElementById("selectInfant").add(opt1);
                    }
                }
                else {
                    document.getElementById("msjBusquedaDniEditar").style.display = "block";
                }
            }

        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("buscarPersona=" + dni);
}

//Busca DNI de apoderado
function buscarEmpadronado() {
    var dni = document.getElementById("buscarDniPers").value;
    var periodo = document.getElementById("selectPeriodoEmp").value;

    var cadena = dni + "|" + periodo ;

    if (periodo != 0) {

        document.getElementById("msjPeriodoEmp").style.display = 'none';
        var xmlhttp;

        if (window.XMLHttpRequest)
        // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();

        else
        // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                Cadena0 = xmlhttp.responseText.split('%');
                Cadena1 = Cadena0[0].split('$');

                //alert(Cadena1.length);
                //alert(Cadena0);
                Cadena2 = Cadena1[0].split('|');

                //alert(Cadena2[0] + " " + Cadena2[1] + " " + Cadena2[2]);

                //alert(Cadena2[0]);

                if (Cadena2[0] != "") {
                    if (Cadena1.length == 2) {

                        document.getElementById("body3").style.display = "block";
                        document.getElementById("body2").style.display = "none";

                        document.getElementById("btnAgregar").style.display = "block";
                        document.getElementById("buscarDniEditar").value = document.getElementById("buscarDniPers").value;
                        document.getElementById("msjBusquedaDni").style.display = "none";
                        document.getElementById("nCodigo").value = Cadena2[0];
                        document.getElementById("nCodApod").value = Cadena2[1];
                        document.getElementById("cNomApod").value = Cadena2[2] + " " + Cadena2[3];
                        document.getElementById("selectCategoria").value = Cadena2[4];
                        document.getElementById("selectPeriodo").value = Cadena2[6];


                        var opt1 = document.getElementById("selectInfant");
                        while (opt1.options.length > 0) {
                            opt1.remove(0);
                        }
                        var opt2 = document.createElement("option");
                        opt2.value = 0;
                        opt2.text = "-- Seleccione --";
                        document.getElementById("selectInfant").add(opt2);

                        Cadena10 = Cadena0[1].split('$');

                        for (i = 0; i < (Cadena10.length) - 1; i++) {
                            Cadena11 = Cadena10[i].split('|');
                            var opt1 = document.createElement("option");
                            opt1.value = Cadena11[0];
                            opt1.text = Cadena11[1] + " " + Cadena11[2];
                            document.getElementById("selectInfant").add(opt1);
                        }

                        if (Cadena2[8] != "")
                            document.getElementById("selectInfant").value = Cadena2[8];


                    }

                    else {
                        var tabla = document.getElementById("tablaEditEmpad");
                        var longTabla = tabla.rows.length;

                        if (longTabla > 1)
                            for (i = longTabla - 1; i > 0; i--)
                                tabla.deleteRow(i);

                        document.getElementById("body2").style.display = "block";
                        document.getElementById("body3").style.display = "none";
                        document.getElementById("btnAgregar").style.display = "none";

                        document.getElementById("msjBusquedaDni").style.display = "none";

                        for (var i = 0; i < Cadena1.length - 1; i++) {
                            Cadena2 = Cadena1[i].split('|');


                            //alert("Add: "+cadena);

                            var fila = document.createElement("tr");
                            fila.id = Cadena2[0];
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


                            col1.innerHTML = Cadena2[1];

                            col2.innerHTML = Cadena2[2] + " " + Cadena2[3];
                            col3.innerHTML = Cadena2[9] + " " + Cadena2[10];
                            col4.innerHTML = Cadena2[5];
                            //alert(2);
                            col5.innerHTML = Cadena2[7];
                            col6.innerHTML = '<button type="button" id="ingresar" class="button-remove btn btn-danger" onClick="editarElemento(' + Cadena2[0] + ',' + Cadena2[1] + ')"><span class="glyphicon glyphicon-edit"></span></button>';
                            //alert(1);
                            fila.appendChild(col1);
                            fila.appendChild(col2);
                            fila.appendChild(col3);
                            fila.appendChild(col4);
                            fila.appendChild(col5);
                            fila.appendChild(col6);

                            tabla.appendChild(fila);

                        }
                    }

                }
                else {
                    //document.getElementById("newcodresponsableequipo").value = Cadena2[0];
                    document.getElementById("msjBusquedaDni").style.display = "block";
                    document.getElementById("body2").style.display = "none";
                    document.getElementById("btnAgregar").style.display = "none";

                    var opt1 = document.getElementById("selectInfant");
                    while (opt1.options.length > 0) {
                        opt1.remove(0);
                    }
                    var opt2 = document.createElement("option");
                    opt2.value = 0;
                    opt2.text = "-- Seleccione --";
                    document.getElementById("selectInfant").add(opt2);

                }
            }
        }

        xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("buscarEmpadronado=" + cadena);
    }
    else{
        document.getElementById("msjPeriodoEmp").style.display = 'block';
    }

}


//Busca DNI de apoderado
function buscarEmpadronadoElimnar() {
    var ctr0 = document.getElementById("buscarDniPers").value;
    var ctr1 = document.getElementById("selectPeriodo").value;

    document.getElementById("msjPeriodo").style.display = "none";
    document.getElementById("msjBusquedaDni").style.display = "none";

    var error = 0;

    if (ctr0 == 0) {
        document.getElementById("msjBusquedaDni").style.display = "block";
        error = 1;
    }
    if (ctr1 == 0) {
        document.getElementById("msjPeriodo").style.display = "block";
        error = 1;
    }

    if (!error) {
        var cadena = ctr0 + "|" + ctr1;
        //alert("Add: "+cadena);
        var xmlhttp;

        if (window.XMLHttpRequest)
        // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();

        else
        // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                Cadena0 = xmlhttp.responseText.split('%');
                Cadena1 = Cadena0[0].split('$');

                //alert(Cadena1.length);
                //alert(Cadena1);
                Cadena2 = Cadena1[0].split('|');

                //alert(Cadena2[0] + " " + Cadena2[1] + " " + Cadena2[2]);

                //alert(Cadena2[0]);

                if (Cadena2[0] != "") {

                    document.getElementById("body3").style.display = "none";
                    var tabla = document.getElementById("tablaEditEmpad");
                    var longTabla = tabla.rows.length;

                    if (longTabla > 1)
                        for (i = longTabla - 1; i > 0; i--)
                            tabla.deleteRow(i);

                    document.getElementById("body2").style.display = "block";
                    document.getElementById("msjBusquedaDni").style.display = "none";

                    for (var i = 0; i < Cadena1.length - 1; i++) {
                        Cadena2 = Cadena1[i].split('|');


                        //alert("Add: "+cadena);

                        var fila = document.createElement("tr");
                        fila.id = Cadena2[0];
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


                        col1.innerHTML = Cadena2[1];

                        col2.innerHTML = Cadena2[2] + " " + Cadena2[3];
                        col3.innerHTML = Cadena2[9] + " " + Cadena2[10];
                        col4.innerHTML = Cadena2[5];
                        //alert(2);
                        col5.innerHTML = Cadena2[7];
                        col6.innerHTML = '<button type="button" id="ingresar" class="button-remove btn btn-danger" onClick="eliminarEmpadronado(' + Cadena2[0] + ',' + Cadena2[1] + ')"><span class="glyphicon glyphicon-remove"></span></button>';
                        //alert(1);
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
                    //document.getElementById("newcodresponsableequipo").value = Cadena2[0];
                    //document.getElementById("msjBusquedaDni").style.display = "block";
                    document.getElementById("body2").style.display = "none";
                    document.getElementById("body3").style.display = "block";
                }
            }
        }

        xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("buscarEmpadronado=" + cadena);
    }


}

function eliminarEmpadronado(var1, var2) {


    var cadena = var1 + "|" + var2;

    //alert(cadena);

    if (getConfirmationEliminar()) {
        var xmlhttp;

        if (window.XMLHttpRequest)
        // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();

        else
        // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                Cadena1 = xmlhttp.responseText;
                alert(Cadena1);
            }
        }

        xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("eliminarEmpadronado=" + cadena);

    }


}

function editarElemento(codigo, nCodApod) {

    var cadena = codigo + "|" + nCodApod;

    //alert(cadena);

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


            //alert(Cadena1);
            Cadena2 = Cadena1[0].split('|');

            //alert(Cadena2[0] + " " + Cadena2[1] + " " + Cadena2[2]);

            //alert(Cadena2[0]);

            if (Cadena2[0] != "") {

                document.getElementById("body3").style.display = "block";
                document.getElementById("body2").style.display = "none";

                document.getElementById("btnAgregar").style.display = "block";
                document.getElementById("buscarDniEditar").value = document.getElementById("buscarDniPers").value;
                document.getElementById("msjBusquedaDni").style.display = "none";
                document.getElementById("nCodigo").value = Cadena2[0];
                document.getElementById("nCodApod").value = Cadena2[1];
                document.getElementById("cNomApod").value = Cadena2[2] + " " + Cadena2[3];
                document.getElementById("selectCategoria").value = Cadena2[4];
                document.getElementById("selectPeriodo").value = Cadena2[6];
                //alert(Cadena2[8]);

                var opt1 = document.getElementById("selectInfant");
                while (opt1.options.length > 0) {
                    opt1.remove(0);
                }
                var opt2 = document.createElement("option");
                opt2.value = 0;
                opt2.text = "-- Seleccione --";
                document.getElementById("selectInfant").add(opt2);

                Cadena3 = Cadena1[1].split('$');

                for (i = 0; i < (Cadena3.length) - 1; i++) {
                    Cadena4 = Cadena3[i].split('|');
                    var opt1 = document.createElement("option");
                    opt1.value = Cadena4[0];
                    opt1.text = Cadena4[1] + " " + Cadena4[2];
                    document.getElementById("selectInfant").add(opt1);
                }

                if (Cadena3.length > 1)
                    if (Cadena2[8] != "")
                        document.getElementById("selectInfant").value = Cadena2[8];

            }
            else {
                //document.getElementById("newcodresponsableequipo").value = Cadena2[0];
                document.getElementById("msjBusquedaDni").style.display = "block";
                document.getElementById("body2").style.display = "none";
                document.getElementById("btnAgregar").style.display = "none";

                var opt1 = document.getElementById("selectInfant");
                while (opt1.options.length > 0) {
                    opt1.remove(0);
                }
                var opt2 = document.createElement("option");
                opt2.value = 0;
                opt2.text = "-- Seleccione --";
                document.getElementById("selectInfant").add(opt2);

            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("buscarEmpadronadoCodigo=" + cadena);
}

function cargarEmpadronados() {

    var nCodPeriodo = document.getElementById("selectPeriodo").value;
    var estado = 'NO';
    var combo = document.getElementById("selectPeriodo");
    var combo2 = document.getElementById("selectEntrega");
    document.getElementById("body2").style.display = "block";
    document.getElementById("body3").style.display = "block";
    contBenef = 0;

    document.getElementById("lblTabla").innerHTML = "Lista de empadronados, periodo: " + combo.options[combo.selectedIndex].text + ", Mes: " + combo2.options[combo.selectedIndex].text;
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

                var tabla = document.getElementById("tableEmpad");
                var longTabla = tabla.rows.length;

                if (longTabla > 1)
                    for (i = longTabla - 1; i > 0; i--)
                        tabla.deleteRow(i);

                document.getElementById("body2").style.display = "block";

                document.getElementById("msjPeriodo").style.display = "none";

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

                    //alert(Cadena2[11]);

                    if (Cadena2[11] == 'N')
                        estado = 'NO';
                    if (Cadena2[11] == 'E')
                        estado = 'EE';
                    if (Cadena2[11] == 'S') {
                        estado = 'SI';
                        contBenef++;
                    }


                    col1.innerHTML = Cadena2[2] + " " + Cadena2[3];

                    col2.innerHTML = Cadena2[9] + " " + Cadena2[10];
                    col3.innerHTML = Cadena2[5];
                    col4.innerHTML = Cadena2[7];
                    if (Cadena2[13] != 0)
                        col5.innerHTML = Cadena2[13] + " a&ntilde;os, " + Cadena2[14] + " meses";
                    if (estado == "NO")
                        col6.innerHTML = '<button type="button" id="' + Cadena2[0] + '" class="button-remove btn btn-danger" onClick="cambiarEstado(' + Cadena2[0] + ')">' + estado + '</button>';
                    if (estado == "SI")
                        col6.innerHTML = '<button type="button" id="' + Cadena2[0] + '" class="button-remove btn btn-success" onClick="cambiarEstado(' + Cadena2[0] + ')">' + estado + '</button>';
                    if (estado == "EE")
                        col6.innerHTML = '<button type="button" id="' + Cadena2[0] + '" class="button-remove btn btn-warning" onClick="cambiarEstado(' + Cadena2[0] + ')">' + estado + '</button>';
                    //alert(1);
                    fila.appendChild(col1);
                    fila.appendChild(col2);
                    fila.appendChild(col3);
                    fila.appendChild(col4);
                    fila.appendChild(col5);
                    fila.appendChild(col6);

                    tabla.appendChild(fila);


                }


                document.getElementById("cantidad").innerHTML = contBenef;
            }

            else {

                var tabla = document.getElementById("tableEmpad");
                contBenef = 0;
                document.getElementById("cantidad").innerHTML = contBenef;
                var longTabla = tabla.rows.length;

                if (longTabla > 1)
                    for (i = longTabla - 1; i > 0; i--)
                        tabla.deleteRow(i);


            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("listarEmpadronados=" + nCodPeriodo);
}

//validar si esta creada la entrega
function validarEntrega() {

    var ctr1 = document.getElementById("selectPeriodo").value;
    var ctr2 = document.getElementById("selectEntrega").value;

    if (ctr1 != 0 && ctr2 != 0)
        validarCreacionEntrega(ctr1, ctr2);
    else {
        document.getElementById("crearEntrega").style.display = "none";
        var tabla = document.getElementById("tableEmpad");
        var longTabla = tabla.rows.length;

        if (longTabla > 1)
            for (i = longTabla - 1; i > 0; i--)
                tabla.deleteRow(i);

        document.getElementById("body2").style.display = "none";
    }

}

//Validar creación de entrega
function validarCreacionEntrega(ctr1, ctr2) {

    var cadena = ctr1 + "|" + ctr2;

    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", false);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("validarCreacionEntrega=" + cadena);

    Cadena1 = xmlhttp.responseText.split('|');
    //alert(Cadena1);

    document.getElementById("nCodEntrega").value = Cadena1[0];

    if (Cadena1[1] == 'N') {
        document.getElementById("msjEntrega").style.display = "block";
        document.getElementById("crearEntrega").style.display = "block";
        var tabla = document.getElementById("tableEmpad");
        var longTabla = tabla.rows.length;

        if (longTabla > 1)
            for (i = longTabla - 1; i > 0; i--)
                tabla.deleteRow(i);

        document.getElementById("body2").style.display = "none";

    }
    else {
        document.getElementById("msjEntrega").style.display = "none";
        document.getElementById("crearEntrega").style.display = "none";
        //alert("llego cargar");
        cargarEntrega();
    }

    //return codigo;
}


function cargarEntrega() {

    var nCodEntrega = document.getElementById("nCodEntrega").value;
    var estado = 'NO';
    //alert(nCodEntrega);

    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            Cadena1 = xmlhttp.responseText.split('$')

            //alert(Cadena1);

            //alert(Cadena1);

            Cadena2 = Cadena1[0].split('|');

            if (Cadena2[0] != "") {

                var tabla = document.getElementById("tableEmpad");
                var longTabla = tabla.rows.length;

                if (longTabla > 1)
                    for (i = longTabla - 1; i > 0; i--)
                        tabla.deleteRow(i);

                document.getElementById("body2").style.display = "block";

                document.getElementById("msjPeriodo").style.display = "none";

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

                    //alert(Cadena2[11]);

                    if (Cadena2[8] == 'N')
                        estado = 'NO';
                    else {
                        estado = 'SI';
                        contBenef++;
                    }


                    col1.innerHTML = Cadena2[0];

                    col2.innerHTML = Cadena2[2] + " " + Cadena2[3];
                    col3.innerHTML = Cadena2[6] + " " + Cadena2[7];
                    col4.innerHTML = Cadena2[4];
                    //alert(2);
                    col5.innerHTML = Cadena2[5];
                    if (estado == "NO")
                        col6.innerHTML = '<button type="button" id="' + Cadena2[0] + '" class="button-remove btn btn-danger" onClick="cambiarEstadoBenef(' + Cadena2[0] + ',' + Cadena2[1] + ')">' + estado + '</button>';
                    else
                        col6.innerHTML = '<button type="button" id="' + Cadena2[0] + '" class="button-remove btn btn-success" onClick="cambiarEstadoBenef(' + Cadena2[0] + ',' + Cadena2[1] + ')">' + estado + '</button>';
                    //alert(1);
                    fila.appendChild(col1);
                    fila.appendChild(col2);
                    fila.appendChild(col3);
                    fila.appendChild(col4);
                    fila.appendChild(col5);
                    fila.appendChild(col6);

                    tabla.appendChild(fila);


                }
                //document.getElementById("cantidad").innerHTML = contBenef;
                document.getElementById("cantidad").innerHTML = contBenef;
            }

            else {

            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("listarBeneficiarios=" + nCodEntrega);
}

function validarCategoria(obj) {

    if (obj.value == '1' || obj.value == '4') {
        document.getElementById("selectInfant").value = 0;
        document.getElementById("selectInfant").disabled = true;

    }
    else {
        document.getElementById("selectInfant").disabled = false;
    }
}

function validarStock(ctr1, ctr2) {
    var estado = document.getElementById(ctr1).innerHTML;
    var periodo = document.getElementById("selectPeriodo").value;

    if (estado == 'NO') {
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
                var flag = 0;
                for (var i = 0; i < Cadena1.length - 1; i++) {
                    Cadena2 = Cadena1[i].split('|');
                    if (Cadena2[2] == 'N') {
                        flag = 1;
                        break;
                    }
                }

                if (flag == 1)
                    alert("No se puede entregar mas Raciones, los insumos son insuficientes.");
                else
                    cambiarEstadoBenef(ctr1, ctr2);


            }
        }
        xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("validarStock=" + periodo);

    }
    else
        cambiarEstadoBenef(ctr1, ctr2)

}

function cambiarEstadoBenef(ctr1, ctr2) {

    var estado = document.getElementById(ctr1).innerHTML;
    var periodo = document.getElementById("selectPeriodo").value;

    var nuevoEstado = '';

    //alert(estado);
    if (estado == 'NO')
        nuevoEstado = 'S';
    else
        nuevoEstado = 'N';

    //var id = "f" + est ;
    //alert(est);
    //alert(document.getElementById(est).innerHTML);
    var cadena = ctr1 + "|" + ctr2 + "|" + nuevoEstado + "|" + periodo;

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

            if (estado == "NO") {

                contBenef++;
                document.getElementById("maxBenef").innerHTML = contBenef + "/" + document.getElementById("txtmaxBenef").value;
                document.getElementById(ctr1).className = "button-remove btn btn-success";
                document.getElementById(ctr1).innerHTML = "SI";

            }
            else {
                contBenef--;
                document.getElementById("maxBenef").innerHTML = contBenef + "/" + document.getElementById("txtmaxBenef").value;
                document.getElementById(ctr1).className = "button-remove btn btn-danger";
                document.getElementById(ctr1).innerHTML = "NO";
            }


            for (i = 0; i < Cadena1.length - 1; i++) {
                Cadena2 = Cadena1[i].split('|');
                document.getElementById("insumo" + Cadena2[0]).innerHTML = Cadena2[2];
            }
            //alert(insertar);


        }
    }
    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("updateEstadoBenef=" + cadena);

}

function cambiarEstado(est) {

    var estado = document.getElementById(est).innerHTML;
    var maxBenef = parseInt(document.getElementById("maxBenef").innerHTML);


    var nuevoEstado = '';

    //alert(estado);
    if (estado == 'NO')
        nuevoEstado = 'E';
    if (estado == 'SI')
        nuevoEstado = 'N';
    if (estado == 'EE')
        nuevoEstado = 'S';
    //var id = "f" + est ;
    //alert(est);
    //alert(document.getElementById(est).innerHTML);
    var cadena = est + "|" + nuevoEstado;

    if (maxBenef > contBenef || estado == 'SI' || estado == 'NO') {
        var xmlhttp;

        if (window.XMLHttpRequest)
        // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();

        else
        // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //alert(2);

                if (estado == "NO") {

                    document.getElementById("cantidad").innerHTML = contBenef;
                    document.getElementById(est).className = "button-remove btn btn-warning";
                    document.getElementById(est).innerHTML = "EE"
                }
                if (estado == "SI") {
                    contBenef--;
                    document.getElementById("cantidad").innerHTML = contBenef;
                    document.getElementById(est).className = "button-remove btn btn-danger";
                    document.getElementById(est).innerHTML = "NO"
                }
                if (estado == "EE") {
                    contBenef++;
                    document.getElementById("cantidad").innerHTML = contBenef;
                    document.getElementById(est).className = "button-remove btn btn-success";
                    document.getElementById(est).innerHTML = "SI"
                }


            }
        }
        xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("updateEstado=" + cadena);

    }
    else {

        alert("No se puede agregar mas beneficiados, la cantidad maxima de beneficiados para este periodo es: " + maxBenef);
    }
}

//validar submodulo
function validarSubMod4() {


    var ctr1 = document.getElementById("nCodEntrega").value;

    var cadena = ctr1;

    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", false);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("initSubModulo3=1");

    Cadena1 = xmlhttp.responseText;

    //alert(Cadena1);

}

function cargarReporte2() {

    var opc = document.getElementById("selectReporte").value;

    switch (opc) {

        case 0:
            document.getElementById("msjReporte").style.display = 'none';

        case 1:
            document.getElementById("divPeriodo").style.display = "block";
            document.getElementById("divEntrega").style.display = "block";
            document.getElementById("body3").style.display = "none";
            generarPadron();
            break;
        default:
            document.getElementById("msjReporte").style.display = 'block';


    }

}

function mostrarOpciones(obj) {

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
            cargarOpciones();
            document.getElementById("divPeriodo").style.display = "block";
            document.getElementById("divEntrega").style.display = "block";
            document.getElementById("divDni").style.display = "none";

            break;
        case '2':
            cargarOpciones();
            document.getElementById("divPeriodo").style.display = "block";
            document.getElementById("divEntrega").style.display = "block";
            document.getElementById("divDni").style.display = "none";
            break;
        case '3':
            cargarOpciones();
            document.getElementById("divPeriodo").style.display = "block";
            document.getElementById("divDni").style.display = "block";
            document.getElementById("divEntrega").style.display = "none";
            break;
        case '4':
            cargarOpciones();
            document.getElementById("divPeriodo").style.display = "block";
            document.getElementById("divEntrega").style.display = "block";
            document.getElementById("divDni").style.display = "none";
            break;
        case '5':
            cargarOpciones();
            document.getElementById("divPeriodo").style.display = "block";
            document.getElementById("divEntrega").style.display = "block";
            document.getElementById("divDni").style.display = "none";
            break;
        case '6':
            cargarOpciones();
            document.getElementById("divPeriodo").style.display = "block";
            document.getElementById("divEntrega").style.display = "block";
            document.getElementById("divDni").style.display = "none";

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


function cargarReporte() {


    var rep = document.getElementById("selectReporte").value;

    switch (rep) {

        case '0':
            document.getElementById("divPeriodo").style.display = "none";
            document.getElementById("divEntrega").style.display = "none";
            document.getElementById("msjReporte").style.display = 'none';
            break;

        case '1':
            document.getElementById("body3").style.display = 'none';
            document.getElementById("body4").style.display = 'none';
            cargarBeneficiariosReporte();
            break;
        case '2':
            document.getElementById("body4").style.display = 'none';
            document.getElementById("body2").style.display = 'none';
            reporteBenefPorMes();
            break;
        case '3':
            document.getElementById("body3").style.display = 'none';
            document.getElementById("body2").style.display = 'none';
            reporteBenefPeriodoPorDni();
            break;
        case '4':
            document.getElementById("body3").style.display = 'none';
            document.getElementById("body4").style.display = 'none';
            cargarBeneficiariosEsperaReporte();
            break;
        case '5':
            document.getElementById("body3").style.display = 'none';
            document.getElementById("body4").style.display = 'none';
            cargarBeneficiariosPorAnexoSA();
            break;
        case '6':
            document.getElementById("body3").style.display = 'none';
            document.getElementById("body4").style.display = 'none';
            cargarBeneficiariosPorAnexoYar();
            break;
        default:
            document.getElementById("msjReporte").style.display = 'block';
            break;
    }
}

function reporteBenefPorMes() {

    var nCodEntrega = document.getElementById("selectEntrega").value;
    var texto = "Raci&oacute;n: ";
    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            Cadena0 = xmlhttp.responseText.split('%');
            Cadena1 = Cadena0[0].split('$');
            Cadena2 = Cadena1[0].split('|');

            if (Cadena2[0] != "") {

                var tabla = document.getElementById("tablaReporte2");
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

                    col1.innerHTML = Cadena2[0] + " " + Cadena2[1];

                    col2.innerHTML = Cadena2[4] + " " + Cadena2[5];
                    if (Cadena2[4] != 0)
                        col3.innerHTML = Cadena2[10] + " A&ntilde;os, " + Cadena2[11] + " Meses";

                    col4.innerHTML = Cadena2[2];
                    if (Cadena2[6] == 'N') {
                        col5.innerHTML = 'NO';
                        col6.innerHTML = '-';
                    }

                    else {
                        col5.innerHTML = 'SI';
                        col6.innerHTML = Cadena2[8];
                    }

                    //alert(2);

                    fila.appendChild(col1);
                    fila.appendChild(col2);
                    fila.appendChild(col3);
                    fila.appendChild(col4);
                    fila.appendChild(col5);
                    fila.appendChild(col6);

                    tabla.appendChild(fila);

                }

                Cadena4 = Cadena0[1].split('$');

                for (var i = 0; i < Cadena4.length - 1; i++) {
                    Cadena5 = Cadena4[i].split('|');
                    texto += Cadena5[0] + " " + Cadena5[1];
                    texto += ", ";
                }
                document.getElementById("mod-bodyreport-label2").innerHTML = "Periodo: " + Cadena2[3] + ", Mes: " + Cadena2[9];
                document.getElementById("mod-bodyreport-label5").innerHTML = texto;


            }

            else {

            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("reporteBenefPorMes=" + nCodEntrega);
}


function reporteBenefPeriodoPorDni() {

    var nCodPeriodo = document.getElementById("selectPeriodo").value;
    var dniBenef = document.getElementById("cDniApod").value;
    var cadena = nCodPeriodo + "|" + dniBenef;

    //alert(cadena);
    var texto = "Raci&oacute;n: ";

    if (dniBenef != 0 && nCodPeriodo != 0) {

        document.getElementById("msjReporte2").style.display = "none";

        var xmlhttp;

        if (window.XMLHttpRequest)
        // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();

        else
        // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                Cadena0 = xmlhttp.responseText.split('%');
                //alert(Cadena0);
                Cadena1 = Cadena0[0].split('$');
                Cadena2 = Cadena1[0].split('|');

                if (Cadena2[0] != "") {

                    var tabla = document.getElementById("tablaReporte4");
                    var longTabla = tabla.rows.length;

                    if (longTabla > 1)
                        for (i = longTabla - 1; i > 0; i--)
                            tabla.deleteRow(i);

                    document.getElementById("body4").style.display = "block";

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
                        var col7 = document.createElement("td");
                        col7.align = "center";


                        col1.innerHTML = Cadena2[0] + " " + Cadena2[1];

                        col2.innerHTML = Cadena2[2] + " " + Cadena2[3];


                        col4.innerHTML = Cadena2[4];
                        col5.innerHTML = Cadena2[5] + " / " + Cadena2[6];
                        if (Cadena2[7] == 'N') {
                            col6.innerHTML = 'NO';
                            col7.innerHTML = "";
                        }
                        else {
                            if (Cadena2[3] != 0)
                                col3.innerHTML = Cadena2[9] + " A&ntilde;os, " + Cadena2[10] + " Meses";
                            col6.innerHTML = 'SI';
                            col7.innerHTML = Cadena2[11];
                        }
                        //alert(2);

                        fila.appendChild(col1);
                        fila.appendChild(col2);
                        fila.appendChild(col3);
                        fila.appendChild(col4);
                        fila.appendChild(col5);
                        fila.appendChild(col6);
                        fila.appendChild(col7);

                        tabla.appendChild(fila);

                    }

                    Cadena4 = Cadena0[1].split('$');

                    for (var i = 0; i < Cadena4.length - 1; i++) {
                        Cadena5 = Cadena4[i].split('|');
                        texto += Cadena5[0] + " " + Cadena5[1];
                        texto += ", ";
                    }
                    document.getElementById("mod-bodyreport-label42").innerHTML = texto;

                }

                else {

                }
            }
        }

        xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("reporteBenefPeriodoPorDni=" + cadena);
    }
    else {
        document.getElementById("msjReporte2").style.display = "block";

    }
}


function cargarEntregaPorPeriodo(obj) {

    //document.getElementById("logo").src = "res/images/muni_yarabamba_logo";

    var periodo = obj.value;

    //alert(periodo);
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

            var opt1 = document.getElementById("selectEntrega");
            while (opt1.options.length > 0) {
                opt1.remove(0);
            }
            var opt2 = document.createElement("option");
            opt2.value = 0;
            opt2.text = "-- Seleccione --";
            document.getElementById("selectEntrega").add(opt2);


            for (i = 0; i < (Cadena1.length) - 1; i++) {
                Cadena2 = Cadena1[i].split('|');
                var opt1 = document.createElement("option");
                opt1.value = Cadena2[0];
                opt1.text = Cadena2[1];
                document.getElementById("selectEntrega").add(opt1);
            }

        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("entregasPorPeriodoBenef=" + periodo);

}

function cargarMeses(obj) {

    var periodo = obj.value;

    //alert(periodo);
    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Cadena1 = xmlhttp.responseText.split('$');

            // alert(Cadena1);

            var opt1 = document.getElementById("selectEntrega");
            while (opt1.options.length > 0) {
                opt1.remove(0);
            }
            var opt2 = document.createElement("option");
            opt2.value = 0;
            opt2.text = "-- Seleccione --";
            document.getElementById("selectEntrega").add(opt2);


            for (i = 0; i < (Cadena1.length) - 1; i++) {
                Cadena2 = Cadena1[i].split('|');
                var opt1 = document.createElement("option");
                opt1.value = Cadena2[0];
                opt1.text = Cadena2[1];
                document.getElementById("selectEntrega").add(opt1);
            }
            if (periodo != 0)
                document.getElementById("maxBenef").innerHTML = Cadena2[2];
            else {
                document.getElementById("maxBenef").innerHTML = 0;
                document.getElementById("body2").style.display = "none";
                document.getElementById("body3").style.display = "none";
            }

        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("entregasPorPeriodo=" + periodo);
}


function cargarMesesBenef(obj) {

    var periodo = obj.value;

    //alert(periodo);
    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            Cadena1 = xmlhttp.responseText.split('$');

            // alert(Cadena1);

            var opt1 = document.getElementById("selectEntrega");
            while (opt1.options.length > 0) {
                opt1.remove(0);
            }
            var opt2 = document.createElement("option");
            opt2.value = 0;
            opt2.text = "-- Seleccione --";
            document.getElementById("selectEntrega").add(opt2);


            for (i = 0; i < (Cadena1.length) - 1; i++) {
                Cadena2 = Cadena1[i].split('|');
                var opt1 = document.createElement("option");
                opt1.value = Cadena2[0];
                opt1.text = Cadena2[1];
                document.getElementById("selectEntrega").add(opt1);
            }

            document.getElementById("maxBenef").innerHTML = "0/0";
            document.getElementById("body2").style.display = "none";
            document.getElementById("body3").style.display = "none";

        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("entregasPorPeriodoBenef=" + periodo);
}

function validarCreacionBenef(obj) {

    var nCodEntrega = obj.value;


    if (nCodEntrega != 0) {

        var xmlhttp;

        if (window.XMLHttpRequest)
        // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();

        else
        // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", false);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("validarCreacionBenef=" + nCodEntrega);

        //alert(1);

        Cadena1 = xmlhttp.responseText;

        if (Cadena1 == 0) {
            cargarEmpadronados();
        }
        else {
            cargarBeneficiarios();
        }
    }
    else {
        document.getElementById("maxBenef").innerHTML = "0/0";
        document.getElementById("body2").style.display = "none";
        document.getElementById("body3").style.display = "none";

    }

}

function cargarBeneficiarios() {

    //alert("Cargar Beneficiarios");

    contBenef = 0;

    var nCodEntrega = document.getElementById("selectEntrega").value;
    var nCodPeriodo = document.getElementById("selectPeriodo").value;
    var cadena = nCodEntrega + "|" + nCodPeriodo;
    var estado = 'NO';
    //alert(nCodEntrega);

    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            Cadena0 = xmlhttp.responseText.split('%');
            Cadena1 = Cadena0[0].split('$');
            document.getElementById("txtmaxBenef").value = (Cadena1.length - 1);

            //alert(Cadena0);

            Cadena2 = Cadena1[0].split('|');

            if (Cadena2[0] != "") {

                var tabla = document.getElementById("tableEmpad");
                var longTabla = tabla.rows.length;

                if (longTabla > 1)
                    for (i = longTabla - 1; i > 0; i--)
                        tabla.deleteRow(i);

                document.getElementById("body2").style.display = "block";

                document.getElementById("msjPeriodo").style.display = "none";

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

                    //alert(Cadena2[11]);

                    if (Cadena2[8] == 'N')
                        estado = 'NO';
                    else {
                        estado = 'SI';
                        contBenef++;
                    }


                    col1.innerHTML = Cadena2[2] + " " + Cadena2[3];

                    col2.innerHTML = Cadena2[6] + " " + Cadena2[7];
                    col3.innerHTML = Cadena2[4];
                    col4.innerHTML = Cadena2[5] + " / " + Cadena2[9];
                    //alert(2);
                    if (Cadena2[6] != 0)
                        col5.innerHTML = Cadena2[10] + " A&ntilde;os, " + Cadena2[11] + " Meses";
                    if (estado == "NO")
                        col6.innerHTML = '<button type="button" id="' + Cadena2[0] + '" class="button-remove btn btn-danger" onClick="validarStock(' + Cadena2[0] + ',' + Cadena2[1] + ')">' + estado + '</button>';
                    else
                        col6.innerHTML = '<button type="button" id="' + Cadena2[0] + '" class="button-remove btn btn-success" onClick="validarStock(' + Cadena2[0] + ',' + Cadena2[1] + ')">' + estado + '</button>';
                    //alert(1);
                    fila.appendChild(col1);
                    fila.appendChild(col2);
                    fila.appendChild(col3);
                    fila.appendChild(col4);
                    fila.appendChild(col5);
                    fila.appendChild(col6);

                    tabla.appendChild(fila);


                }
                //document.getElementById("cantidad").innerHTML = contBenef;
                document.getElementById("maxBenef").innerHTML = contBenef + "/" + (Cadena1.length - 1);

                var insertar = '<label class="mod-body-label">Insumos en Almacen:</label><br>';
                Cadena3 = Cadena0[1].split('$');
                for (i = 0; i < Cadena3.length - 1; i++) {
                    Cadena4 = Cadena3[i].split('|');
                    insertar += '<input type="hidden" id="nCantRac' + Cadena4[0] + '" value="' + Cadena4[3] + '" ><label class="mod-body-label">' + Cadena4[1] + ':</label><span class="label label-warning" style="font-size: medium" id="insumo' + Cadena4[0] + '">' + Cadena4[2] + '</span> Unids.<br>'
                }
                //alert(insertar);
                document.getElementById("cantidadRacion").innerHTML = insertar;
            }

            else {

            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("listarBeneficiarios=" + cadena);

}


function cargarBeneficiariosReporte() {

    var nCodEntrega = document.getElementById("selectEntrega").value;
    var nCodPeriodo = document.getElementById("selectPeriodo").value;
    var cadena = nCodEntrega + "|" + nCodPeriodo;
    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            Cadena0 = xmlhttp.responseText.split('%');
            Cadena1 = Cadena0[0].split('$');
            Cadena2 = Cadena1[0].split('|');
            //alert(Cadena1);

            if (Cadena2[0] != "") {

                var tabla = document.getElementById("tableEmpad");
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
                    var col6 = document.createElement("td");
                    col6.align = "center";

                    col1.innerHTML = Cadena2[2] + " " + Cadena2[3];

                    col2.innerHTML = Cadena2[6] + " " + Cadena2[7];
                    col3.innerHTML = Cadena2[4];
                    if (Cadena2[6] != 0)
                        col4.innerHTML = Cadena2[10] + " A&ntilde;os, " + Cadena2[11] + " Meses";
                    if (Cadena2[13] == 'S')
                        col5.innerHTML = "Beneficiado";
                    else
                        col5.innerHTML = "Espera";
                    fila.appendChild(col1);
                    fila.appendChild(col2);
                    fila.appendChild(col3);
                    fila.appendChild(col4);
                    fila.appendChild(col5);
                    fila.appendChild(col6);

                    tabla.appendChild(fila);


                }

                document.getElementById("mod-bodyreport-label10").innerHTML = "BENEFICIARIOS PERIODO: " + Cadena2[5] + ", MES: " + Cadena2[9];

            }

            else {

                var tabla = document.getElementById("tableEmpad");
                var longTabla = tabla.rows.length;

                if (longTabla > 1)
                    for (i = longTabla - 1; i > 0; i--)
                        tabla.deleteRow(i);


            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("listarBeneficiariosReporte=" + cadena);

}


function cargarBeneficiariosPorAnexoSA() {

    var nCodEntrega = document.getElementById("selectEntrega").value;
    var nCodPeriodo = document.getElementById("selectPeriodo").value;
    var cadena = nCodEntrega + "|" + nCodPeriodo;
    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            Cadena0 = xmlhttp.responseText.split('%');
            Cadena1 = Cadena0[0].split('$');
            Cadena2 = Cadena1[0].split('|');
            //alert(Cadena1);

            if (Cadena2[0] != "") {

                var tabla = document.getElementById("tableEmpad");
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
                    var col6 = document.createElement("td");
                    col6.align = "center";

                    col1.innerHTML = Cadena2[2] + " " + Cadena2[3];

                    col2.innerHTML = Cadena2[6] + " " + Cadena2[7];
                    col3.innerHTML = Cadena2[4];
                    if (Cadena2[6] != 0)
                        col4.innerHTML = Cadena2[10] + " A&ntilde;os, " + Cadena2[11] + " Meses";
                    if (Cadena2[13] == 'S')
                        col5.innerHTML = "Beneficiado";
                    else
                        col5.innerHTML = "Espera";
                    fila.appendChild(col1);
                    fila.appendChild(col2);
                    fila.appendChild(col3);
                    fila.appendChild(col4);
                    fila.appendChild(col5);
                    fila.appendChild(col6);

                    tabla.appendChild(fila);


                }

                document.getElementById("mod-bodyreport-label10").innerHTML = "BENEFICIARIOS SAN ANTONIO PERIODO: " + Cadena2[5] + ", MES: " + Cadena2[9];

            }

            else {

                var tabla = document.getElementById("tableEmpad");
                var longTabla = tabla.rows.length;

                if (longTabla > 1)
                    for (i = longTabla - 1; i > 0; i--)
                        tabla.deleteRow(i);


            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("listarBeneficiariosReportePorAnexoSA=" + cadena);

}


function cargarBeneficiariosPorAnexoYar() {

    var nCodEntrega = document.getElementById("selectEntrega").value;
    var nCodPeriodo = document.getElementById("selectPeriodo").value;
    var cadena = nCodEntrega + "|" + nCodPeriodo;
    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            Cadena0 = xmlhttp.responseText.split('%');
            Cadena1 = Cadena0[0].split('$');
            Cadena2 = Cadena1[0].split('|');
            //alert(Cadena1);

            if (Cadena2[0] != "") {

                var tabla = document.getElementById("tableEmpad");
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
                    var col6 = document.createElement("td");
                    col6.align = "center";

                    col1.innerHTML = Cadena2[2] + " " + Cadena2[3];

                    col2.innerHTML = Cadena2[6] + " " + Cadena2[7];
                    col3.innerHTML = Cadena2[4];
                    if (Cadena2[6] != 0)
                        col4.innerHTML = Cadena2[10] + " A&ntilde;os, " + Cadena2[11] + " Meses";
                    if (Cadena2[13] == 'S')
                        col5.innerHTML = "Beneficiado";
                    else
                        col5.innerHTML = "Espera";
                    fila.appendChild(col1);
                    fila.appendChild(col2);
                    fila.appendChild(col3);
                    fila.appendChild(col4);
                    fila.appendChild(col5);
                    fila.appendChild(col6);

                    tabla.appendChild(fila);


                }

                document.getElementById("mod-bodyreport-label10").innerHTML = "BENEFICIARIOS YARABAMBA PERIODO: " + Cadena2[5] + ", MES: " + Cadena2[9];

            }

            else {

                var tabla = document.getElementById("tableEmpad");
                var longTabla = tabla.rows.length;

                if (longTabla > 1)
                    for (i = longTabla - 1; i > 0; i--)
                        tabla.deleteRow(i);


            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("listarBeneficiariosReportePorAnexoYara=" + cadena);

}


function cargarBeneficiariosEsperaReporte() {

    var nCodEntrega = document.getElementById("selectEntrega").value;
    var nCodPeriodo = document.getElementById("selectPeriodo").value;
    var cadena = nCodEntrega + "|" + nCodPeriodo;
    var xmlhttp;

    if (window.XMLHttpRequest)
    // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    else
    // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            Cadena0 = xmlhttp.responseText.split('%');
            Cadena1 = Cadena0[0].split('$');
            Cadena2 = Cadena1[0].split('|');
            //alert(Cadena1);

            if (Cadena2[0] != "") {

                var tabla = document.getElementById("tableEmpad");
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
                    var col6 = document.createElement("td");
                    col6.align = "center";

                    col1.innerHTML = Cadena2[2] + " " + Cadena2[3];

                    col2.innerHTML = Cadena2[6] + " " + Cadena2[7];
                    col3.innerHTML = Cadena2[4];
                    if (Cadena2[6] != 0)
                        col4.innerHTML = Cadena2[10] + " A&ntilde;os, " + Cadena2[11] + " Meses";
                    if (Cadena2[13] == 'S')
                        col5.innerHTML = "Beneficiado";
                    else
                        col5.innerHTML = "Espera";
                    fila.appendChild(col1);
                    fila.appendChild(col2);
                    fila.appendChild(col3);
                    fila.appendChild(col4);
                    fila.appendChild(col5);
                    fila.appendChild(col6);

                    tabla.appendChild(fila);


                }

                document.getElementById("mod-bodyreport-label10").innerHTML = "BENEFICIARIOS PERIODO: " + Cadena2[5] + ", MES: " + Cadena2[9];

            }

            else {

            }
        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("listarBeneficiariosEsperaReporte=" + cadena);

}

function validarPrueba() {
    var validar = getConfirmation();

    if (validar == true) {
        crearBeneficiarios();

    }
    else {

    }
}

//validar submodulo
function crearBeneficiarios() {


    var ctr1 = document.getElementById("selectEntrega").value;

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
            cargarSubmodulo(1, ".html/modulo2/m2submod3.html");
            document.getElementById("msjsuccess").style.display = "block";
            setTimeout("document.getElementById('msjsuccess').style.display='none';", 2000);
        }
    }

    xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("crearBeneficiarios=" + ctr1);

}


function imprimirReporte() {

    var rep = document.getElementById("selectReporte").value;

    switch (rep) {

        case '0':
            document.getElementById("divPeriodo").style.display = "none";
            document.getElementById("divEntrega").style.display = "none";
            document.getElementById("msjReporte").style.display = 'none';
            break;

        case '1':
            imprimirReportePadron();
            break;
        case '2':
            imprimirReporteBenefPorMes();
            break;
        case '3':
            imprimirReporteBenefPorDni();
            break;
        case '4':
            imprimirReportePadron();
            break;
        case '5':
            imprimirReportePadron();
            break;
        case '6':
            imprimirReportePadron();
            break;
        default:
            document.getElementById("msjReporte").style.display = 'block';
            break;
    }
}

//Imprime el reporte generado
function imprimirReportePadron() {
    document.getElementById("head3").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("mod-header").style.display = "none";
    document.getElementById("body1").style.display = "none";
    document.getElementById("mod-bodyreport-label").className = "mod-bodyreport-label-print";
    document.getElementById("tableEmpad").className = "mod-tablereporte-print";
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
    document.getElementById("tableEmpad").className = "mod-tablereporte";
    //document.getElementById("mod-footer").style.display="block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("spaceBlank1").style.display = "block";
    document.getElementById("spaceBlank2").style.display = "block";
}

//Imprime el reporte generado
function imprimirReportePadronEspera() {
    document.getElementById("head3").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("mod-header").style.display = "none";
    document.getElementById("body1").style.display = "none";
    document.getElementById("mod-bodyreport-label").className = "mod-bodyreport-label-print";
    document.getElementById("tableEmpad").className = "mod-tablereporte-print";
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
    document.getElementById("tableEmpad").className = "mod-tablereporte";
    //document.getElementById("mod-footer").style.display="block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("spaceBlank1").style.display = "block";
    document.getElementById("spaceBlank2").style.display = "block";
}

//Imprime el reporte generado
function imprimirReporteBenefPorMes() {
    document.getElementById("head3").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("mod-header").style.display = "none";
    document.getElementById("body1").style.display = "none";
    document.getElementById("mod-bodyreport-label").className = "mod-bodyreport-label-print";
    document.getElementById("tablaReporte2").className = "mod-tablereporte-print";
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
    document.getElementById("tablaReporte2").className = "mod-tablereporte";
    //document.getElementById("mod-footer").style.display="block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("spaceBlank1").style.display = "block";
    document.getElementById("spaceBlank2").style.display = "block";
}

function imprimirReporteBenefPorDni() {
    document.getElementById("head3").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("mod-header").style.display = "none";
    document.getElementById("body1").style.display = "none";
    document.getElementById("mod-bodyreport-label4").className = "mod-bodyreport-label-print";
    document.getElementById("tablaReporte4").className = "mod-tablereporte-print";
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
    document.getElementById("mod-bodyreport-label4").className = "mod-bodyreport-label";
    document.getElementById("tablaReporte4").className = "mod-tablereporte";
    //document.getElementById("mod-footer").style.display="block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("spaceBlank1").style.display = "block";
    document.getElementById("spaceBlank2").style.display = "block";
}

function getConfirmationEliminar() {

    var retVal = confirm("Desea eliminar empadronado seleccionado: ");
    if (retVal == true) {
        //document.write ("User wants to continue!");
        return true;
    }
    else {
        //document.write ("User does not want to continue!");
        return false;
    }
}


function getConfirmation() {
    var combo = document.getElementById("selectPeriodo");
    var combo2 = document.getElementById("selectEntrega");


    var retVal = confirm("Se cargaran los beneficiados para el periodo: " + combo.options[combo.selectedIndex].text + ", Mes: " + combo2.options[combo.selectedIndex].text + "\nPresione ACEPTAR si esta segura de cargar los beneficiarios para el mes y periodo indicado, de lo contrario presiona CANCELAR.");
    if (retVal == true) {
        //document.write ("User wants to continue!");
        return true;
    }
    else {
        //document.write ("User does not want to continue!");
        return false;
    }
}

function soloNumeros(e) {
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46))
        return true;

    return /\d/.test(String.fromCharCode(keynum));
}