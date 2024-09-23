try {
	// ------------------------ <VARIABLES> ------------------------

	// Head item variables
	const orderHeadItems = document.querySelectorAll('.order__head-item');

	// First step variables
	const firstStep = document.querySelector('.order__step-1');
	const firstStepSumResult = firstStep.querySelector('.sum__top-input input');
	const firstStepSumRange = firstStep.querySelector('.sum__range-input input');
	const firstStepTermResult = firstStep.querySelector('.term__top-input input');
	const firstStepTermRange = firstStep.querySelector(
		'.term__range-input input'
	);
	const firstStepContinue = firstStep.querySelector('.order__step-btn');

	// Second step variables
	const secondStep = document.querySelector('.order__step-2');
	const passportSeries = secondStep.querySelector('#passport-series');
	const passportNumber = secondStep.querySelector('#passport-number');
	const birthdate = secondStep.querySelector('#birthdate');
	const secondStepContinue = secondStep.querySelector('.order__step-btn');
	const errorMsg = secondStep.querySelector('.form__item-error-msg');
	const errorSeriesMsg = secondStep.querySelector('.form__item-error-series');
	const errorNumMsg = secondStep.querySelector('.form__item-error-number');

	// Third step variables
	const thirdStep = document.querySelector('.order__step-3');

	// ------------------------ </VARIABLES> ------------------------

	// ------------------------ <First Step script> ------------------------

	let sumResult = new IMask(firstStepSumResult, {
		mask: Number,
		thousandsSeparator: ' ',
	});

	let termResult = new IMask(firstStepTermResult, {
		mask: Number,
	});

	// FirstStepSumRange
	firstStepSumRange.addEventListener('input', e => {
		const progress = (e.target.value / e.target.max) * 100;
		firstStepSumRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;

		firstStepSumResult.value = (
			parseInt(e.target.value) + 1000000
		).toLocaleString();
	});

	// FirstStepTermRange
	firstStepTermRange.addEventListener('input', e => {
		const progress = (e.target.value / e.target.max) * 100;
		firstStepTermRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;

		firstStepTermResult.value = parseInt(e.target.value) + 3;
	});

	function sumAutoValue() {
		if (localStorage.getItem('onlineCreditData')) {
			firstStepSumResult.value = data.creditAmount.toLocaleString();
			firstStepSumRange.value = data.creditAmount - 1000000;
			const progress =
				((data.creditAmount - 1000000) / firstStepSumRange.max) * 100;
			firstStepSumRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;
		} else {
			firstStepSumResult.value = '1 000 000';
			firstStepSumRange.value = 0;
			const progress = (0 / firstStepSumRange.max) * 100;
			firstStepSumRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;
		}
	}

	function termAutoValue() {
		if (localStorage.getItem('onlineCreditData')) {
			const value = data.creditPeriod;
			if (value <= 3) {
				firstStepTermResult.value = 3;
			} else if (value === 3) {
				firstStepTermResult.value = 3;
				firstStepTermRange.value = 0;
				const progress = (0 / firstStepTermRange.max) * 100;
				firstStepTermRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;
			} else if (value === 4 || value === 5 || value === 6) {
				firstStepTermResult.value = 6;
				firstStepTermRange.value = 3;
				const progress = (3 / firstStepTermRange.max) * 100;
				firstStepTermRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;
			} else if (value === 7 || value === 8 || value === 9) {
				firstStepTermResult.value = 9;
				firstStepTermRange.value = 6;
				const progress = (6 / firstStepTermRange.max) * 100;
				firstStepTermRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;
			} else if (value === 10 || value === 11 || value === 12) {
				firstStepTermResult.value = 12;
				firstStepTermRange.value = 9;
				const progress = (9 / firstStepTermRange.max) * 100;
				firstStepTermRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;
			} else if (value === 13 || value === 14 || value === 15) {
				firstStepTermResult.value = 15;
				firstStepTermRange.value = 12;
				const progress = (12 / firstStepTermRange.max) * 100;
				firstStepTermRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;
			} else if (value === 16 || value === 17 || value === 18) {
				firstStepTermResult.value = 18;
				firstStepTermRange.value = 15;
				const progress = (15 / firstStepTermRange.max) * 100;
				firstStepTermRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;
			} else if (value === 19 || value === 20 || value === 21) {
				firstStepTermResult.value = 21;
				firstStepTermRange.value = 18;
				const progress = (18 / firstStepTermRange.max) * 100;
				firstStepTermRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;
			} else if (value === 22 || value === 23 || value === 24) {
				firstStepTermResult.value = 24;
				firstStepTermRange.value = 21;
				const progress = (21 / firstStepTermRange.max) * 100;
				firstStepTermRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;
			}
		} else {
			firstStepTermResult.value = 3;
			firstStepTermRange.value = 0;
			const progress = (0 / firstStepTermRange.max) * 100;
			firstStepTermRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;
		}
	}

	sumAutoValue();
	termAutoValue();

	// FirstStepSumResult
	firstStepSumResult.addEventListener('input', e => {
		let value = parseInt(e.target.value.replace(/\s/g, ''));

		if (value < 1000000 || value > 25000000) {
			e.target.parentNode.classList.add('error');
		} else if (e.target.value.length < 1) {
			e.target.parentNode.classList.add('error');
		} else {
			e.target.parentNode.classList.remove('error');
			firstStepSumRange.value = value - 1000000;
			const progress = ((value - 1000000) / wizardSumRangeInput.max) * 100;
			firstStepSumRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;
		}
	});

	// FirstStepTermResult
	firstStepTermResult.addEventListener('input', e => {
		let value = parseInt(e.target.value.replace(/\s/g, ''));
		if (value < 3 || value > 12) {
			e.target.parentNode.classList.add('error');
		} else if (e.target.value.length < 1) {
			e.target.parentNode.classList.add('error');
		} else if (value === 3) {
			e.target.parentNode.classList.remove('error');

			firstStepTermRange.value = value - 3;
			const progress = ((value - 3) / firstStepTermRange.max) * 100;
			firstStepTermRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;
		} else if (value === 4 || value === 5 || value === 6) {
			e.target.parentNode.classList.remove('error');

			e.target.value = 6;

			firstStepTermRange.value = 6 - 3;
			const progress = ((6 - 3) / firstStepTermRange.max) * 100;
			firstStepTermRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;
		} else if (value === 7 || value === 8 || value === 9) {
			e.target.parentNode.classList.remove('error');

			e.target.value = 9;

			firstStepTermRange.value = 9 - 3;
			const progress = ((9 - 3) / firstStepTermRange.max) * 100;
			firstStepTermRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;
		} else if (value === 10 || value === 11 || value === 12) {
			e.target.parentNode.classList.remove('error');

			e.target.value = 12;

			firstStepTermRange.value = 12 - 3;
			const progress = ((12 - 3) / firstStepTermRange.max) * 100;
			firstStepTermRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #f1f1f1 ${progress}%)`;
		}
	});

	// FirstStepContinue
	firstStepContinue.addEventListener('click', () => {
		let sumValue = parseInt(firstStepSumResult.value.replace(/\s+/g, ''));
		let termValue = parseInt(firstStepTermResult.value.replace(/\s+/g, ''));

		if (
			sumValue >= 1000000 &&
			sumValue <= 15000000 &&
			termValue >= 3 &&
			termValue <= 12
		) {
			orderHeadItems[0].classList.remove('order__head-item--active');
			orderHeadItems[1].classList.add('order__head-item--active');
			firstStep.classList.remove('order__step--active');
			secondStep.classList.add('order__step--active');
		} else {
			console.log('error');
		}
	});

	// ------------------------ </First Step script> ------------------------

	// ------------------------ <Second Step script> ------------------------

	const birthdateMask = new IMask(birthdate, {
		mask: '00.00.0000',
	});

	const signInPhone = document.querySelector('.sign-in__phone-input');

	let phoneMask = new IMask(signInPhone, {
		mask: '00 000-00-00',
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
		}
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

	birthdate.addEventListener('input', e => {
		if (e.target.value.length == 10) {
			const date = e.target.value.split('.');
			const isAdult = checkAge(`${date[2]}-${date[1]}-${date[0]}`);

			if (isAdult) {
				birthdate.parentNode.parentNode.classList.remove('error');
				// wizardData.birthDate = `${date[2]}-${date[1]}-${date[0]}`;
			} else {
				birthdate.parentNode.parentNode.classList.add('error');
			}
		}
	});

	// SecondStepContinue
	secondStepContinue.addEventListener('click', e => {
		const date = birthdate.value.split('.');
		const isAdult = checkAge(`${date[2]}-${date[1]}-${date[0]}`);

		if (
			passportSeries.value.length > 1 &&
			passportNumber.value.length > 6 &&
			birthdate.value &&
			isAdult
		) {
			orderHeadItems[1].classList.remove('order__head-item--active');
			orderHeadItems[2].classList.add('order__head-item--active');
			secondStep.classList.remove('order__step--active');
			thirdStep.classList.add('order__step--active');
		} else {
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
			if (birthdate.value && isAdult) {
				birthdate.parentNode.parentNode.classList.remove('error');
			} else {
				birthdate.parentNode.parentNode.classList.add('error');
			}
		}
	});
} catch (e) {}
