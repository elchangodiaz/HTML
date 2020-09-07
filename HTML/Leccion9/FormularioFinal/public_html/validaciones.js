/**
 * Funcion para validar los elementos requeridos(*)
 * @param {type} forma
 * @returns {undefined}
 */

function validarForma(forma){
    //Validamos el usuario
    var usuario = forma.usuario;
    if(usuario.value == "" || usuario.value == "Escribir usuario"){
        usuario.focus();
        usuario.select();
        return false;
    }
    
    //validar password
    var password = forma.password;
    if(password.value == "" || password.value.length<3){
        alert("Debe porporcionar un password al menos de 3 caracteres");
        password.focus();
        passeord.select();
        return false;
    }
    
    // validar checkbox tecnologia
    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;
    for(i=0; i< tecnologias.length; i++){
        if(tecnologias[i].checked){
            checkSeleccionado = true;
        }
    }
    if(!checkSeleccionado){
        alert("Debe proporcionar una Tecnologia");
        return false;
    }
    
    //validar radiobutton Genero
    var generos = forma.genero;
    var radioSeleccionado = false;
    for(i=0;i<generos.length; i++){
        if(generos[i].checked){
            radioSeleccionado = true;
        }
    }
    if(!radioSeleccionado){
        alert("Debe seleccionar un genero")
        return false;
    }
    
    //Ocupacion
    var ocupacion = forma.ocupacion;
    if(ocupacion.value == ""){
        alert("Debe seleccionar una Ocupacion");
        return false;
    }
    
    // Formulario Valido
    alert("Formulario valido, enviando datos...");
    return true;
    
}

