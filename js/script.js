const form = document.querySelector(".form")
const phoneInput = document.querySelector(".form__input");
const errorContainer = document.querySelector('.error__container');


form.addEventListener('submit', (e) => {
    let message = []
    if (phoneInput.value === '' || phoneInput.value !== '+38111111111') {
        message.push('Invalid format specified')
    } else {
        return document.location.href = './pin.html';
    }

    if (message.length > 0) {
        e.preventDefault()
        errorContainer.innerText = message.join(', ')
    }
})

// const isValid = (phoneNumber) => {
//     const pattern = '+38111111111';
    
//     if (phoneNumber === pattern) {
//         return document.location.href = './pin.html';
//     }
//     // if (phoneNumber === '' || phoneNumber === null) {
//     //     return false;
//     // }
//     if (phoneNumber !== '+38111111111') {
//         return message;
//     }  

//     return document.location.assign('./pin.html')
// }

// const submitForm = () => {
//     const phoneNumber = phoneInput.value;

//     if (!isValid(phoneNumber)) {
//         errorContainer.classList.remove('hide');
//         errorContainer.classList.add('show');
//         errorContainer.innerHTML = ''
//     }



// }



// const input = document.querySelector("#validation-input");
// input.onblur = function () {
//     if (!input.value.includes('+38111111111')) { 
//         input.classList.add('invalid');
//         error.innerHTML = 'Invalid format specified'
//     }
// };

// input.onfocus = function () {
//     if (this.classList.contains('invalid')) {
//         // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
//         this.classList.remove('invalid');
//         error.innerHTML = "";
//     }
// };

// 'phone' => 'required|string|regex:/^\+38-\d{3}-\d{3}-\d{2}-\d{2}$/i'

// inputElem.addEventListener("blur", (event) => {
//     if (event.currentTarget.value.length === Number(inputElem.dataset.length)) {
//         if (!inputElem.value.includes('+38111111111')) {
//         inputElem.classList.add('invalid');
//             alert('Invalid format specified');
//     }
//     } else {
//         inputElem.classList.add("invalid");
//         inputElem.classList.remove("valid");
//     }
// });