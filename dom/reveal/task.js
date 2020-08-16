function ff() {
    const viewportHeight = window.innerHeight;
    const module = document.getElementsByClassName("reveal");

    for (const iterModule of module) {
        if ((iterModule.getBoundingClientRect().top < viewportHeight) && (iterModule.getBoundingClientRect().top > 0)) {
            iterModule.classList.add('reveal_active');
        }
    }

}

document.addEventListener('scroll', ff);