function myFirstApp(name, age) {

   alert("Привет, меня зовут " + name + " и это моя первая программа");

   function showSkills() {
       let skills = ['html', 'css (joke)', 'php (joke)', 'java (joke)']

   for (let i = 0; i < skills.length; i++) {
    document.write("Я владею " + skills[i] + "<br/>")
   }

 }

   showSkills();

   function checkAge() {
       if (age > 18) {
                   alert("У тебя не так много времени на обучение, скоро загребут в армию")
       } else {
                   alert("У тебя полно времени, чтобы учиться программировать")
       }
   }

  checkAge();

   function calcPow(a) {
       console.log(a * a)
   };

   calcPow(4);

};

myFirstApp("Evgeny", 30)



