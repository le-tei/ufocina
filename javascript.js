function contarCaracteres(box,valor,campospan){
	var conta = valor - box.length;
	document.getElementById(campospan).innerHTML = "Vc ainda pode digitar " + conta + " caracteres";
	if(box.length >= valor){
		document.getElementById(campospan).innerHTML = "";
		document.getElementById("campo").value = document.getElementById("campo").value.substr(0,valor);
	}
}
