//your JS code here. If required.

const title = document.getElementById("sizes");


window.addEventListener("resize", myFunction);

function myFunction() {
	title.innerText = `Width : ${window.innerWidth} and Height: ${window.innerHeight}`;
}