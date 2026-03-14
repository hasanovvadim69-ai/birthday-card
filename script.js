// Логика PIN-кода
const pinInput = document.getElementById("pin-input");
const buttons = document.querySelectorAll(".keypad button");
const correctPin = "15032007";
let enteredPin = "";
let showingMessage = false;

function resetInput() {
  pinInput.value = "";
  pinInput.style.color = "#000";
  enteredPin = "";
  showingMessage = false;
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    // Если сейчас показано сообщение и нажата цифра — очистить и начать заново
    if (showingMessage && !["←", "OK"].includes(value)) {
      resetInput();
    }

    if (value === "←") {
      if (!showingMessage) {
        enteredPin = enteredPin.slice(0, -1);
        pinInput.value = "*".repeat(enteredPin.length);
      }
    } else if (value === "OK") {
      if (enteredPin.length < 8 || enteredPin !== correctPin) {
        pinInput.value = "WRONG PIN!";
        pinInput.style.color = "red";
        showingMessage = true;
        setTimeout(resetInput, 2000);
      } else {
        pinInput.value = "PIN ACCEPTED!";
        pinInput.style.color = "green";
        showingMessage = true;

// Маленький box исчезает сразу
        document.querySelector(".small-box").classList.add("fade-out");
        // Основное окно исчезает с задержкой
        document.querySelector(".pin-container").classList.add("fade-out-delay");

        // Переход на другую страницу после завершения обеих анимаций
        setTimeout(() => {
          window.location.href = "2okno.html";
        }, 1300); // чуть больше, чем задержка + длительность
      }
    } else {
      if (!showingMessage && enteredPin.length < 8) {
        enteredPin += value;
        pinInput.value = "*".repeat(enteredPin.length);
      }
    }
  });
});

// Логика кнопки подсказки
const hintBtn = document.querySelector(".hint-btn");
const hintMessage = document.querySelector(".hint-message");

hintBtn.addEventListener("click", () => {
  hintMessage.style.opacity = "1";
  setTimeout(() => {
    hintMessage.style.opacity = "0";
  }, 5000);
});
const canvas = document.getElementById("lights");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<60;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
radius:Math.random()*3+1,
speed:Math.random()*0.5+0.2
});
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="rgba(255,210,150,0.7)";

particles.forEach(p=>{

ctx.beginPath();
ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
ctx.fill();

p.y -= p.speed;

if(p.y<0){
p.y=canvas.height;
p.x=Math.random()*canvas.width;
}

});

requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize",()=>{
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
});
