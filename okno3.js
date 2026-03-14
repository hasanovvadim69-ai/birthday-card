// Обработчик клика по сердечкам
document.querySelectorAll(".heart").forEach(heart => {
  heart.addEventListener("click", () => {
    const target = heart.getAttribute("data-target");
    // Здесь можно открыть новое окно или модальное
    // Для примера — просто alert
   document.querySelectorAll(".heart").forEach(heart => {
  heart.addEventListener("click", () => {
    const target = heart.getAttribute("data-target");
    window.location.href = target + ".html"; // открываем соответствующее окно
  });
});

  });
});
