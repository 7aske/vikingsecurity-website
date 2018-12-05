const nav = document.querySelector("nav");
const navSpacer = document.querySelector("#navSpacer");
const navToggler = document.querySelector(".navbar-toggler");

navToggler.addEventListener("click", e => {
	if (navToggler.attributes["aria-expanded"].value == "false") {
		if (window.pageYOffset < 10) {
			nav.style.backgroundColor = "rgba(0,0,0,0.65)";
		}
	} else {
		if (window.pageYOffset < 10) {
			nav.style.backgroundColor = "rgba(0,0,0,0.0)";
		}
	}
});

window.addEventListener("scroll", e => {
	if (window.pageYOffset > 10) {
		nav.style.backgroundColor = "rgba(0,0,0,0.65)";
		if (navSpacer) navSpacer.style.backgroundColor = "rgba(0,0,0,0)";
	} else {
		if (navToggler.attributes["aria-expanded"].value == "false") {
			nav.style.backgroundColor = "rgba(0,0,0,0)";
		}
		if (navSpacer) navSpacer.style.backgroundColor = "rgba(0,0,0,1)";
	}
});
