let a;

const PI = 3.1416;

console.log(PI);


/* 
? El valor de las constantes no puede cambiar en algun momento del flujo del programa ya que arrojaria un error de referencia 
*/

/* PI = 2; */


a="Kiara";
console.log(a);

/* 
! Consle clear
*/
console.clear();

const objeto = {
    nombre:"Lalo",
    edad:25,
}

const arreglo = ["blanco","negro","azul"]
console.log(objeto);
console.log(arreglo);

objeto.correo = "edo.pstr@gmail.com";
arreglo.push("naranja")

/* 
.- Uso de las constantes

Se pueden usar las constantes para el uso de los objetos y los arreglos puesto que en caso de valores compuestos,
mientras no cambien el tipo de objeto con el que fueron inicializados (objeto, arreglos, funciones o clases) no regresara
un error. Los objetos o tipos de datos compuestos son:

- objetos
- arreglos
- funciones
- clases

En el caso de los tipos de dato primitivos si el valor que le fue asignado a la variable constante
cambia JavaScript regresara un erro puesto que NO es un valor constante.
Los tipos de datos primitivos son:

- texto
- numeros
- booleanos 
- nulos
- undefined
- NaN 

*/

/* 
! Consle clear
*/
console.clear();