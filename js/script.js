//condicionales

//Ejercicio 1, evaluar si un numero es par

// let numero1 = 68;
// let numero2 = 23;
// let numero3= 21;

// if(numero1 % 2 === 0){
//   console.log('el numero es par');
// }else if(numero2 % 2 === 0){
//    console.log('el numero es par');
// }else if(numero3 % 2 === 0){
//     console.log('el numero es par');
// } else{
//     console.warn('el numero es impar');
// }


// if(numero1 === numero2){
//     console.log(`los numeros ${numero1} y ${numero2} son iguales`);
// }else if(numero1 > numero2){
//    console.log(`el numero ${numero1} es mayor que ${numero2}`);
// } else{
//     console.warn(`los numeros ${numero1} y ${numero2} NO son iguales`);
// }

//Ejercicio 2, fiesta
let edad = 14;
let acompañado = true;

if(edad>=18){
  console.log('bienvenido a la fiesta, puede ingresar');
}else if(acompañado){
  console.log('puede ingresar pero con un adulto');
}else{
 console.warn('no puede ingresar a la fiesta porque es menor de edad');
}