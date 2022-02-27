/* 
.- Tipos de operadores [https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators]

? JavaScript tiene ambos operadores binarios y unarios, y un operador ternario especial, el operador condicional.
? Entre los operadores principales de JavaScript se encuentran:

- Asignación
- Comparación
- Aritméticos
- Bit a bit
- Lógicos
- De cadena
- Condicional
- Coma
- Unarios
- Relacionales

*/

/* 
.- Operador de asignación

? Un operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho.
? El operador de asignación simple es igual (=), que asigna el valor de su operando derecho a su operando izquierdo.
? Es decir, x = y asigna el valor de y a x.

*/

/* 
.- Operadores Relacionales
? Los operadores relacionales comparan los valores dependiendo del operador entre dos operandos.
? Los operadores van a realizar su funcion y regresar un resultado dependiendo del tipo de dato

- >, <, <=, >=, ==, ===, !=, !==

! Para mas inf. escribir en consola OperadoresDeAsignasion()
*/

console.log(8 < 9) //True
console.log(9 < 8) //False
console.log(8 <= 9) //True
console.log(7 < 7) //False
console.log(7 <= 7) //True


/*
.- Diferencias entre los iguales

? Un igual ( = ) refieriere a una operacion de asignacion
? Dos iguales ( == ) refiere a una comparacion de valores
? Tres iguales ( === ) refiere a una comparacion de valores Y TIPO DE DATO

*/

console.log(7==7) //True
console.log("7" == 7) //True

console.log("7" === 7) //False
console.log(0 === false) //False

/* 
! Console clear
*/
console.clear()

/* 
.- Operadores de incremento y decremento
*/

let inc = 1

/* inc = inc + 2 */ //3
inc += 2 //3
console.log(inc)

inc -= 2
console.log(inc) //1

/* 
.- Operadores Unarios

*/

inc ++ //2
inc -- //1
++inc //2

/* 
! Console clear
*/
console.clear()


/* 
.- Operadores logicos

? ! - NOT
? || - OR
? && - AND

! Para mas inf. escribir en consola OperadoresLogicos()
*/

console.log(!true) //False
console.log(!false) //True
console.log(9 === 9 || "9" === 9) //True
console.log(9 === 9 && "9" === 9) //False


/* 
! Console clear
*/
console.clear()