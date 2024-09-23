// Sticky header
try {
	const header = document.querySelector('.header');
	const main = document.querySelector('.main');

	if (main.classList.contains('homepage')) {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
				header.classList.add('sticky');
			} else {
				header.classList.remove('sticky');
			}
		});
	} else {
		header.classList.add('sticky');
	}
} catch (e) {}

// Hamburger menu
try {
	const hamburger = document.querySelector('.hamburger');
	const headerMenu = document.querySelector('.header__menu');
	const langTop = document.querySelector('.header__lang .lang-top');

	if (window.innerWidth <= 768) {
		hamburger.addEventListener('click', () => {
			if (!headerMenu.classList.contains('menu--active')) {
				hamburger.classList.add('hamburger--active');
				headerMenu.classList.add('menu--active');
				langTop.style.color = '#323232';
			} else {
				hamburger.classList.remove('hamburger--active');
				headerMenu.classList.remove('menu--active');
				langTop.style.color = '#ffffff';
			}
		});
	} else {
		hamburger.addEventListener('click', () => {
			if (!headerMenu.classList.contains('menu--active')) {
				hamburger.classList.add('hamburger--active');
				headerMenu.classList.add('menu--active');
			} else {
				hamburger.classList.remove('hamburger--active');
				headerMenu.classList.remove('menu--active');
			}
		});
	}

	// Обработчик клика по всему документу
	document.addEventListener('click', event => {
		const isClickInsideHamburger = hamburger.contains(event.target);
		const isClickInsideDropdown = headerMenu.contains(event.target);

		// Если клик был вне hamburger или headerMenu
		if (!isClickInsideHamburger && !isClickInsideDropdown) {
			hamburger.classList.remove('hamburger--active');
			headerMenu.classList.remove('menu--active');
		}
	});
} catch (e) {}

// Add arrow icon nav link
try {
	const header = document.querySelector('.header');
	const subMenu = header.querySelectorAll('.sub-menu');

	const svgArrow = `
		<svg
			width="11"
			height="7"
			viewBox="0 0 11 7"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2.38419e-07 -4.80825e-07L5.5 7L11 0L2.38419e-07 -4.80825e-07Z"
			/>
		</svg>
	`;

	subMenu.forEach(el => {
		el.parentNode.children[0].insertAdjacentHTML('beforeend', svgArrow);
	});

	if (window.innerWidth <= 768) {
		subMenu.forEach(el => {
			el.parentNode.children[0].addEventListener('click', e => {
				e.preventDefault();

				// Закрываем все открытые подменю
				subMenu.forEach(sub => {
					if (sub.parentNode.classList.contains('active') && sub !== el) {
						sub.parentNode.classList.remove('active');
						sub.style.height = 0;
					}
				});

				// Открываем текущее подменю
				if (el.parentNode.classList.contains('active')) {
					el.parentNode.classList.remove('active');
					el.style.height = 0;
				} else {
					el.parentNode.classList.add('active');
					el.style.height = `${el.scrollHeight}px`;
				}
			});
		});
	}
} catch (e) {}

// Тег конверсии на телефон
try {
	const tel = document.querySelectorAll('.tel__link');

	tel.forEach(link => {
		link.addEventListener('click', function () {
			try {
				gtag('event', 'conversion', {
					send_to: 'AW-10956881405/qV8FCK-9xt8YEP370ugo',
					event_callback: function () {},
				});
				console.log('GA ph sent');
			} catch (e) {}
			return true;
		});
	});
} catch (e) {}

// Choose header language
try {
	// const headerLang = document.querySelector('.header__lang');
	// const langTop = headerLang.querySelector('.lang-top');
	// const langPopup = headerLang.querySelector('.lang__popup');
	// const langItemUz = headerLang.querySelector('.lang-item-uz');
	// const langItemRu = headerLang.querySelector('.lang-item-ru');
	// let currentLang = localStorage.getItem('currentLang');
	// langTop.addEventListener('click', () => {
	// 	langPopup.classList.remove('hide');
	// });
	// if (currentLang === 'Ru' && window.location.href.includes('/ru/')) {
	// 	langPopup.classList.add('hide');
	// } else if (currentLang === 'Uz' && !window.location.href.includes('/ru/')) {
	// 	langPopup.classList.add('hide');
	// } else {
	// 	langPopup.classList.remove('hide');
	// }
	// langItemUz.addEventListener('click', e => {
	// 	console.log('Uz');
	// 	localStorage.setItem('currentLang', 'Uz');
	// 	langPopup.classList.add('hide');
	// });
	// langItemRu.addEventListener('click', e => {
	// 	console.log('Ru');
	// 	localStorage.setItem('currentLang', 'Ru');
	// 	langPopup.classList.add('hide');
	// });
} catch (e) {}

// Auto update footer Year
try {
	const copyright = document.querySelector('.footer__copyright span');
	let currentYear = new Date().getFullYear();
	copyright.textContent = `2022 - ${currentYear}`;
} catch (e) {}
