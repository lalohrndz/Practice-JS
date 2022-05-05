
let $btnStart = document.getElementById("initReloj").addEventListener("click",startClock),
    $btnStop = document.getElementById("stopReloj").addEventListener("click",stopClock),
    $clock = document.getElementById("Reloj"),
    isClockRunning;

let $btnStartAlarma = document.getElementById("initAlarma").addEventListener("click",initAlarm),
    $btnStopAlarma = document.getElementById("stopAlarma").addEventListener("click",stopAlarm);

function startClock(){
    if(!isClockRunning){
        isClockRunning = setInterval(initClock,1000);
    }
}

function initClock(){
    $clock.style.display = "block";
    let hora = new Date().toLocaleTimeString();
    $clock.innerHTML = `
    ${hora}
    `
}

function stopClock(){
    clearInterval(isClockRunning);
    isClockRunning = null;
    $clock.style.display = "none";
}

function initAlarm(){
    /*
    "Temary\Ejercicios_DOM\Assets\alarma-de-evacuacin-evacuacion.mp3"
    "Practice-JS\Temary\Ejercicios_DOM\Assets\alarma-de-evacuacin-evacuacion.mp3"
    'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
    */
    const sound = new Audio('Practice-JS\Temary\Ejercicios_DOM\Assets\alarma-de-evacuacin-evacuacion.mp3');
    sound.play();
}

function stopAlarm(){
    let alarma = new Audio(url);
    alarma.pause();
    isAlarmRunning = null;
}