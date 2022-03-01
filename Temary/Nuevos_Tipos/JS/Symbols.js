/* 
.- Symbols [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol ]
? es un tipo de datos cuyos valores son únicos e immutables. Dichos valores pueden ser utilizados
? como identificadores (claves) de las propiedades de los objetos.  Cada valor del tipo Symbol
? tiene asociado un valor del tipo String o Undefined que sirve únicamente como descripción del símbolo.

! Cuando el objeto identifica la notación del corchete "[]" e identifica la referencia del nombre de la
! variable asignada a la variable se pueden agregar simbolos de "forma dinánimica"

.- Object.getOwnPropertySymbols [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols ]
? Regresa un arreglo con el conteo de simbolos en un objeto
*/

const NOMBRE = Symbol();
const APELLIDO = Symbol();
const SALUDAR = Symbol();

const persona = {
    [NOMBRE]:"Pepe",
    edad: 25,
    [APELLIDO]: "Hernandez",
    [SALUDAR]:function(){
        console.log("Hola!");
    }
};

console.log(persona);

persona.NOMBRE = "Pastor"
console.log("Sin uso de symbol - ",persona.NOMBRE);
console.log("Con uso de symbol - ",persona[APELLIDO]);

for(let prop in persona){
    console.log(prop + " - " + persona[prop]);
}

console.log(Object.getOwnPropertySymbols(persona));