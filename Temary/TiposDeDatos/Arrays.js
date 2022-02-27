/* 
.- Arreglos [https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array]

Los arreglos son una coleccion de elementos que puede almacenar distintos tipos de datos (primitivos y compuestos)

? Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido
? y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables.


*/

const arreglo1 = []
console.log(arreglo1)

const arreglo2 = [1,"Hola",true,["A","B","C",[1,2,3]]]
console.log(arreglo2)
console.log("arreglo2.length: ",arreglo2.length)

console.log(arreglo2[1])
console.log(arreglo2[3][2])
console.log(arreglo2[3][3][0])

/*
.- Array.of() [https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/of]
Array.of desde el 2015 es un metodo que permite agregar elementos

? El método Array.of() crea una nueva instancia Array con un número variable de elementos pasados como argumento,
? independientemente del número o del tipo.

? La diferencia entre Array.of() y el constructor Array reside en como maneja los parámetros de tipo
? entero: Array.of(7) crea un array con un solo elemento, 7, mientras que Array(7) crea un array vacío con una
? propiedad length de 7 (Nota: esto implica un array de 7 ranuras vacías, no ranuras con valores undefined).

*/
const arreglo3 = Array.of("X","Y","Z",9,8,7)
console.log(arreglo3)


/* 
.- Array.prototype.fill [https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/fill]

? El método fill() cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0)
? hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.

*/
const arreglo4 = Array(100).fill(false)
console.log(arreglo4)

/*
.- Push & Pop
*/

const colores = ["Rojo","Verde","Azul"]
console.log(colores)

colores.push("Negro")
console.log(colores)

colores.pop()
console.log(colores)

/* 
.- Array.prototype.forEach() [https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach]

? forEach() ejecuta la función callback una vez por cada elemento presente en el array en orden ascendente.
? No es invocada para índices que han sido eliminados o que no hayan sido inicializados.

*/

colores.forEach(function(el,index){
    console.log(`<li id="${index}">${el}<li/>`)
})

/* 
! Consle clear
*/
console.clear();