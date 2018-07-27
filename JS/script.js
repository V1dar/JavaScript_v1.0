function myFirstApp(name, age) {

		alert("Привет, меня зовут " + name + " и это моя первая программа!");

		function showSkills() {
				let skills = ["html","css","Linux"];

				for( let i = 0; i < skills.length; i++) {

						document.write("Я владею " + skills[i] + "<br/>");
				}
		}

		showSkills();

		function checkAge() {
				if(age > 18) {
					alert("Да, мне уже есть 18-ть лет")
				} else {
					alert("Увы, мне ещё нет 18-ти лет")
				}
		}

		checkAge();

		function calcPow(num) {
				console.log(num * num)
		}
		calcPow(4);
}

myFirstApp("Владимир", 16);




