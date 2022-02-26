/* 
.- Async & Await

.- Async [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function ]
- La declaración de función async define una función asíncrona, la cual devuelve un objeto AsyncFunction.

? Cuando se llama a una función async, esta devuelve un elemento Promise. Cuando la función async
? devuelve un valor, Promise se resolverá con el valor devuelto. Si la función async genera una
? excepción o algún valor, Promise se rechazará con el valor generado.

- Una función async puede contener una expresión await, la cual pausa la ejecución de la función
- asíncrona y espera la resolución de la Promise pasada y, a continuación, reanuda la ejecución
- de la función async y devuelve el valor resuelto.

.- Await [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/await ]
- El operador await es usado para esperar a una Promise. Sólo puede ser usado dentro de una
- función async function.

? La expresión await provoca que la ejecución de una función async sea pausada hasta que
? una Promise sea terminada o rechazada, y regresa a la ejecución de la función async
? después del término. Al regreso de la ejecución, el valor de la expresión await es la
? regresada por una promesa terminada.
*/

function cuadradPromesa(value){
    if(typeof value !== "number") return Promise.reject("El valor ingresado no es un número");

    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({
                value,
                result:value*value
            })
        }, 0 | Math.random()*1000);
    })
}

async function funcionAsincronaDeclarada(){
    try {
        console.log("inicio async function");
        let obj = await cuadradPromesa(0);
        console.log(`Async funtion: ${obj.value}, ${obj.result}`);

        obj = await cuadradPromesa(1);
        console.log(`Async funtion: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradPromesa(2);
        console.log(`Async funtion: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradPromesa(3);
        console.log(`Async funtion: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradPromesa(4);
        console.log(`Async funtion: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradPromesa(5);
        console.log(`Async funtion: ${obj.value}, ${obj.result}`);
    } catch (error) {
        console.error(error);
    }
}

funcionAsincronaDeclarada(0)

const  funcionAsincronaExpresada = async ()=>{
    try {
        console.log("inicio async function");
        let obj = await cuadradPromesa(6);
        console.log(`Async funtion: ${obj.value}, ${obj.result}`);

        obj = await cuadradPromesa(7);
        console.log(`Async funtion: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradPromesa(8);
        console.log(`Async funtion: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradPromesa(9);
        console.log(`Async funtion: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradPromesa(10);
        console.log(`Async funtion: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradPromesa(11);
        console.log(`Async funtion: ${obj.value}, ${obj.result}`);
    } catch (error) {
        console.error(error);
    }
}

funcionAsincronaExpresada()