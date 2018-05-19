window.addEventListener('scroll', () => {
    document.getElementsByTagName("nav")[0].classList.toggle("show", window.scrollY > 200);
    document.getElementById("scrollbutton").style.opacity = window.scrollY < 200 ? 1 : 0;
});
var ActiveTile = undefined;
document.querySelectorAll(".turn-on-hover").forEach((elem) => {
    elem.addEventListener("mouseenter", (ev) => {
        if (ActiveTile != undefined) ActiveTile.closest("article").classList.toggle("switch", false);
        elem.closest("article").classList.toggle("switch", true);
        ActiveTile = elem;
    });
});

function ScrollDown(target) {
    window.scrollTo({
        top: 590,
        left: 0,
        behavior: "smooth"
    });
}

function Turn(elem) {
    if (ActiveTile != undefined && ActiveTile != elem.closest("article"))
        ActiveTile.closest("article").classList.toggle("switch", false);
    elem.closest("article").classList.toggle("switch");
    ActiveTile = elem.closest("article").classList.contains("switch") ? elem.closest("article") : undefined;
}