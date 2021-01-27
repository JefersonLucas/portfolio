/*!
 * Jeferson Luckas - Portfolio
 *
 * Copyright (c) 2021 Jeferson Lucas
 * Released under the MIT license
 * https://github.com/JefersonLucas/portfolio/blob/master/LICENSE.md
 *
 */

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
