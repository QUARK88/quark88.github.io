const screen = document.getElementById("screen")
const menu = document.getElementById("menu")
const info = document.getElementById("info")
const slide1 = document.getElementById("slide1")
const slide2 = document.getElementById("slide2")
const slide3 = document.getElementById("slide3")
function shrink() {
    screen.style.width = "25%"
    menu.style.width = "100%"
    info.style.display = "none"
    slide1.style.display = "none"
    slide2.style.display = "none"
    slide3.style.display = "none"
}
function expand(slide) {
    screen.style.width = "90%"
    menu.style.width = "28%"
    info.style.display = "block"
    slide1.style.display = "none"
    slide2.style.display = "none"
    slide3.style.display = "none"
    if (slide == 1) {
        slide1.style.display = "block"
    } else if (slide == 2) {
        slide2.style.display = "block"
    } else if (slide == 3) {
        slide3.style.display = "block"
    }
}