/* 
.- [ https://jonmircha.com/javascript-asincrono ]

.- Procesamiento Single Thread & Multi Thread

.- ** Threads [ https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Concepts#threads ]
? Un hilo (thread) es básicamente un proceso simple que un programa puede usar para completar tareas ("tasks").
? Cada hilo solo puede realizar una tarea a la vez
- Task A --> Task B --> Task C

.- ** Web Workers 
.- [ https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API ]
.- [ https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Concepts#c%C3%B3digo_asincr%C3%B3nico ]
? Permiten que se envíe parte del procesamiento de JavaScript a un hilo separado, llamado worker con el fin de que
? puedan ejecutar múltiples pedazos de JavaScript en simultáneo.
- Main thread: Task A --> Task C
- Worker thread: Expensive task B
! ejemplo [ https://mdn.github.io/learning-area/javascript/asynchronous/introducing/simple-sync-worker.html ]
*/

/* 
.- código síncrono y bloqueante
*/

(()=>{
    console.log("-- código síncrono --");
    console.log("Inicio");

    function dos(){
        console.log("Dos");
    }

    function uno(){
        console.log("Uno");
        dos();
        console.log("Tres");
    }
    uno();
    console.log("-- Fin --");
})();

/* 
.- código asíncrono NO bloqueante
*/

(()=>{
    console.log("-- Código asíncrono --");
    console.log("Inicio");

    function dos(){
        setTimeout(function() {
            console.log("Dos");
        }, 1000);
    }

    function uno(){
        setTimeout(() => {
            console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
    }

    uno();
    console.log("-- Fin --");
})();