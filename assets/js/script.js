// navbar
let navbar = document.querySelector(".navbar");
let navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
	navbar.classList.add("opened");
	navbarToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar() {
	navbar.classList.remove("opened");
	navbarToggle.setAttribute("aria-label", "Open navigation menu.");
}

navbarToggle.addEventListener("click", () => {
	if (navbar.classList.contains("opened")) {
		closeMobileNavbar();
	} else {
		openMobileNavbar();
	}
});

let navbarMenu = navbar.querySelector(".navbar-menu");
let navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
	clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);