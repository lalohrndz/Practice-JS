/* 
.- Objetos [https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects]
 ? JavaScript está diseñado en un paradigma simple basado en objetos. Un objeto es una colección de propiedades,
 ? y una propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad puede ser
 ? una función, en cuyo caso la propiedad es conocida como un método. Además de los objetos que están predefinidos
 ?en el navegador, puedes definir tus propios objetos.
*/

const obj1 = {
    nombre:"Lalo",
    apellido:"Pastor",
    edad:25,
    pasatiempos:["Gym","Apex","Cine"],
    soltero:false,
    contacto:{
        email:"edo.pstr@gmail.com",
        twitter:"@eddpstr"
    },
    saludar:function(){
        console.log("Hola!!")
    },
    nombreCompleto:function(){
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
    },
}

/* 
- Dentro de un objeto, a las variables se les van a llamar "atributo" / "propiedad" y a las funciones se les
- llama "metodos".

-Se puede acceder a las propiedades por el metodo de corchetes o por el metodo de punto; esto resulta en lo mismo
*/

console.log(obj1)
console.log("Se accede con metodo de corchetes",obj1["nombre"])
console.log("Se accede con metodo de corchetes",obj1["apellido"])
console.log(obj1.saludar())
console.log("Se accede con metodo de punto",obj1.edad)
console.log("Se accede con metodo de punto",obj1.soltero)

obj1.nombreCompleto()


/* 
.- Object.Keys() [https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/keys]

? El método Object.keys() devuelve un array de las propiedades names de un objeto, en el mismo orden como se
? obtienen en un loop normal.

*/

console.log(Object.keys(obj1))

/* 
.- Object.values() [https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values]

? El método Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.
? Las propiedades son devueltas en el mismo orden a como lo haría un bucle for...in
? (la única diferencia es que un bucle for-in también enumera las propiedades en la cadena de prototipo de un objeto).

*/
console.log(Object.values(obj1))

/* 
.- for...in [https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in]

? La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas 

*/

for(const propiedad in obj1){
    console.log(`${propiedad} : ${obj1[propiedad]}`)
}

/* 
.- Object.prototype.hasOwnProperty() [Object.prototype.hasOwnProperty()]

? El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada.

*/

console.log(obj1.hasOwnProperty("nombre"))
console.log(obj1.hasOwnProperty("nacimiento"))

/* 
! Consle clear
*/
console.clear();