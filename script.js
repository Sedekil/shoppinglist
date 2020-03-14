const button = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li") [0];
const delBtn = document.querySelectorAll(".delete");

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
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
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