function sumar(){
    //envolvemos todo el codigo en un bloque
    //try y catch en caso de excepcion
    try {
        //pedimos operando a
        var a = prompt("Valor a: ", "");
        
        //validamos parametro a, !a si la cadena a esta vacia o null
        if(!a || isNaN(a)){  //si la var a es igual a null o tiene cadena vacia, no num
            throw new Error("Valor invalido de a: " + a);
        }
        
        var b = prompt("Valor b:", "");
        
        if(!b || isNaN(b)){
            throw new Error("Valor invalido de b: " + b);
        }
        
        /**
         * si no hay problema se hace la suma
         * necestamos convertir a int los parametros
         * parseInt convierte a entero si no es entero
         * no va a realizar la suma sino concatena los valores
         */
        
        var c = parseFloat(a) + parseFloat(b);
        alert("La suma es: " + c);
        
    } catch(e){
        alert("El error es:" + e.message);
    }
    
}


