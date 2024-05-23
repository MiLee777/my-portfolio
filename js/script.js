// Burger menu
const menu = document.querySelector('#menu');
const hamb = document.querySelector('#hamb');

hamb.addEventListener('click', hambHandler);

function hambHandler(e) {
  e.preventDefault();
  menu.classList.toggle('open');
  hamb.classList.toggle('active');
}
