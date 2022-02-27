/* 
.- Métodos estáticos [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/static ]
- Un método estático se puede ejecutar sin necesidad de instanciar la clase.

? Los métodos estáticos son llamados sin instanciar su clase.
? Son habitualmente utilizados para crear funciones para una aplicación


.- ** Getter & Setters **
- Son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase


.- Getter [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/get ]
? Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada.
? A veces es deseable permitir acceso a una propiedad que retorna un valor dinámicamente calculado,
? o si desea mostrar el estado de alguna variable interna sin requerir el uso de llamadas a métodos explícitos.

! Sintaxis
- Puede tener un identificador que sea un número o una cadena.
- Debe tener exactamente cero parametros.
- No debe haber múltiples getters para una misma propiedad.
  { get x() { }, get x() { } } y { x: ..., get x() { } } están prohibidos


.- Setter [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/set ]
? La sintaxis  set  asocia la propiedad de un objeto a una función que será llamada cuando haya un intento
? de asignar valor a esa propiedad.

! Sintaxis
- Puede tener un identificador ya sea number o string;
- Debe tener exactamente un parámentro
- No debe aparecer en un objeto de notación literal con otro set o con otra entrada de datos con la misma propiedad.
  { set x(v) { }, set x(v) { } } y { x: ..., set x(v) { } } Están prohibidos.
*/

class Perro3 extends Animal{
    constructor(nombre,genero,tamano){
        super(nombre,genero)
        this.tamano = tamano
        this.raza = null
    }

    static queEres(){
        console.log("Los perros somos unos animales mamiferos")
    }

    get getRaza(){
        return this.raza
    }

    set setRaza(raza){
        this.raza = raza
    }
}

Perro3.queEres()
const makena = new Perro3("Makena","hembra","gigante")

// - A pesar de que los getter y setters son métodos JS los maneja como si fueran propiedades de una clase; por lo tanto
// - estos NO llevan los paréntesis
console.log(makena.getRaza)

makena.setRaza = "San Bernardo"
console.log("Raza de makena: ",makena.getRaza)

/* 
! Console clear
*/
console.clear()