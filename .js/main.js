var contBenefNoRecog1 = 0;
var contBenefNoRecog2 = 0;
var nCodPeriodo = 0;
var entregas1mesEe = 0;
var dispoSiNo = 0;
var nuevosBenef = 0;

function cargarModulo(desde)
{
	$("#main").load(desde);
}


function cargarModuloQuincena()
{
	$("#main").load('.html/modulo2.html');
	cargarSubmoduloQuincena(6,'.html/modulo2/m2submod6.html');

}

function cargarSubmoduloQuincena(id, desde) {
	$("#modules").load(desde);
	document.getElementById("modules").style.display = "block";

	if (id == 6)
	//Inicia Editar Software
		initSubModuloQuincena();
}

function initSubModuloQuincena(){
	var anio = new Date().getFullYear();
	var mes = new Date().getMonth()+1;
	contBenefNoRecog1 = 0;
	contBenefNoRecog2 = 0;
	nCodPeriodo = 0;
	entregas1mesEe = 0;
	dispoSiNo = 0;
	nuevosBenef = 0;


	var cadena = anio + "|" + obtenermes(mes);
	var estado = 'NO';

	//alert(cadena);

	//document.getElementById("lblTabla").innerHTML = "Lista de empadronados, periodo: " + combo.options[combo.selectedIndex].text + ", Mes: " + combo2.options[combo.selectedIndex].text;
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

			Cadena0 = xmlhttp.responseText.split('%');
			Cadena1 = Cadena0[0].split('$');
			Cadena2 = Cadena1[0].split('|');

			//alert(Cadena1);

			if (Cadena2[0] != "") {

				var tabla = document.getElementById("tablaReporte");

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
					var col7 = document.createElement("td");
					col7.align = "center";
					var col8 = document.createElement("td");
					col8.align = "center";
					//alert(Cadena2[11]);


					if (Cadena2[9] == 'N' && Cadena2[10] == 'S' && Cadena2[18]<2)
						contBenefNoRecog1++;
					if (Cadena2[9] == 'N' && Cadena2[18]>1){
						contBenefNoRecog2++;
						if(Cadena2[10] == 'N'){
							contBenefNoRecog1++;
							dispoSiNo++;
						}

					}


					if (Cadena2[10] == 'N')
						estado = 'NO';
					if (Cadena2[10] == 'E')
						estado = 'EE';
					if (Cadena2[10] == 'S'){
						estado = 'SI';
					}


					col1.innerHTML = Cadena2[2] + " " + Cadena2[3];

					col2.innerHTML = Cadena2[4] + " " + Cadena2[5];
					col3.innerHTML = "Periodo: " + Cadena2[7] + ", Mes: " + Cadena2[8] + "<br>"
									+ " Categor&iacute;a: " + Cadena2[6];
					if(Cadena2[13] != 0)
						col4.innerHTML = Cadena2[13] + " a&ntilde;os, " + Cadena2[14] + " meses";

					col5.innerHTML = Cadena2[11];
					col6.innerHTML = Cadena2[18];
					var cantidadNoRecogidos =  Cadena2[18];
					if(cantidadNoRecogidos < 2 && Cadena2[10]=='S')
					{
						if(cantidadNoRecogidos  == 1)
						{
							if (Cadena2[10] == 'N')
								col7.innerHTML = '<button type="button" id="Estado' + Cadena2[15] + '" class="button-remove btn btn-danger" onClick="validarCambioEstado(' + Cadena2[15] + ',' +Cadena2[16]+ ',1)" disabled>NO</button>';
							if (Cadena2[10] == 'S'){
								col7.innerHTML = '<button type="button" id="Estado' + Cadena2[15] + '" class="button-remove btn btn-success" onClick="validarCambioEstado(' + Cadena2[15] + ',' +Cadena2[16]+',1)" disabled>SI</button>';
							}
							if (Cadena2[10] == 'E')
								col7.innerHTML = '<button type="button" id="Estado' + Cadena2[15] + '" class="button-remove btn btn-warning" onClick="validarCambioEstado(' + Cadena2[15] + ',' +Cadena2[16]+ ',2)" disabled>EE</button>';


							if (Cadena2[9] == 'N')
								col8.innerHTML = '<button type="button" id="Entrega' + Cadena2[15] + '" class="button-remove btn btn-danger" onClick="validarStock1(' + Cadena2[15] + ',' +Cadena2[16]+ ')" disabled>NO</button>';
							if (Cadena2[9] == 'S')
								col8.innerHTML = '<button type="button" id="Entrega' + Cadena2[15] + '" class="button-remove btn btn-success" onClick="validarStock1(' + Cadena2[15] + ',' +Cadena2[16]+')" disabled>SI</button>';


						}
						else{
							if (Cadena2[10] == 'N')
								col7.innerHTML = '<button type="button" id="Estado' + Cadena2[15] + '" class="button-remove btn btn-danger" onClick="validarCambioEstado(' + Cadena2[15] + ',' +Cadena2[16]+ ',1)">NO</button>';
							if (Cadena2[10] == 'S'){
								nuevosBenef++;
								col7.innerHTML = '<button type="button" id="Estado' + Cadena2[15] + '" class="button-remove btn btn-success" onClick="validarCambioEstado(' + Cadena2[15] + ',' +Cadena2[16]+',2)">SI</button>';
							}
							if (Cadena2[10] == 'E')
								col7.innerHTML = '<button type="button" id="Estado' + Cadena2[15] + '" class="button-remove btn btn-warning" onClick="validarCambioEstado(' + Cadena2[15] + ',' +Cadena2[16]+ ',2)">EE</button>';


							if (Cadena2[9] == 'N')
								col8.innerHTML = '<button type="button" id="Entrega' + Cadena2[15] + '" class="button-remove btn btn-danger" onClick="validarStock1(' + Cadena2[15] + ',' +Cadena2[16]+ ')">NO</button>';
							if (Cadena2[9] == 'S'){

								col8.innerHTML = '<button type="button" id="Entrega' + Cadena2[15] + '" class="button-remove btn btn-success" onClick="validarStock1(' + Cadena2[15] + ',' +Cadena2[16]+')">SI</button>';
							}


						}

					}
					else
					{

						if (Cadena2[10] == 'N')
							col7.innerHTML = '<button type="button" id="Estado' + Cadena2[15] + '" class="button-remove btn btn-danger" onClick="validarCambioEstado(' + Cadena2[15] + ',' +Cadena2[16]+ ',1)">NO</button>';
						if (Cadena2[10] == 'S'){
							col7.innerHTML = '<button type="button" id="Estado' + Cadena2[15] + '" class="button-remove btn btn-success" onClick="validarCambioEstado(' + Cadena2[15] + ',' +Cadena2[16]+',1)">SI</button>';
						}
						if (Cadena2[10] == 'E')
							col7.innerHTML = '<button type="button" id="Estado' + Cadena2[15] + '" class="button-remove btn btn-warning" onClick="validarCambioEstado(' + Cadena2[15] + ',' +Cadena2[16]+ ',2)">EE</button>';

						if(cantidadNoRecogidos>=2){
							if (Cadena2[9] == 'N')
								col8.innerHTML = '<button type="button" id="Entrega' + Cadena2[15] + '" class="button-remove btn btn-danger" onClick="validarStock1(' + Cadena2[15] + ',' +Cadena2[16]+ ')" disabled>NO</button>';
							if (Cadena2[9] == 'S')
								col8.innerHTML = '<button type="button" id="Entrega' + Cadena2[15] + '" class="button-remove btn btn-success" onClick="validarStock1(' + Cadena2[15] + ',' +Cadena2[16]+')" disabled>SI</button>';
						}else {
							if (Cadena2[9] == 'N')
								col8.innerHTML = '<button type="button" id="Entrega' + Cadena2[15] + '" class="button-remove btn btn-danger" onClick="validarStock1(' + Cadena2[15] + ',' +Cadena2[16]+ ')">NO</button>';
							if (Cadena2[9] == 'S')
								col8.innerHTML = '<button type="button" id="Entrega' + Cadena2[15] + '" class="button-remove btn btn-success" onClick="validarStock1(' + Cadena2[15] + ',' +Cadena2[16]+')">SI</button>';
						}


					}
					nCodPeriodo = Cadena2[17];

					fila.appendChild(col1);
					fila.appendChild(col2);
					fila.appendChild(col3);
					fila.appendChild(col4);
					fila.appendChild(col5);
					fila.appendChild(col6);
					fila.appendChild(col7);
					fila.appendChild(col8);

					tabla.appendChild(fila);

				}
				var insertar = '<label class="mod-body-label">Insumos en Almacen:</label><br>';
				Cadena3 = Cadena0[1].split('$');
				//alert(Cadena3);
				for(i=0;i<Cadena3.length-1;i++){
					Cadena4 = Cadena3[i].split('|');
					insertar += '<div class="row"><div class="col-sm-4 col-xs-12" style="text-align: right"><input type="hidden" id="nCantRac'+Cadena4[0]+'" value="'+Cadena4[3]+'" ><label class="mod-body-label">' + Cadena4[1] + ':</label></div><div class="col-sm-8 col-xs-12"><span class="label label-primary" style="font-size: medium" id="insumo' + Cadena4[0]+ '">'+Cadena4[2]+'</span> Unids.</div></div>'
				}
				//alert(insertar);
				document.getElementById("cantidadRacion").innerHTML = insertar;
				document.getElementById("1mesDisponibles").innerHTML = contBenefNoRecog1;
				document.getElementById("dosMeses").innerHTML = contBenefNoRecog2;
				document.getElementById("dispoSiNo").innerHTML = dispoSiNo;
				document.getElementById("nuevosBenef").innerHTML = nuevosBenef;
			}

			else {

				var tabla = document.getElementById("tablaReporte");
				var longTabla = tabla.rows.length;
				if (longTabla > 1)
					for (i = longTabla - 1; i > 0; i--)
						tabla.deleteRow(i);


			}
		}
	}

	xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send("listControlEntregas=" + cadena);
}

function validarCambioEstado(var1,var2,var3){

	var estado = document.getElementById("Estado"+var1).innerHTML;

	//alert(var1 +"/" + var2 + "/" + estado);

	if(var3==1){
		cambiarEstado1(var1,var2,estado);
	}
	else
		cambiarEstado2(var1,var2,estado);
}

function cambiarEstado1(var1,var2,estado) {

	//var maxBenef = parseInt(document.getElementById("maxBenef").innerHTML);
	var nuevoEstado = '';


	//alert(estado);
	if (estado == 'SI'){
		dispoSiNo++;
		contBenefNoRecog1++;
		nuevoEstado = 'N';
	}

	if (estado == 'NO'){
		dispoSiNo--;
		contBenefNoRecog1--;
		nuevoEstado = 'S';
	}

	//var id = "f" + est ;
	//alert(est);
	//alert(document.getElementById(est).innerHTML);
	var cadena = var1 + "|" + nuevoEstado + "|" + var2;

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
				//alert(2);

				if (estado == "SI") {
					//contBenef--;
					//document.getElementById("cantidad").innerHTML = contBenef;
					document.getElementById("Estado" + var1).className = "button-remove btn btn-danger";
					document.getElementById("Estado" + var1).innerHTML = "NO"
				}
				if (estado == "NO") {
					//contBenef++;
					//document.getElementById("cantidad").innerHTML = contBenef;
					document.getElementById("Estado" + var1).className = "button-remove btn btn-success";
					document.getElementById("Estado" + var1).innerHTML = "SI"
				}



			}
		}
		xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send("updateEstado=" + cadena);

	document.getElementById("dispoSiNo").innerHTML = dispoSiNo;
	document.getElementById("1mesDisponibles").innerHTML = contBenefNoRecog1;

}

function cambiarEstado2(var1,var2,estado) {

	var nuevoEstado = '';

	if (estado == 'EE'){
		nuevosBenef++;
		nuevoEstado = 'S';
	}

	if (estado == 'SI'){
		nuevosBenef--;
		nuevoEstado = 'E';
	}

	//alert(nuevosBenef + "/" + dispoSiNo);
	if(nuevosBenef <= dispoSiNo)
	{
		document.getElementById("nuevosBenef").innerHTML = nuevosBenef;
		var cadena = var1 + "|" + nuevoEstado + "|" + var2;

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
				//alert(2);

				if (estado == "SI") {
					//contBenef--;
					//document.getElementById("cantidad").innerHTML = contBenef;
					document.getElementById("Estado" + var1).className = "button-remove btn btn-warning";
					document.getElementById("Estado" + var1).innerHTML = "EE"
				}
				if (estado == "EE") {
					//contBenef++;
					//document.getElementById("cantidad").innerHTML = contBenef;
					document.getElementById("Estado" + var1).className = "button-remove btn btn-success";
					document.getElementById("Estado" + var1).innerHTML = "SI"
				}



			}
		}
		xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send("updateEstado=" + cadena);
	}
	else{
		nuevosBenef--;
		document.getElementById("nuevosBenef").innerHTML = nuevosBenef;
		alert("No hay cupos disponibles para nuevos beneficiarios.");
	}



}


function  cambiarEstadoBenef1(ctr1,ctr2){

	var estado = document.getElementById("Entrega" + ctr1).innerHTML;
	var nuevoEstado = '';

	//alert(estado);
	if (estado == 'NO'){
		entregas1mesEe++;
		nuevoEstado = 'S';
	}
	else{
		entregas1mesEe--;

		nuevoEstado = 'N';
	}

	if(contBenefNoRecog1 >= entregas1mesEe)
	{
		document.getElementById("entregas1mesEe").innerHTML = entregas1mesEe;
		var cadena = ctr1 + "|" + ctr2 + "|"  + nuevoEstado + "|" + nCodPeriodo;

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

				if (estado == "NO") {

					//contBenef++;
					//document.getElementById("maxBenef").innerHTML = contBenef + "/" + document.getElementById("txtmaxBenef").value;
					document.getElementById("Entrega" + ctr1).className = "button-remove btn btn-success";
					document.getElementById("Entrega" + ctr1).innerHTML = "SI";

				}
				else {
					//contBenef--;
					//document.getElementById("maxBenef").innerHTML = contBenef + "/" + document.getElementById("txtmaxBenef").value;
					document.getElementById("Entrega" + ctr1).className = "button-remove btn btn-danger";
					document.getElementById("Entrega" + ctr1).innerHTML = "NO";

				}

				for(i=0;i<Cadena1.length-1;i++){
					Cadena2 = Cadena1[i].split('|');
					document.getElementById("insumo"+ Cadena2[0]).innerHTML = Cadena2[2];
				}

			}
		}
		xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send("updateEstadoBenef=" + cadena);
	}
	else{
		entregas1mesEe--;
		document.getElementById("entregas1mesEe").innerHTML = entregas1mesEe;
		alert("No se pueden hacer mas entregas, numero maximo de entregas es: " + contBenefNoRecog1);
	}



}

function validarStock1(ctr1,ctr2){
	var estado = document.getElementById("Entrega" + ctr1).innerHTML;
	var periodo = nCodPeriodo;

	//alert(nCodPeriodo);

	if(estado == 'NO')
	{
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
				for(var i = 0; i<Cadena1.length-1;i++){
					Cadena2 = Cadena1[i].split('|');
					if(Cadena2[2] == 'N'){
						flag = 1;
						break;
					}
				}

				if(flag == 1)
					alert("No se puede entregar mas Raciones, los insumos son insuficientes.");
				else
					cambiarEstadoBenef1(ctr1,ctr2);


			}
		}
		xmlhttp.open("POST", ".lib/modulo2/linkModulo2.php", true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send("validarStock=" + periodo);

	}
	else
		cambiarEstadoBenef1(ctr1,ctr2)

}

function obtenermes(m){

	var mes= '';

	switch(m){

		case 1:
		mes = 'ene';
		break;
		case 2:
			mes = 'feb';
			break;
		case 3:
			mes = 'mar';
			break;
		case 4:
			mes = 'abr';
			break;
		case 5:
			mes = 'may';
			break;
		case 6:
			mes = 'jun';
			break;
		case 7:
			mes = 'jul';
			break;
		case 8:
			mes = 'ago';
			break;
		case 9:
			mes = 'set';
			break;
		case 10:
			mes = 'oct';
			break;
		case 11:
			mes = 'nov';
			break;
		case 12:
			mes = 'dic';
			break;
		default:
			mes = 'ene';
			break;
	}
	return mes;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function limpiar()
{
	document.getElementById("mensaje").style.display="none";
	document.getElementById("usuario").value="";
	document.getElementById("password").value="";
	document.getElementById("usuario").focus();
}

function ingresar()
{
	var anio = new Date().getFullYear();
	var mes = new Date().getMonth()+1;
	var dia = new Date().getDate();
	var hora = new Date().getHours();
	var minuto = new Date().getMinutes();
	var segundo = new Date().getSeconds();

	if (mes<10)
		mes = "0"+mes;
	if (dia<10)
		dia = "0"+dia;
	if (hora<10)
		hora = "0"+hora;
	if (minuto<10)
		minuto = "0"+minuto;
	if (segundo<10)
		segundo = "0"+segundo;
		
	var timeStamp = anio+"-"+mes+"-"+dia+" "+hora+":"+minuto+":"+segundo;

	var cadena = document.getElementById("usuario").value + "|" + document.getElementById("password").value + "|" + timeStamp + "|";
	var xmlhttp;

	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			NroReg = xmlhttp.responseText.split('|');
			
			if (NroReg[0]==1)
			{
				document.getElementById("user").innerHTML = "<button type='button' id='iduser' class='btn btn-danger' readonly><span class='glyphicon glyphicon-user'></span>  " + NroReg[2] + "</button>";
				document.getElementById("close").innerHTML = "<button type='button' id='cerrar' class='btn btn-warning'><span class='glyphicon glyphicon-user'></span>  Cerrar Sesión</button>";
				cargarMenu('.html/main.html');
			}
			else
				document.getElementById("mensaje").style.display="block";

			//alert(dia);

			if(dia == 1){
				document.getElementById("foot0").style.display = "block";
				document.getElementById("foot0").innerHTML = '<div class="alert alert-danger"><strong>Alerta!</strong>R </div>';
			}
		}
	}

	xmlhttp.open("POST",".lib/linkIndex.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("ingresar="+cadena);
}