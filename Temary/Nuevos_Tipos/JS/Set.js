/* 
.- Set [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set ]
? El objeto Set permite almacenar valores únicos de cualquier tipo, incluso valores
? primitivos u referencias a objetos.
? Se puede iterar sus elementos en el orden de su inserción. Un valor en un Set sólo
? puede estar una vez; éste es único en la colección Set.
*/

const set = new Set(["hola","uno",2,3,2,2,2,2,2,2,2,2,2,2,4]);

console.log("set - ",set);
console.log("set.size - ",set.size);

const set2 = new Set();

set2.add("Uno");
set2.add(2);
set2.add(2);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(4);
set2.add("Uno");

console.log("set 2 - ",set2);

console.log("set2.foreach()");
set2.forEach(item => console.log(item))
