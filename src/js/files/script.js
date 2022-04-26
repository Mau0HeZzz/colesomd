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
    if (document.querySelector('.items-cart__item_summ') || document.querySelector('.mid-product__summ')) {
      summRender()
    }
    if (document.querySelector('.page_checkout')) {
      let summOldEl = document.querySelector('.row-cartinfo__right_summ span');
      let summOld = parseFloat(summOldEl.innerText);
      let summActEl = document.querySelector('.bot-cartinfo__right_summ span');
      let discount = parseFloat(document.querySelector('.row-cartinfo__right__discount span').innerText);
      let deliveryRadio = document.querySelector('input[name="delivery"]:checked')
      let deliveryPriceEl = deliveryRadio.nextElementSibling.querySelector('.checks-delivery__bold span');
      if (deliveryPriceEl) {
        let deliveryPrice = parseFloat(deliveryRadio.nextElementSibling.querySelector('.checks-delivery__bold span').innerText);
        let summAct = summOld + deliveryPrice - discount;
        console.log(summAct);
        summActEl.innerHTML = summAct;
      }
    }
  })
  const preLoader = document.querySelector('.preloader');
  if (preLoader) {
    let preloadDelay = preLoader.dataset.delay;
    hideElem(preLoader, preloadDelay)
  }
  if (document.querySelector('.page_checkout')) {
    let submitLink = document.querySelector('.right-cart__link')
    let submitButton = document.querySelector('.form-cart .form-cart__submit');
    if (submitButton && submitLink) {
      submitLink.addEventListener('click', (e) => {
        e.preventDefault();
        submitButton.click();
      })
    }
  }
  const hearts = document.querySelectorAll('.slide-homeslider__icon_heart');
  if (hearts.length) {
    hearts.forEach(e => {
      e.addEventListener('click', () => {
        e.classList.toggle('_red')
      })
    })
  }
  if (document.querySelector('.items-cart__item_summ') || document.querySelector('.mid-product__summ')) {
    summRender()
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
  const cartDel = document.querySelectorAll('.items-cart__item_del');
  if (cartDel.length) {
    cartDel.forEach(e=>{
      e.addEventListener('click', () => {
        e.parentElement.classList.add('_hide');
        e.parentElement.addEventListener('transitionend', () => {
          e.parentElement.remove();
          summRender();
        })
      })
    })
  }

  const cartInputs = document.querySelectorAll('.page_cart input');
  if (cartInputs.length) {
    cartInputs.forEach(e => {
      e.addEventListener('change', () => {
        summRender()
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

function summRender() {
  let summParent;
  if (document.querySelector('.page_product')) {
    summParent = document.querySelectorAll('.mid-product');
  } else if (document.querySelector('.page_cart')) {
    summParent = document.querySelectorAll('.items-cart__row_withprice');
    document.querySelector('.row-cartinfo__right_quan').innerHTML = summParent.length
  }
  summParent.forEach(e => {
    let summElem;
    let oldSummElem;
    if (document.querySelector('.page_product')) {
      summElem = e.querySelector('.mid-product__summ .summNumber');
      oldSummElem = e.querySelector('.slide-homeslider__old');
    } else if (document.querySelector('.page_cart')) {
      summElem = e.querySelector('.summ-cartitem__num');
      if (e.querySelector('.summ-cartitem__num_old')) {
        oldSummElem = e.querySelector('.summ-cartitem__num_old')
      }
    }
    let quantityInp = e.querySelector('.quantity__input input');
    let price = quantityInp.dataset.price;
    let index = quantityInp.value;
    let summ = price * index;
    let oldPrice = quantityInp.dataset.oldprice;
    let oldSumm = oldPrice * index;
    summElem.innerHTML = summ;
    if (!isNaN(oldSumm)) {
      oldSummElem.innerHTML = oldSumm;
    }
  })
  if (document.querySelector('.page_cart')) {
    cartSummRender()
  }
}

function cartSummRender() {
  let cartSummsEls = document.querySelectorAll('.summ-cartitem__num');
  let cartDiscount = parseFloat(document.querySelector('.row-cartinfo__right__discount span').innerText);
  let cartInfoSummEl = document.querySelector('.row-cartinfo__right_summ span');
  let cartInfoActSummEl = document.querySelector('.bot-cartinfo__right_summ span')
  let cartSumm = 0;
  cartSummsEls.forEach(e => {
    cartSumm = cartSumm + parseFloat(e.innerText);
  })
  let cartSummWithDiscount = cartSumm - cartDiscount;
  if (cartSummWithDiscount < 0) {
    cartSummWithDiscount = 0
  }
  cartInfoSummEl.innerHTML = cartSumm;
  cartInfoActSummEl.innerHTML = cartSummWithDiscount;
}

function hideElem(el, delay=1000) {
  setTimeout(() => {
    el.classList.add('_hide');
  }, delay)
  el.addEventListener('transitionend', () => {
    el.style = 'display: none;'
  })
}