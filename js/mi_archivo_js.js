/** LIBRERIA ***********************/


function guardar_aplicacion() { //U: Guarda una aplicacion
	var aplicaciones = JSON.parse(sessionStorage.getItem('aplicaciones'))
	
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
		alert("Debe completar todos los campos.")
	}

	else{
		aplicaciones.push(aplicacion);
		sessionStorage.setItem('aplicaciones', JSON.stringify(aplicaciones));
		alert("¡Su aplicación fue enviada!")
	}
}




function guardar_comentario() { //U: Guarda un comentario 
	var comentarios = JSON.parse(sessionStorage.getItem('comentarios')); //U: con parse se vuelve un elemento legigle
	if (!comentarios) { comentarios = []; } //U: La primera vez carga nulo, lo seteo

	var comentario = {};
	comentario.nombre = document.getElementById('nombreF2').value;	
	comentario.mail = document.getElementById('mailF2').value;	
	comentario.texto = document.getElementById('textoF2').value;

	if ((comentario.nombre == "") || (comentario.mail == "") || (comentario.texto == "")){
		$(".form-contacto").append("<p style='font-size: 25px; text-align: center; background: white; margin: 5%'>Debe completar todos los campos</p>");
	}
	else{
		comentarios.push(comentario);
		sessionStorage.setItem('comentarios', JSON.stringify(comentarios));
		$(".form-contacto").append("<p style='font-size: 40px; text-align: center; background: white; margin: 5%';>¡Muchas gracias! Leeremos tu comentario más tarde</p>");
	}

}


/* Programa */

botonF1 = document.getElementById('botonF1');
botonF1.addEventListener('click', guardar_aplicacion);

// $('#botonF2').click(guardar_comentario());


botonF2 = document.getElementById('botonF2');
botonF2.addEventListener('click', guardar_comentario);
