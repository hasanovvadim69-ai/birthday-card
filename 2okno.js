const btnNo = document.querySelector(".btn-no");
const modal = document.getElementById("modal");

btnNo.addEventListener("click", () => {
  // показываем окно
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 10); // небольшая задержка для плавного появления

  // через 4 секунды скрываем с fade-out
  setTimeout(() => {
    modal.classList.remove("show"); // запускаем плавное исчезновение
    setTimeout(() => {
      modal.style.display = "none"; // убираем из DOM после завершения анимации
    }, 800); // ждём завершения transition (0.8s)
  }, 2500);
});
const btnYes = document.getElementById("btnYes");

btnYes.addEventListener("click", () => {
  // запускаем эффект растворения
  document.body.classList.add("fade-out");

  // ждём завершения анимации и переходим
  setTimeout(() => {
    window.location.href = "okno3.html";
  }, 1000); // время совпадает с transition (1s)
});


