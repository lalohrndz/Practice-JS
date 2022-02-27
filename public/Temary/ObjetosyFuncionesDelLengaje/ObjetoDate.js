/* 
.- Objeto Date [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date ]
? El constructor crea un objeto Date con la hora y fecha de hoy según la hora local

- La fecha se mide en milisegundos desde la media noche exacta del 01 de enero de 1970 en formato UTC. 
- Un día contiene 86.400.000 milisegundos. El rango del objeto Date va desde -100,000,000 días hasta 100,000,000
- días respecto del 01 de enero de 1970 UTC.
*/

console.log(Date());

let fecha = new Date()
console.log("getDate() regresa el día del mes -> ",fecha.getDate());

console.log("getDay() regresa el día de la semana desde el conteo de un arreglo -> ",fecha.getDay());

console.log("getMonth() regresa el mes del año desde el conteo de un arreglo-> ", fecha.getMonth());

console.log("getYear() regresa el cálculo del año desde 1900 -> ", fecha.getYear());

console.log("getFullYear() regresa el año actual -> ",fecha.getFullYear());

console.log("getHours() regresa la hora actual en formato 24hrs -> ",fecha.getHours());

console.log("getMinutes() regresa los minutos de la hora actual -> ",fecha.getMinutes())

console.log("getSeconds() regresa los segundos de la hora actual -> ", fecha.getSeconds());

console.log("getMilliseconds() regresa los milisegundos de la hora actual -> ", fecha.getMilliseconds());

console.log("toString() es un método que cambia el formato a un string -> ",fecha.toString());

console.log("toDateString() regresa la fecha con formato en inglés americano -> ",fecha.toDateString());

console.log("toLocaleString() regresa con formato DD/MM/DD - y el horario con hora, minuto y segundo con formato de 24hrs -> ",fecha.toLocaleString());

console.log("toLocaleDateString() similar a toLocaleString() únicamente que regresa solamente la fecha de éste -> ",fecha.toLocaleDateString());

console.log("toLocaleTimeString() similar a toLocaleString() únicamente que regresa solamente la hora de éste -> ",fecha.toLocaleTimeString());

console.log("getUTCDate() regresa el día con respecto a Londres -> ", fecha.getUTCDate());

console.log("getUTCHours() regresa el la hora con respecto a Londres -> ",fecha.getUTCHours());

console.log("now() regresa los segundos transcurridos desde 1/1/1970 (fecha timestamp) -> ", Date.now());

/* 
! Console clear
*/
console.clear()