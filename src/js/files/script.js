// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
import { menuClose } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    const targetElement = e.target;
    if (targetElement.classList.contains('menu__close')) {
      menuClose();
    }
    if (window.innerWidth <= 768 && targetElement.classList.contains('search-header__icon')) {
      targetElement.parentElement.querySelector('.search-header__input').classList.toggle('_tr-md3')
    }
  })
  const hearts = document.querySelectorAll('.slide-homeslider__icon_heart');
  if (hearts.length) {
    hearts.forEach(e => {
      e.addEventListener('click', () => {
        e.classList.toggle('_red')
      })
    })
  }
  const videoContainers = document.querySelectorAll('.slide-videoslider__media');
  if (videoContainers.length) {
    videoContainers.forEach(e => {
      let video = e.querySelector('.slide-videoslider__video');
      let videoControl = e.querySelector('.slide-videoslider__controls');
      videoControl.addEventListener('click', () => {
        videoControls(video, videoControl);
      })
    })
  }
})


function videoControls(video, videoControl) {
  let videoVolume;
  if (video.dataset.volume) {
    videoVolume = parseFloat(video.dataset.volume);
  } else {
    videoVolume = 1;
  }
  video.setAttribute('controls', 'controls');
  video.volume = videoVolume;
  videoControl.style = 'display: none;';
  (video.paused) ? video.play() : video.pause();
}