/* 
.- Map [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map ]
? El método map() crea un nuevo array con los resultados de la llamada a la función indicada
? aplicados a cada uno de sus elementos.

-- var numbers = [1, 5, 10, 15];
-- var doubles = numbers.map(function(x) {
--    return x * 2;
-- });
-- 
-- doubles is now [2, 10, 20, 30]
-- numbers is still [1, 5, 10, 15]
*/

var kvArray = [{clave:1, valor:10},
    {clave:2, valor:20},
    {clave:3, valor: 30}];

var reformattedArray = kvArray.map(function(obj){
var rObj = {};
rObj[obj.clave] = obj.valor;
return rObj;
});


console.log("kvArray - ", kvArray);
console.log("reformattedArray - ", reformattedArray);