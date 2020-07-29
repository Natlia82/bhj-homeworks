const timerSec = document.getElementById("timer")
let sec = timerSec.textContent;

function getTime() {
    sec--;
    timerSec.textContent = sec;
    if (sec === 0) {
        clearInterval(id);
        alert("Вы победили в конкурсе!");
    }
}

let id = setInterval(getTime, 100);