let nombre = "Eduardo"
let apellido = "Pastor"

/* 
- Creacion de variable con constructor 
*/

let saludo = new String("Hola mundo")

console.log(nombre,apellido,saludo)


let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illum laudantium corrupti exercitationem, minus ducimus adipisci enim ad voluptate suscipit laboriosam voluptas ut. Dolorum, ducimus nobis! Quisquam molestiae itaque nisi. Repellendus rem dolore quisquam praesentium, recusandae nobis sit eveniet, ratione soluta earum atque assumenda fuga. Optio, magni. Magnam, aperiam accusantium. Exercitationem obcaecati, in quidem reprehenderit doloremque facere suscipit qui enim."

console.log(
    nombre.length,
    apellido.length,
    saludo.length,
    nombre.toUpperCase,
    apellido.toLocaleLowerCase,
    lorem,
    /* 
    - Se usa el metodo de includes para enonctrar coicidencias dentro del texto del lorem, en caso de que lo
    - haga el metodo regresara un true, si no regresa false
    */
    lorem.includes("amet"),
    lorem.includes("lalo"),
    /* 
    - el metodo trim quita los espacios en blanco del texto (sin contar los espacios normales del texto)
    */
    lorem.trim(),
    /* 
    -el metodo split genera un arreglo a partir del separador indicado dentro del metodo, en este caso
    -usamos el espacio en blanco como separador
    */
    lorem.split(" ")
    )

/* 
! Consle clear
*/
console.clear();