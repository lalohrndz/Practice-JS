/* 
.- Parámetros REST y Operador Spread

.- Parámetros REST [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters ]
? La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos como un array.

? El último parámetro de una función se puede prefijar con ..., lo que hará que todos los argumentos restantes
? (suministrados por el usuario) se coloquen dentro de un array de javascript "estándar".

function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

- Console Output:
- a, one
- b, two
- manyMoreArgs, [three, four, five, six]

.- Spread Operator [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax ]
? La sintaxis extendida o spread syntax permite a un elemento iterable tal como un arreglo o cadena ser expandido
? en lugares donde cero o más argumentos (para llamadas de  función) o elementos (para Array literales) son
? esperados, o a un objeto ser expandido en lugares donde cero o más pares de valores clave (para literales Tipo Objeto)
? son esperados.

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
- expected output: 6

console.log(sum.apply(null, numbers));
- expected output: 6

! La diferencia entre los parámetros REST y el Spread Operator es que en los parámetros REST nosotros agregamos los
! tres puntos ( ... ) dentro de una función y con el Spread Operator podemos agregar los tres puntos ( ... ) en cualquier
! sentencia del código.
*/

function sumar(a,b,...c){
    let r = a+b

    /*     
    c.forEach(function(c){
        r += c
    }) 
    */
    c.forEach((c)=>{r+=c})

    return r
}

console.log(sumar(1,2))
console.log(sumar(1,2,3))
console.log(sumar(1,2,3,4))
console.log(sumar(1,2,3,4,5))

/* 
! Console clear
*/
console.clear()

const arr = [1,2,3,4,5],
    arr2 = [6,7,8,9,0]

console.log("Arreglos simples - ",arr,arr2)

const arr3 = [...arr,...arr2]
console.log("Arreglo añadido con Spread operator - ",arr3)


/* 
! Console clear
*/
console.clear()