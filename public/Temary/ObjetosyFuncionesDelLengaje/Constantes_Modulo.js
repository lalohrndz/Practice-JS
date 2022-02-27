export const PI = Math.PI

export let usuario = "Lalo",
    password = "123"

/* 
? Cuando se mande a llamar el archivo lo que tenga "export default" se va a exportar sin tener que
? especificarlo al momento de hacer la importación en el módulo.

! Solamente se puede exportar en default las funciones y las clases, en caso de usar más de una, marcará error.

! En caso de querer exportar una variable el export default se tiene que agregar debajo de la variable
*/

export function saludar(){
    console.log("Hola Módulos +ES6");
}

const hi = "Hola!"
//export default hi

const hi2 = () => {
    console.log("Hi 2");
}
export default hi2