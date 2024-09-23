// Credit online Range slider
try {
	const rangeInput = document.querySelector('.credit__range-input input');
	const result = document.querySelector('.credit-online .top__result');

	let onlineCreditData = {
		creditAmount: 1000000,
		creditPeriod: 3,
	};

	rangeInput.addEventListener('input', e => {
		const progress = (e.target.value / e.target.max) * 100;

		rangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		result.textContent = (parseInt(e.target.value) + 1000000).toLocaleString();

		onlineCreditData.creditAmount = parseInt(e.target.value) + 1000000;

		// Save localStorage
		localStorage.setItem('onlineCreditData', JSON.stringify(onlineCreditData));
	});

	if (localStorage.getItem('onlineCreditData') !== null) {
		const data = JSON.parse(localStorage.getItem('onlineCreditData'));

		const progress = ((data.creditAmount - 1000000) / rangeInput.max) * 100;
		rangeInput.style.background = `linear-gradient(to right, #00b56a ${progress}%, #ccc ${progress}%)`;
		rangeInput.value = data.creditAmount - 1000000;
		result.textContent = data.creditAmount.toLocaleString();
	} else {
		result.textContent = '1 000 000';
	}
} catch (e) {}
