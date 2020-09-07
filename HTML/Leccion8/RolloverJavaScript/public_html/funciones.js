window.onload = cargarImagenes;

function cargarImagenes(){
    for(var i = 0; i < document.images.length; i++){
        if(document.images[i].parentNode.tagName == "A"){
            configuraRollover(document.images[i]);
        }
    }
}

function configuraRollover(imagen){
    imagen.imagenOff = new Image();
    imagen.imagenOff.src = "btn_sendoff.png";
    imagen.onmouseout = cambiaOff;
    
    imagen.imagenOn = new Image();
    imagen.imagenOn.src = "btn_send.png";
    imagen.onmouseover = cambiaOn;
}

/**
 * Estas funciones se ejecutan segun el evento que se dispare pero no es al iniciar la pagina
 * sino dependen del boton que se precione, son conocidas como handlers
 */

//se asocio al evento onmouseout
function cambiaOff() {
    this.src = this.imagenOff.src;
}

//se asocia al evento onmouseon
function cambiaOn(){
    this.src = this.imageOn.src;
}