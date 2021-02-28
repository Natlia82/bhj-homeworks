const minnew = document.getElementsByClassName("product__quantity-control_dec");
const maxnew = document.getElementsByClassName("product__quantity-control_inc");
const button = document.getElementsByClassName("product__add");
const valNew = document.getElementsByClassName("product__quantity-value");


function plus(n) {
    valNew[n].textContent = +valNew[n].textContent + 1;
}

function minus(n) {
    let summ = +valNew[n].textContent - 1;
    if (summ < 0) {
        summ = 0;
    }
    valNew[n].textContent = summ;
}

for (let i = 0; i < maxnew.length; i++) {
    maxnew[i].addEventListener("click", () => {
        plus(i);

    });

    minnew[i].addEventListener("click", () => {
        minus(i);

    });

    button[i].addEventListener("click", () => {
        let butKod = button[i].closest("product");
        console.log(butKod);
    });

}