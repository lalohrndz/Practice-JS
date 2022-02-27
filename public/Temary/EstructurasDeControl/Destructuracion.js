/* 
.- Destructuración [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment ]

?La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o
? propiedades de objetos en distintas variables.
*/

const nDestructuracion = [1,2,3,4,5,6,7,8,9,0]

const [uno,dos,tres] = nDestructuracion;
console.log(uno,dos,tres)

const persona = {
    nombreD:"Lalo",
    apellidoD:"Pstr",
    edadD:25,
}

let {nombreD,apellidoD,edadD} = persona
console.log(nombreD,apellidoD,edadD)


/* 
! Console clear
*/
console.clear()