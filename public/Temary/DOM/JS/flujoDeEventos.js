let $divEventos = document.querySelectorAll(".eventos");

console.log($divEventos);
$divEventos.forEach((e)=>{
    console.log(e.id);
})

$divEventos.forEach((div)=>{
    div.addEventListener("click",flujoEventos(div.id))
})

function flujoEventos(e){
    console.log(`Hola, te saludo desde ${e}`);
    e.stopPropagation();
}