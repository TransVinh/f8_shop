const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const register = $('.js-header__register')
const login = $('.js-header__login')
const modal = $('.js-modal')
const registerForm = $('.js-register-form')
const loginForm = $('.js-login-form')


register.onclick = function() {
    modal.style.display = 'flex';
    registerForm.style.display = 'block';
}

login.onclick = function() {
    modal.style.display = 'flex';
    loginForm.style.display = 'block';
}

modal.onclick = function() {
    modal.style.display = 'none';
    registerForm.style.display = 'none';
    loginForm.style.display = 'none';
}

