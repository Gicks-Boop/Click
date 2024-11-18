// Modal dinámico
function viewArticle(title, content) {
  const modalTitle = document.getElementById('articleModalLabel');
  const modalContent = document.getElementById('articleContent');

  modalTitle.textContent = title;
  modalContent.textContent = content;

  const modal = new bootstrap.Modal(document.getElementById('articleModal'));
  modal.show();
}

// Modo oscuro/claro
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});

// Personalización del carrusel
const carouselElement = document.querySelector('#articlesCarousel');
const articlesCarousel = new bootstrap.Carousel(carouselElement, {
  interval: 5000, // Cambia automáticamente cada 5 segundos
  wrap: true,     // Repite el ciclo
});

// Mostrar el botón de "Volver al inicio" cuando se haga scroll
window.addEventListener('scroll', () => {
  const backToTopButton = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});
