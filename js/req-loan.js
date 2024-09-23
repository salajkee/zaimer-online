// Wizard
try {
	const requestLoan = document.querySelector('.req-loan');
	const sumResult = requestLoan.querySelector('.top__input input');
	const sumRange = requestLoan.querySelector('.range__input input');

	let sumResultMask = new IMask(sumResult, {
		mask: Number,
		thousandsSeparator: ' ',
	});

	// Wizard sum range input change
	sumRange.addEventListener('input', e => {
		const progress = (e.target.value / e.target.max) * 100;
		sumRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;

		sumResult.value = (parseInt(e.target.value) + 1000000).toLocaleString();
	});

	function sumAutoValue() {
		if (localStorage.getItem('onlineCreditData')) {
			sumResult.value = data.creditAmount.toLocaleString();
			sumRange.value = data.creditAmount - 1000000;
			const progress = ((data.creditAmount - 1000000) / sumRange.max) * 100;
			sumRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		} else {
			sumResult.value = '1 000 000';
			sumRange.value = 0;
			const progress = (0 / sumRange.max) * 100;
			sumRange.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		}
	}

	sumAutoValue();
} catch (e) {}
