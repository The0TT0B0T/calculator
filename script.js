const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = button.value;
    })
})