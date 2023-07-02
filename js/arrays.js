//cosas que puedo guardar en un array
// const cosas = ['string', 123, true, false, function(){}, {}]

let marcasAutos = ['Koenigsegg', 'Ferrari', 'Pagani', 'Ford', 'Lamborghini'];
console.log(marcasAutos[1]);
console.log(marcasAutos.length);
console.log(marcasAutos[marcasAutos.length -1]);

//agregar un elemento al array

marcasAutos.push('Porsche', 'Rolls Royce');

//eliminar ultimo elemento del array
marcasAutos.pop();

//recorrer un array o arreglo
for (let i = 0; i < marcasAutos.length; i++) {

    console.log(marcasAutos[i]);
}


//como obtener la posicion de un elemento
console.log(marcasAutos.indexOf('Ferrari'));

//como eliminar uno o varios elementos de nuestro array
// marcasAutos.splice(2,2);

//eliminar a Claudio y Carlos del array con el metodo splice
let alumnos =['Andy','Pepe', 'Jose', 'Luka', 'Julio', 'Santiago', 'Claudio', 'Carlos', 'Maximo']
alumnos.splice(5,2);


//para saber si algun elemento esta incluido en el array
console.log(marcasAutos.includes('Koenigsegg'));

//ordenar de la A a la Z los elementos de mi array
console.log(alumnos.sort());

//ordenar al reves nuestro array
console.log(alumnos.reverse());

//concatenar arrays
let alumnos2 = ['Jorge', 'Simon' ,'Luana', 'Sol'];
let comision = alumnos.concat(alumnos2);