var searchLink = document.querySelector('.search');
var searchPopup = document.querySelector('.modal-search');
var sss = searchPopup.querySelector('.modal-show__search')

searchLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  searchPopup.classList.toggle('modal-show__search');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (searchPopup.classList.contains('modal-show__search')) {
      searchPopup.classList.remove('modal-show__search');
    }
  }
});