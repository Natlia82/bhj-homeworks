const textual = document.getElementById('editor');

/*if (localStorage.inputText) {
    textual.value = localStorage.inputText;
}
*/
textual.value = localStorage.getItem('inputText');

textual.addEventListener('input', () => {
    localStorage.setItem('inputText', textual.value);
});