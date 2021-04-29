/** LIBRERIA ***********************/

/**formulario de venta */
class DatosDeAplicacion{
    constructor (nombre1, puesto, email1, horario, descripcion) {
        this.nombre1 = nombre1;
        this.puesto = puesto;
        this.email1 = email1;
        this.horario = horario;
        this.descripcion = descripcion;
    }
}

let formularioVender = document.getElementById("form-vender-js");
    formularioVender.addEventListener("botonF1", guardarDatosDeAplicacion);

function guardar_aplicacion() {
	var aplicacion = {};
	aplicacion.nombre = document.getElementById('nombreF1').value;	
	aplicacion.mail = document.getElementById('mailF1').value;	
	aplicacion.puesto = document.getElementById('puestoF1').value;	
	aplicacion.horario = document.getElementById('horarioF1').value;	
	aplicacion.anuncios = document.getElementById('anunciosF1').value;	

	sessionStorage.setItem('aplicacion', JSON.stringify(aplicacion));
	//TODO: Alert
}

/**formulario de  comentarios*/
class Comentarios{ 
    constructor(nombre2, email2, texto){
        this.nombre2 = nombre2;
        this.email2 = email2;
        this.texto = texto;
    }
}

let formularioComentarios = document.getElementById("form-contacto-js");
    formularioComentarios.addEventListener("submit", guardarDatos);

function guardar_comentario() { // Guarda los datos de el formulario
	var nombre = document.getElementById('nombreF2').value;	
	var mail = document.getElementById('mailF2').value;	
	var texto = document.getElementById('textoF2').value;	

	sessionStorage.setItem('nombre', nombre);
	sessionStorage.setItem('mail', mail);
	sessionStorage.setItem('texto', texto);

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
