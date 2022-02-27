
/* 
.- Funcion Declarada

- Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier
- momento.

- Opcionalmente, una función puede aceptar parámetros y devolver un valor.

- Las funciones en JavaScript son objetos, conocidos como ciudadanos de primera clase porque pueden asignarse
- a un valor, pueden pasarse como argumentos o usarse como un valor de retorno.
*/

function estoEsUnaFuncion(){
    console.log("Uno")
    console.log("dos")
    console.log("tres")
}

/* 
? Invocación de una función
*/
estoEsUnaFuncion()

/* 
! Consle clear
*/
console.clear();

/* 
.- Ordenamiento de código

- 1) Importación de módulos.
- 2) Declaración de variables.
- 3) Declaración de funciones.
- 4) Ejecución de código.
*/

function unaFuncionQueDevuelveValor(){
    return "La funcion ha retornado una cadena de texto"
}



let valor = unaFuncionQueDevuelveValor()
console.log(valor)

/* 
! Consle clear
*/
console.clear();

/* 
.- Función que tiene parámetros
? En caso de que la función sea invocada sin sus parámetros el resultado sería
- "Hola mi nombre es undefined y tengo undefined años"
? Para evitar esto se pueden agregar valores por defecto a los parámetros (variables)
? para que el resultado sea más personalizado en caso de que no se definan los
? parámetros en la invocación.
*/


function saludar(nombre = "Desconocido",edad = 0){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}

console.log("Funcion con parametros:")
saludar("Lalo",25)

console.log("Funcion sin parametros:")
saludar()

/* 
! Consle clear
*/
console.clear();

/* 
.- Funciones declaradas vs Funciones expresadas o Anonimas

? Funcion Declarada
- Puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada.

? Funcion Expresada
- Una funcion que se le ha asignado como valor a una variable.
- Si invocamos esta funcion antes de su definicion JavaScript nos dara un error de referencia.
 
*/

funcionDeclarada()

function funcionDeclarada(){
    console.log("Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada")

}

funcionDeclarada()


const funcionExpresada = function(){
    console.log("Esto es una funcion expresada, es decir, una funcion que se le ha asignado como valor a una variable. Si invocamos esta funcion antes de su definicion JavaScript nos dara un error de referencia")
}

funcionExpresada()

/* 
! Consle clear
*/
console.clear();