/* 
.- Objeto Math [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math ]

? A diferencia de los demás objetos globales, el objeto Math no se puede editar. Todas las propiedades y
? métodos de Math son estáticos. Usted se puede referir a la constante pi como Math.PI y puede llamar a
? la función seno como Math.sin(x), donde x es el argumento del método.

! Propiedades
- Math.E [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/E ]
- Math.LN2 [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/LN2 ]
- Math.LOG2E [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG2E ]
- Math.LOG10E [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG10E ]
- Math.PI [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/PI ]
- Math.SQRT1_2 [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2 ]
- Math.SQRT2 [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT2 ]
*/

console.log("Math",Math)
console.log("Math.PI - ",Math.PI);

console.log(".abs - ",Math.abs(7.668)); //Regresa el número absoulto del parametro que se le pase 
console.log(".abs - ", Math.abs(-7.668));

console.log(".ceil - ",Math.ceil(5.2)); //Redondea hacia el número siguiente
console.log(".floor - ",Math.floor(5.8)); //Redondea hacia el número más cercano al decimal

console.log(".round - ", Math.round(5.6)); //Hace un redondeo hacía el próximo o al del dígito dependiendo del decimal
console.log(".round - ", Math.round(5.4));

console.log(".sqrt - ",Math.sqrt(2.5)); //Operación de raiz

console.log(".pow - ",Math.pow(2,5)); //Eleva el primer digito a la potencia del segundo

console.log(".sign - ", Math.sign(-7.8)); //En caso de que el dígito sea negativo regresará un -1
console.log(".sign - ", Math.sign(7.8)); //En caso de que el dígito sea positivo regresará un 1
console.log(".sign - ", Math.sign(0)); //En caso de que el dígito sea cero regresará un 0

console.log(".random - ",Math.random()); //Calculo de un número random entre el 0 y 1
console.log(".random entre 0 y 1000 - ",Math.random() *1000); // En caso de querer un rango mayor en el calculo del random se puede multiplicar

console.log(".round - ",Math.round( Math.random()*10 ) );
console.log(".round - ",Math.round( Math.random()*10 ) );

/*
! Console clear
*/
console.clear()