function preload() {
	for (var e = document.getElementsByClassName("preload"), i = 0; i < e.length; i++)
		e[i].classList.remove("preload");
}
preload();
document.addEventListener("DOMContentLoaded", preload);