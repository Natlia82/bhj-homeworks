let formProgress = document.getElementById('progress');
let submit = document.getElementById("send");

submit.addEventListener("click", (event) => {

    let formData = new FormData(document.getElementById('form'));
    // formData.append();
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.send(formData);
    xhr.onprogress = function(event) {
        alert('Загружено на сервер ' + event.loaded + ' байт из ' + event.total);

        formProgress.value = (event.loaded / event.total) * 100;
    }
    event.preventDefault();
});