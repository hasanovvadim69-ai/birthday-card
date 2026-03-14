const sparklesContainer = document.querySelector('.sparkles');

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  
  // случайная позиция и размер
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  sparkle.style.width = sparkle.style.height = (Math.random() * 6 + 4) + 'px';
  
  sparklesContainer.appendChild(sparkle);

  // удалить после анимации
  setTimeout(() => {
    sparkle.remove();
  }, 5000);
}

// запуск блёсток каждые 300–700 мс
setInterval(createSparkle, 500);
