window.addEventListener('scroll', () => {
    let height = document.documentElement.clientHeight * 0.25 /*vh*/ ;
    document.getElementsByTagName("nav")[0].classList.toggle("show", window.scrollY > height);
    let scrollbutton = document.getElementById("scrollbutton");
    if (scrollbutton)
        scrollbutton.style.opacity = window.scrollY < height ? 1 : 0;
});

function ScrollDown(target) {
    let height = document.documentElement.clientHeight * 0.73 /*vh*/ ;
    window.scrollTo({
        top: height,
        left: 0,
        behavior: "smooth"
    });
}

//keep a reference to the open tile to close it when you open another tile
var ActiveTile = undefined;
document.querySelectorAll(".turn-on-hover").forEach((elem) => {
    elem.addEventListener("mouseenter", (ev) => {
        if (ActiveTile != undefined) ActiveTile.closest("article").classList.toggle("switch", false);
        elem.closest("article").classList.toggle("switch", true);
        ActiveTile = elem;
    });
});

function Turn(elem) {
    if (ActiveTile != undefined && ActiveTile != elem.closest("article"))
        ActiveTile.closest("article").classList.toggle("switch", false);
    elem.closest("article").classList.toggle("switch");
    ActiveTile = elem.closest("article").classList.contains("switch") ? elem.closest("article") : undefined;
}