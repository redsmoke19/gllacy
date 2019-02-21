var loginLink = document.querySelector('.login-site');
var loginPopup = document.querySelector('.modal-login');
var overlay = document.querySelector('.overlay');
var loginForm = document.querySelector('.login-form');
var loginEnter = document.querySelector('[name=login]');
var loginPassword = document.querySelector('[name=password');

loginLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    loginPopup.classList.remove('js-modal-error');
    loginPopup.classList.toggle('modal-show__login')
    overlay.classList.toggle('overlay-show');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (loginPopup.classList.contains('modal-show__login')) {
            loginPopup.classList.remove('modal-show__login');
            loginPopup.classList.remove('js-modal-error');
            overlay.classList.remove('overlay-show');
        }
    }
});

overlay.addEventListener('click', function (evt) {
    evt.preventDefault();
    loginPopup.classList.remove('modal-show__login');
    loginPopup.classList.remove('js-modal-error');
    overlay.classList.remove('overlay-show');
});

loginForm.addEventListener('submit', function (evt) {
    if (!loginEnter.value || !loginPassword.value) {
        evt.preventDefault();
        loginPopup.classList.remove('js-modal-error');
        loginPopup.offsetWidth = loginPopup.offsetWidth;
        loginPopup.classList.add('js-modal-error');
    }
});