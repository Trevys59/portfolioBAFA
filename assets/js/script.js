// Défilement fluide pour les liens de navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Affichage progressif des sections au défilement
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
  
  sections.forEach(section => observer.observe(section));
  
  // Menu burger : Afficher/masquer les liens de navigation
  document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');
    
    if (burgerMenu && navLinks) {
      burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // Affiche ou masque le menu
      });
    }
  });

  // Fermer le menu lorsqu'un lien est cliqué
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show'); // Masque le menu
    });
  });
  
  // Gestion des pop-ups pour les cartes
  const cards = document.querySelectorAll('.card2');
  const popup = document.getElementById('popup');
  const popupTitle = document.getElementById('popup-title');
  const popupText = document.getElementById('popup-text');
  const popupImg = document.getElementById('popup-img');
  const closePopup = document.getElementById('close-popup');
  
  if (cards && popup && popupTitle && popupText && popupImg && closePopup) {
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
  
    // Fermer le pop-up via le bouton de fermeture
    closePopup.addEventListener('click', () => {
      popup.classList.remove('show');
    });
  
    // Fermer le pop-up en cliquant en dehors
    window.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.classList.remove('show');
      }
    });
  }
  