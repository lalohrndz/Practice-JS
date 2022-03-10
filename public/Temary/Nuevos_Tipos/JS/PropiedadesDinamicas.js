const objUsuario = {
    [`id_${Math.round(Math.random()*100+5)}`]:"valor dinámico"
};

console.log(objUsuario);

const usuarios = ["pepe","lalo","blanca","Dari","kiara"];


usuarios.forEach((usuario,index) => [objUsuario[`id_${index}`]=usuario]);

console.log(objUsuario);