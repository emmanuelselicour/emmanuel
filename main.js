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

    // Confirmation visuelle pour Formspree
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
          alert('Message envoyé avec succès !');
          form.reset();
          // Redirection manuelle si _next ne marche pas
          window.location.href = 'https://emmanuelselicour.onrender.com/';
        } else {
          throw new Error('Erreur réseau');
        }
      })
      .catch(error => {
        alert("Erreur lors de l'envoi. Veuillez réessayer.");
      });
    });
