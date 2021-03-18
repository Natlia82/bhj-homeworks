const textual = document.getElementById('editor');

if (localStorage.inputText) {
    textual.value = localStorage.inputText;
}

textual.addEventListener('input', () => {
    localStorage.setItem('inputText', textual.value);
});