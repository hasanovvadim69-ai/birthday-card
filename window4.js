let count = 5;
let countdown = document.getElementById("countdown");

let timer = setInterval(()=>{

count--;

countdown.innerHTML = count;

if(count == 0){

clearInterval(timer);

countdown.style.display="none";

startMatrix();

}

},1000);



function startMatrix(){

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const words = [
"HAPPY",
"BIRTHDAY",
"MY",
"DEAR",
"BESTIE",
"YOOHOO"
];

const fontSize = 22;
const columns = Math.floor(canvas.width / fontSize);

const drops = [];
const wordIndex = [];
const letterIndex = [];

for(let i=0;i<columns;i++){

drops[i] = 1;

wordIndex[i] = Math.floor(Math.random()*words.length);

letterIndex[i] = 0;

}

function draw(){

ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#ff2da0";
ctx.font=fontSize+"px monospace";

for(let i=0;i<columns;i++){

let word = words[wordIndex[i]];

let letter = word[letterIndex[i]];

ctx.fillText(letter,i*fontSize,drops[i]*fontSize);

letterIndex[i]++;

if(letterIndex[i] >= word.length){

letterIndex[i] = 0;

wordIndex[i] = Math.floor(Math.random()*words.length);

}

if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
drops[i] = 0;
}

drops[i]++;

}

}

setInterval(draw,33);



/* MESSAGE AFTER 6 SEC */

setTimeout(()=>{

document.getElementById("message").style.display="block";

},5000);



/* CARD AFTER 10 SEC */

setTimeout(()=>{

document.getElementById("cardContainer").style.display="block";

},9000);

}



function startFireworks(){

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createExplosion(x,y){

for(let i=0;i<80;i++){

particles.push({

x:x,
y:y,

speedX:(Math.random()-0.5)*8,
speedY:(Math.random()-0.5)*8,

life:100

});

}

}

function animate(){

ctx.fillStyle="rgba(0,0,0,0.1)";
ctx.fillRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

p.x+=p.speedX;
p.y+=p.speedY;

p.life--;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle="hsl("+Math.random()*360+",100%,60%)";
ctx.fill();

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animate);

}

animate();


/* запускаем взрывы */

setInterval(()=>{

let side = Math.random() < 0.5;

let x;

if(side){

x = Math.random()*canvas.width*0.25;

}else{

x = canvas.width - Math.random()*canvas.width*0.25;

}
let y=Math.random()*canvas.height/2;

createExplosion(x,y);

},800);

}function typeWriter(element, text, speed=50) {
  let i = 0;
  element.innerHTML = "";
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}
function typeWriterLines(element, lines, speed=40) {
  element.textContent = ""; // очищаем перед печатью
  let lineIndex = 0;
  let charIndex = 0;

  function typing() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        element.textContent += lines[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typing, speed);
      } else {
        // закончили строку → перенос
        element.textContent += "\n";
        lineIndex++;
        charIndex = 0;
        setTimeout(typing, speed);
      }
    }
  }
  typing();
}

card.onclick = () => {
  card.classList.add("open");
  document.getElementById("overlay").classList.add("show");
  startFireworks();

  const letter = document.getElementById("letterText");
  const text = letter.textContent.trim();
  const lines = text.split("\n"); // разбиваем на строки
  typeWriterLines(letter, lines, 40);
};
function typeWriterLines(element, lines, speed=40) {
  element.innerHTML = ""; // очищаем перед печатью
  let lineIndex = 0;
  let charIndex = 0;

  function typing() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        element.innerHTML += lines[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typing, speed);
      } else {
        // закончили строку → перенос
        element.innerHTML += "<br>";
        lineIndex++;
        charIndex = 0;
        setTimeout(typing, speed);
      }
    }
  }
  typing();
}
let hasPrinted = false;

card.onclick = () => {
  card.classList.add("open");
  document.getElementById("overlay").classList.add("show");
  startFireworks();

  if (!hasPrinted) {
    const letter = document.querySelector(".letter p");
    const lines = [
      "С днём рождения! 🥳🎉",
      "В этот замечательный день хочу пожелать тебе самого главного — крепкого здоровья,",
      "безграничного счастья и душевной гармонии! 🤗💖",
      "Пусть каждый твой день будет наполнен радостными событиями,",
      "улыбками близких и интересными открытиями! 😄✨",
      "Желаю, чтобы все твои самые заветные мечты сбывались легко и непринужденно 💫,",
      "а рядом всегда были верные друзья и любимые люди! 👫❤️",
      "🎁🎁🎁",
      "Пусть жизнь бьет ключом и дарит только приятные сюрпризы!🎁🎈",
      "",
      "Stay awesome and keep smiling 🎉"
    ];
    typeWriterLines(letter, lines, 40);
    hasPrinted = true; // больше не запускаем печать повторно
  }
};
