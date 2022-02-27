/* 
.- Prototipos en JavaScript [ https://developer.mozilla.org/es/docs/Web/JavaScript/Inheritance_and_the_prototype_chain ]

? Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí

.- Programación Orientada a Objetos

- Clase [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes ]
? Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica sobre la herencia basada
? en prototipos de JavaScript. La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a
? objetos en JavaScript. Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos
? y lidiar con la herencia.

- Objetos [ https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects ]
? En JavaScript, un objeto es un entidad independiente con propiedades y tipos. Compáralo con una taza, por ejemplo.
? Una taza es un objeto con propiedades. Una taza tiene un color, un diseño, un peso, un material del que está hecha,
? etc. Del mismo modo, los objetos de JavaScript pueden tener propiedades que definan sus características.

- Atributos
? Es una caraterística o propiedad del objeto (son variables dentro de un objeto)

- Métodos
? Son las acciones que un objeto puede realizar (son funciones dentro de un objeto)

*/

const animal = {
    nombre: "Kiara",
    sonar(){
        console.log("Hago un sonido!")
    }
}

/* 
.- Funciones contructoras [ https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object-oriented_JS#constructores_e_instancias_de_objetos ]

? Es sólo azúcar sintáctica sobre la herencia prototípica existente y no es una class en el sentido tradicional.
? JavaScript, utiliza funciones especiales llamadas funciones constructoras para definir objetos y sus características.

function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
  return obj;
}
*/

function Animal (nombre,genero){
    //Atributos
    this.nombre = nombre
    this.genero = genero

}

/*
.- Métodos en el prototipo
? Asignamos los métodos al prototipo para evitar que los objetos que se creen de la funcion constructora se lleven solamente
? los atributos y no repliquen los métodos (así salvando espacio en memoria y dando rendimiento al programa)

(Nombre de funcion contructora).prototype.(Nombre de método) = function(){
    ...
}

*/

Animal.prototype.sonar = function (){
    console.log(`Me llamo ${nombre} y hago un sonido!`)
}

const kiara = new Animal("Kiara","Hembra"),
      Maya = new Animal("Maya","Hembra")

    
console.log(kiara)
console.log(Maya)

kiara.sonar()
Maya.sonar()

/* 
! Console clear
*/
console.clear()