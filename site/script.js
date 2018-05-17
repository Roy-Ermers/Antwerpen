window.addEventListener('scroll', function () {
	document.getElementsByTagName("nav")[0].classList.toggle("show", window.scrollY > 200);
});

function ScrollDown(target) {
	window.scrollBy({
		top: 600, // could be negative value
		left: 0,
		behavior: 'smooth'
	});
}
///////hooomoooooooooooooooooooooooooooooooooooooo, kan je even kijken of je de button iets hoger kan krijgen en je de button iet doorzichtiger kan maken
//is goed 👌