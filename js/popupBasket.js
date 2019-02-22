var basketLink = document.querySelector('.basket-item');
var basketPopup = document.querySelector('.basket-full');
var basketOverlay = document.querySelector('.overlay');

basketLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  basketPopup.classList.toggle('modal-show__basket')
  basketOverlay.classList.toggle('overlay-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains('modal-show__basket')) {
      basketPopup.classList.remove('modal-show__basket');
      basketOverlay.classList.remove('overlay-show');
    }
  }
});

basketOverlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove('modal-show__basket');
  basketOverlay.classList.remove('overlay-show');
});