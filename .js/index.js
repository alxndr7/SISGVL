window.onload= function()
{
	document.getElementById("usuario").focus();
	cargarInit();
	cargarTimeStamp();
}

function cargarInit()
{
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
			Respuesta = xmlhttp.responseText.split('|');
			document.getElementById("cliente").innerHTML = Respuesta[0];
			document.getElementById("sistema").innerHTML = Respuesta[1] + " - " + Respuesta[2];
			document.getElementById("foot0").style.display = "none";
			document.getElementById("foot1").innerHTML = Respuesta[0] + " - " + Respuesta[1];
			document.getElementById("foot2").innerHTML = "Resolución mínima recomendada: 1024 x 768";
			//document.getElementById("foot3").innerHTML = "Programación y Diseño: " + Respuesta[3];
			document.getElementById("foot4").innerHTML = "Prohibida su reproducción total o parcial";
			document.getElementById("foot5").innerHTML = "Todos los Derechos Reservados © 2016";
		}
	}

	xmlhttp.open("POST",".lib/linkIndex.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("init=1");
}

function cargarTimeStamp()
{
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	var dias = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
	var dia = new Date().getDate();
	var hora = new Date().getHours();
	var minuto = new Date().getMinutes();
	var segundo = new Date().getSeconds();

	if (dia<10)
		dia = "0" + dia;
	if (hora<10)
		hora = "0" + hora;
	if (minuto<10)
		minuto = "0" + minuto;
	if (segundo<10)
		segundo = "0" + segundo;
	
	var f = new Date();
	var timeStamp = dias[f.getDay()] + ", " + dia + " de " + meses[f.getMonth()] + " de " + f.getFullYear() + " - " + hora + ":" + minuto + ":" + segundo;
	document.getElementById("timestamp").innerHTML = timeStamp;
	setTimeout("cargarTimeStamp()",1000);
}

function cargarMenu(desde)
{
   
	$("#main").load(desde);
        
	document.getElementById("modules").style.display="none";
         
}


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
                            if (NroReg[3]==1){
                                //alert(1);
				document.getElementById("user").innerHTML = "<button type='button' id='iduser' class='btn btn-danger' readonly><span class='glyphicon glyphicon-user'></span> " + NroReg[2].toUpperCase(); + "</button>";
				document.getElementById("close").innerHTML = "<a href='index.html'><button type='button' id='cerrar' class='btn btn-default'><span class='glyphicon glyphicon-log-out'></span> Cerrar Sesión</button></a>";
				cargarMenu('.html/main.html');
                            }
                            else{
                                //alert(2);
                                document.getElementById("mensaje").style.display="block";
                                document.getElementById("lblMensaje").innerHTML="Su usuario esta inactivo, contacte al administrador del servicio.";
                            }
			}
			else
				document.getElementById("mensaje").style.display="block";

			if(dia == 14 || dia == 15 || dia == 16){
				document.getElementById("foot0").style.display = "block";
				document.getElementById("foot0").innerHTML = '<div class="alert alert-danger"><strong>Alerta!</strong> Revise los Beneficiarios que no recogieron Vaso de Leche dando click <a href="javascript:cargarModuloQuincena();">AQUI</a> </div>';
			}
		}
	}

	xmlhttp.open("POST",".lib/linkIndex.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("ingresar="+cadena);
}

$(document).keypress(function(e) {
  if(e.which == 13) {
      ingresar();
    // enter pressed
  }
});