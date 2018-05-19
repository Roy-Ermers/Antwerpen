window.addEventListener('scroll', function() {
    document.getElementsByTagName("nav")[0].classList.toggle("show", window.scrollY > 200);
    document.getElementById("scrollbutton").style.opacity = window.scrollY < 200 ? 1 : 0;
});
document.querySelectorAll(".turn-on-hover").forEach((elem) => {
    elem.addEventListener("mouseenter", (ev) => {
        elem.closest("article").classList.toggle("switch", true);
    })
    elem.addEventListener("mouseleave", (ev) => {
        elem.closest("article").classList.toggle("switch", false);
    })
})

function ScrollDown(target) {
    window.scrollTo({
        top: 590, // could be negative value
        left: 0,
        behavior: 'smooth'
    });
}

function Turn(elem) {
    elem.closest("article").classList.toggle("switch");
}