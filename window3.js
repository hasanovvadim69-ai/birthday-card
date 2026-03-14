// Конфетти
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiCount = 150;
const confetti = [];

for (let i = 0; i < confettiCount; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 4 + 2,
    d: Math.random() * confettiCount,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
    ctx.fillStyle = c.color;
    ctx.fill();
  });
  updateConfetti();
}

function updateConfetti() {
  confetti.forEach(c => {
    c.y += Math.cos(c.d) + 2;
    c.x += Math.sin(c.d);
    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawConfetti, 20);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const buketBtn = document.querySelector('.buket-btn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

// Открыть модальное окно
buketBtn.addEventListener('click', () => {
  modal.classList.add('show');
});

// Закрыть при клике на крестик
closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Закрыть при клике вне окна
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});
const backBtn = document.getElementById('back-btn');

backBtn.addEventListener('click', () => {
  // плавное исчезновение страницы
  document.body.style.transition = "opacity 0.8s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "okno3.html"; // переход на нужную страницу
  }, 800);
});
