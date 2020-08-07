let n = document.getElementsByClassName('menu__link');
let parent;
let young;
for (let i = 0; i < n.length; i++) {
    n[i].onclick = function() {
        parent = n[i].closest("li");
        young = parent.querySelectorAll("ul.menu");
        if (young.length > 0) {
            young[0].className += " menu_active"
            return false;
        }

    }
}