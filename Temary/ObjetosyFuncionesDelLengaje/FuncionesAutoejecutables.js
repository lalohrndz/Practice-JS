/* 
.- Funciones Anónimas Autoejecutables [ https://developer.mozilla.org/es/docs/Glossary/IIFE ]

? Es un patrón de diseño también conocido cómo función autoejecutable (Self-Executing Anonymous Function (en-US)  )
? y se compone por dos partes. La primera es la función anónima con alcance léxico encerrado por el  Operador de
? Agrupación (). Esto impide accesar variables fuera del IIFE, así cómo contaminar el alcance (scope) global. 

(function () {
    statements
})();

! Las variables que sean declaradas dentro de una IIFE tienen el scope de la función.
*/

(function(){
    let variableIIFE = "Esta es una variable dentro de la funcion"
    console.log(variableIIFE);
    console.log("Mensaje dentro de una funcion autoejecutable");
})()

//console.log(variableIIFE);


// - En caso de querer almacenar un valor que sea regresado por una IIFE se puede guardar dentro de una variable.
let foo = (function(foo){

    return { 
        getFoo: function(){
            return foo;
        } 
    }

})(1);

console.log(foo.getFoo());

/*
! Console clear
*/
console.clear()