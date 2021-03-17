const question = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();


xhr.onload = function() {
    //  alert('готово');
    let parseJson = JSON.parse(xhr.responseText);
    question.innerHTML = parseJson.data.title;
    let answer = parseJson.data.answers;
    let xhrHttp = "";
    for (var key in answer) {
        xhrHttp += "<button class='poll__answer'>" + answer[key] + "</button>";
    }

    answers.innerHTML = xhrHttp;


}

answers.addEventListener('click', () => {
    alert('Спасибо, ваш голос засчитан!');
});