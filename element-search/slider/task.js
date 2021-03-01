const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");

let picActive = document.getElementsByClassName("slider__item");
let pictures = Array.from(picActive);

next.onclick = function() {
    let activ = ElemetNoActiv();
    if (activ + 1 < picActive.length) {
        picActive[activ + 1].classList.add("slider__item_active");
        ElementSlider(activ + 1);
    } else {
        picActive[0].classList.add("slider__item_active");
        ElementSlider(0);
    }


}

prev.onclick = function() {
    let activ = ElemetNoActiv();
    if (activ > 1) {
        picActive[activ - 1].classList.add("slider__item_active");
        ElementSlider(activ - 1);
    } else {
        picActive[picActive.length - 1].classList.add("slider__item_active");
        ElementSlider(picActive.length - 1);
    }


}


let sliderActiv = document.getElementsByClassName("slider__dot");
sliderActiv[0].classList.add("slider__dot_active");
let sliderMass = Array.from(sliderActiv);
for (let i = 0; i < sliderActiv.length; i++) {
    sliderActiv[i].onclick = function() {
        ElemetNoActiv();
        ElementSlider(i);
        picActive[i].classList.add("slider__item_active")
    }
}

function ElemetNoActiv() {
    console.log(picActive.length);
    let k = document.querySelector(".slider__item_active");
    let n = pictures.indexOf(k);
    k.classList.remove("slider__item_active");
    console.log(n);
    return n;
}

function ElementSlider(i) {
    document.querySelector(".slider__dot_active") ? document.querySelector(".slider__dot_active").classList.remove("slider__dot_active") : "";
    sliderActiv[i].classList.add("slider__dot_active");
}