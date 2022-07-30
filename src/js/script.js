window.addEventListener("load", () => {
	document.getElementById("preload").remove();

	const typewriterElement = document.querySelector('[data-type="writer"]');

	const stacks = ["Front End", "Back End", "Full Stack"];

	let messageIndex, characterIndex, currentMessage, currentCharacters;

	messageIndex = characterIndex = 0;
	currentMessage = currentCharacters = "";

	const type = () => {
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
	};

	setInterval(type, 400);
});
