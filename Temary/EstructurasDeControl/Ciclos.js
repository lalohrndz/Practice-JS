/* 
.- Ciclos / Loops [ https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration ]

? Un ciclo son bucles que ofrecen distintas formas para iterar en conficiones específicas.
? Existen varios tipos de ciclos, estos pueden ser:

- For
- While
- Do...while
- Labeled
- Break
- Continue
- For...in
- For...on
*/

/* 
.- Ciclo While
*/

let contadorWhile = 0

while(contadorWhile < 10){
    console.log(contadorWhile)
    contadorWhile++
}
/* 
! Console clear
*/
console.clear()

/* 
.- Ciclo Do While
*/
let contadorDoWhile = 0

do{
    console.log(contadorDoWhile)
    contadorDoWhile++
}while(contadorDoWhile < 10)
/* 
! Console clear
*/
console.clear()

/* 
.- Ciclo For

for( (inicialización de la variable); (Condición a evaluar); (Decremento o incremento) ){
    código
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}

*/

let numerosFor = [10,20,30,40,50,60,70,80,90,100]

for (let i = 0; i < numerosFor.length; i++) {
    const numeroFor = numerosFor[i];
    console.log(numeroFor)
}
/* 
! Console clear
*/
console.clear()

/* 
.- Ciclo For...in

? El ciclo for...in itera sobre una variable específica sobre todas sus propiedades; La variable a la que debe de iterar
? debe de ser del tipo de dato Objeto.
*/

const lalo ={
    nombre:"lalo",
    edad:25,
    correo:"edo.pstr@gmail.com"
}

for (const propiedad in lalo) {
    console.log("propiedad - ",propiedad)
    console.log("llave - ",lalo[propiedad])
}
/* 
! Console clear
*/
console.clear()

/* 
.- Ciclo for..of

? El ciclo for...of itera sobre una variable específica sobre todas sus propiedades; La variable a la que debe de iterar
? debe de ser del tipo de dato (Array, Map, Set, objetos arguments y así sucesivamente).

- Mientras que for...in itera sobre los nombres de propiedad, for...of itera sobre los valores de propiedad:
*/

for (const i of numerosFor) {
    console.log(i)
}

/* 
! Console clear
*/
console.clear()