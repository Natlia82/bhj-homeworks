const minnew = document.getElementsByClassName("product__quantity-control_dec");
const maxnew = document.getElementsByClassName("product__quantity-control_inc");
const button = document.getElementsByClassName("product__add");
const valNew = document.getElementsByClassName("product__quantity-value");
const basketAll = document.querySelector('.cart__products');
//const basket = 


function plus(n) {
    valNew[n].textContent = +valNew[n].textContent + 1;
}

function minus(n) {
    let summ = +valNew[n].textContent - 1;
    if (summ < 1) {
        summ = 1;
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
        let basketId = button[i].closest('.product').dataset.id;
        let flag = false;
        const cartProduct = document.getElementsByClassName('cart__product');

        for (let j = 0; j < cartProduct.length; j++) {
            if (cartProduct[j].dataset.id == basketId) {
                flag = true;
                document.getElementsByClassName('cart__product-count')[j].textContent = valNew[i].textContent;
            }
        }

        if (!flag) {
            let basketImg = button[i].closest('.product__controls').previousElementSibling.getAttribute('src');

            let basket = document.createElement('div');
            basket.classList.add('cart__product');
            basket.dataset['id'] = basketId;
            basket.innerHTML = '<img class="cart__product-image" src="' +
                basketImg + '"><div class="cart__product-count">' +
                valNew[i].textContent + '</div>';
            basketAll.insertAdjacentElement("beforeend", basket);
        }



    });

}