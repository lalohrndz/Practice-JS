/* 
.- Proxies [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy ]
? El objeto Proxy permite crear un intermediario para otro objeto, el cual puede interceptar y
? redefinir operaciones fundamentales para dicho objeto.

! Un Proxy se crea con dos parámetros:

- target: el objeto original que se quiere envolver.
- handler: un objeto que define cuáles operaciones serán interceptadas y cómo redefinir
- dichas operaciones.
*/

const persona = {
    nombre:"",
    apellido:"",
    edad:0
};

const handler ={
    set(obj,props,value){
        /* Validamos que la llave de la propiedad exista en el objeto inicial */
        if(Object.keys(obj).indexOf(props) === -1){
            return console.error(`La propiedad ${props} no existe en el obj persona`);
        }

        /* Validamos que el valor solamente sea texto y espacio en blanco */
        if(
            (props === "nombre" || props === "apellido") &&
            !/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(value)
        ){
            return console.error(`La propiedad ${props} sólo acepta letras y espacios en blanco`);
        }

        obj[props] = value
    }
}

const pepe = new Proxy(persona,handler);
pepe.nombre = "pepe -";
pepe.apellido = "pastor 1";
pepe.edad = 25;
pepe.twitter = "@eddpstr"

console.log(pepe);
console.log(persona);