document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.querySelector(".back-button");

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      // запускаем эффект растворения
      document.body.classList.add("fade-out");

      // ждём завершения анимации и переходим
      setTimeout(() => {
        window.location.href = "okno3.html";
      }, 1000); // совпадает с transition
    });
  }

  // эффект плавного появления при входе
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 50);
});
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
const numStars = 80;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    opacity: Math.random()
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 200, ${star.opacity})`;
    ctx.fill();

    // движение
    star.x += star.dx;
    star.y += star.dy;

    // плавное мерцание
    star.opacity += (Math.random() - 0.5) * 0.05;
    if (star.opacity < 0.2) star.opacity = 0.2;
    if (star.opacity > 1) star.opacity = 1;

    // возврат за границы
    if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
    if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
  });
  requestAnimationFrame(drawStars);
}

drawStars();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
