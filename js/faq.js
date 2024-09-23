// Faq accordion
try {
	const faq = document.querySelector('.faq');
	const items = faq.querySelectorAll('.faq__item');
	const itemHeads = faq.querySelectorAll('.faq__item-head');

	itemHeads.forEach(itemHead => {
		itemHead.addEventListener('click', () => {
			const item = itemHead.parentNode;
			const isActive = item.classList.contains('active');

			items.forEach(item => {
				item.classList.remove('active');
				item.lastElementChild.style.height = 0;
			});

			if (!isActive) {
				item.classList.add('active');
				item.lastElementChild.style.height = `${item.lastElementChild.scrollHeight}px`;
			}
		});
	});
} catch (e) {}
