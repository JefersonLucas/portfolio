window.addEventListener("load", () => {
	document.getElementById("preload").remove();

	const typewriterElement = document.querySelector('[data-type="writer"]');
	const sectionsElements = document.querySelectorAll("section");

	const stacks = ["Front End", "Back End", "Full Stack"];
	const halfWindow = window.innerHeight * 0.5;

	let messageIndex, characterIndex, currentMessage, currentCharacters;

	messageIndex = characterIndex = 0;
	currentMessage = currentCharacters = "";

	function type() {
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

	function animationOnScroll() {
		sectionsElements.forEach((section) => {
			const sectionOnTop = section.getBoundingClientRect().top;
			const isSectionVisible = sectionOnTop - halfWindow < 0;
			isSectionVisible
				? section.classList.add("animation-scroll")
				: section.classList.remove("animation-scroll");
		});
	}

	window.addEventListener("scroll", animationOnScroll);

	setInterval(type, 400);
});
