// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider = document.querySelector('#range');
	if (priceSlider) {
		let textFrom = parseInt(priceSlider.getAttribute('data-from'));
		let textTo = parseInt(priceSlider.getAttribute('data-to'));
		noUiSlider.create(priceSlider, {
			start: [textFrom,textTo],
			connect: true,
			range: {
							min: [ textFrom ],
							max: [ textTo ]
			}
		});
		const priceStart = document.getElementById('price_from');
		const priceEnd = document.getElementById('price_to');
		priceStart.addEventListener('change', setPriceValues);
		priceEnd.addEventListener('change', setPriceValues);
		priceSlider.noUiSlider.on("update", setInputValues);
		
			function setInputValues() {
				let priceStartValue = Math.round(priceSlider.noUiSlider.get()[0]);
				let priceEndValue = Math.round(priceSlider.noUiSlider.get()[1]);
				showBlack(priceStartValue, priceEndValue);
					if (!priceSlider.classList.contains('updated')) {
							if (priceStartValue !== textFrom) {
									priceStart.value = priceStartValue;
							}
							if (priceEndValue !== textTo) {
									priceEnd.value = priceEndValue;
							}
							priceSlider.classList.add('updated');
					} else {
									priceStart.value = priceStartValue;
									priceEnd.value = priceEndValue;
					}
			}

		function setPriceValues() {
			let priceStartValue;
			let priceEndValue;
			if (priceStart.value != '') {
				priceStartValue = priceStart.value;
			}
			if (priceEnd.value != '') {
				priceEndValue = priceEnd.value;
			}
			priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
			showBlack(priceStartValue, priceEndValue);
		}
		function showBlack(priceStart, priceEnd) {
			let blackPrice = document.querySelector('.price-filters').parentElement.querySelector('.spollers__black');
			blackPrice.style = '';
			let blackPriceFrom = blackPrice.parentElement.querySelector('.price-filters__from');
			let blackPriceTo = blackPrice.parentElement.querySelector('.price-filters__to');
			blackPriceFrom.innerHTML = priceStart;
			blackPriceTo.innerHTML = priceEnd;
		}
	}
}
rangeInit();