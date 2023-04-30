const navbar = document.querySelector("header.mobile .nav")
const hamburger = document.querySelector(".hamburger")
const hamburgerClose = document.querySelector(".hamburger-close")

hamburger.addEventListener("click", () => {
	navbar.style.transform = "translateX(0%)"
})
hamburgerClose.addEventListener("click", () => {
	navbar.style.transform = "translateX(100%)"
})
