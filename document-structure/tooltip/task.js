const prompt = document.getElementsByClassName("has-tooltip");

function press(event) {
    const hint = document.getElementsByClassName("tooltip");
    if (hint[0].style.display == "block" && hint[0].innerText == event.target.getAttribute("title")) {
        hint[0].style.display = "none"
        event.preventDefault();
        return;
    }
    hint[0].style.display = "block";
    hint[0].innerText = event.target.getAttribute("title");
    const summ = event.target.getBoundingClientRect().top + 15;
    hint[0].style.top = summ + "px";
    hint[0].style.left = event.target.getBoundingClientRect().left + "px";

    event.preventDefault();
}


for (const iterator of prompt) {
    iterator.addEventListener("click", press);
}