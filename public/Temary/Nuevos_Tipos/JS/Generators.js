/* 
.- Generators [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator ]
? El objeto Generator es retornado por una función generator y es conformado tanto el protocolo iterable
? como el protocolo iterador.

? Este objeto no puede ser instanciado directamente. En su lugar, una instancia del objeto Generator
? puede ser devuelta por una función generator:

-	function* gen() {
-	  yield 1;
-	  yield 2;
-	  yield 3;
-	}
-
-	var g = gen(); // "Generator { }"

.- yield [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/yield ]
? La palabra clave yield se usa para pausar y reanudar una función generadora (function* o función
? generadora heredada).

*/

function* iterable(){
    yield "hola"
    console.log("Hola consola");
    yield "hola 2"
    console.log("Otra instrucción de consola");
    yield "hola 3"
    yield "hola 4"
}

let iterador = iterable();

/* console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next()); */

for (let y of iterador) {
    console.log(y);
};

const arr = [...iterable()];
console.log(arr);

function cuadrado(number){
    setTimeout(() => {
        console.log({
            number,
            resultado:number*number
        });
    }, Math.random()*1000);

/*     return{
        number,
        resultado:number*number
    }  */
};

cuadrado(2);


function* generador(){
    console.log("Inicio generator");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    console.log("Finalización generator");
};

let gen = generador();

for (const y of gen) {
    console.log(y);
}