/* 
.- WeakSet [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/WeakSet ]
? son colecciones de objetos. Al igual que Set, cada objecto WeakSet puede estar solo una vez;
? todos los objetos en una colección WeakSet son unicos.

! Las principales diferencias con el objeto Set son:

- WeakSet son colecciones de objetos solamente. No pueden contener valores arbitrarios de
- cualquier tipo, como pueden hacerlo los Set.
- 
- El WeakSet es débil, lo que significa que las referencias a objectos en un WeakSet se
- mantienen débilmente. Si no existen otras referencias a un objecto almacenado en WeakSet,
- esos objectos pueden ser recolectados como basura.

.- WeakMap [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/WeakMap ]
 ? El objeto WeakMap es una colección de pares llave/valor en la que las llaves deben ser objetos con
 ? valores de cualquier tipo de dato en JavaScript, y el cual no crea fuertes referencias a sus llaves

*/

const ws = new WeakSet();
let val1 = {"valor":1},
    val2 = {"valor":2},
    val3 = {"valor":3}
ws.add(val1);
ws.add(val2);
ws.add(val3);

console.log(ws);
console.log(ws.has(val1));

const wsInterval = setInterval(() => {
    console.log(ws);
}, 1000);

setTimeout(() => {
    val1 = null;
    val2 = null;
    val3 = null;
}, 5000);

clearInterval(wsInterval);

const wm = new WeakMap();

let v1 = {"valor":1},
    v2 = {"valor":2},
    v3 = {"valor":3}

console.log(wm.has(v1));
wm.set(v1);
wm.set(v2);
wm.set(v3);

console.log(wm);

const wmInterval = setInterval(() => {
    console.log(wm);
}, 1000);

setTimeout(() => {
    v1 = null;
    v2 = null;
    v3 = null;
}, 5000);

clearInterval(wmInterval);