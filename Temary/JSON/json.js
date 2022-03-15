/* 
.- JSON [ https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON ]
? Es un formato basado en texto estándar para representar datos estructurados en
? la sintaxis de objetos de JavaScript. Es comúnmente utilizado para transmitir
? datos en aplicaciones web.

! Estructura del JSON
? Como se describió previamente, un JSON es una cadena cuyo formato recuerda al
? de los objetos literales JavaScript. Es posible incluir los mismos tipos de datos
? básicos dentro de un JSON que en un objeto estándar de JavaScript - cadenas,
? números, arreglos, booleanos, y otros literales de objeto. Esto permite construir
? una jerarquía de datos, como ésta:

- {
-   "squadName": "Super hero squad",
-   "homeTown": "Metro City",
-   "formed": 2016,
-   "secretBase": "Super tower",
-   "active": true,
-   "members": [
-     {
-       "name": "Molecule Man",
-       "age": 29,
-       "secretIdentity": "Dan Jukes",
-       "powers": [
-         "Radiation resistance",
-         "Turning tiny",
-         "Radiation blast"
-       ]
-     },
-     {
-       "name": "Madame Uppercut",
-       "age": 39,
-       "secretIdentity": "Jane Wilson",
-       "powers": [
-         "Million tonne punch",
-         "Damage resistance",
-         "Superhuman reflexes"
-       ]
-     },
-     {
-       "name": "Eternal Flame",
-       "age": 1000000,
-       "secretIdentity": "Unknown",
-       "powers": [
-         "Immortality",
-         "Heat Immunity",
-         "Inferno",
-         "Teleportation",
-         "Interdimensional travel"
-       ]
-     }
-   ]
- }
*/

const json = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
        ]
        },
        {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]
        },
        {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Interdimensional travel"
        ]
        }
    ]
    
}
console.log(JSON);

console.log("- Parse -");
console.log(json);
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("19"));
console.log(JSON.parse("null"));
console.log(JSON.parse(' "Hola mundo" '));

/* 
.- Stringify [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify ]
? El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
*/
console.log("- Stringify -");
console.log(JSON.stringify(json));
console.log(JSON.stringify({}));
console.log(JSON.stringify([1,2,3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(19));
console.log(JSON.stringify(null));
console.log(JSON.stringify("hola mundo"));
