const test = true;

if (test) {
	const button = document.getElementById("nav-btn"),
				menu = document.getElementById("nav-menu"),
				list = menu.getElementsByTagName("ul")[0],
				item = list.getElementsByTagName("li")[0];

	function getHeight() {
		return item.offsetHeight;
	}

	button.addEventListener("click", () => {
		if (list.offsetHeight > 0) {
			list.style.height =  0;
		} else {
			list.style.height = getHeight() + "px";
		}
	});
}
