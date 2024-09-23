// Article Interested slider
try {
	const interestedSlider = new Swiper('.interested__slider', {
		breakpoints: {
			320: {
				slidesPerView: 'auto',
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 'auto',
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
		},
	});
} catch (e) {}
