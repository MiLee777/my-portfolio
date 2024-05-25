// Burger menu
const menu = document.querySelector('#menu');
const hamb = document.querySelector('#hamb');

hamb.addEventListener('click', hambHandler);

function hambHandler(e) {
  e.preventDefault();
  menu.classList.toggle('open');
  hamb.classList.toggle('active');
}


// About
document.addEventListener('DOMContentLoaded', () => {
  const infoElements = document.querySelectorAll('#info');
  const buttons = document.querySelectorAll('#about__btn');

  function changeInfo(index) {
    infoElements.forEach((element) => {
      element.classList.remove('info__show');
    });
    buttons.forEach((button) => {
      button.classList.remove('btn__info_active');
    });
    if (infoElements[index] && buttons[index]) {
      infoElements[index].classList.add('info__show');
      buttons[index].classList.add('btn__info_active');
    }
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => changeInfo(index));
  });
});

// Skills
import dataSkills from "./dataSkills.js";

const skills = document.querySelector('#skill__group');
console.log(skills);

dataSkills.forEach(item => {
  const li = document.createElement('li');
  li.classList.add('skills__data');
  li.innerHTML = 
  `<i class="uil uil-check-circle"></i>
  <div>
    <h3 class="skills__name">${ item.skill }</h3>
    <span class="skills__level">${ item.level }</span>
  </div>`;
  skills.appendChild(li);
});







