function holaMundo(e){
    alert("Hola Mundo!");
    console.log(e);
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