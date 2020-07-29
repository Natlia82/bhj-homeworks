let ok = 0;
let no = 0;
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let i = 1; i < 10; i++) {
    let getHole = document.getElementById(`hole${i}`);
    getHole.onclick = function() {
        if (getHole.className.includes('hole_has-mole')) {
            ok++;
            // dead.textContent = ok;
        } else {
            no++;
            //lost.textContent = no;
        }
        if (ok === 10) {
            alert("Вы победитель");
            ok = 0;
            no = 0;
        }
        if (no === 5) {
            alert("мазила)");
            ok = 0;
            no = 0;
        }
        dead.textContent = ok;
        lost.textContent = no;
    }


}
/*
let i = 5;
const [`hole${i}`] = document.getElementById("hole1");
gg.onclick = function() {
    alert("clic");
}
*/