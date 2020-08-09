let prev = 0;
const navigation = document.getElementsByClassName("tab");
const contents = document.getElementsByClassName("tab__content");

function novClick() {
    console.log(event.target);
    let arr = Array.from(navigation);
    navigation[prev].className = "tab";
    contents[prev].className = "tab__content";

    for (let i = 0; i < arr.length; i++) {

        if (Array.from(navigation)[i] == event.target) {
            console.log(i);
            prev = i;

            navigation[i].className = "tab tab_active";
            contents[i].className = "tab__content tab__content_active";
        }

    }


}

for (let i = 0; i < navigation.length; i++) {
    navigation[i].addEventListener('click', novClick);
}