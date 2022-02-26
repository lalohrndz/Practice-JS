/* 
.- Promesas [ https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises ]
? Es un objeto que representa la terminación o el fracaso de una operación asíncrona
*/

function cuadradPromesa(value){
    if(typeof value !== "number") return Promise.reject("El valor ingresado no es un número");

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                value,
                result:value*value
            })
        }, 0 | Math.random()*1000);
    })
}

cuadradPromesa(0)
    .then((obj)=>{
        console.log(obj);
        return cuadradPromesa(1);
    })
    .then((obj)=>{
        console.log(obj);
        return cuadradPromesa(2);
    })
    .then((obj)=>{
        console.log(obj);
        return cuadradPromesa(3);
    })
    .then((obj)=>{
        console.log(obj);
        return cuadradPromesa(4);
    })
    .then((obj)=>{
        console.log(obj);
        return cuadradPromesa(5);
    })
    .then((obj)=>{
        console.log(obj);
        return cuadradPromesa("d");
    })
    .catch(err=>{
        console.error(err);
    });