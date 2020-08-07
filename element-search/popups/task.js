const ClassVisible = document.getElementById("modal_main");
ClassVisible.className += " modal_active";

const IdNewVisible = document.getElementById("modal_success");

let ClassNewVisible = document.getElementsByClassName('show-success');
ClassNewVisible[0].onclick = function() {
    IdNewVisible.className += " modal_active";
}


let ClasssClouse = document.querySelectorAll("div.modal__close");
for (let i = 0; i < ClasssClouse.length; i++) {
    ClasssClouse[i].onclick = function() {

        ClassVisible.className = "modal";

    }
}