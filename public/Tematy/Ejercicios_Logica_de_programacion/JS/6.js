/* 
.- First Ex.
? 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
? pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/

const nVocalCons = () =>{
    let text = document.getElementById("text-6-1-run").value;
    let textSplitted = text.split("");
    let regex = /[aeiouAEIOU]/;
    let vowels = [];
    let consonants = [];

    for(let letter = 0; letter < textSplitted.length; letter++){
        if(regex.test(textSplitted[letter])){
            vowels.push(textSplitted[letter]);
            console.log("First Ex. Is a vowel - ",textSplitted[letter]);
        }else{
            consonants.push(textSplitted[letter]);
            console.log("First Ex. Is a consonant - ",textSplitted[letter]);
        }
    }
    
    M.toast({html:`The text: ${text} has ${vowels.length} vowels and ${consonants.length} consonants.`});
}

/* 
.- Second Ex.
? 19) Programa una función que valide que un texto sea un nombre válido, pe.
? miFuncion("Jonathan MirCha") devolverá verdadero.
*/

const isValidText = ()=>{
    let text = document.getElementById("text-6-2-run").value;
    let regex = /[0-9,!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g.test(text);

    if(regex){
        M.toast({html:`The text "${text}" must have only alphabetical characters.`})
        console.log("Second Ex." , regex);
    }else{
        M.toast({html:`"${text}" is valid`})
        console.log("Second Ex." , regex);
    }

}

/*
.- Third Ex.
? 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

const isValidEmail = ()=>{
    let email = document.getElementById("text-6-3-run").value;
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

    if(regex){
        M.toast({html:`The email "${email}" is valid!`});
        console.log("Third Ex. - ", regex);
    }else{
        M.toast({html:`The email "${email}" is NOT valid!`});
        console.log("Third Ex. - ", regex);
    }
}