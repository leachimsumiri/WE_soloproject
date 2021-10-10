/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
import '../styles/style.scss';

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', validateForm);

const email = document.getElementById('email');
const password = document.getElementById('password');

// RFC 5322
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// minimum 8 chars, at least one letter and one number
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function validateForm(e) {
    e.preventDefault();

    if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email address');
        return;
    }

    if (!passwordRegex.test(password.value)) {
        alert('The Password must contain at least one letter and one number');
        return;
    }

    alert('HTML5 validation and additional validation were successful');
}
