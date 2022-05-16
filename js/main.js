boxFiltre = document.querySelectorAll(".box-filtre li");
portfImages = Array.from(document.querySelectorAll(".portfolio .box"));

boxFiltre.forEach((li) => {
	li.addEventListener("click", removeActive);
	li.addEventListener("click", mangeBox);
});

function removeActive() {
	boxFiltre.forEach((li) => {
		li.classList.remove("active");
		this.classList.add("active");
	});
}

function mangeBox() {
	portfImages.forEach((box) => {
		box.style.display = "none";
	});
	document.querySelectorAll(this.dataset.fil).forEach((box) => {
		box.style.display = "block";
	});
}
