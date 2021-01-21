$(window).on('load', function () {

	let vh = window.innerHeight * 0.01

	document.documentElement.style.setProperty('--vh', `${vh}px`)

	// Spinner Load
	var preloaderFadeOutTime = 500;

	function hidePreloader() {

		var preloader = $('.spinner-wrapper');

		setTimeout(function () {
			preloader.fadeOut(preloaderFadeOutTime);
		}, 500);
	}
	hidePreloader();
});
