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

// Sélectionner toutes les cartes
const cards = document.querySelectorAll('.card');

// Sélectionner les éléments du pop-up
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupText = document.getElementById('popup-text');
const popupImg = document.getElementById('popup-img');
const closePopup = document.getElementById('close-popup');

// Fonction pour afficher le pop-up lorsqu'une carte est cliquée
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Récupérer les données de la carte
    const title = card.getAttribute('data-title');
    const text = card.getAttribute('data-text');
    const img = card.getAttribute('data-img');

    // Mettre à jour le contenu du pop-up
    popupTitle.textContent = title;
    popupText.textContent = text;
    popupImg.src = img;

    // Afficher le pop-up
    popup.classList.add('show');
  });
});

// Fonction pour fermer le pop-up en cliquant sur le bouton de fermeture
closePopup.addEventListener('click', () => {
  popup.classList.remove('show');
});

// Fonction pour fermer le pop-up en cliquant en dehors de la boîte
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('show');
  }
});
