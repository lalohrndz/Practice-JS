/* 
.- Arrow Functions [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions ]
? Una expresión de una arrow function es una alternativa compacta a una función tradicional,
? pero es limitada y no se puede utilizar en todas las situaciones.

! Diferencias y limitaciones
- No tiene sus propios enlaces a this o super y no se debe usar como métodos.
- No tiene argumentos o palabras clave new.target.
- No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
- No se puede utilizar como constructor.
- No se puede utilizar yield dentro de su cuerpo.

.- Funciones declaradas vs Funciones expresadas o Anonimas
? Funcion Declarada
- Puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada.

? Funcion Expresada
- Una funcion que se le ha asignado como valor a una variable.
- Si invocamos esta funcion antes de su definicion JavaScript nos dara un error de referencia.
! Para más info, ir al archivo de Funciones.js en la carpeta "TiposDeDatos"
*/

//-Funcion expresada
const saludos = function(){
    console.log("Hola!")
}
saludos()

//-Funcion delcarada
const hola = () =>{
    console.log("Hooolaa!")
}
hola()

//-Arrow function con parametros
const holaConNombre = (name) => {
    console.log(`Hola ${name}!`)
}
holaConNombre("Pepe")

/* 
? Cuando no se requiere mayor lógica o estructura para retornar el valor de la función, en las arrow functions se
? pueden omitir el uso de las llaves; con esto se realizaría un retorno explísito del valor.

? De igual forma si la función solamente recibe un parametro se podrían omitir el uso de los paréntesis; sin embargo si
? tiene más de dos parámetros debe tener forzosamente los paréntesis.
*/
const sum = (a,b) => console.log(a+b)
sum(5,3)

/* 
! Console clear
*/
console.clear() 

/* 
.- Uso de las arrow functions en un forEach()
*/

const numbers = [1,2,3,4,5,6,7,8,9,0]
numbers.forEach((el,index)=>{
    console.log(`El elemento ${el} se encuentra en el index ${index}`)
})

/* 
! Console clear
*/
console.clear() 


/* 
.- Diferencia entre el this de las arrow functions y las funciones declaradas [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions#descripci%C3%B3n ]

? La diferencia es que con las arrow function el this salta el contexto donde fueron declarada a saltarse al objeto padre donde han sido delcaradas.
? Esto ayuda a la asociación de distintos componentes y sus contextos al método u objeto (ayuda al bindeo de información y optimización del código
? entre componentes) y en una función declarada el this queda solamente con el contexto donde fue creada (y para poder acceder a contextos de otros 
? componentes se tiene que hacer un binding [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/bind ] para poder
? acceder a otros contextos.)
*/

function perro (){
    console.log(this)
}
perro()

const dog = {
    nombre:"kiara",
    ladrar:function(){
        console.log(this)
    },
    correr: () =>{
        console.log(this)
    }
}

dog.ladrar()
dog.correr()

/* 
! Console clear
*/
console.clear() 