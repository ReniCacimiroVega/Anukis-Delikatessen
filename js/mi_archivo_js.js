/** LIBRERIA ***********************/

function guardar_aplicacion() { //U: Guarda una aplicacion
	var aplicaciones = JSON.parse(sessionStorage.getItem('aplicaciones'));
	if (!aplicaciones) { aplicaciones = []; }

	var aplicacion = {};
	aplicacion.nombre = document.getElementById('nombreF1').value;	
	aplicacion.mail = document.getElementById('mailF1').value;	
	aplicacion.puesto = document.getElementById('puestoF1').value;	
	aplicacion.horario = document.getElementById('horarioF1').value;	
	aplicacion.anuncios = document.getElementById('anunciosF1').value;	

	aplicaciones.push(aplicacion);
	sessionStorage.setItem('aplicaciones', JSON.stringify(aplicaciones));

	//TODO: Alert
}

function guardar_comentario() { // Guarda un comentario 
	var comentarios = JSON.parse(sessionStorage.getItem('comentarios'));
	if (!comentarios) { comentarios = []; } //A: La primera vez carga nulo, lo seteo

	var comentario = {};
	comentario.nombre = document.getElementById('nombreF2').value;	
	comentario.mail = document.getElementById('mailF2').value;	
	comentario.texto = document.getElementById('textoF2').value;	

	comentarios.push(comentario);
	sessionStorage.setItem('comentarios', JSON.stringify(comentarios));

	// TODO: Alert
}

/*
function guardarDatos(comentario){ /**Guarda los datos del formulario 

    let atencion = document.createElement("p");

        if((nombre == "") || (email == "") || (textoPersonal == "")){
            atencion.innerHTML = "";
        }
        else {
          var comentario = new Comentarios(nombre, email, textoPersonal);
          function json_transform() { JSONcomentario = JSON.stringify(comentario); }
          json_transform;
          atencion.innerHTML = "¡Comentario enviado! Muchas gracias."
          formularioComentarios.appendChild(atencion);
				}
    }
		*/
