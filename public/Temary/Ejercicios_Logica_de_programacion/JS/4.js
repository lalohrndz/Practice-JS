/* 
.- First Ex.
? 12) Programa una función que determine si un número es primo (aquel que solo es divisible
? por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/

const nPrime = () =>{
    let num = document.getElementById("number-4-1-run").value;
    num = parseInt(num);

    if(num <= 0){
        M.toast({html:`The number must be higher than zero.`});
    }else if(num === 1){
        M.toast({html:`The number 1 isn't a prime or composite number`});
    }else if(num <= 3){
        M.toast({html:`The number ${num} is prime`});
    }else if(num > 3){
        if(num % 2 != 0){
            M.toast({html:`The number ${num} is prime`});
        }else{
            M.toast({html:`The number ${num} is NOT prime`});
        }
    };
    
    console.log("First ex. - ",num);

}


/* 
.- Extra
*/

const rangeNPrime = () =>{
    let firstNum = document.getElementById("number-4-1_1-run").value;
    firstNum = parseInt(firstNum);
    let secondNum = document.getElementById("number-4-2_1-run").value;
    secondNum = parseInt(secondNum);

    let rangeNumbers = [];
    let primeNumbers = [];
    let compositeNumbers = [];

    if(firstNum < 0){
        M.toast({html:`The first number must be heigher than zero`});
        throw "The first number must be heigher than zero"
    }else if(secondNum < 0){
        M.toast({html:`The second number must be heigher than zero`});
        throw "The second number must be heigher than zero"
    }else{
        for (let i = firstNum; i <= secondNum; i++) {
            rangeNumbers.push(i);
        }
        console.log("Range - ",rangeNumbers);
        
        for (const number of rangeNumbers) {
            if(number === 1){
                M.toast({html:`The number 1 isn't a prime or composite number`});
            }else if(number <= 3){
                primeNumbers.push(number);
            }else if(number > 3){
                if(number % 2 != 0){
                    primeNumbers.push(number);
                }else{
                    compositeNumbers.push(number);
                }
            };
        };
        
        M.toast({html:`The primer numbers are: ${primeNumbers}`});
        M.toast({html:`The composite numbers are: ${compositeNumbers}`});
        
        console.log("Prime numbers - ", primeNumbers);
        console.log("Composite numbers - ", compositeNumbers);
    }
}

/* 
.- Second Ex.
? 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29)
? devolverá Impar.
*/

const nOddEven = () =>{
    let number = document.getElementById("number-4-2-run").value;
    number = parseInt(number);

    let isOdd = (number % 2 === 0) ? M.toast({html:`The number ${number} is Even!`}) : M.toast({html:`The number ${number} is Odd!`});

    console.log("Second ex. - ",number + " is ",isOdd);

}

/* 
.- Third Ex.
? 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.
? miFuncion(0,"C") devolverá 32°F.
*/

const degrees = () => {
    let number = document.getElementById("number-4-3-run").value;
    let degreeSelected_one = document.getElementById("degrees_one").value;
    let degreeSelected_two = document.getElementById("degrees_two").value;
    number = parseInt(number);
    degreeSelected_one = parseInt(degreeSelected_one);
    degreeSelected_two = parseInt(degreeSelected_two);

    if(degreeSelected_one === degreeSelected_two){
        M.toast({html:`The selection of degrees cannot be the same.`});
    }
    else if(degreeSelected_one === 1 && degreeSelected_two === 2){
        let result = (number * 9/5) + 32;
        M.toast({html:`The answer is: ${result}`});
        console.log("Third ex. - result: ",result);
    }
    else if(degreeSelected_one === 1 && degreeSelected_two === 3){
        let result = number + 273.15;
        M.toast({html:`The answer is: ${result}`});
        console.log("Third ex. - result: ",result);
    }
    else if(degreeSelected_one === 2 && degreeSelected_two === 3){
        let result = (number - 32) * 5/9 + 273.15;
        M.toast({html:`The answer is: ${result}`});
        console.log("Third ex. - result: ",result);
    }
    else if(degreeSelected_one === 2 && degreeSelected_two === 1){
        let result = (number - 32) * 5/9;
        M.toast({html:`The answer is: ${result}`});
        console.log("Third ex. - result: ",result);
    }
    else if(degreeSelected_one === 3 && degreeSelected_two === 2){
        let result = (number - 273.15) * 9/5 + 32;
        M.toast({html:`The answer is: ${result}`});
        console.log("Third ex. - result: ",result);
    }
    else if(degreeSelected_one === 3 && degreeSelected_two === 1){
        let result = number - 273.15;
        M.toast({html:`The answer is: ${result}`});
        console.log("Third ex. - result: ",result);
    }

}