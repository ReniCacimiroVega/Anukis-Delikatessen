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

function modificar_carrito(tipo, tamanio, cant) {
  var carrito = JSON.parse(sessionStorage.getItem('carrito')); //U: con parse se vuelve un elemento legible
  if (!carrito) { //U: La primera vez carga nulo, lo seteo
		carrito = [
			[0, 0, 0, 0], //A: Carne y remolacha
			[0, 0, 0, 0], //A: Pollo y oregano
			[0, 0, 0, 0], //A: Higado de pollo
			//A: Mini, Chico, Mediano, Grande
		];
	} 

	if ((carrito[tipo][tamanio] + cant) >= 0) { //A: Reviso que la cantidad "tenga sentido" (sea un numero positivo o cero)
		carrito[tipo][tamanio] += cant;
	} else {
		carrito[tipo][tamanio] = 0; //A: 0 de piso
	}

  sessionStorage.setItem('carrito', JSON.stringify(carrito));
}
