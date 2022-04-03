/* 
.- Eventos JS [ https://developer.mozilla.org/es/docs/Web/Events ]
? Los eventos se envían para notificar al código de cosas interesantes
? que han ocurrido. Cada evento está representado por un objeto que se
? basa en la interfaz Event, y puede tener campos y/o funciones
? personalizadas adicionales para obtener más información acerca de lo sucedido.
*/

function holaMundo(e){
    alert("Hola Mundo!");
    console.log(e);
}

function saludar(nombre = "desconocido(a)"){
    alert(`Hola ${nombre}`);
}


const $btnEventoSemantico = document.getElementById("eventoSemantico");

$btnEventoSemantico.onclick = holaMundo;
$btnEventoSemantico.onclick = function(e){
    alert("Hola mundo, manejador de eventos semánticos");
    console.log(e);
};

const $btnEventoMultiple = document.getElementById("eventoMultiple");

$btnEventoMultiple.addEventListener("click",(e)=>{
    alert("Manejador de eventos múltiples");
    console.log(e);
    console.log(e.target);
    console.log(e.type);
});

$btnEventoMultiple.addEventListener("click",holaMundo);

$btnEventoMultiple.addEventListener("click",()=>{
    saludar();
    saludar("lalo");
});

const $eventoRemover = document.getElementById("removedorEventos");

const removerDobleClick = (event)=>{
    alert("Removiendo el evento de tipo ",event.type);
    console.log(event.type);
    $eventoRemover.removeEventListener("dblclick",removerDobleClick);
};

$eventoRemover.addEventListener("dblclick",removerDobleClick)