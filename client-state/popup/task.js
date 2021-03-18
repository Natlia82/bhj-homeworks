const clouse = document.querySelector('.modal__close');
const modalOpen = document.getElementById('subscribe-modal').classList;

if (!getCookie('madalActiv')) {
    modalOpen.add('modal_active');
}

clouse.addEventListener('click', () => {
    modalOpen.remove('modal_active');
    document.cookie = 'madalActiv=true';
});

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const c of cookies) {
        const [key, value] = c.split('=');
        if (key == name) {
            return value
        }
    }

    return null;
}