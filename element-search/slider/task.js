const prev = document.getElementsByClassName("slider__arrow_prev");
const next = document.getElementsByClassName("slider__arrow_next");
let n = 0;
let pictures = document.getElementsByClassName("slider__item");
let number = pictures.length;

function funNext() {
    pictures[n].className = "slider__item";
    n++;
    if (n === number) {
        n = 0;
    }
    pictures[n].className += " slider__item_active";
}

function funPrev() {
    pictures[n].className = "slider__item";
    n--;
    if (n < 0) {
        n = number - 1;
    }
    pictures[n].className += " slider__item_active";
}

prev[0].onclick = function() {
    funPrev();
}

next[0].onclick = function() {
    funNext();
}