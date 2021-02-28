const n = document.getElementsByClassName('menu__link');
let parent;
let young;
let activ = null;
for (let i = 0; i < n.length; i++) {
    n[i].onclick = function() {
        parent = n[i].closest("li");
        young = parent.querySelector("ul.menu").classList;
        young.toggle("menu_active");
        if (activ != i && activ) {
            n[activ].closest("li").querySelector("ul.menu").classList.remove("menu_active");
        }
        activ = i;
        return false;
    }
}