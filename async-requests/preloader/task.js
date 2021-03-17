let item = document.querySelector('.item');
let imgVisible = document.getElementById('loader');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();


xhr.onload = function() {
    // alert('Данные полностью загружены на сервер!');
    let parseJson = JSON.parse(xhr.responseText);
    let xhrJson = parseJson.response.Valute;
    let xhrHttp = "";

    for (var key in xhrJson) {
        xhrHttp += "<div class='item__code'>" + xhrJson[key].CharCode + "</div><div class='item__value'>" + xhrJson[key].Value + "</div><div class='item__currency'>руб.</div>";
    }

    imgVisible.classList.remove('loader_active');
    item.innerHTML = xhrHttp;

}