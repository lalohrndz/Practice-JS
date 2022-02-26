/* 
.- Objetos literales
.- [ https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects ]
.- [ https://dev.to/duxtech/es6-objetos-literales-en-javascript-58np ]
 
? Se denomina objeto literal al objeto cuyas propiedades están declaradas textualmente en el código.

*/

let nombreOL = "Lalo"
let edadOL = 25

const personaOL = {
    nombreOL:nombreOL,
    edadOL:edadOL,
    saludar:function(){
        console.log("Hola!")
    }
}

console.log(personaOL)
personaOL.saludar()

/* 
- En caso de usar el mismo nombre para asignar la variable de llave en un objeto; se puede simplificar usarndo
- solamente una propiedad dentro del objeto, con esto, JS detecta que el nombre de la variable será el mismo.
*/

const person = {
    nombreOL,
    edadOL,
    apellido:"Pstr",
    saludar(){
        console.log("Hola mundo!")
    }
}

console.log(person)
person.saludar()

/* 
! Console clear
*/
console.clear()