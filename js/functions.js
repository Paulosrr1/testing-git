//funciones Declarativas
function saludar (nombre){
    
    console.log('Hola Mundo', nombre);
    console.log('Hola locoooooo')
    return;

}


//funciones anonimas
const saludar2  = function(nombre, apellido){
    // console.log(`hola soy ${nombre} ${apellido}`);

    return  `hola soy ${nombre} ${apellido}`


}

//Ejercicio 1
const sumarNumeros = function(numero1, numero2){
   
    let respuesta = numero1 + numero2;

    return `la suma de estos numeros ${numero1} + ${numero2} es de ${respuesta}`; 
}