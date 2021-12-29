window.onload = function () {
	const preloader = document.querySelectorAll('.preloader__block');
	preloader[0].style.display = "none";
	document.querySelector("._lock").classList.remove("_lock");
}



burger = document.querySelector(".header__burger");
menu = document.querySelector(".header__menu");
header = document.querySelector(".header")
burger.addEventListener("click", function () {
	burger.classList.toggle("active");
	menu.classList.toggle("active");
	header.classList.toggle("active");
});


// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");


// Get the offset position of the navbar
var sticky = navbar.offsetTop + 2;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	burger.classList.remove("active");
	menu.classList.remove("active");
	header.classList.remove("active");

	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	}
	else {
		navbar.classList.remove("sticky");
	}
}


let els = document.querySelectorAll('.skilllist__column');

els.forEach(function (el) {
	el.addEventListener('mouseenter', changeDefOver);
	el.addEventListener('mouseleave', changeDefOut);
})


function changeDefOver(e) {
	data = e.toElement.childNodes[1].getAttribute('data-tech')

	console.log(e.toElement.childNodes[1])

	if (document.querySelector(".comment")) {
		return
	}

	var newEl = document.createElement("div");
	newEl.innerHTML = data
	newEl.classList.add("skilllist__comment")
	newEl.classList.add("comment")

	e.toElement.insertBefore(newEl, e.toElement.childNodes[1])
}

function changeDefOut(e) {
	if (document.querySelector(".comment")) {
		document.querySelector(".comment").remove();
	}
}