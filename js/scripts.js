/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const form = document.forms['form-web'];
const successAlert = document.getElementById('success-alert');

form.addEventListener('submit', e => {
    e.preventDefault();
    successAlert.classList.add('d-none');

    if (validateForm()) {
        setTimeout(() => {
            successAlert.classList.remove('d-none');
            form.reset();
        }, 2000); 
    }
    console.log('Form submitted')
});

function validateForm() {
    const inputField = form.querySelector('#name');
    if (inputField.value.trim() === '') {
        displayError('Name must be filled out.');
        return false;
    }

    return true;
}