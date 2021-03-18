if (localStorage.id) {
    document.querySelector('#user_id').textContent = localStorage.id;
    document.getElementById('welcome').classList.add('welcome_active');
} else {
    const registration = document.getElementById('signin');
    registration.classList.add("signin_active");
}



const submittingForm = document.getElementById('signin__btn');

submittingForm.addEventListener('click', (event) => {
    let formData = new FormData(document.getElementById('signin__form'));
    /*  formData.append("login", document.getElementsByName('login').value)
      formData.append("password", document.getElementsByName('password').value)*/
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);

    xhr.onload = function() {
        let data = JSON.parse(xhr.responseText);
        console.log(data.success);
        if (data.success) {
            localStorage.setItem('id', data.user_id);
            document.querySelector('#user_id').value = data.user_id;
            document.getElementById('welcome').classList.add('welcome_active');
        } else alert('Неверный логин/пароль');
    }

    event.preventDefault();
});