const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
	loop: true,
	delay:75
});

typewriter
	.typeString('La ajetreada capital de Japón')
	.pauseFor(200)
	.start();