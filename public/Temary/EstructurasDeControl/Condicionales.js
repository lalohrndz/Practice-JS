/* 
.- Condicionales [ https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals ]

.- Estructura de control
? Son mecanismos que permiten tener control dentro del flujo del programa dependiendo del reultado
? de una evaluacion entre una o mas operaciones. Esto llevara el flujo del programa a tomar una u
? otra accion.
*/

/* 
.- IF Else

? En caso de usar un tipo de operador <= o >= se incluye el segundo valor en la comparacion 
*/

let edad = 17

if(edad > 17){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}

if(edad >= 18){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}

/* 
! Console clear
*/
console.clear()

/* 
.- If Else anidados

? Las condicionales anidadas crean una estructura de control que requiere multiples comparaciones
? dentro de un bloque de codigo

- "Dejame dormir" -> 0hr - 5hr
- "Buenos dias" -> 6hr - 11hr
- "Buenas tardes" -> 12hr - 18hr
- "Buenas noches"  -> 19hr - 23hr
*/

let hora = 20

if(hora >= 0 && hora <= 5){
    console.log("Dejame dormir")
}else if(hora >= 6 && hora <= 11){
    console.log("Buenos dias")
}else if(hora >= 12 && hora <= 18){
    console.log("Buenas tardes")
}else{
    console.log("Buenas noches")
}

/* 
! Console clear
*/
console.clear()

/* 
.- If Else con Operador ternario

? Un operador ternario consta de 3 partes. Este tipo de operador es utilizado cuando se requiere usar
? solamente una linea en una condicional. Se podria decir que es para condicionales simples.

- (Condicion) ? verdadero : falso

! Para mas info escribir en consola OperadoresTernarios()
*/

edad = 15

let eresMayor = (edad >= 18)
? "Eres mayor a 18"
: "Eres menor a 18"

console.log(eresMayor)

/* 
! Console clear
*/
console.clear()


/* 
.- Switch - case [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch ]
? La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case,
? y ejecuta declaraciones asociadas a ese case.

- Domingo -> 0
- Lunes -> 1
- Martes -> 2
- Miercoles -> 3
- Jueves -> 4
- Viernes -> 5
- Sabado -> 6

? El uso de la palabra reservada "break" es utilizada para definir el final de la instacia del case; en
? caso de que se omita un "break" en un case, el switch estaria leyendo los demas casos.

? Switch tiene un caso especial llamado "default"; este caso es utilizado cuando ninguno de los casos
? presentados son validos.
*/

let dia = 7
switch(dia){
    case 0:
        console.log("Es domingo")
    break

    case 1:
        console.log("Es lunes")
    break

    case 2:
        console.log("Es martes")
    break

    case 3:
        console.log("Es miercoles")
    break

    case 4:
        console.log("Es Jueves")
    break

    case 5:
        console.log("Es viernes")
    break

    case 6:
        console.log("Es sabado")
    break

    default:
        console.log("No se que dia es")
    break
}

/* 
! Console clear
*/
console.clear()