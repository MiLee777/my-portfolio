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

// Portfolio
import dataProject from "./dataProject.js";

const projectName = document.querySelector('#name');
const projectTech = document.querySelector('#technologies');
const projectDescripsion = document.querySelector('#description');
const projectLink = document.querySelector('#project__link');
const projectImage = document.querySelector('#image');
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right')

let projectIndex = 0;

window.addEventListener('load', () => {
  loadProject(projectIndex)
});
btnRight.addEventListener('click', nextProject);
btnLeft.addEventListener('click', prevProject);

function loadProject(index) {
  projectName.innerHTML = dataProject[index].title;
  projectTech.innerHTML = dataProject[index].subtitle;
  projectDescripsion.innerHTML = dataProject[index].description;
  projectImage.src = dataProject[index].image;
  projectLink.href = dataProject[index].src;
}

function nextProject() {
  projectIndex++;
  if(projectIndex > dataProject.length - 1) projectIndex = 0;
  loadProject(projectIndex);
}

function prevProject() {
  projectIndex--;
  if(projectIndex < 0) projectIndex = dataProject.length - 1;
  loadProject(projectIndex);
}

// setInterval(() => {
//   nextProject();
// }, 5000);

// Contact
const formBtn = document.getElementById('form__btn');

formBtn.addEventListener('click', function(e) {
  e.preventDefault();
  sendMail();
});

function sendMail() {
  const params = {
    name: document.getElementById('form__name').value,
    email: document.getElementById('form__email').value,
    description: document.getElementById('form__text').value
  }

  emailjs.send("service_vs82u9v","template_7omqp15", params).then(function(res) {
    alert('Success! ' + res.status);
  }).catch(function(error) {
    alert('Failed to send email. Error: ' + error);
  });
}










