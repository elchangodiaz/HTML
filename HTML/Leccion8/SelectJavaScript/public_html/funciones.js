/**
 * @author elchangodiaz
 */

window.onload = configuraSelect;

function configuraSelect(){
    //Este es el documento seleccionado por default
    document.getElementById("selectFaq").selectIndex = 0;
    document.getElementById("selectFaq").onchange = cambiaPagina;
}

function cambiaPagina () {
    var elementoSelect = document.getElementById("selectFaq");
    var nuevaPagina = elementoSelect.options[elementoSelect.selectedIndex].value;
    if(nuevaPagina != "") {
        window.location = nuevaPagina;
    }
}


