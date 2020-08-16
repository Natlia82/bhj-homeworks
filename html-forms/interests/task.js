const combo = document.getElementsByClassName("interest__check");

for (const iter of combo) {
    iter.addEventListener('change', () => {
        let add = iter.closest("li").querySelectorAll(".interest__check");

        for (let i = 1; i < add.length; i++) {
            if (add[i].checked) {
                add[i].checked = false;
            } else add[i].checked = true;
        }

    });
}