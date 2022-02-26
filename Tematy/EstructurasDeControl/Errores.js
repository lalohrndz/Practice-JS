/* 
.- Manejo de excepciones Try - Catch [ https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#declaraci%C3%B3n_try...catch ]

? La declaración try...catch consta de un bloque try, que contiene una o más declaraciones, y un bloque catch, que contiene declaraciones que especifican
? qué hacer si se lanza una excepción en el bloque try.

.- Expresión Throw [ https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#expresi%C3%B3n_throw ]

? Utiliza la expresión throw para lanzar una excepción. Una expresión throw especifica el valor que se lanzará.

? Puedes lanzar cualquier expresión, no solo expresiones de un tipo específico. El siguiente código arroja varias excepciones de distintos tipos:

throw 'Error2';   // tipo String
throw 42;         // tipo Number
throw true;       // tipo Boolean
throw {toString: function() { return "¡Soy un objeto!"; } };


.- Bloque finally

? El bloque finally contiene instrucciones que se ejecutarán después que se ejecuten los bloques try y catch. Además, el bloque finally ejecuta antes el
? código que sigue a la declaración try...catch...finally.

*/

try {
    console.log("En el try se agrega el código a evaluar")
    throw error
    console.log("Este error no será leido puesto que después de detectar un error en el try lo demás del código no se ejecuta")
} catch (error) {
    console.log("Catch captura cualquier error surgido o lanzado en el try")
    console.error(error)
}finally{
    console.log("El bloque finally se ejecuta siempre al final de un bloque try-catch")
}

/* 
! Console clear
*/
console.clear()

try {
    let nTry = "a"

    if(isNaN(nTry)){
        throw "Se espera un número!"
    }

    console.log(nTry * nTry)

} catch (error) {
    console.log("Se produjo el siguente error: ",error)
}finally{

}

/* 
! Console clear
*/
console.clear()