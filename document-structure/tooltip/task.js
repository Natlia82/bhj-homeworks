const cl = document.getElementsByClassName("has-tooltip");

function press() {
    const l = document.getElementsByClassName("tooltip");
    l[0].style.display = "block";
    l[0].innerText = event.target.getAttribute("title");
    const summ = event.target.getBoundingClientRect().top + 15;
    l[0].style.top = summ + "px";
    l[0].style.left = event.target.getBoundingClientRect().left + "px";

    event.preventDefault();
}


for (const iterator of cl) {
    iterator.addEventListener("click", press);
}