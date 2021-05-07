let button = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li") [0];
let delBtn = document.querySelectorAll(".delete");

function inputLength() {
	return input.value.length;
}

function strikeThrough() {
	this.classList.toggle("done");
}

function delItem() {
	this.parentNode.remove();
}

function createListElement() {
	let li = document.createElement("li");
	let delBtn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("click", strikeThrough);
	li.appendChild(delBtn);
	delBtn.appendChild(document.createTextNode("X"));
	delBtn.className = "delete";
	delBtn.addEventListener("click", delItem);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);