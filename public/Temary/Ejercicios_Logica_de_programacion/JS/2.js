/* 
.- Primer Ej.
? 5) Programa una función que invierta las palabras de una cadena de texto,
? pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

const reversedWord = () => {
    let text = document.getElementById("text-2-1-run").value;
    let splitedText = text.split("");
    let reversedText = splitedText.reverse().join("");

    M.toast({html: `The word "${text}" reversed is: ${reversedText}`});
    console.log("First ex - ", reversedText);
}

/* 
.- Segundo Ej.
? 6) Programa una función para contar el número de veces que se repite una
? palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

const nRepeatedWord = () =>{
    let text = document.getElementById("text-2-2-run").value;
    let searchWord = document.getElementById("word-2-2-run").value;
    
    let regex = new RegExp(`${searchWord}`,"ig");
    let Search = [...text.matchAll(regex)];

    M.toast({html: `From the text: "${text}"`});
    M.toast({html: `I found: ${Search.length} coincidence of the word "${searchWord}"`});
    console.log("Second Ex. - ",Search);
}

/* 
.- Tercer Ej.
? 7) Programa una función que valide si una palabra o frase dada, es un palíndromo
? (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

const palindrome = () => {
    let text = document.getElementById("text-2-3-run").value;
    text = text.toLowerCase();

    let regex = /[0-9,!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g.test(text)

    if(regex){
        M.toast({html: `The input does not admit numbers!`});
    }else if(text.length <= 2){
        M.toast({html: `The text must be longer than 2 characters!`});
    }else{
        let splittedText = text.split(" ").join("");
        let reversedText = splittedText.split("").reverse().join("");
    
        let isPalindrome = (splittedText == reversedText) ? M.toast({html: `The text: "${text}" IS a palindrome!`})
        : M.toast({html: `The text: "${text}" is NOT a palindrome!`});
        
        console.log("Third Ex. - ",splittedText);
        console.log("Third Ex. - ",reversedText);
    }
}

/* 
.- Cuarto Ej.
? 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
? pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

const deleteChar = () =>{
    let text = document.getElementById("text-2-4-run").value;
    let replaceText = document.getElementById("text2-2-4-run").value;
    let newText = text.replaceAll(replaceText,"");

    M.toast({html: `From the text: ${text} the word "${replaceText}" has been eliminated, the result is:`});
    M.toast({html: `${newText}`});

}