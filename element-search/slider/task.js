const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");

let picActive = document.getElementsByClassName("slider__item");
let pictures = Array.from(picActive);

next.onclick = function() {
    let activ = ElemetActiv();
    activ + 1 < picActive.length ? picActive[activ + 1].classList.add("slider__item_active") : picActive[0].classList.add("slider__item_active");

}

prev.onclick = function() {
    let activ = ElemetActiv();
    activ > 1 ? picActive[activ - 1].classList.add("slider__item_active") : picActive[picActive.length - 1].classList.add("slider__item_active");

}

function ElemetActiv() {
    console.log(picActive.length);
    let k = document.querySelector(".slider__item_active");
    let n = pictures.indexOf(k);
    k.classList.remove("slider__item_active");
    console.log(n);
    return n;
}