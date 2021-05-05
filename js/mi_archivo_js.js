/** LIBRERIA ***********************/
class Invitado{
	constructor (nombre, perro, gato){
		nombre = prompt("Dinos tu nombre");
		perro = prompt("¿Tenés perro?");
		gato = prompt("¿Tenés perro?");
	}

	saludar() {
		if((this.perro !== "") && (this.gato !== "")){
			alert("¡Bienvenide a Anukis Delikatessen!¡Cuantas mascotas! ¡Tienes 2x1 en todas tus compras!");

		} else{
			alert("¡Bienvenide a Anukis Delikatessen! Esperamos que tengas una buena experiencia.");

		}
	}

}

class Sabor{
	constructor (producto, precio, tamaño, sabor){
		this.producto = producto;
		this.precio = precio;
		this.sabor = sabor;
	}
}


function anunciar_sabores(sabores) { //U: Avisa con que sabores contamos
	if (Sabores.length > 0) { //A: Si tengo al menos un sabor para mostrar
		var s = 'Los sabores de galletas con los que contamos son: '
		for (const sabores of Sabores) {
			s += sabores.sabor + ', ';
		}
		alert(s);
	}
}



function guardar_aplicacion() { //U: Guarda una aplicacion
	var aplicaciones = JSON.parse(sessionStorage.getItem('aplicaciones'));
	if (!aplicaciones) { aplicaciones = []; }

	var aplicacion = {};
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
	var comentarios = JSON.parse(sessionStorage.getItem('comentarios'));
	if (!comentarios) { comentarios = []; } //A: La primera vez carga nulo, lo seteo

	var comentario = {};
	comentario.nombre = document.getElementById('nombreF2').value;	
	comentario.mail = document.getElementById('mailF2').value;	
	comentario.texto = document.getElementById('textoF2').value;
	
	let respuesta = document.createElement("p");
	respuesta.style.fontSize="40px";
	respuesta.style.textAlign="center";
	respuesta.classList.add="respuesta-de-form2";

	if ((comentario.nombre == "") || (comentario.mail == "") || (comentario.texto == "")){
		respuesta.innerHTML = "Debe completar todos los campos";
		document.body.appendChild(respuesta);
	}
	else{
		comentarios.push(comentario);
		sessionStorage.setItem('comentarios', JSON.stringify(comentarios));
		respuesta.innerHTML = "¡Muchas gracias! Leeremos tu comentario más tarde";
		document.body.appendChild(respuesta);
	}

}


/* Programa */

const Pollo_Oregano = new Sabor("galletas", 200, "Pollo y orégano");
const Higado = new Sabor("galletas", 225, "hígado de pollo");
const Carne_Remolacha = new Sabor("galletas", 255, "carne y remolacha.");

const Sabores = [Pollo_Oregano, Higado, Carne_Remolacha];

var invitado = new Invitado();
invitado.saludar();

botonF1 = document.getElementById('botonF1');
botonF1.addEventListener('click', guardar_aplicacion);

botonF2 = document.getElementById('botonF2');
botonF2.addEventListener('click', guardar_comentario);
