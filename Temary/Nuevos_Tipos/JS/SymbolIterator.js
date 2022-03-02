/* 
.- Symbol.iterator [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator ]
? El símbolo Symbol.iterator especifica al iterador por defecto de un objeto.
*/
const items = new Set([1,2,3,3,3,4,"pepe"]);
/* const items = "Hola mundo"; */

//Se accede al iterador de la variable items
const iterador = items[Symbol.iterator]();

console.log(items);
console.log(iterador);
console.log(iterador.next());

let next = iterador.next();

while(! next.done){
    console.log(next.value);
    next = iterador.next();
}