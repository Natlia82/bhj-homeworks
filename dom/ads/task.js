const block = document.getElementsByClassName("rotator__case");
let n = document.getElementsByClassName("rotator__case").length - 1;
let k = 0;

function carousel() {
    block[k].classList.remove("rotator__case_active");
    if (k === n) {
        k = 0;
    } else k++;

    block[k].classList.add("rotator__case_active");

}

setInterval(carousel, 1000);