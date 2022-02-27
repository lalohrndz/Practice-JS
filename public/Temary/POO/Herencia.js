/* 
.- Herencia prototípica [ https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Inheritance ]


*/

function Perro(nombre,genero,tamano){
    this.super = Animal
    this.super(nombre,genero)
    this.tamano = tamano

}

//Perro esta herendando de Animal
// !Para más información, ver el archivo "Prototipos.js" en la carpeta de "EstructurasDeControl"
Perro.prototype = new Animal()
Perro.prototype.contructor = Perro()

//Sobre-escritura del método padre en hijo
Perro.prototype.sonar = function(){
    console.log("Soy un perro y mi sonido es un ladrido")
}

//Agregamos nuevo metodo
Perro.prototype.ladrar = function(){
    console.log("Wuau Wuau!")
}

const zuki = new Perro("Zuki","Macho","Mediano")
console.log(zuki)
zuki.ladrar()
zuki.sonar()

/* 
! Console clear
*/
console.clear()