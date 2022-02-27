
let num1 = 2;
let num2 = new Number(1);
let num3 = 7.19
let num4 = "2.4"

console.log(num1,num2)

console.log("num3 toFixed(1) - ",num3.toFixed(1))
console.log("num3 toFixed(5) - ",num3.toFixed(5))
console.log("num3 parseInt - ",parseInt(num3))
console.log("num3 parseFloat - ",parseFloat(num3))
console.log("num3 typeof", typeof(num3))
console.log("num1 + num2 : ", num1 + num2)
console.log("num3 + num4 donde el num4 (2.4) es texto: ", num3 + num4)
console.log("[parseInt] num3 + num4 :", num3 + parseInt(num4))
console.log("[parseFloat] num3 + num4 :", num3 + parseFloat(num4))

/* 
! Consle clear
*/
console.clear();