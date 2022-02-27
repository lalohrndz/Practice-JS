/* 
.- Callbacks [ https://developer.mozilla.org/es/docs/Glossary/Callback_function ]
? Una función de callback es una función que se pasa a otra función como un argumento,
? que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

- function saludar(nombre) {
-   alert('Hola ' + nombre);
- }
- 
- function procesarEntradaUsuario(callback) {
-   var nombre = prompt('Por favor ingresa tu nombre.');
-   callback(nombre);
- }
- 
- procesarEntradaUsuario(saludar);
*/


function cuadradoCallback(value, callback){
    setTimeout(() => {
       callback(value,value*value) 
    }, 0 | Math.random()*100);
}

cuadradoCallback(2,(value,result)=>{
    console.log("Inicia callback");
    console.log("Value: ",value);
    console.log("Result: ",result);
})