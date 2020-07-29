const kollClic = document.getElementById("clicker__counter");
let counter = kollClic.textContent;

const imgClick = document.getElementById("cookie");


imgClick.onclick = function() {
    counter++;
    kollClic.textContent = counter;
    if (imgClick.width === 200) {
        imgClick.width = 300;
    } else imgClick.width = 200;



}