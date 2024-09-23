// Tabs
try {
	const tabs = document.querySelectorAll('.tabs__list');
	const tabContents = document.querySelectorAll('.tabcontent');

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabs.forEach(tab => tab.classList.remove('tabs__list--active'));

			tab.classList.add('tabs__list--active');

			tabContents.forEach(content => content.classList.add('hide'));
			tabContents[index].classList.remove('hide');
		});
	});
} catch (e) {}
