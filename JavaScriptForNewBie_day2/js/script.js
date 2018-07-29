let chooseBtn = document.getElementById("choose"),
		reciveBtn = document.getElementById("receive"),
		heading = document.getElementsByTagName("h2")[0],
		nameInput = document.getElementsByClassName("contactform_name")[0],
		phoneInput = document.querySelector(".contactform_phone"),
		mailInput = document.querySelectorAll(".contactform_mail")[0],
		modal = document.querySelector(".modal"),
		buttonClose = document.querySelector(".close"),
		text = document.getElementsByName("message")[0],
		buttonThanks = document.getElementById("button_thanks"),
		thanks = document.querySelectorAll(".thanks")[0],
		ButtonBack = document.querySelectorAll(".back")[0];

function hover() {
		heading.textContent = "Действительное всё!"
};

heading.addEventListener("click", hover);
heading.addEventListener("dblclick", function() {
		heading.textContent = "Все включено!"
});

reciveBtn.addEventListener("click", function() {
		modal.style.display = "block"
});

buttonClose.addEventListener("click", function() {
		modal.style.display = "none"
});

nameInput.addEventListener("input", function() {
		text.value = "Меня зовут " + nameInput.value + ". И я хочу спросить:";

		if (nameInput.value == "") {
			text.value = ""
		}
});

buttonThanks.addEventListener("click", function() {
		modal.style.display = "none",
		thanks.style.display = "block"
});

ButtonBack.addEventListener("click", function() {
		thanks.style.display = "none",
});

