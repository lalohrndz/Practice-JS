/* 
.- Primer Ej.
? 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

const nRandom = () =>{
    let nMin = document.getElementById("nMin-3-2-run").value;
    let nMax = document.getElementById("nMax-3-2-run").value;

    let n = Math.abs(Math.floor(Math.random() * (nMin - nMax)) - nMin);
    M.toast({html:`Your random number is: ${n}`});
}

/* 
.- Segundo Ej.
? 10) Programa una función que reciba un número y evalúe si es capicúa o no
? (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/

const nCapicua = () =>{
    let n = document.getElementById("number-3-2-run").value;
    
    let nSplitted = n.split("");
    let nReversed = nSplitted.reverse().join("");

    let result = (n == nReversed) ? M.toast({html:` ${n} is a capicua numbrer!`}) : M.toast({html:`${n} is NOT a capicua number`});
}

/* 
.- Tercer Ej.
? 11) Programa una función que calcule el factorial de un número (El factorial de un
? entero positivo n, se define como el producto de todos los números enteros positivos
? desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

const nFactorial = () =>{
    let n = document.getElementById("number-3-3-run").value;
    n = parseInt(n,10);
    nInit = n;

    if(n === 0 || n === 1){
        M.toast({html:`The factorial number is 1!`});
    }else if(n < 0){
        M.toast({html:`The number must be greater than zero.`});
    }else{
        let i = n;
        while(n > 1){
            i = i * (n - 1);
            n--;
        }
        M.toast({html:`The factorial number of ${nInit} is ${i}`});
    }
}