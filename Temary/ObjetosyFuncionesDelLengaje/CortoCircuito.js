/* 
.- Operaciones de corte circuito [ https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators ]

? Debido a que las expresiones lógicas se evalúan de izquierda a derecha, se prueban para una posible evaluación de
? "cortocircuito" utilizando las siguientes reglas:

- false && anything se evalúa en cortocircuito como false.
- true || anything se evalúa en cortocircuito como true.

- Las operaciones de corto circuito se evaluan de izquierda a derecha; regresando el primer valor de la operación en caso
- de que el resultado de la operación sea true y regresando el segundo valor en caso de que el resultado de la operación sea false
*/

function saludar(nombre){
    nombre = nombre || "Desconocido"
    console.log(`Hola ${nombre}`)
}

saludar("Lalo")
saludar()

console.log("Valor en true (truthy)" || "valor en false (falsy)");
console.log(false||"Segundo valor");

/*
! Console clear
*/
console.clear()