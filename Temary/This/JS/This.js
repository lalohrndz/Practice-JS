/* 
.- This [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this ]
! Contexto Global
? En el contexto de ejecución global (fuera de cualquier función), this se refiere al
? objeto global, ya sea en modo estricto o no.

!Contexto de función
? Dentro de una función, el valor de this depende de cómo la función es llamada.
*/

this.nombre = "Contexto Global";

function imprimir(){
    console.log(this.nombre);
}

const obj = {
    nombre:"Contexto Objeto",
    imprimir:function() {
        console.log(this.nombre);
    }
}

imprimir();
obj.imprimir();

const obj2 = {
    nombre:"Contexto Objeto 2",
    imprimir
};
obj2.imprimir()

/* 
? En este caso el obj3 cuando hace el llamado de 'this' en la función de imprimir 'this' mantiene
? una relación del contexto donde fue creado el objeto donde aparece. (NO toma el contexto donde fue
? creado el 'this' sino que toma el contexto del padre o un nivel más arriba) esto gracias a una
? funcionalidad de las arrow functions.
*/

const obj3 = {
    nombre:"Cotnexto Objeto 3",
    imprimir:() =>{
        console.log(this.nombre);
    }
}
obj3.imprimir();

function Persona(nombre){
    this.nombre = nombre;
    /* return console.log(this.nombre); */

    /*     return function(){
        console.log(this.nombre);
    } */

    return ()=>{
        console.log(this.nombre);
    }
}

let pepe = new Persona("pepe")
pepe()