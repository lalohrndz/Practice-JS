let verdadero = true
let falso = false

let v = new Boolean(true)
let f = new Boolean(false)

console.log(verdadero,falso)
console.log(typeof verdadero, typeof falso)
console.log(v,f)

/* 
.- Valores Truthy [https://developer.mozilla.org/es/docs/Glossary/Truthy]

- if (true)
- if ({})
- if ([])
- if (42)
- if ("foo")
- if (new Date())
- if (-42)
- if (3.14)
- if (-3.14)
- if (Infinity)
- if (-Infinity)

? En JavaScript, un valor verdadero es un valor que se considera  true/verdadero
? cuando es evaluado en un contexto Booleano. Todos los valores son verdaderos a
? menos que se definan como falso
? (es decir, excepto false, 0, "", null, undefined, y NaN).

.- Valores Falsy [https://developer.mozilla.org/en-US/docs/Glossary/Falsy]

- if (false)
- if (null)
- if (undefined)
- if (0)
- if (-0)
- if (0n)
- if (NaN)
- if ("")

? Son valores considerados como falsos cuando se encuentran en un contexto booleano
? JavaScript usa un tipo de conversion para forzar cualquier valor booleano en contextos
? que lo requieran como condicionales y ciclos.

*/

console.log(Boolean(0))
console.log(Boolean(-7))
console.log(Boolean(""))
console.log(Boolean(" "))

/* 
! Consle clear
*/
console.clear();