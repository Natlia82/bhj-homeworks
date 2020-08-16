let snap = document.getElementsByClassName("font-size");

function click() {
    event.preventDefault();
    for (const it of snap) {
        if (it.classList.contains("font-size_active")) {
            it.classList.remove("font-size_active")
        }
    }

    event.target.classList.add("font-size_active");
    if (event.target.classList.contains("font-size_small")) {
        if (event.target.closest("#book").classList.contains("book_fs-big")) {
            event.target.closest("#book").classList.remove("book_fs-big")
        }
        event.target.closest("#book").classList.add("book_fs-small");
    } else if (event.target.classList.contains("font-size_big")) {
        if (event.target.closest("#book").classList.contains("book_fs-small")) {
            event.target.closest("#book").classList.remove("book_fs-small")
        }
        event.target.closest("#book").classList.add("book_fs-big");
    } else {
        if (event.target.closest("#book").classList.contains("book_fs-small")) {
            event.target.closest("#book").classList.remove("book_fs-small")
        }
        if (event.target.closest("#book").classList.contains("book_fs-big")) {
            event.target.closest("#book").classList.remove("book_fs-big")
        }
    }

}


for (const iterator of snap) {
    iterator.addEventListener('click', click);
}