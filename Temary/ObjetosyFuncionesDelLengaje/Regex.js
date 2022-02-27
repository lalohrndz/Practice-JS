/* 
.- Regex [ https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions ]
? Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas

? Las expresiones regulares se pueden utilizar como objetos en JS, estos objetos son:
- exec() [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec ]
- test() [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test ]
- RegExp() [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp ]
- match() [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/match ]
- matchAll() [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll ]
- replace() [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace]
- replaceAll() [ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll ]
- search() [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/search ]
- split() [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split ]
*/

let loremText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquid adipisci ea sed laboriosam ullam cupiditate tenetur doloribus, nostrum minima aperiam hic itaque distinctio velit provident, commodi amet inventore sunt."
let expReg = new RegExp("amet","ig")


let expReg2 = /amet/ig
console.log(".test() - ",expReg.test(loremText));
console.log(".exec() - ",expReg.exec(loremText));

console.log(".exec() - ",expReg2.test(loremText));
console.log(".exec() - ",expReg2.exec(loremText));



/*
! Console clear
*/
console.clear()