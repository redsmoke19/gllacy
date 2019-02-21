var formLink = document.querySelector('.form-link');
var formPopup = document.querySelector('.modal-feedback');
var formClose = document.querySelector('.modal-close__form');
var formFeedback = document.querySelector('.feedback-form');
var formName = formPopup.querySelector('[name=name]');
var formEmail = formPopup.querySelector('[name=email]');
var formTextarea = formPopup.querySelector('[name=comment]');
var overlayForm = document.querySelector('.overlay');

formLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    formPopup.classList.remove('js-modal-error');
    formPopup.classList.add('modal-show__form');
    formName.focus();
    overlayForm.classList.add('overlay-show');
});

formClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    formPopup.classList.remove('modal-show__form');
    formPopup.classList.remove('js-modal-error');
    overlayForm.classList.remove('overlay-show');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (formPopup.classList.contains('modal-show__form')) {
            formPopup.classList.remove('modal-show__form');
            formPopup.classList.remove('js-modal-error');
            overlayForm.classList.remove('overlay-show');
        }
    }
});

overlayForm.addEventListener('click', function (evt) {
    evt.preventDefault();
    formPopup.classList.remove('modal-show__form');
    formPopup.classList.remove('js-modal-error');
    overlayForm.classList.remove('overlay-show');
});

formFeedback.addEventListener('submit', function (evt) {
    if (!formName.value || !formEmail.value || !formTextarea.value) {
        evt.preventDefault();
        formPopup.classList.remove('js-modal-error');
        formPopup.offsetWidth = formPopup.offsetWidth;
        formPopup.classList.add('js-modal-error');
    }
});