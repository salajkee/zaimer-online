// Wizard
try {
	const wizard = document.querySelector('.credit-online .wizard');
	const steps = wizard.querySelectorAll('.steps__item');
	const wizardHeadText = wizard.querySelectorAll('.head__item');
	const wizardStep = wizard.querySelectorAll('.wizard__step');
	const wizardPrev2 = wizard.querySelector('.wizard__prev-2');
	const wizardPrev3 = wizard.querySelector('.wizard__prev-3');
	const wizardNext1 = wizard.querySelector('.wizard__next-1');
	const wizardNext2 = wizard.querySelector('.wizard__next-2');

	const firstName = wizard.querySelector('#first-name');
	const secondName = wizard.querySelector('#second-name');
	const passportSeries = wizard.querySelector('#passport-series');
	const passportNumber = wizard.querySelector('#passport-number');
	const birthdate = wizard.querySelector('#birthdate');
	const phoneNumber = wizard.querySelector('.accept__phone-input input');

	const offerCheckbox = wizard.querySelector('#offer-checkbox');
	const agreementCheckbox = wizard.querySelector('#agreement-checkbox');

	const phoneSection = document.querySelector('.accept__phone');
	const codeSection = document.querySelector('.accept__code');
	const phoneBtn = document.querySelector('.accept__phone-btn');
	const codeInput = document.querySelector('.accept__code-input.input input');
	const codeText = document.querySelector('.accept__code-text');
	const codeBtn = document.querySelector('.accept__code-btn');

	const errorMsg = wizard.querySelector('.item__error-msg');
	const errorSeriesMsg = wizard.querySelector('.item__error-series');
	const errorNumMsg = wizard.querySelector('.item__error-number');

	const wizardThnks = wizard.querySelector('.wizard__thnks');

	// Wizard sum
	const wizardSumResult = document.querySelector(
		'.wizard__sum .top__input input'
	);
	const wizardSumRangeInput = document.querySelector(
		'.wizard__sum .range__input input'
	);
	const wizardTermResult = document.querySelector(
		'.wizard__term .top__input input'
	);
	const wizardTermRangeInput = document.querySelector(
		'.wizard__term .range__input input'
	);

	let wizardData = {
		firstName: '',
		secondName: '',
		passportSeries: '',
		passportNumber: '',
		birthDate: '',
		clientPhone: '',
		lang: '',
	};

	let codeData = {
		codeId: null,
		code: null,
	};

	let sumResult = new IMask(wizardSumResult, {
		mask: Number,
		thousandsSeparator: ' ',
	});

	let termResult = new IMask(wizardTermResult, {
		mask: Number,
	});

	let phone = new IMask(phoneNumber, {
		mask: '00 000-00-00',
	});

	const birthdateMask = new IMask(birthdate, {
		mask: '00.00.0000',
	});

	// Wizard sum range input change
	wizardSumRangeInput.addEventListener('input', e => {
		const progress = (e.target.value / e.target.max) * 100;
		wizardSumRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

		wizardSumResult.value = (
			parseInt(e.target.value) + 1000000
		).toLocaleString();
	});

	// Wizard term range input change
	wizardTermRangeInput.addEventListener('input', e => {
		const progress = (e.target.value / e.target.max) * 100;
		wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

		wizardTermResult.value = parseInt(e.target.value) + 3;
	});

	function sumAutoValue() {
		if (localStorage.getItem('onlineCreditData')) {
			wizardSumResult.value = data.creditAmount.toLocaleString();
			wizardSumRangeInput.value = data.creditAmount - 1000000;
			const progress =
				((data.creditAmount - 1000000) / wizardSumRangeInput.max) * 100;
			wizardSumRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		} else {
			wizardSumResult.value = '1 000 000';
			wizardSumRangeInput.value = 0;
			const progress = (0 / wizardSumRangeInput.max) * 100;
			wizardSumRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		}
	}

	function termAutoValue() {
		if (localStorage.getItem('onlineCreditData')) {
			const value = data.creditPeriod;
			if (value <= 3) {
				wizardTermResult.value = 3;
			} else if (value === 3) {
				wizardTermResult.value = 3;
				wizardTermRangeInput.value = 0;
				const progress = (0 / wizardTermRangeInput.max) * 100;
				wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 4 || value === 5 || value === 6) {
				wizardTermResult.value = 6;
				wizardTermRangeInput.value = 3;
				const progress = (3 / wizardTermRangeInput.max) * 100;
				wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 7 || value === 8 || value === 9) {
				wizardTermResult.value = 9;
				wizardTermRangeInput.value = 6;
				const progress = (6 / wizardTermRangeInput.max) * 100;
				wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 10 || value === 11 || value === 12) {
				wizardTermResult.value = 12;
				wizardTermRangeInput.value = 9;
				const progress = (9 / wizardTermRangeInput.max) * 100;
				wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 13 || value === 14 || value === 15) {
				wizardTermResult.value = 15;
				wizardTermRangeInput.value = 12;
				const progress = (12 / wizardTermRangeInput.max) * 100;
				wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 16 || value === 17 || value === 18) {
				wizardTermResult.value = 18;
				wizardTermRangeInput.value = 15;
				const progress = (15 / wizardTermRangeInput.max) * 100;
				wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 19 || value === 20 || value === 21) {
				wizardTermResult.value = 21;
				wizardTermRangeInput.value = 18;
				const progress = (18 / wizardTermRangeInput.max) * 100;
				wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			} else if (value === 22 || value === 23 || value === 24) {
				wizardTermResult.value = 24;
				wizardTermRangeInput.value = 21;
				const progress = (21 / wizardTermRangeInput.max) * 100;
				wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
			}
		} else {
			wizardTermResult.value = 3;
			wizardTermRangeInput.value = 0;
			const progress = (0 / wizardTermRangeInput.max) * 100;
			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		}
	}

	sumAutoValue();
	termAutoValue();

	// Wizard sum input change
	wizardSumResult.addEventListener('input', e => {
		let value = parseInt(e.target.value.replace(/\s/g, ''));

		if (value < 1000000 || value > 25000000) {
			e.target.parentNode.classList.add('error');
		} else if (e.target.value.length < 1) {
			e.target.parentNode.classList.add('error');
		} else {
			e.target.parentNode.classList.remove('error');
			wizardSumRangeInput.value = value - 1000000;
			const progress = ((value - 1000000) / wizardSumRangeInput.max) * 100;
			wizardSumRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		}
	});

	// // Wizard term input change
	wizardTermResult.addEventListener('input', e => {
		let value = parseInt(e.target.value.replace(/\s/g, ''));
		if (value < 3 || value > 12) {
			e.target.parentNode.classList.add('error');
		} else if (e.target.value.length < 1) {
			e.target.parentNode.classList.add('error');
		} else if (value === 3) {
			e.target.parentNode.classList.remove('error');

			wizardTermRangeInput.value = value - 3;
			const progress = ((value - 3) / wizardTermRangeInput.max) * 100;
			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		} else if (value === 4 || value === 5 || value === 6) {
			e.target.parentNode.classList.remove('error');

			e.target.value = 6;

			wizardTermRangeInput.value = 6 - 3;
			const progress = ((6 - 3) / wizardTermRangeInput.max) * 100;
			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		} else if (value === 7 || value === 8 || value === 9) {
			e.target.parentNode.classList.remove('error');

			e.target.value = 9;

			wizardTermRangeInput.value = 9 - 3;
			const progress = ((9 - 3) / wizardTermRangeInput.max) * 100;
			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		} else if (value === 10 || value === 11 || value === 12) {
			e.target.parentNode.classList.remove('error');

			e.target.value = 12;

			wizardTermRangeInput.value = 12 - 3;
			const progress = ((12 - 3) / wizardTermRangeInput.max) * 100;
			wizardTermRangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		}
	});

	// Wizard prev btn
	wizardPrev2.addEventListener('click', () => {
		wizardNext2.classList.add('hide');
		wizardNext1.classList.remove('hide');
		wizardPrev2.classList.add('hide');
		wizardHeadText[1].classList.remove('active');
		wizardHeadText[0].classList.add('active');
		steps[1].classList.remove('active');
		if (steps[1].nextElementSibling) {
			steps[1].nextElementSibling.classList.remove('active');
		}
		wizardStep[1].classList.remove('active');
		wizardStep[0].classList.add('active');
	});

	wizardPrev3.addEventListener('click', () => {
		wizardPrev3.classList.add('hide');
		wizardNext2.classList.remove('hide');
		wizardPrev2.classList.remove('hide');
		wizardHeadText[2].classList.remove('active');
		wizardHeadText[1].classList.add('active');
		steps[2].classList.remove('active');
		if (steps[2].nextElementSibling) {
			steps[2].nextElementSibling.classList.remove('active');
		}
		wizardStep[2].classList.remove('active');
		wizardStep[1].classList.add('active');
	});

	// Wizard next btn
	wizardNext1.addEventListener('click', e => {
		if (
			!wizardSumResult.parentNode.classList.contains('error') &&
			!wizardTermResult.parentNode.classList.contains('error')
		) {
			wizardNext1.classList.add('hide');
			wizardNext2.classList.remove('hide');
			wizardPrev2.classList.remove('hide');
			wizardHeadText[0].classList.remove('active');
			wizardHeadText[1].classList.add('active');
			steps[1].classList.add('active');
			if (steps[1].nextElementSibling) {
				steps[1].nextElementSibling.classList.add('active');
			}
			wizardStep[0].classList.remove('active');
			wizardStep[1].classList.add('active');
		}
	});

	wizardNext2.addEventListener('click', e => {
		if (
			firstName.value.length > 1 &&
			secondName.value.length > 1 &&
			passportSeries.value.length > 1 &&
			passportNumber.value.length > 6 &&
			birthdate.value
		) {
			wizardNext1.classList.add('hide');
			wizardNext2.classList.add('hide');
			wizardPrev2.classList.add('hide');
			wizardPrev3.classList.remove('hide');
			wizardHeadText[1].classList.remove('active');
			wizardHeadText[2].classList.add('active');
			steps[2].classList.add('active');
			if (steps[2].nextElementSibling) {
				steps[2].nextElementSibling.classList.add('active');
			}
			wizardStep[1].classList.remove('active');
			wizardStep[2].classList.add('active');
		} else {
			firstName.value.length > 1
				? firstName.parentNode.parentElement.classList.remove('error')
				: firstName.parentNode.parentElement.classList.add('error');
			secondName.value.length > 1
				? secondName.parentNode.parentElement.classList.remove('error')
				: secondName.parentNode.parentElement.classList.add('error');
			if (passportSeries.value.length > 1 && passportNumber.value > 6) {
				passportSeries.classList.remove('error');
				errorSeriesMsg.classList.remove('show');
				passportNumber.classList.remove('error');
				errorNumMsg.classList.remove('show');
				errorMsg.classList.remove('show');
			} else if (passportSeries.value.length > 1 && passportNumber.value < 6) {
				passportSeries.classList.remove('error');
				errorSeriesMsg.classList.remove('show');
				passportNumber.classList.add('error');
				errorNumMsg.classList.add('show');
				errorMsg.classList.remove('show');
			} else if (passportSeries.value.length < 1 && passportNumber.value > 6) {
				passportSeries.classList.add('error');
				errorSeriesMsg.classList.add('show');
				passportNumber.classList.remove('error');
				errorNumMsg.classList.remove('show');
				errorMsg.classList.remove('show');
			} else {
				passportSeries.classList.add('error');
				errorSeriesMsg.classList.remove('show');
				passportNumber.classList.add('error');
				errorNumMsg.classList.remove('show');
				errorMsg.classList.add('show');
			}
			if (birthdate.value) {
				birthdate.parentNode.parentNode.classList.remove('error');
			} else {
				birthdate.parentNode.parentNode.classList.add('error');
			}
		}
	});

	// FirstName input change
	firstName.addEventListener('input', e => {
		if (e.target.value.length < 2) {
			e.target.parentNode.parentNode.classList.add('error');
		} else {
			e.target.parentNode.parentNode.classList.remove('error');
			wizardData.firstName = e.target.value;
		}
	});

	// SecondName input change
	secondName.addEventListener('input', e => {
		if (e.target.value.length < 2) {
			e.target.parentNode.parentNode.classList.add('error');
		} else {
			e.target.parentNode.parentNode.classList.remove('error');
			wizardData.secondName = e.target.value;
		}
	});

	// PassportSeries input change
	passportSeries.addEventListener('input', e => {
		e.target.value = e.target.value.toUpperCase().replace(/[^A-Z]/g, '');
		const isLatinLetters = /^[A-Z]{2}$/.test(e.target.value);

		if (isLatinLetters) {
			e.target.classList.remove('error');
			errorMsg.classList.remove('show');
			if (e.target.value.length == 2) {
				if (passportNumber.classList.contains('error')) {
					errorMsg.classList.add('show');
				} else {
					errorMsg.classList.remove('show');
				}
				errorSeriesMsg.classList.remove('show');
				wizardData.passportSeries = e.target.value;
			}
		} else {
			errorMsg.classList.remove('show');
			errorNumMsg.classList.remove('show');
			e.target.classList.add('error');
			errorSeriesMsg.classList.add('show');
		}
	});

	// PassportNumber input change
	passportNumber.addEventListener('input', e => {
		// Удаляем все символы, кроме цифр
		e.target.value = e.target.value.replace(/[^0-9]/g, '');

		const value = Number(e.target.value);

		if (!isNaN(value) && e.target.value.length < 7) {
			errorMsg.classList.remove('show');
			errorSeriesMsg.classList.remove('show');
			e.target.classList.add('error');
			errorNumMsg.classList.add('show');
		} else {
			if (passportSeries.classList.contains('error')) {
				errorMsg.classList.add('show');
			} else {
				errorMsg.classList.remove('show');
			}
			e.target.classList.remove('error');
			errorNumMsg.classList.remove('show');
			wizardData.passportNumber = e.target.value;
		}
	});

	const uzbekLocale = {
		days: [
			'Yakshanba',
			'Dushanba',
			'Seshanba',
			'Chorshanba',
			'Payshanba',
			'Juma',
			'Shanba',
		],
		daysShort: ['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Sha'],
		daysMin: ['Ya', 'Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh'],
		months: [
			'Yanvar',
			'Fevral',
			'Mart',
			'Aprel',
			'May',
			'Iyun',
			'Iyul',
			'Avgust',
			'Sentabr',
			'Oktabr',
			'Noyabr',
			'Dekabr',
		],
		monthsShort: [
			'Yan',
			'Fev',
			'Mar',
			'Apr',
			'May',
			'Iyun',
			'Iyul',
			'Avg',
			'Sen',
			'Okt',
			'Noy',
			'Dek',
		],
		today: 'Bugun',
		clear: 'Tozalash',
		dateFormat: 'yyyy-mm-dd',
		firstDay: 1,
	};

	const russianLocale = {
		days: [
			'Воскресенье',
			'Понедельник',
			'Вторник',
			'Среда',
			'Четверг',
			'Пятница',
			'Суббота',
		],
		daysShort: ['Вск', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Суб'],
		daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		months: [
			'Январь',
			'Февраль',
			'Март',
			'Апрель',
			'Май',
			'Июнь',
			'Июль',
			'Август',
			'Сентябрь',
			'Октябрь',
			'Ноябрь',
			'Декабрь',
		],
		monthsShort: [
			'Янв',
			'Фев',
			'Мар',
			'Апр',
			'Май',
			'Июн',
			'Июл',
			'Авг',
			'Сен',
			'Окт',
			'Ноя',
			'Дек',
		],
		today: 'Сегодня',
		clear: 'Очистить',
		dateFormat: 'yyyy-mm-dd',
		firstDay: 1,
	};

	const currectLocale = window.location.href.includes('/ru/')
		? russianLocale
		: uzbekLocale;

	// Air datepicker init
	let datepicker = new AirDatepicker('#birthdate', {
		view: 'years',
		dateFormat: 'dd.MM.yyyy',
		minDate: new Date(1924, 0, 1), // ограничение с начала 2020 года
		maxDate: new Date(
			new Date().getFullYear() - 18,
			new Date().getMonth(),
			new Date().getDate()
		),
		locale: currectLocale,
		autoClose: true,
		onSelect: ({ date }) => {
			birthdate.parentNode.parentNode.classList.remove('error');
			const newDate = new Date(date);
			// Extract the year, month, and day
			const year = newDate.getFullYear();
			const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
			const day = String(newDate.getDate()).padStart(2, '0');
			// Format as YYYY-MM-DD
			const formattedDate = `${year}-${month}-${day}`;
			wizardData.birthDate = formattedDate;
		},
	});

	function checkAge(dateOfBirth) {
		const now = new Date();
		const dob = new Date(dateOfBirth);
		const yearOfBirth = dob.getFullYear();

		// Проверка корректности года рождения
		if (yearOfBirth < 1900 || yearOfBirth > now.getFullYear()) {
			return false;
		}

		let age = now.getFullYear() - yearOfBirth;
		const monthDifference = now.getMonth() - dob.getMonth();
		const dayDifference = now.getDate() - dob.getDate();

		if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
			age--;
		}

		return age >= 18;
	}

	birthdate.addEventListener('click', () => {
		birthdate.value = '';
		birthdateMask.updateValue();
	});

	birthdate.addEventListener('input', e => {
		if (e.target.value.length == 10) {
			datepicker.hide();
			const date = e.target.value.split('.');
			const isAdult = checkAge(`${date[2]}-${date[1]}-${date[0]}`);

			if (isAdult) {
				birthdate.parentNode.parentNode.classList.remove('error');
				wizardData.birthDate = `${date[2]}-${date[1]}-${date[0]}`;
			} else {
				birthdate.parentNode.parentNode.classList.add('error');
			}
		}
	});

	agreementCheckbox.addEventListener('change', e => {
		if (e.target.checked) {
			e.target.classList.remove('error');
		} else {
			e.target.classList.add('error');
		}
	});

	phoneNumber.addEventListener('input', e => {
		if (e.target.value.length == 12) {
			phoneNumber.parentNode.classList.remove('error');
		} else {
			phoneNumber.parentNode.classList.add('error');
		}
	});

	async function sendData(data) {
		const res = await fetch('/integrations/confirmation/', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				action: 'request_sms_code',
				data: data,
			}),
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Ошибка при отправке запроса');
				}
				// codeData.codeId = data.code_id;
				return response.json();
			})
			.then(data => {
				// Обработка успешного ответа от сервера
				codeData.codeId = data.data.code_id;
				console.log(codeData);
				console.log(data);
			})
			.catch(error => {
				// Обработка ошибки при отправке запроса
				console.error('Ошибка:', error.message);
			});
	}

	const ONE_MINUTE = 60000; // 1 минута в миллисекундах

	function hidePhoneShowCode() {
		phoneSection.classList.add('hide');
		codeSection.classList.remove('hide');
	}

	function startTimer() {
		const startTime = Date.now();
		localStorage.setItem('startTime', startTime);
		updateTimer(startTime);
	}

	function updateTimer(startTime) {
		const interval = setInterval(() => {
			const currentTime = Date.now();
			const elapsedTime = currentTime - startTime;
			const remainingTime = Math.max(0, ONE_MINUTE - elapsedTime);

			if (window.location.href.includes('/ru/')) {
				codeText.textContent = `Если код не придёт, можно получить новый через ${Math.ceil(
					remainingTime / 1000
				)} сек`;
			} else {
				codeText.textContent = `Agar kod kelmasa, siz ${Math.ceil(
					remainingTime / 1000
				)} soniya orqali yangisini olishingiz mumkin`;
			}

			if (remainingTime <= 0) {
				clearInterval(interval);
				localStorage.removeItem('startTime');
				codeText.classList.add('hide');
				codeBtn.classList.remove('hide');
			}
		}, 1000);
	}

	phoneBtn.addEventListener('click', () => {
		if (agreementCheckbox.checked && phoneNumber.value.length == 12) {
			wizardData.clientPhone = `998${phoneNumber.value.replace(/[\s-]/g, '')}`;
			if (window.location.href.includes('/ru/')) {
				wizardData.lang = 'ru';
			} else {
				wizardData.lang = 'uz';
			}
			sendData(wizardData);
		} else {
			agreementCheckbox.checked
				? agreementCheckbox.classList.remove('error')
				: agreementCheckbox.classList.add('error');
			phoneNumber.value.length !== 12
				? phoneNumber.parentNode.classList.add('error')
				: phoneNumber.parentNode.classList.remove('error');
		}
		hidePhoneShowCode();
		startTimer();
	});

	const savedStartTime = localStorage.getItem('startTime');
	if (savedStartTime) {
		const elapsedTime = Date.now() - savedStartTime;
		if (elapsedTime < ONE_MINUTE) {
			hidePhoneShowCode();
			updateTimer(savedStartTime);
		} else {
			localStorage.removeItem('startTime');
			codeText.classList.add('hide');
			codeBtn.classList.remove('hide');
		}
	}

	async function sendCode(data) {
		const res = await fetch('/integrations/confirmation/', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				action: 'confirm_sms_code',
				data: data,
			}),
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Ошибка при отправке запроса');
				}
				return response.json();
			})
			.then(data => {
				// Обработка успешного ответа от сервера
				if (data.success) {
					codeInput.parentNode.classList.remove('error');
					var bitrixData = {
						fields: {
							TITLE: 'WIZARD',
							NAME: `${wizardData.firstName} ${wizardData.secondName}`,
							PHONE: [{ VALUE: wizardData.clientPhone, VALUE_TYPE: 'WORK' }],
							OPPORTUNITY: parseInt(wizardSumResult.value.replace(/\s+/g, '')),
							COMMENTS: `Срок кредита: ${wizardTermResult.value}\nДата рождения: ${wizardData.birthDate}\nСерия паспорта: ${wizardData.passportSeries}\nНомер паспорта: ${wizardData.passportNumber}`,
							// Дополнительные поля формы, если нужно
						},
					};
					fetch(
						'https://summagroup.bitrix24.ru/rest/88/wj5kdqhivkz90rxv/crm.lead.add.json',
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(bitrixData),
						}
					)
						.then(response => {
							console.log('Успешно отправлена');

							try {
								gtag('event', 'conversion', {
									send_to: 'AW-10956881405/hLM0CIGgxd8YEP370ugo',
									event_callback: function () {},
								});
								console.log('GA sent');
							} catch (e) {}

							return response.json();
						})
						.then(bitrixResult => {
							console.log('Bitrix24 Response:', bitrixResult);
							// Обработка ответа от Bitrix24, если нужно

							wizardThnks.classList.remove('hide');

							setTimeout(() => {
								wizardThnks.classList.add('hide');
							}, 5000);
						})
						.then()
						.catch(error => {
							console.error('Bitrix24 Error:', error);
						});
				} else if (
					!data.success &&
					data.error_message == 'The provided confirmation code is invalid.'
				) {
					codeInput.parentNode.classList.add('error');
				}
			})
			.catch(error => {
				// Обработка ошибки при отправке запроса
				console.error('Ошибка:', error.message);
			});
	}

	codeInput.addEventListener('input', e => {
		if (e.target.value.length == 6) {
			codeData.code = parseInt(e.target.value);
			console.log(codeData);
			sendCode(codeData);
		} else {
			console.log('error');
		}
	});
} catch (e) {}
