const form = document.querySelector(".form")
const phoneInput = document.querySelector(".form__input");
const errorContainer = document.querySelector('.error__container');
const submitButton = document.querySelector('[data-submit-button]');


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let message = [];
    if (phoneInput.value === '+38111111111') {
        window.location.replace('/pin.html');
    } else {
        message.push('Invalid format specified');
        phoneInput.classList.add('.error');
    }

    if (message.length > 0) {
        errorContainer.innerText = message.join(', ')
    }
});

phoneInput.addEventListener('keyup', () => {
    if (phoneInput.value.trim().length === 0) {
        submitButton.setAttribute('disabled', '');
        submitButton.classList.add('isDisabled');
    } else {
        submitButton.removeAttribute('disabled', '');
        submitButton.classList.remove('isDisabled');
    }
});









