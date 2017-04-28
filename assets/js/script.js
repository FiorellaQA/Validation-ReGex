function validationInput(){
		var patronTexto = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
		var patronDni = /^[0-9]{8}/;
		var patronFecha = /^([0-9]{2})([/]{1})([0-9]{2})([/]{1})([0-9]{4})/; // 17/10/1990
		var patronCelular = /^[9]{1}([\d]{8})/;
		var patronFijo = /^[1-7]{1}([\d]{6})/;
		var patronContrasena = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

		if(this.value.trim().length === 0){
			this.nextElementSibling.innerHTML = "</br>*Este campo es obligatorio";
		}else{
			this.nextElementSibling.innerHTML = "";		
		}

		if(this.getAttribute("id")=="name"){
			if(patronTexto.test(this.value.trim())){

			} else{

			}
		}
		if(this.getAttribute("id")=="lastname"){
			if (patronTexto.test(this.value.trim())){

			}else{

			}		
		}
		if(this.getAttribute("id")=="dni"){
			if (patronDni.test(this.value.trim())){

			}else{

			}		
		}
		if(this.getAttribute("id")=="date"){
			if (patronFecha.test(this.value.trim())){

			}else{

			}		
		}
		if(this.getAttribute("id")=="cellphone"){
			if (patronCelular.test(this.value.trim())){

			}else{

			}		
		}
		if(this.getAttribute("id")=="phone"){
			if (patronFijo.test(this.value.trim())){

			}else{

			}		
		}
		if(this.getAttribute("id")=="password"){
			if (patronContrasena.test(this.value.trim())){

			}else{

			}		
		}
		//Limpia el campo indicacion cuando el usuario ya esta escribiendo
		var indicacion = document.getElementById("indicacion");
			indicacion.innerHTML = "";
	}
//EVENTOS
document.getElementById("bt").addEventListener("click",function(e){
	e.preventDefault();
	var indicacion = document.getElementById("indicacion");
	var array = document.getElementsByClassName("input-registro");
	for(i = 0 ; i < array.length; i++){
		if(! (array[i].value.trim().length != 0)){
			indicacion.innerHTML = "*Todos los campos son obligatorios.</br>";
		}
	}



		// if(name.length !=0 && lastname.length != 0 && age.length != 0 && country.length != 0 && city.length != 0 && gender.length !=0){
		// 	document.getElementById("form1").reset();
		// 	indicacion.innerHTML = "";
		// 	//Bienvenidoooooooooooooooooooooooooo!!!
		// }else{	
			
		// 	indicacion.innerHTML = "*Todos los campos son obligatorios.</br>";
		// }
});

	var array = document.getElementsByClassName("input-registro");
	for(i = 0 ; i < array.length; i++){
		array[i].addEventListener("blur", validationInput);
		
	}



