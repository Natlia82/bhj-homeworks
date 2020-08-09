const but = document.getElementsByClassName("dropdown__value");
const listing = document.getElementsByClassName("dropdown__list");
const component = document.getElementsByClassName("dropdown__item");
let n = component.length;
let k = but.length;
let m;


function disclose() {
    listing[m].className = "dropdown__list dropdown__list_active";
}

function press() {
    event.preventDefault();
    but[0].textContent = event.currentTarget.textContent;
    listing[0].className = "dropdown__list";

}

for (let j = 0; j < k; j++) {
    m = j;
    but[j].addEventListener('click', disclose);
}



for (let i = 0; i < n; i++) {
    component[i].addEventListener('click', press);

}