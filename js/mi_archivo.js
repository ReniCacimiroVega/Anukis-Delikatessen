/** LIBRERIA ***********************/

function guardar_aplicacion() { //U: Guarda una aplicacion
	var aplicaciones = JSON.parse(localStorage.getItem('aplicaciones'))
	
	if (!aplicaciones) { aplicaciones = []; } 
	//E: si la variable esta vacia, se inicializa volviendole un array y se deja vacia
	// si no hacemos esto, cuando carge la pagina, se va a ejecutar la funcion, va a guardar
	//un valor nulo y dejara de funcionar. Vacio no es igual a nulo.

	var aplicacion = {}; //U: objeto de aplicacion
	aplicacion.nombre = document.getElementById('nombreF1').value; 
	aplicacion.mail = document.getElementById('mailF1').value;	
	aplicacion.puesto = document.getElementById('puestoF1').value;	
	aplicacion.horario = document.getElementById('horarioF1').value;	
	aplicacion.anuncios = document.getElementById('anunciosF1').value;	

	if ((aplicacion.nombre == "") || (aplicacion.mail == "") || (aplicacion.puesto == "") ||
	(aplicacion.horario == "") || (aplicacion.anuncios == "")){
		alert("Debe completar todos los campos.");
	}

	else{
		aplicaciones.push(aplicacion);
		localStorage.setItem('aplicaciones', JSON.stringify(aplicaciones));
		$(".btnModal").fadeOut(1500);
		$(".cont-btnModal").append("<p class='resp-app-enviada bg-warning'>¡Su aplicación fue enviada!</p>");
		$(".resp-app-enviada").delay(2000);
		$(".resp-app-enviada").css({
									"text-align": "center",
									"font-size": "1.5em", "color": "$third",
									"font-weight": "bold", "font-family": "$lato",
									"border-radius": "10px", "padding-top": "3%",
									"height": "3em", "width":"100%",
									});
	}
}




const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	texto: /^[a-zA-ZÀ-ÿ0-9._-\s?,]{30,360}/ //letras, numeros, guiones, guion bajo, 
											//puntos, acentos, mayus, espacios, min 30 y max 360
}

const campos_form2 = {
	nombre: false,
	email: false,
	texto: false
}

const validarForm2 = (e) =>{
	switch(e.target.name){
		case "nombre":
			validarCampoForm2(expresiones.nombre, e.target, "nombre")
		break;

		case "email":
			validarCampoForm2(expresiones.email, e.target, "email")
		break;

		case "texto":
			validarCampoForm2(expresiones.textp, e.target, "texto")
		break;
	}
}

function validarCampoForm2(expresion, input, campo){
	if(expresion.test(input.value)){
		campos_form2[campo] = true;
	} else{
		campos_form2[campo] = false
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarForm2());
	input.addEventListener('blur', validarForm2());
});


function guardar_comentario(e){
	e.preventDefault();
	var comentarios = JSON.parse(localStorage.getItem('comentarios')); //U: con parse se vuelve un elemento legigle
	if (!comentarios) { comentarios = []; } //U: La primera vez carga nulo, lo seteo

	var comentario = {};
	comentario.nombre = document.getElementById('nombreF2').value;	
	comentario.mail = document.getElementById('mailF2').value;	
	comentario.texto = document.getElementById('textoF2').value;

	if (campos_form2.nombre && campos_form2.email && campos_form2.texto){
		comentarios.push(comentario);
		localStorage.setItem('comentarios', JSON.stringify(comentarios));
		alert("se guardo correctamente su comentario");

	} else{
		$(".form-contacto").append("<p style='background: white' class='resp-form-contact'>Debe completar todos los campos</p>");
		$(".resp-form-contact").css({
									"text-align": "center",
									"font-size": "1.3em", "color": "$third",
									"font-weight": "bold", "font-family": "$lato",
									"border-radius": "10px", "margin":"10% 0% 0% 0%",
									"height": "3em", "width":"100%",
									"padding-top": "3%",
									})

	}
}


	


/* Programa */

botonF1 = document.getElementById('botonF1');
botonF1.addEventListener('click', guardar_aplicacion);

botonF2 = document.getElementById('botonF2');
botonF2.addEventListener('click', guardar_comentario);
