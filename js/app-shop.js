/** S: Animando la pagina ***********************************/

let animacionScroll = document.querySelectorAll(".ScrollFade");

function ScrollFade (){
	let scrolltop = document.documentElement.scrollTop;
	for ( var i = 0; i < animacionScroll.length; i++ ){
		let alturaScroll = animacionScroll[i].offsetTop; 
		if (alturaScroll - 300 < scrolltop){
			animacionScroll[i].style.opacity = 1;
		}
	}
}

window.addEventListener('scroll', ScrollFade)

/** S: Carrito **********************************************/

function leer_carrito() {
  var carrito = JSON.parse(localStorage.getItem('carrito')); //U: con parse se vuelve un elemento legible
  if (!carrito) { //U: La primera vez carga nulo, lo seteo
		carrito = [
			[0, 0, 0, 0], //A: Carne y remolacha
			[0, 0, 0, 0], //A: Pollo y oregano
			[0, 0, 0, 0], //A: Higado de pollo
			//A: Mini, Chico, Mediano, Grande
		];
	} 

	return carrito;
}

function modificar_carrito(tipo, tamanio, cant) {
	var carrito = leer_carrito();

	if ((carrito[tipo][tamanio] + cant) >= 0) { //A: Reviso que la cantidad "tenga sentido" (sea un numero positivo o cero)
		carrito[tipo][tamanio] += cant;
	} else {
		carrito[tipo][tamanio] = 0; //A: 0 de piso
	}

  localStorage.setItem('carrito', JSON.stringify(carrito));

	actualizar_texto_carrito(tipo, tamanio, carrito[tipo][tamanio]);
	calcular_precio_carrito();
}



function actualizar_texto_carrito(tipo, tamanio, cant) {
	document.getElementById('carrito_' + tipo + '_' + tamanio).innerText = "Cantidad: " + cant;
}



function calcular_precio_carrito() {

	var carrito = leer_carrito();
	var total = 0;

	var precios = [
		[250, 250, 220, 210], //A: Carne y remolacha
		[230, 230, 200, 190], //A: Pollo y oregano
		[220, 220, 190, 180], //A: Higado de pollo
		//A: Mini, Chico, Mediano, Grande
	];

	//A: Itero sobre carrito y precios, multiplicando cada posicion respectivamente
	for (i in carrito) { //A: Cada fila
		for (j in carrito[i]) { //A: Cada columna
			total += (carrito[i][j] * precios[i][j]);
		}
	}

	$("#recibo").html( "<p style='font-size: 20px;' >El total a pagar de su orden es: </p>" + total);
	// $(".btn-modal-compra").show();
	return total;
}




function iniciar_precio() { //U: Cuando cargas la pagina, carga las cantidades que teniamos guardadas
	var carrito = leer_carrito();

	for (i in carrito) {
		for (j in carrito[i]) {
			modificar_carrito(i, j, 0); //A: Suma 0, por lo qe no los modifica
		}
	}
}

iniciar_precio();

	