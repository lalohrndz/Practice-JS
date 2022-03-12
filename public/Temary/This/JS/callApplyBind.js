/* 
.- Call [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/call ]
? Permite que una función/método que pertenece a un objeto, ser asignada y llamada para un objeto diferente.

.- Apply [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/apply ]
? Invoca una determinada función asignando explícitamente el objeto this y un array o similar
? como parámetros (argumentos) para dicha función

? Es muy similar a call(), excepto por el tipo de argumentos que soporta. Puede utilizarse un arreglo
? de parámetros en lugar de un conjunto de pares nombre-valor. Con apply, puede utilizarse un arreglo
? literal, por ejemplo, fun.apply(this, ['eat', 'bananas']), o un objeto Array,
? por ejemplo, fun.apply(this, new Array('eat', 'bananas')).

.- Bind [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/bind ]
? El método bind() crea una nueva función, que cuando es llamada, asigna a su operador  this el valor
? entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la
? función es llamada. 
*/

this.lugar = "Contexto Global"
function saludar(saludo,aQuien){
    console.log(`${saludo} ${aQuien}, estamos desde: ${this.lugar}`);
}

const obj ={
    lugar:"Contexto Objeto"
}
saludar.call(null,"hola","pepe");
saludar.call(obj,"hola","pepe");
saludar.apply(null,["hola","pepe"]);
saludar.apply(obj,["hola","pepe"]);

const persona = {
    nombre:"pepe",
    saludar:function(){
        console.log(`Hola ${this.nombre}`);
    }
}

persona.saludar()

const otraPersona = {
    saludar: persona.saludar.bind(persona)
}

otraPersona.saludar()