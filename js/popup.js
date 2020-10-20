const modalWindow = document.querySelector('.booking-widget');
const modalButton = document.querySelector('.booking__button');

modalButton.addEventListener('click', function () {
  modalWindow.classList.toggle('booking-widget_close');
});
