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
})