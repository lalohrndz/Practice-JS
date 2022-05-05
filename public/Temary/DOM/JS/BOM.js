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

const $btnAbrir = document.getElementById("abrir"),
      $btnCerrar = document.getElementById("cerrar"),
      $btnImprimir = document.getElementById("imprimir");

let ventana;


$btnAbrir.addEventListener("click",e=>{
    //Se guarda en una referencia la ventana que se abre para que posteriormente se
    //pueda identificar por medio de la variable la ventana que se abrió
    ventana = window.open("https://eduardopastor.tech/");
});

$btnCerrar.addEventListener("click",e=>{
    ventana.close();
});

$btnImprimir.addEventListener("click",e=>{
    window.print();
});
/* 
Btn limpiar consola
*/

$btnLimpiar = document.getElementById("clear");

$btnLimpiar.addEventListener("click",e=>{
    console.clear();
})

/* 
.- URL | Historial | Navegador

.- Location [ https://developer.mozilla.org/es/docs/Web/API/Location ]
*/
const $objsNav = document.getElementById("objsNav");

$objsNav.addEventListener("click",e=>{
    console.log("**** Objeto URL - Location ****");
    console.log(window.location);
    console.table({
        "location.origin":location.origin,
        "location.protocol":location.protocol,
        "location.host":location.host,
        "location.hostname":location.hostname,
        "location.port":location.port,
        "location.href":location.href,
        "location.hash":location.hash,
        "location.pathname":location.pathname,
    })
})

/* 
.- Historial [ https://developer.mozilla.org/es/docs/Web/API/History_API ]
? Retroceder y avanzar a través del historial del usuario utilizando los métodos:
- back()
- forward()
- go()
*/

$btnHistoria = document.getElementById("historia");
$btnHistoria.addEventListener("click",e=>{
    console.log(window.history)
})

/* 
.- Navegator [ https://developer.mozilla.org/es/docs/Web/API/Navigator ]
? La interfaz Navigator representa el estado y la identidad del user agent.
? Es completamente consultable y es posible registrar scripts para que ejecuten diversas actividades.
*/
$btnNavigator = document.getElementById("navegador")
$btnNavigator.addEventListener("click",e=>{
    console.log(window.navigator);
    console.table({
        "navigator.connection":navigator.connection,
        "navigator.geolacation":navigator.geolacation,
        "navigator.mediaDevices":navigator.mediaDevices,
        "navigator.mimeTypes":navigator.mimeTypes,
        "navigator.onLine":navigator.onLine,
        "navigator.serviceWorker":navigator.serviceWorker,
        "navigator.storage":navigator.storage,
        "navigator.storage":navigator.storage,
        "navigator.userAgent":navigator.userAgent,
    })
})