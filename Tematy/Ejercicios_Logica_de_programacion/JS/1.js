/* 
.- Primer ej.
? 1) Programa una función que cuente el número de caracteres de una cadena de texto,
? pe. miFuncion("Hola Mundo") devolverá 10.
*/
const nCaracteres = () => {
    let text = document.getElementById("text-1-1-run").value;
    M.toast({html: `The word "${text}" has ${text.length} characters`});
    console.log("Primer ejercicio - ",text.length);
} 

/* 
.- Segundo Ej.
? 2) Programa una función que te devuelva el texto recortado según el número de caracteres
? indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

const nSliceCaracteres = () =>{
    let text = document.getElementById("text-1-2-run").value;
    let number = document.getElementById("number-1-2-run").value;
    let slicedText = text.slice(0,number);
    M.toast({html:`From the text "${text}", if we delimit ${number} characters, this is the answer: ${slicedText}`});
    console.log("Segundo ejercicio - ",slicedText);
}

/* 
.- Tercer Ej.
? 3) Programa una función que dada una String te devuelva un Array de textos separados por
? cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

const splitCaracteres = () =>{
    let text = document.getElementById("text-1-3-run").value;
    let char = document.getElementById("char-1-3-run").value;
    let splitedText = text.split(char);
    M.toast({html:`From the text: ${text} the array returns: ${splitedText}`})
    console.log("Tercer ejercicio - ",splitedText);
}

/* 
.- Cuarto Ej.
? 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá
? Hola Mundo Hola Mundo Hola Mundo.
*/

const wordRepeater = () => {
    let text = document.getElementById("text-1-4-run").value;
    let number = document.getElementById("num-1-4-run").value;
    let textRepeated = text.repeat(number);
    M.toast({html:`${textRepeated}`});
    console.log("Cuarto ejercicio - ",textRepeated);
}