/* 
.- First Ex.
? 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe.
? miFuncion(100,2) devolverá 4 base 10.
*/

const binToDec = ()=>{
    let num = document.getElementById("num-5-1-run").value;
    let baseToConvert = document.getElementById("baseNumber").value;

    num = parseInt(num);
    baseToConvert = parseInt(baseToConvert);

    if(baseToConvert === 1){
        //convert to binary
        let result = num >>> 0;
        M.toast({html:`The nummber ${num} to binary is: ${result.toString(2)}`});
        console.log("First ex. - To binary",result.toString(2));
    }   
    else{
        //Convert to decimal
        num = num.toString();
        let splittedNum = num.split("").reverse();
        let result= 0;
        
        for (let i = 0; i < splittedNum.length; i++) {
            let actualVal = splittedNum[i] * Math.pow(2,i);
            result = result + actualVal;
            console.log("First ex - iterator: ",i," number: ",splittedNum[i], "actual val: ", actualVal, " result: ",result);
        }
        M.toast({html:`The nummber ${num} to decimal is: ${result}`});
    };

}

/* 
.- Second Ex.
? 16) Programa una función que devuelva el monto final después de aplicar un descuento a una
? cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/
const descount = ()=>{
    let totalNumber = document.getElementById("num-5-2-run").value;
    let descountNumber = document.getElementById("num_2-5-2-run").value;

    totalNumber = parseInt(totalNumber);
    descountNumber = parseInt(descountNumber);

    if(totalNumber && descountNumber <= 0){
        M.toast({html:`The number must be greater than zero.`});
    }else{
        result = totalNumber - ((totalNumber * descountNumber) / 100);
        M.toast({html:`El ${descountNumber}% de ${totalNumber} es: ${result}`});
        console.log("Second ex - ",result);
    }


}
/* 
.- Extra Ex.
? 16) Programa una calculadora de propinas; ésta debe de tomar en cuenta el monto de la cuenta,
? el porcentaje de propina y el número de personas que van a cooperar para la cuenta. Al final
? debe de regresar el total con la propina incluida y en caso de haber más de una persona
? cooperando el monto dividido de la cuenta
*/

const tipCalculator = () =>{
    let totalNumber = document.getElementById("num-5-2_1-run").value;
    let tipNumber = document.getElementById("num-5-2_2-run").value;
    let peopleNumber = document.getElementById("num-5-2_3-run").value;

    totalNumber = parseInt(totalNumber);
    tipNumber = parseInt(tipNumber);
    peopleNumber = parseInt(peopleNumber);

    let tip = (totalNumber * tipNumber) / 100;
    let totalTicket = totalNumber + tip;
    let totalPerPerson = totalTicket / peopleNumber;

    M.toast({html:`The amount of the ticket: ${totalNumber}`});
    M.toast({html:`Tip %: ${tipNumber}%`});
    M.toast({html:`Total of the ticket with the tip: ${totalTicket}`});
    M.toast({html:`People on count: ${peopleNumber}`});
    M.toast({html:`Total per person: ${totalPerPerson}`});

    console.group("Extra ex.");
    console.log("total: ",totalNumber);
    console.log("propa: ",tip);
    console.log("total ticket: ",totalTicket);
    console.log("Per person: ",totalPerPerson);
    console.groupEnd();
}

/* 
.- Third Ex.
? 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta
? el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

const yearsToNow = () =>{
    let inputDate = new Date(document.getElementById("date-5-3-run").value);
    let todayYear = new Date().getFullYear();

    let inputYear = new Date(inputDate).getFullYear();
    let result = todayYear - inputYear;

    M.toast({html:`From ${inputYear} to ${todayYear} has been ${result} years.`});

    console.log("Third ex. today year - ",todayYear);
    console.log("Third ex. input year -",inputYear);
    console.log("Third ex. year difference -",result);


}