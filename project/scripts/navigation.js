const burgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateMe');

burgerElement.addEventListener('click', () => {
  navElement.classList.toggle('open');
  burgerElement.classList.toggle('open');
});