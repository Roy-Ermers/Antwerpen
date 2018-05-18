window.addEventListener('scroll', function () {
	document.getElementsByTagName("nav")[0].classList.toggle("show", window.scrollY > 200);
	document.getElementById("scrollbutton").style.opacity = window.scrollY < 200 ? 1 : 0;
});

function ScrollDown(target) {
	window.scrollTo({
		top: 580, // could be negative value
		left: 0,
		behavior: 'smooth'
	});
}

function Turn(elem) {
	console.log(elem);
	elem.closest("article").classList.toggle("switch");
}