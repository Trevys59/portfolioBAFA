// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  // Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Visibility on scroll for sections
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
// Sélectionner les éléments
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

// Ajouter un écouteur d'événement au clic sur le burger
burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // Affiche/masque le menu
});

const cards = document.querySelectorAll('.card');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupText = document.getElementById('popup-text');
const popupImg = document.getElementById('popup-img');
const closePopup = document.getElementById('close-popup');

// Fonction pour afficher le pop-up
cards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-title');
    const text = card.getAttribute('data-text');
    const img = card.getAttribute('data-img');

    popupTitle.textContent = title;
    popupText.textContent = text;
    popupImg.src = img;

    popup.classList.add('show');
  });
});

// Fonction pour fermer le pop-up
closePopup.addEventListener('click', () => {
  popup.classList.remove('show');
});

// Fermer le pop-up en cliquant en dehors
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('show');
  }
});
