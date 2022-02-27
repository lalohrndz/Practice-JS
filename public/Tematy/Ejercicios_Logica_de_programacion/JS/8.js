/*
.-First Ex. 
? Programa una función que dado un arreglo de números devuelva un objeto con dos
? arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo
? de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá
?{ asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/
let userList = [];
let ascNumbers = [];
let descNumbers = [];

const ascDescNumbers = (number) =>{
    this.number = number;
    number = parseInt(number);
    let userResultList = document.getElementById("userList");
    let ascResultNumbers = document.getElementById("ascResultNumbers");
    let descResultNumbers = document.getElementById("descResultNumbers");

    userList.push(number);
    userResultList.innerHTML = `<p>${userList}</p>`;

    ascNumbers = userList.sort(function(fisrtNumber,secondNumber){
        return fisrtNumber - secondNumber;
    });
    ascResultNumbers.innerHTML = `<p>${ascNumbers}</p>`;
    
    descNumbers = userList.sort(function(fisrtNumber,secondNumber){
        return secondNumber - fisrtNumber;
    });
    descResultNumbers.innerHTML = `<p>${descNumbers}</p>`;
    M.toast({html:`The asc numbers are: ${ascNumbers}`});
    M.toast({html:`The desc numbers are: ${descNumbers}`});
    console.log("First Ex. - ",userList);
    console.log("First Ex. - ",ascNumbers);
    console.log("First Ex. - ",descNumbers);
}

/* 
.- Second Ex.
? Programa una función que dado un arreglo de elementos, elimine los duplicados,
? pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/

/* 
.- Set JS [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set ]
.- Set to Array [ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from ]
*/
let charFilteredList = new Set;
let charList = [];
let resultList =[];

const deleteRepeatedChars = (char) =>{
    this.char = char;
    let userList = document.getElementById("charList");
    let resultCharList = document.getElementById("resultList");
    
    charFilteredList.add(char);
    charList.push(char);

    /* resultList = [... charFilteredList]; */
    resultList = Array.from(charFilteredList);

    userList.innerHTML = `<p>${charList}</p>`;
    resultCharList.innerHTML = `<p>${resultList}</p>`
}

/* 
.-Third Ex.
? Programa una función que dado un arreglo de números obtenga el promedio,
? pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

const numbers = [];

const promedio = (number)=>{
    this.number = number;
    number = parseInt(number);
    let numberList = document.getElementById("numberList");
    let resultadoPromedio = document.getElementById("resultadoPromedio");
    let promedio;
    let index = 0;
    
    numbers.push(number);
    numberList.innerHTML = `<p>${numbers}</p>`

    promedio = numbers.reduce((lastNumber,currentNumber)=>lastNumber + currentNumber,index);
    result = promedio / numbers.length;
    resultadoPromedio.innerHTML = `<p>${result}</p>`;

    console.log("number list: ",numbers);
    console.log("promedio: ",promedio);
    console.log("result: ",result);

}