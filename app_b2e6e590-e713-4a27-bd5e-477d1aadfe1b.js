let age = prompt("Введите ваш возраст:");

if (age >= 18) {
  alert("Вы совершеннолетний");
} else {
  alert("Вы несовершеннолетний");
}


for (let i = 1; i <= 10; i++) {
  console.log(i);
}


var colorArray=["rgba(18,65,126,0.6)"]
var i=0;
function changeColor(){
document.body.style.background=colorArray[i];
i++;
if(i > colorArray.length-1){
i=0
}
}

let num = 1;
while (num <= 5) {
  console.log(num);
  num++;
}

var res;
res=confirm("Солнце - это звезда?");
if (res == true) {
alert("Правильно!")
}
else {
alert("Неправильно, солнце - это звезда.")
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " - Четное");
  } else {
    console.log(i + " - Нечетное");
  }
}
for (let i=1; i <=5; i+=1){
for (let j=1; j <=9; j+=1){
console.log(`${i}× ${j} = ${i*j}`);
}
console.log();
}; /* =>
1 × 1 = 1
1 × 2=2
1×3=3
1×4=4
1×5=5
1×6=6
1×7=7
1×8=8
1×9=9
1×10=10

2×1=2
2×2=2
2×3=6
2×4=8
2×5=10
2×6=12
2×7=14
2×8=16
2×9=18
2×10=20

3×1=3
3×2=6
3×3=9
3×4=12
3×5=15
3×6=18
3×7=21
3×8=24
3×9=27
3×10=30

4×1=4
4×2=8
4×3=12
4×5=20
4×6=24
4×7=28
4×8=32
4×9=36
4×10=40

5×1=5
5×2=10
5×3=15
5×4=20
5×5=25
5×6=30
5×7=35
5×8=40
5×9=45
5=10=50
*/

function changeText() {
  document.getElementById("myHeading").innerText = "Вы кликнули дважды!";
}

function changeBackground() {
  let colors = ["red", "blue", "green", "yellow", "purple"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}


function startQuiz() {
  let score = 0;
  let answer1 = prompt("Столица Украины?");
  if (answer1.trim().toLowerCase() === "киев") {
    score++;
  }

  let answer2 = prompt("Кто написал текст гимна Украины?");
  if (answer2.trim().toLowerCase() === "павло тычина") {
    score++;
  }

  let answer3 = prompt("Какое национальное блюдо Украины?");
  if (answer3.trim().toLowerCase() === "борщ") {
    score++;
  }

  document.getElementById("result").innerText = "Ты набрал " + score + " балл(ов) из 3!";
}
