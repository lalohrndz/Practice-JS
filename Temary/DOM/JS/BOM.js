/* 
.- BOM (Browser Objet Model) [ https://developer.mozilla.org/es/docs/Web/API/Window ]
*/

window.addEventListener("resize",(e)=>{
    console.clear();
    console.log("Evento Resize");
    console.log("window.innerHeight - ",window.innerHeight);
    console.log("window.innerWidth - ",window.innerWidth);
    console.log("window.outerHeight - ",window.outerHeight);
    console.log("window.outerWidth - ",window.outerWidth);
    console.log(e);
})

window.addEventListener("scroll",(e)=>{
    console.clear();
    console.log("Evento Scroll");
    console.log("window.scrollX - ",window.scrollX);
    console.log("window.scrollY - ",window.scrollY);
    console.log(e);
})

window.addEventListener("load",(e)=>{
    console.log("Evento Load");
    console.log("window.screenX - ",window.screenX);
    console.log("window.screenY - ",window.screenY);
    console.log(e);
})

document.addEventListener("DOMContentLoaded",e=>{
    console.log("Evento DOMContentLoaded");
    console.log("window.screenX - ",window.screenX);
    console.log("window.screenY - ",window.screenY);
    console.log(e);
})