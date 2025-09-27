// Translations object
const translations = {
  fr: {
    // Navigation
    "about": "À propos",
    "skills": "Compétences",
    "projects": "Projets",
    "contact": "Contact",
    
    // Header
    "name": "Emmanuel Selicour",
    "title": "Travailleur Digital | Centre d'Appel | Marketing | Informatique | Langues",
    
    // About
    "about_me": "Qui suis-je ?",
    "bio1": "Je m'appelle Emmanuel Selicour, surnommé 'True Manno'. Je suis un jeune professionnel passionné avec de l'expérience dans plusieurs domaines : développement web, centre d'appel, marketing digital, e-commerce et plus encore. Je suis une personne sérieuse, flexible et toujours en apprentissage pour évoluer chaque jour.",
    "bio2": "Je crois au pouvoir de la connaissance et à la valeur du travail acharné. Mon objectif est de fournir des solutions efficaces et créatives dont tout le monde peut bénéficier.",
    
    // Skills
    "my_skills": "Mes Compétences",
    "call_center": "Expérience en Centre d'Appel",
    "digital_marketing": "Expérience en Marketing Digital",
    "web_dev": "Développement Web",
    "communication": "Communication",
    "learning": "en apprentissage",
    "languages": "Langues",
    
    // Skill items
    "skill1": "Gestion d'appels clients en français et créole",
    "skill2": "Communication claire et efficace",
    "skill3": "Utilisation de logiciels CRM",
    "skill4": "Création et gestion de campagnes sur les réseaux sociaux",
    "skill5": "SEO & marketing de contenu",
    "skill6": "Email marketing & analytics",
    "skill7": "Design responsive & mobile",
    "skill8": "Création de sites vitrine & e-commerce",
    "skill9": "Communication interpersonnelle efficace",
    "skill10": "Rédaction professionnelle",
    "skill11": "Techniques de présentation",
    "skill12": "Communication d'équipe",
    "lang1": "Créole haïtien (langue maternelle)",
    "lang2": "Français (avancé)",
    "lang3": "Anglais (conversationnel)",
    "lang4": "Espagnol (notions)",
    
    // Projects
    "my_projects": "Mes Projets",
    "project1_title": "Site Vitrine pour un Client",
    "project1_desc": "Création d'un site vitrine pour une entreprise locale offrant des services de réparation.",
    "project2_title": "Site E-commerce Démo",
    "project2_desc": "Développement d'un site e-commerce pour vendre des produits digitaux (abonnements Netflix, jeux...)",
    "project3_title": "Portfolio Personnel",
    "project3_desc": "Conception et développement de mon portfolio professionnel avec design responsive.",
    "view_project": "Voir plus",
    
    // Download CV
    "download_cv": "Télécharger mon CV",
    
    // Contact
    "contact_me": "Contactez-moi",
    "form_name": "Votre nom",
    "form_email": "Votre email",
    "form_message": "Message",
    "form_send": "Envoyer",
    
    // Footer
    "footer_dev": "SITE DÉVELOPPÉ PAR : TRUE MANNO",
    
    // Alert
    "alert_title": "Message envoyé!",
    "alert_message": "Merci pour votre message. Je vous répondrai dès que possible.",
    "alert_ok": "OK"
  },
  en: {
    // Navigation
    "about": "About",
    "skills": "Skills",
    "projects": "Projects",
    "contact": "Contact",
    
    // Header
    "name": "Emmanuel Selicour",
    "title": "Digital Worker | Call Center | Marketing | IT | Languages",
    
    // About
    "about_me": "About Me",
    "bio1": "My name is Emmanuel Selicour, nicknamed 'True Manno'. I am a passionate young professional with experience in several fields: web development, call center, digital marketing, e-commerce and more. I am a serious, flexible person always learning to grow every day.",
    "bio2": "I believe in the power of knowledge and the value of hard work. My goal is to provide effective and creative solutions that benefit everyone.",
    
    // Skills
    "my_skills": "My Skills",
    "call_center": "Call Center Experience",
    "digital_marketing": "Digital Marketing Experience",
    "web_dev": "Web Development",
    "communication": "Communication",
    "learning": "learning",
    "languages": "Languages",
    
    // Skill items
    "skill1": "Customer call management in French and Creole",
    "skill2": "Clear and effective communication",
    "skill3": "CRM software usage",
    "skill4": "Creation and management of social media campaigns",
    "skill5": "SEO & content marketing",
    "skill6": "Email marketing & analytics",
    "skill7": "Responsive & mobile design",
    "skill8": "Creation of showcase sites & e-commerce",
    "skill9": "Effective interpersonal communication",
    "skill10": "Professional writing",
    "skill11": "Presentation techniques",
    "skill12": "Team communication",
    "lang1": "Haitian Creole (native language)",
    "lang2": "French (advanced)",
    "lang3": "English (conversational)",
    "lang4": "Spanish (basic knowledge)",
    
    // Projects
    "my_projects": "My Projects",
    "project1_title": "Showcase Website for a Client",
    "project1_desc": "Creation of a showcase website for a local company offering repair services.",
    "project2_title": "E-commerce Demo Site",
    "project2_desc": "Development of an e-commerce site to sell digital products (Netflix subscriptions, games...)",
    "project3_title": "Personal Portfolio",
    "project3_desc": "Design and development of my professional portfolio with responsive design.",
    "view_project": "View more",
    
    // Download CV
    "download_cv": "Download my CV",
    
    // Contact
    "contact_me": "Contact Me",
    "form_name": "Your name",
    "form_email": "Your email",
    "form_message": "Message",
    "form_send": "Send",
    
    // Footer
    "footer_dev": "SITE DEVELOPED BY: TRUE MANNO",
    
    // Alert
    "alert_title": "Message sent!",
    "alert_message": "Thank you for your message. I will get back to you as soon as possible.",
    "alert_ok": "OK"
  }
};

// Language management
let currentLang = 'fr';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLang', lang);
  
  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(`lang-${lang}`).classList.add('active');
  
  // Update all translatable elements
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update placeholders for form inputs
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  if (nameInput) nameInput.placeholder = translations[lang]['form_name'];
  if (emailInput) emailInput.placeholder = translations[lang]['form_email'];
  if (messageInput) messageInput.placeholder = translations[lang]['form_message'];
}

// LOADER
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// DARK MODE
const toggle = document.querySelector(".dark-mode-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.innerHTML = document.body.classList.contains("dark-mode")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// PROGRESS BAR
const progressBar = document.querySelector(".progress-bar");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = `${progress}%`;
});

// ANIMATE SKILLS
const skills = document.querySelectorAll(".skill");
const showSkills = () => {
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      skill.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", showSkills);
showSkills();

// Custom Alert Modal
const customAlert = document.getElementById('customAlert');
const closeAlert = document.querySelector('.close-alert');
const alertOk = document.getElementById('alert-ok');

function showAlert() {
  customAlert.style.display = 'flex';
}

function hideAlert() {
  customAlert.style.display = 'none';
}

closeAlert.addEventListener('click', hideAlert);
alertOk.addEventListener('click', hideAlert);

// Form submission with custom alert
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      showAlert();
      form.reset();
    } else {
      throw new Error('Network error');
    }
  })
  .catch(error => {
    // Update alert for error
    document.getElementById('alert-title').textContent = 'Error';
    document.getElementById('alert-message').textContent = 
      currentLang === 'fr' 
        ? "Erreur lors de l'envoi. Veuillez réessayer." 
        : "Error sending message. Please try again.";
    document.getElementById('alert-ok').textContent = currentLang === 'fr' ? 'OK' : 'OK';
    showAlert();
  });
});

// Language switcher event listeners
document.getElementById('lang-fr').addEventListener('click', () => setLanguage('fr'));
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'fr';
  setLanguage(savedLang);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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