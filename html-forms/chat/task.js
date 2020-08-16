const butt = document.querySelector(".chat-widget");
const inp = document.getElementById("chat-widget__input");
const messages = document.querySelector('.chat-widget__messages');
const reply = ['как дела?', 'иди домой', 'я хочу спать', 'ну и ну', 'меня нет', 'ты еще не дома?']
let dat = new Date;


const chat = (event) => {
    event.currentTarget.classList.add("chat-widget_active");

}

function enter() {
    messages.innerHTML += `
    <div class="message">
      <div class="message__time">${dat.getHours()}:${dat.getMinutes()}</div>
      <div class="message__text">
        ${reply[Math.round(Math.random()*(6-0))]}
      </div>
    </div>
  `;
}

butt.addEventListener('click', chat);
inp.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${dat.getHours()}:${dat.getMinutes()}</div>
          <div class="message__text">
            ${event.target.value}
          </div>
        </div>
      `;
        event.target.value = "";
        enter();
    }

});