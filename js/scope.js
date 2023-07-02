//tipos de scope
//1) GLOBAL

let persona = {
    nombre: 'Sol',
    edad: 20,
    direccion:'country los Alamos', 
}

const getDatos = function(){

    let persona = {
      nombre: 'Juliana',
      edad: 20,
      direccion: 'ni idea'
    }

    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Edad: ${persona.edad}`);
    console.log(`Direccion: ${persona.direccion}`);
  }
  


const saludarPersona = function (){
    console.log(`Hola ${persona.nombre}, como estas bbta`);
}


//2) LOCAL

const saludarLocal = function(){
    let nombre ='Pedro'
    console.log(`Hola ${nombre}`);
}



if(true){
    let skill = 'Javascript';
    const profesion = 'Programador';
    console.log(skill);
    console.log(profesion);
}
