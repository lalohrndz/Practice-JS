/* 
.- Clases [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes ]

? Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica sobre la
? herencia basada en prototipos de JavaScript. La sintaxis de las clases no introduce un nuevo
? modelo de herencia orientada a objetos en JavaScript. Las clases de JavaScript proveen una
? sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
}

- El constructor es un método especial que se ejecuta en el momento de instanciar la clase

*/

class Animal2{
    constructor(nombre,genero){
        this.nombre = nombre
        this.genero = genero
    }

    saludar(){
        console.log(`Me llamo ${this.nombre} y soy un animal`)
    }

    sonar(){
        console.log("Soy un animal y hago un sonido")
    }
}

const mimi = new Animal2("mimi","hembra"),
      scooby = new Animal2("scooby","macho")

console.log(mimi)
console.log(scooby)

mimi.sonar()
mimi.saludar()
scooby.sonar()
scooby.saludar()

/* 
! Console clear
*/
console.clear()

/*
.- extends [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/extends ]
? Es la forma en la que las clases heredan de otras clases.

.- super [ https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/super ]
? Es la forma en la que llamamos al contructor de la clase padre
*/

class Perro2 extends Animal2{
    constructor(nombre,genero,tamano){
        super(nombre,genero)
        this.tamano = tamano
    }

    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido")
    }

    ladrar(){
        console.log("guau guau")
    }
}

scooby2 = new Perro2("scooby2","macho","gigante")

scooby2.saludar()
scooby2.sonar()
scooby2.ladrar()
console.log(scooby2)
      
/* 
! Console clear
*/
console.clear()