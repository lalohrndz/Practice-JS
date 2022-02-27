/*
.- First Ex.
? Programa una función que dado un array numérico devuelve otro array con los
?números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/
let userNumber = [];
let calcNumbers = [];

const risedNumbers = (isNumberAdded,number) =>{
    this.isNumberAdded = isNumberAdded;
    this.number = number;
    let userList = document.getElementById("userList");
    let raisedList = document.getElementById("raisedList");

    if(isNumberAdded){
        userNumber.push(number);
        userList.innerHTML = `<p>${userNumber}</p>`;
        console.log("First Ex. - ",userNumber);
    }else{
        calcNumbers = userNumber.map(raiseNumbers);
        raisedList.innerHTML = `<p>${calcNumbers}</p>`;
        console.log(calcNumbers);
    }
}

const raiseNumbers = (number) =>{
    this.number = number;
    return Math.pow(number,2);
}

/* 
.- Second Ex.
? Programa una función que dado un array devuelva el número mas alto y el más
? bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/
let userNumber2 = [];
let calcNumbers2 = [];
const numbersList = (isNumberAdded,number) => {
    this.isNumberAdded = isNumberAdded;
    this.number = number;
    let userList2 = document.getElementById("userList2");
    let resultNumberList = document.getElementById("resultNumbersList");

    if(isNumberAdded){
        userNumber2.push(number);
        calcNumbers2.push(number);
        userList2.innerHTML = `<p>${userNumber2}</p>`;
        console.log("Second Ex. - ", userNumber2);
    }else{
        calcNumbers2.sort(function(firstNum,secondNum){return firstNum - secondNum});
        resultNumberList.innerHTML = `<p>${calcNumbers2[0]},${calcNumbers2[calcNumbers2.length - 1]}</p>`
    }
}

/* 
.- Third Ex.
? Programa una función que dado un array de números devuelva un objeto con 2
? arreglos en el primero almacena los números pares y en el segundo los impares,
? pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

let userList = [];
let oddList = [];
let evenList = [];
const oddOrEven = (number) =>{
    this.number = number;
    let userList3 = document.getElementById("userList3");
    let evenResultList = document.getElementById("evenResultList");
    let oddResultList = document.getElementById("oddResultList");

    userList.push(number);
    userList3.innerHTML = `<p>${userList}</p>`;
    if(number%2===0){
        evenList.push(number);
        evenResultList.innerHTML = `<p>${evenList}</p>`;
        console.log("Third ex. - ",evenList);
    }else{
        oddList.push(number);
        oddResultList.innerHTML = `<p>${oddList}</p>`;
        console.log("Third ex. - ",oddList);
    }
}