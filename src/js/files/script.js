// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
import { menuClose } from "./functions.js";
import { _slideUp } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener('DOMContentLoaded', () => {
  let rotationChecked = document.querySelector('input[name="rotation_radio"]:checked');
  if (rotationChecked) {
    rotationCheckedActions(rotationChecked);
  }
  document.addEventListener('click', (e) => {
    const catalog = document.querySelector('.catalog-popup');
    const targetElement = e.target;
    if (targetElement.classList.contains('menu__close')) {
      menuClose();
    }
    if (window.innerWidth <= 768 && targetElement.classList.contains('search-header__icon')) {
      targetElement.parentElement.querySelector('.search-header__input').classList.toggle('_tr-md3')
    }
    if (window.innerWidth <= 768) { 
      catalogActions(targetElement);
    }
    let rotationChecked = document.querySelector('input[name="rotation_radio"]:checked');
    if (rotationChecked) {
      rotationCheckedActions(rotationChecked);
    }
    if (targetElement.classList.contains('spollers__black') || targetElement.closest('.spollers__black')) {
      if (targetElement.classList.contains('spollers__black')) {
        targetElement.style = 'display:none;'
        targetElement.parentElement.parentElement.querySelectorAll('input').forEach(e => {
          e.checked = false;
        })
      } else if (targetElement.closest('.spollers__black')) {
        targetElement.parentElement.style = 'display:none;'
        targetElement.parentElement.parentElement.parentElement.querySelectorAll('input').forEach(e => {
          e.checked = false;
        })
      }
    }
    const filtersButtons = document.querySelectorAll('[class*="filters__button"]');
    if (filtersButtons.length) {
      filtersActions(filtersButtons);
    }
    const videoContainers = document.querySelectorAll('.slide-videoslider__media');
    if (videoContainers.length) {
      videoContainers.forEach(e => {
        let video = e.querySelector('.slide-videoslider__video');
        let videoControl = e.querySelector('.slide-videoslider__controls');
        if (videoControl) {
          videoControl.addEventListener('click', () => {
            videoControls(video, videoControl);
          })
        }
      })
    }
    const jcbVideoContainers = document.querySelectorAll('.video-benefits');
    if (jcbVideoContainers.length) {
      jcbVideoContainers.forEach(e => {
        let video = e.querySelector('.video-benefits__media video');
        let videoControl = e.querySelector('.video-benefits__contor');
        if (videoControl) {
          videoControl.addEventListener('click', () => {
            videoControls(video, videoControl);
          })
        }
      })
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
      if (videoControl) {
        videoControl.addEventListener('click', () => {
          videoControls(video, videoControl);
        })
      }
    })
  }
  const jcbVideoContainers = document.querySelectorAll('.video-benefits');
  if (jcbVideoContainers.length) {
    jcbVideoContainers.forEach(e => {
      let video = e.querySelector('.video-benefits__media video');
      let videoControl = e.querySelector('.video-benefits__contor');
      if (videoControl) {
        videoControl.addEventListener('click', () => {
          videoControls(video, videoControl);
        })
      }
    })
  }
  const uparrow = document.querySelector('.uparrow');
  if (uparrow) {
    const offsY = uparrow.dataset.onscroll;
    window.addEventListener('scroll', () => {
      if (pageYOffset >= offsY) {
        uparrow.classList.remove('_hide');
      } else {
        uparrow.classList.add('_hide');
      }
    }) 
  }
  const action = document.querySelector('.action');
  if (action) {
    document.body.classList.add('haveAction');
  }
  const catalog = document.querySelector('.catalog-popup');
  if (catalog) {
    if (window.innerWidth >= 768) {
      catalogPadding(catalog)
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
          catalogPadding(catalog)
        } else {
          catalog.querySelector('.catalog-popup__container').style = ``;
        }
      })
    } 
  }
  const filtersButtons = document.querySelectorAll('[class*="filters__button"]');
  if (filtersButtons.length) {
    filtersActions(filtersButtons);
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

function catalogPadding(catalog) {
  let action = document.querySelector('.action');
  let pt;
  let headerHeight = document.querySelector('.header').offsetHeight;
  if (action) {
    let actionHeight = action.offsetHeight;
    pt = headerHeight + actionHeight;
  } else {
    pt = headerHeight;
  }
  catalog.querySelector('.catalog-popup__container').style = `padding-top:${pt}px`;
}

function catalogActions(targetElement) {
  const catalog = document.querySelector('.catalog-popup');
  const catalogName = document.querySelector('.catalog-popup__name');
  const catalogBack = document.querySelector('.catalog-popup__back');
  let catalogActive = catalog.querySelector('._spoller-active');
  if (catalogActive) {
    let name = catalogActive.querySelector('.spollers-catalog__name').innerText;
    catalogName.innerHTML = name;
    catalogBack.style = '';
  } else {
    catalogName.innerHTML = 'Каталог';
    catalogBack.style = 'display: none;';
  }
  if (targetElement.classList.contains('catalog-popup__back')) {
    let catalogActive = catalog.querySelector('._spoller-active')
    catalogName.innerHTML = 'Каталог';
    catalogActive.classList.remove('_spoller-active');
    _slideUp(catalogActive.nextElementSibling);
  }
}

function rotationCheckedActions(rotationChecked) {
  let rotationCheckedId = rotationChecked.id;
  let labelChecked = document.querySelector(`label[for="${rotationCheckedId}"]`).innerText;
  document.querySelector('.rotation-spollers__title').innerHTML = labelChecked;
  _slideUp(document.querySelector('.rotation-spollers__title').nextElementSibling);
}

function blackTitle(e, spollerItem) {
  const checkedBoxs = e.parentElement.querySelectorAll('input[type="checkbox"]:checked');
  if (checkedBoxs.length) {
    if (e.classList.contains('manufacturer-filters__button')) {
      spollerItem.parentElement.style = 'min-width:150px';
    } else {
      spollerItem.parentElement.style = 'min-width:100px';
    }
    spollerItem.style = '';
    spollerItem.querySelector('span').innerHTML = checkedBoxs.length;
  } else {
    spollerItem.parentElement.style = 'min-width:none';
    spollerItem.style = 'display:none;';
  }
  
  const checkedRadio = e.parentElement.querySelector('input[type="radio"]:checked');
  if (checkedRadio) {
    spollerItem.parentElement.style = 'min-width:120px';
    spollerItem.style = '';
    spollerItem.querySelector('span').innerHTML = checkedRadio.value;
  }
}

function filtersActions(filtersButtons) {
  filtersButtons.forEach(e => {
    const spollerItem = e.parentElement.parentElement.querySelector('.spollers__black');
    if (!e.classList.contains('price-filters__button')) {
      blackTitle(e, spollerItem);
    }
    e.addEventListener('click', () => {
      _slideUp(e.parentElement);
      e.parentElement.parentElement.querySelector('.spollers__title').classList.remove('_spoller-active');
      if (!e.classList.contains('price-filters__button')) {
        blackTitle(e, spollerItem);
      }
    })
  })

}
