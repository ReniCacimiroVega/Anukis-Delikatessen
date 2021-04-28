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

function guardarDatosDeAplicacion(){

    let nombre1 = document.getElementById("nombreF1");
        nombre1 = sessionStorage.setItem(nombre1, "nombre completo");

    let puesto = document.getElementById("puesto");
        puesto.onclick = function (){
            let input_radio = document.formularioVender.input_radio;
                for (i = 0; i < input_radio.length; i++){
                    if(input_radio[i].checked){
                    puesto = input_radio[i].value;
                }
                }
    }

    let email1 = document.getElementById("emailF1");
        email1 = sessionStorage.setItem(email1, "email");

    let horario = document.getElementById("horariosF1");
        horario.onclick = function (){
            let select = document.formularioVender.select;
                for (i = 0; i < select.length; i++){
                    if(input_radio[i].checked){
                        horario = select[i].value;
                    }
                }

    let notificaciones = document.getElementById("anunciosF1");
        notificaciones.onclick = function (){
            if (notificaciones.checked){
                notificaciones = sessionStorage.setItem(Anuncios, "Acepto")
            }
    }

    if((nombre1 == "") || (puesto == "") || (email1 == "") || (horario == "") || (notificaciones == "")){
        alert("Debe completar todos los espacios.")
    }

    else{
        var aplicacionDeTrabajo = new DatosDeAplicacion(nombre1, puesto, email1, horario, notificaciones);
        function json_transform (){
            JSONaplicacion = JSON.stringify(aplicacionDeTrabajo); }
            json_transform;
            alert("¡Datos enviados! Revisaremos tu solicitud cuanto antes.");
    }


}
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

function guardarDatos(){ /**Guarda los datos del formulario */
        
    let nombre2 = document.getElementById("name");
        nombre2 = sessionStorage.setItem(nombre2, "nombre");

    let email2 = document.getElementById("email");
        email2 = sessionStorage.setItem(email2, "email")

    let textoPersonal = document.getElementById("textoPersonal");
        textoPersonal = sessionStorage.setItem(textoPersonal, "texto");

    let atencion = document.createElement("p");

        if((nombre2 == "") || (email2 == "") || (textoPersonal == "")){
            atencion.innerHTML = "";
        }

        else{
            var comentario = new Comentarios(nombre2, email2, textoPersonal);
            function json_transform (){
                JSONcomentario = JSON.stringify(comentario); }
                json_transform;
                atencion.innerHTML = "¡Comentario enviado! Muchas gracias."
                formularioComentarios.appendChild(atencion);
    }
    }



/**PROGRAMA ***********************/
guardarDatos(Comentarios);
guardarDatosDeAplicacion(DatosDeAplicacion);


