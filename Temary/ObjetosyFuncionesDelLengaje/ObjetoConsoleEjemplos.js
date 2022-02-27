/* 
.- Objeto Console [ https://developer.mozilla.org/es/docs/Web/API/Console ]
? provee acceso a la consola de depuración de los navegadores.

! Lista de todos los objetos de consola [ https://developer.mozilla.org/es/docs/Web/API/Console#m%C3%A9todos ]
*/

//console.log("Objetos de consola",console)
//console.log("Para ver como funciona en consola algún tipo de objeto escribe el nombre del objeto como si fuera funcion. EJ. error() o para ver el listado completo escribe en consola objetosConsole()")

const objetosConsole = () => {
console.log(console)

}

const assert = () => {
    console.clear()
    console.log(
        "%cconsole.assert()",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
    )

    console.log("Aparece un mensaje de error en la consola si la afirmación es falsa. Si la afirmación es verdadera, no aparecerá nada.")
    
    //Ejemplo en código
    const nAssert = [1,2,3,4]

    for (let i = 0; i < nAssert.length; i++) {
        if(nAssert[i] % 2 === 0){
            console.log(`El número ${nAssert[i]} es par`)
        }else{
            //- En este caso se esta haciendo dos veces la validación del modulo solamente para demostrar el tipo de validación que puede hacer
            console.assert(nAssert[i] % 2 === 0,`El número ${nAssert[i]} no es par!`)
        }
    }
    console.log("ver más...","https://developer.mozilla.org/es/docs/Web/API/console/assert")
}

const count = () => {
    console.clear()
    console.log(
        "%cconsole.count()",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
    )

    console.log("Registra el número de veces que se llama a count(). Esta función toma como argumento opcional una etiqueta.")

    //Ejemplo en código
    let user

    function greet() {
        console.count(user);
    }

    user = "bob";
    greet();

    user = "alice";
    greet();
    greet();
    
    console.log("ver más...","https://developer.mozilla.org/es/docs/Web/API/Console/count")
}

const dir = () => {
    console.clear()
    console.log(
        "%cconsole.dir()",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
    )

    console.log("despliega una lista interactiva de las propiedades del objeto JavaScript especificado. El resultado es presentado como un listado jerárquico con triángulos de despliegue que te dejan ver los contenidos de los objetos hijos.");
    //Ejemplo
    console.dir(document.location)
    console.log("ver más...","https://developer.mozilla.org/es/docs/Web/API/Console/dir");
}

const error = () => {
    console.clear()
    console.log(
        "%cconsole.error()",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
    )

    console.log("Muestra un mensaje de error en la Consola Web.");
    //Ejemplo
    console.error("Así se ve un mensaje de error personalizado en consola.");
    console.log("ver más...","https://developer.mozilla.org/es/docs/Web/API/Console/error")
}

const group = () =>{
    console.clear()
    console.log(
        "%cconsole.group()",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
    )

    console.log("Crea un grupo de logs que puede tener múltiples niveles por grupo");
    //Ejemplo
    console.group("Grupo principal");
        console.log("Log perteneciente al grupo principal");
            console.group("Grupo de segundo nivel");
                console.log("Log perteneciente al segundo grupo");
                console.warn("Una advertencia en el segundo grupo");
            console.groupEnd();
        console.log("Se cierra el segundo grupo");
        console.groupEnd();
    console.log("De regreso al grupo principal");

    console.log("ver más...","https://developer.mozilla.org/en-US/docs/Web/API/console/group");
}

const groupCollapsed = () => {
    console.clear()
    console.log(
        "%cconsole.groupCollapsed()",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
    )

    console.log("Similar al método group; con diferencia que agrupa de forma colapsada los logs que se encuentren dentro del grupo.");

    //Ejemplo
    console.groupCollapsed("Grupo principal");
        console.log("Log perteneciente al grupo principal");
            console.group("Grupo de segundo nivel");
                console.log("Log perteneciente al segundo grupo");
                console.warn("Una advertencia en el segundo grupo");
            console.groupEnd();
        console.log("Se cierra el segundo grupo");
        console.groupEnd();
    console.log("De regreso al grupo principal");

    console.log("ver más...","https://developer.mozilla.org/en-US/docs/Web/API/console/groupCollapsed");
}

const info = () =>{
    console.clear()
    console.log(
        "%cconsole.info()",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
    )

    console.log("mensaje con fin informativo con un icono");
    console.log("ver más...","https://developer.mozilla.org/es/docs/Web/API/Console/info");
}

const log = () =>{
    console.clear()
    console.log(
        "%cconsole.log()",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
    )

    console.log("Despliega un mensaje en consola; éste tiene la característica de poder represetnar una lista de parámetros como el usuario lo necesite.");
    console.log("ver más...","https://developer.mozilla.org/es/docs/Web/API/Console/log");
}

const profile = () =>{
    console.clear()
    console.log(
        "%cconsole.profile()",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
    )
    
    //Ejemplo [ https://stackoverflow.com/questions/49502744/how-to-see-results-of-console-profile ]
    function profileTest(callback) {      
        let i = 0;
        let work = setInterval(function() {         
            if(i == 3) {
               callback();
               clearInterval(work);        
               return;     
            }
            console.log('Doing some work..');
            i = i + 1;
        }, 1000);     
      }
      
      console.profile("profileTest()");
      profileTest(function(){
        console.profileEnd();
      });

    console.log("Recolecta información sobre el rendimiento de un perfil. Éste puede ser utilizado para poder medir velocidad en callbacks");
    console.log("ver más...","https://developer.mozilla.org/en-US/docs/Web/API/console/profile");
}

const table = () =>{
    console.clear()
    console.log(
        "%cconsole.table()",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
    )
    
    console.log("Tabla de mascotas.")
    const maya={
        nombre:"Maya",
        raza:"Salchicha"
    }
    
    const kiara={
        nombre:"Kiara",
        raza:"Pitbull"
    }

    console.log("Esta función toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parámetro adicional: columns.");

    console.table([maya,kiara])
    console.log("ver más...","https://developer.mozilla.org/es/docs/Web/API/Console/table");
}

const time = () => {
    console.clear()
    console.log(
        "%cconsole.time()",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
    )

    console.log("Inicia un temporizador que puede usar para realizar un seguimiento de la duración de una operación. Le da a cada temporizador un nombre único y puede tener hasta 10.000 temporizadores ejecutándose en una página determinada");

    //Ejemplo [ https://www.w3schools.com/jsref/met_console_time.asp ]
    console.time();
    for (let i = 0; i < 1000000; i++) {
    // some code
    }
    console.timeEnd();

    console.log("ver más...","https://developer.mozilla.org/es/docs/Web/API/Console/time");
}

const warn = () => {
    console.clear()
    console.log(
        "%cconsole.warn()",
        "color:#eec822; font-size:20px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
    )

    console.log("Imprime un mensaje de advertencia en la Consola Web.");

    console.warn("Este es un mensaje de advertencia en la consola");

    console.log("ver más...","https://developer.mozilla.org/es/docs/Web/API/Console/time");   
}
