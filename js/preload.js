function preload() {
	var e = document.getElementsByClassName("preload");
	for (var i = 0; i < e.length; i++)
		e[i].classList.remove("preload");
}
preload();
document.addEventListener("DOMContentLoaded", preload);