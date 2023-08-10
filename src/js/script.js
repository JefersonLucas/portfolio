/*==================== Typing ====================*/
const typewriterElement = document.querySelector('[data-type="writer"]');

const stacks = [" Frontend ", " Backend ", " Mobile ", " Full Stack "];

let messageIndex, characterIndex, currentMessage, currentCharacters;

messageIndex = characterIndex = 0;
currentMessage = currentCharacters = "";

function typeWriter() {
	const shouldTypeFirsMessage = messageIndex === stacks.length;

	shouldTypeFirsMessage && (messageIndex = 0);

	currentMessage = stacks[messageIndex];
	currentCharacters = currentMessage.slice(0, characterIndex++);
	typewriterElement.textContent = currentCharacters;

	const shouldChangeMessageToBeTyped =
		currentCharacters.length === currentMessage.length;

	if (shouldChangeMessageToBeTyped) {
		messageIndex++;
		characterIndex = 0;
	}
}

setInterval(typeWriter, 300);

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close"),
	navBtns = document.getElementById("nav-btns"),
	dowloadCV = document.getElementById("download-cv");

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("bounceInUp");
		navMenu.classList.remove("bounceOutDown");
		navBtns.classList.remove("tada");
	});
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("bounceInUp");
		navMenu.classList.add("bounceOutDown");
		navBtns.classList.add("tada");
	});
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((element) =>
	// When we click on each navLink, we remove the bounceInUp class
	element.addEventListener("click", () => {
		if (window.screen.width < 768) {
			navMenu.classList.add("bounceOutDown");
			navBtns.classList.add("tada");
			navMenu.classList.remove("bounceInUp");
		}
	})
);

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName("skills__content"),
	skillsHeader = document.querySelectorAll(".skills__header"),
	valuesDisplays = document.querySelectorAll(".skills__number"),
	// Skills 1
	frontSkill01 = document.getElementById("frontend-skill-01"),
	frontSkill02 = document.getElementById("frontend-skill-02"),
	frontSkill03 = document.getElementById("frontend-skill-03"),
	frontSkill04 = document.getElementById("frontend-skill-04"),
	// Skills 2
	backSkill01 = document.getElementById("backend-skill-01"),
	backSkill02 = document.getElementById("backend-skill-02"),
	backSkill03 = document.getElementById("backend-skill-03"),
	backSkill04 = document.getElementById("backend-skill-04"),
	// Skills 3
	mobileSkill01 = document.getElementById("mobile-skill-01"),
	mobileSkill02 = document.getElementById("mobile-skill-02"),
	mobileSkill03 = document.getElementById("mobile-skill-03"),
	mobileSkill04 = document.getElementById("mobile-skill-04");

function toggleSkills() {
	let itemClass = this.parentNode.className;
	let interval = 2500;

	valuesDisplays.forEach((value) => {
		let startValue = 0;
		let endValue = parseInt(value.getAttribute("data-value"));

		let duration = Math.floor(interval / endValue);

		let counter = setInterval(() => {
			startValue += 1;
			value.textContent = startValue;

			if (startValue === endValue) {
				clearInterval(counter);
			}
		}, duration);
	});

	for (i = 0; i < skillsContent.length; i++) {
		skillsContent[i].className = "skills__content skills__close";
		// Skills 1
		frontSkill01.classList.remove("progressIn90");
		frontSkill02.classList.remove("progressIn80");
		frontSkill03.classList.remove("progressIn70");
		frontSkill04.classList.remove("progressIn80");
		// Skills 2
		backSkill01.classList.remove("progressIn70");
		backSkill02.classList.remove("progressIn70");
		backSkill03.classList.remove("progressIn70");
		backSkill04.classList.remove("progressIn70");
		// Skills 3
		mobileSkill01.classList.remove("progressIn70");
		mobileSkill02.classList.remove("progressIn70");
		mobileSkill03.classList.remove("progressIn70");
		mobileSkill04.classList.remove("progressIn70");
	}

	if (itemClass === "skills__content skills__close") {
		this.parentNode.className = "skills__content skills__open";
		// Skills 1
		frontSkill01.classList.add("progressIn90");
		frontSkill02.classList.add("progressIn80");
		frontSkill03.classList.add("progressIn70");
		frontSkill04.classList.add("progressIn80");
		// Skills 2
		backSkill01.classList.add("progressIn80");
		backSkill02.classList.add("progressIn70");
		backSkill03.classList.add("progressIn70");
		backSkill04.classList.add("progressIn70");
		// Skills 3
		mobileSkill01.classList.add("progressIn70");
		mobileSkill02.classList.add("progressIn70");
		mobileSkill03.classList.add("progressIn70");
		mobileSkill04.classList.add("progressIn70");
	}
}

skillsHeader.forEach((element) => {
	element.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll("[data-target]"),
	tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.target);

		tabContents.forEach((tabContent) => {
			tabContent.classList.remove("qualification__active");
		});

		target.classList.add("qualification__active");

		tabs.forEach((element) => {
			element.classList.remove("qualification__active");
		});

		tab.classList.add("qualification__active");
	});
});

/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll(".services__modal"),
	modalButtons = document.querySelectorAll(".services__button"),
	modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
	modalViews[modalClick].classList.add("active-modal");
	modalViews[modalClick].classList.remove("inactive-modal");
};

modalButtons.forEach((modalButton, index) => {
	modalButton.addEventListener("click", () => {
		modal(index);
	});
});

modalCloses.forEach((modalClose) => {
	modalClose.addEventListener("click", () => {
		modalViews.forEach((modalView) => {
			modalView.classList.add("inactive-modal");
			modalView.classList.remove("active-modal");
		});
	});
});

/*==================== PORTFOLIO SWIPER  ====================*/

let swiperPortfolio = new Swiper(".portfolio__container", {
	cssMode: true,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	mousewheel: true,
	keyboard: true,
});

/*==================== TESTIMONIAL ====================*/

let swiperTestimonial = new Swiper(".testimonial__container", {
	loop: true,
	grabCursor: true,
	spaceBetween: 48,
	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	breackpoints: {
		568: {
			slidesPerView: 2,
		},
	},
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		let sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
	const nav = document.getElementById("header");
	// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 80) nav.classList.add("scroll-header");
	else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
		darkTheme
	);
	themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
		iconTheme
	);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem("selected-theme", getCurrentTheme());
	localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== INITIALIZE AOS ====================*/

AOS.init();
