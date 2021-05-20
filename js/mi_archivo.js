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




function guardar_comentario() { //U: Guarda un comentario 
	var comentarios = JSON.parse(localStorage.getItem('comentarios')); //U: con parse se vuelve un elemento legigle
	if (!comentarios) { comentarios = []; } //U: La primera vez carga nulo, lo seteo

	var comentario = {};
	comentario.nombre = document.getElementById('nombreF2').value;	
	comentario.mail = document.getElementById('mailF2').value;	
	comentario.texto = document.getElementById('textoF2').value;

	if ((comentario.nombre == "") || (comentario.mail == "") || (comentario.texto == "")){
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
	else{
		comentarios.push(comentario);
		localStorage.setItem('comentarios', JSON.stringify(comentarios));
	}

}


/* Programa */

botonF1 = document.getElementById('botonF1');
botonF1.addEventListener('click', guardar_aplicacion);

botonF2 = document.getElementById('botonF2');
botonF2.addEventListener('click', guardar_comentario);
