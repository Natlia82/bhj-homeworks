const ClassVisible = document.getElementById("modal_main").classList;
ClassVisible.add("modal_active");
const ClassShow = document.getElementById("modal_success").classList;

let ClasssClouse = document.querySelectorAll("div.modal__close");
for (let i = 0; i < ClasssClouse.length; i++) {
    ClasssClouse[i].onclick = function() {
        Clous(ClassVisible);
        Clous(ClassShow);

    }
}

let ClassNewVisible = document.getElementsByClassName('show-success');
ClassNewVisible[0].onclick = function() {
    Clous(ClassVisible);
    ClassShow.add("modal_active");
}


function Clous(ClassV) {
    if (ClassV.contains("modal_active")) {
        ClassV.remove("modal_active")
    }

}