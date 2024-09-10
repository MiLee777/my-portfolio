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
    <h3 class="skills__name">${item.skill}</h3>
    <span class="skills__level">${item.level}</span>
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
  if (projectIndex > dataProject.length - 1) projectIndex = 0;
  loadProject(projectIndex);
}

function prevProject() {
  projectIndex--;
  if (projectIndex < 0) projectIndex = dataProject.length - 1;
  loadProject(projectIndex);
}

setInterval(() => {
  nextProject();
}, 5000);

const portfolioBox = document.getElementById('portfolio__box');
portfolioBox.addEventListener('touchstart', handleTouchStart, false);
portfolioBox.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
  if (!x1 || !y1) {
    return false;
  }

  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;
  let xDiff = x2 - x1;
  let yDiff = y2 - y1;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      nextProject();
    } else {
      prevProject();
    }
  } else {
    if (yDiff > 0) {
      nextProject();
    } else {
      prevProject();
    }
  }
  x1 = null;
  y2 = null;
}

// Contact
const formBtn = document.getElementById('form__btn');

formBtn.addEventListener('click', function (e) {
  e.preventDefault();
  sendMail();
});

function sendMail() {
  const params = {
    name: document.getElementById('form__name').value,
    email: document.getElementById('form__email').value,
    description: document.getElementById('form__text').value
  }

  emailjs.send("service_vs82u9v", "template_7omqp15", params).then(function (res) {
    alert('Success! ' + res.status);
    clearForm();
  }).catch(function (error) {
    alert('Failed to send email. Error: ' + error);
  });
}

function clearForm() {
  document.getElementById('form__name').value = '';
  document.getElementById('form__email').value = '';
  document.getElementById('form__text').value = '';
}

// GSAP
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const btnAnimation = () => {
    const tlHomeBtn = gsap.timeline({ repeat: -1, repeatDelay: 5 });
    tlHomeBtn.to('.btn-contact', { rotate: 30, duration: .12 })
      .to('.btn-contact', { rotate: -30, duration: .12 })
      .to('.btn-contact', { rotate: 30, duration: .12 })
      .to('.btn-contact', { rotate: 0, duration: .12 });
    return tlHomeBtn;
  }

  const timeLineHome = gsap.timeline({ default: { duration: 1 } });
  timeLineHome.from('.home__subtitle', { opacity: 0, y: 30 })
    .from('.home__title', { opacity: 0, y: 30 })
    .from('.home__discription', { opacity: 0, y: 30 })
    .from('.home__btns', { opacity: 0, y: 30 })
    .from('.home__social', { opacity: 0, y: 30 })
    .add(btnAnimation)
    .from('.home__img', { opacity: 0, y: -30 })
    .from('.nav', { opacity: 0 });

  const timeLineAbout = gsap.timeline({
    default: { duration: 1 }, scrollTrigger:
    {
      trigger: '.about__section',
      start: 'top 80%',
      toggleActions: 'play none none none',
    }
  });
  timeLineAbout.from('.about__title', { opacity: 0, y: -50 })
    .from('.about__img', { opacity: 0, x: -100 })
    .from('.about__info', { opacity: 0, x: 100 });

  const skillsBoxAnimation = () => {
    const tlSkillsBox = gsap.timeline();
    tlSkillsBox.to('.skill__box', { rotate: 5, duration: .2 })
      .to('.skill__box', { rotate: -5, duration: .2 })
      .to('.skill__box', { rotate: 5, duration: .2 })
      .to('.skill__box', { rotate: 0, duration: .2 });
    return tlSkillsBox;
  }

  const timeLineSkills = gsap.timeline({
    default: { duration: 1 }, scrollTrigger:
    {
      trigger: '.skills__section',
      start: 'top 80%',
      end: 'bottom top',
      toggleActions: 'play reverse play reverse',
    }
  });

  timeLineSkills.from('.skills__title', { opacity: 0, y: -50 })
    .add(skillsBoxAnimation);

  gsap.from('.works__title', {
    opacity: 0, y: -50, scrollTrigger:
    {
      trigger: '.works__title',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.contact-me__title', {
    opacity: 0, y: -50, scrollTrigger:
    {
      trigger: '.contact-me__title',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});