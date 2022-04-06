/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay, EffectFade, Thumbs  } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	const homeSliders = document.querySelectorAll('.homeslider');
	if (homeSliders.length) {
		homeSliders.forEach(e => {
			let homeSlider = e.querySelector('.body-homeslider__slider');
			let homeArrowPrev = e.querySelector('.body-homeslider__arrow_prev');
			let homeArrowNext = e.querySelector('.body-homeslider__arrow_next');
			
			new Swiper(homeSlider, { // Указываем скласс нужного слайдера
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Navigation, Autoplay],
				observer: true,
				observeParents: true,
				slidesPerView: 5,
				spaceBetween: 20,
				autoHeight: false,
				speed: 800,
				centeredSlides: false,

				//touchRatio: 0,
				//simulateTouch: false,
				loop: true,
				//preloadImages: false,
				//lazy: true,

				/*
				// Эффекты
				effect: 'fade',
				*/
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},

				// Пагинация
				// pagination: {
				// 	el: '.slider-hero__pagination',
				// 	clickable: true,
				// },

				// Скроллбар
				/*
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				*/

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: homeArrowPrev,
					nextEl: homeArrowNext,
				},

				// Брейкпоинты
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					360: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					992: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
					1268: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
				},
				// События
				on: {
				}
			});
		})
	}
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.slider-hero')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.slider-hero', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			*/
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Пагинация
			pagination: {
				el: '.slider-hero__pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.slider-hero__arrow_prev',
				nextEl: '.slider-hero__arrow_next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {
				init: function (swiper) {
					const allSlides = document.querySelector('.slider-hero__all');
					allSlides.innerHTML = swiper.slides.length;
				},
				slideChange: function (swiper) {
					const currentSlide = document.querySelector('.slider-hero__actual');
					currentSlide.innerHTML = swiper.activeIndex+1;
				}
			}
		});
	}
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.categories__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.categories__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 5,
			spaceBetween: 20,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты       
			effect: 'fade',
			*/
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Пагинация
			// pagination: {
			// 	el: '.slider-hero__pagination',
			// 	clickable: true,
			// },

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.categories-slider__arrow_prev',
					nextEl: '.categories-slider__arrow_next',
				},

			// Брейкпоинты
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
						autoplay: {
							delay: 3000,
							disableOnInteraction: false,
						},
					},
					360: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					992: {
						slidesPerView: 4,
						spaceBetween: 20,
						loop: true,
					},
					1268: {
						slidesPerView: 5,
						spaceBetween: 20,
						autoplay: false,
					},
				},
			
			// События
			on: {
			}
		});
	}
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.main-product__slider')) { 
	// Проверяем, есть ли слайдер на стронице
		// Создаем слайдер
		new Swiper('.main-product__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [ Navigation, Autoplay, EffectFade, Thumbs ],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			// Эффекты
			effect: 'fade',
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },

			// Пагинация
			// pagination: {
			// 	el: '.slider-hero__pagination',
			// 	clickable: true,
			// },

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.preview-product__arrow_prev',
				nextEl: '.preview-product__arrow_next',
			},

			thumbs: {
				swiper: {
					el: '.preview-product__slider',
					slidesPerView: 6,
					spaceBetween: 10,
					autoHeight: true,
					speed: 800,
					direction: 'vertical',
					// centeredSlides: true,

					//touchRatio: 0,
					//simulateTouch: false,
					loop: true,
					//preloadImages: false,
					//lazy: true,

					/*
					// Эффекты
					effect: 'fade',
					*/
					// autoplay: {
					// 	delay: 3000,
					// 	disableOnInteraction: false,
					// },

					// Пагинация
					// pagination: {
					// 	el: '.slider-hero__pagination',
					// 	clickable: true,
					// },

					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
					*/

					// Брейкпоинты
					breakpoints: {
						320: {
							slidesPerView: 4,
							direction: 'horizontal',
						},
						480: {
							slidesPerView: 5,
							direction: 'horizontal',
						},
						992: {
							slidesPerView: 6,
							direction: 'vertical',
						},
					},
					}
			},
			// События
			on: {
			}
		});
	}



	const videoSliders = document.querySelectorAll('.body-videoslider');
	if (videoSliders.length) {
		videoSliders.forEach(e => {
			let videoSlider = e.querySelector('.body-videoslider__slider');
			let videoArrowPrev = e.querySelector('.body-homeslider__arrow_prev');
			let videoArrowNext = e.querySelector('.body-homeslider__arrow_next');
			
		new Swiper(videoSlider, { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 20,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			*/
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },

			// Пагинация
			// pagination: {
			// 	el: '.slider-hero__pagination',
			// 	clickable: true,
			// },

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: videoArrowPrev,
				nextEl: videoArrowNext,
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 20,
				},
				480: {
					slidesPerView: 1.7,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
			// События
			on: {
			}
		});
		})
	}


}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});