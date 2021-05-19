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