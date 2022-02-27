/* 
.- Import & Export

.- Import [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import ]
? La sentencia import se usa para importar funciones que han sido exportadas desde un módulo externo.

! Sintaxis
- import defaultExport from "module-name";
- import * as name from "module-name";
- import { export } from "module-name";
- import { export as alias } from "module-name";
- import { export1 , export2 } from "module-name";
- import { export1 , export2 as alias2 , [...] } from "module-name";
- import defaultExport, { export [ , [...] ] } from "module-name";
- import defaultExport, * as name from "module-name";
- import "module-name";


.- Export [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export ]
? La declaración export se utiliza al crear módulos de JavaScript para exportar funciones, objetos o tipos de dato primitivos.

! Sintaxis
- export { name1, name2, …, nameN };
- export { variable1 as name1, variable2 as name2, …, nameN };
- export let name1, name2, …, nameN; // también var
- export let name1 = …, name2 = …, …, nameN; // también var, const
- export function FunctionName(){...}
- export class ClassName {...}
 
- export default expression;
- export default function (…) { … } // también class, function*
- export default function name1(…) { … } // también class, function*
- export { name1 as default, … };

- export * from …;
- export { name1, name2, …, nameN } from …;
- export { import1 as name1, import2 as name2, …, nameN } from …;
- export { default } from …;
*/
import saludar, {PI, usuario} from "./Constantes_Modulo.js"
import {aritmetica} from "./Aritmetica_Modulo.js"
import hi2 from "./Constantes_Modulo.js";
import saludo from "./Constantes_Modulo.js";

console.log("Archivo módulos.js");

console.log(PI);
console.log(usuario);

console.log("uso de la funcion sum del archivo Aritmetica_Modulo.js - ",aritmetica.sum(5,5));

//Funcion del archivo Constantes_Modulo.js
//saludar()

//hi2()


/*
! Console clear
*/
console.clear()