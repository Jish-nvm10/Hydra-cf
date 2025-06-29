console.log("Hydra CF website loaded");
// AOS initialization
AOS.init({ duration: 1000, once: true });

// Preloader logic
const loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  loader.style.opacity = "0";
  loader.style.visibility = "hidden";
});
// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });
  const phrases = [
    "Dominate",
    "Grind Mode",
    "Elite FC Mobile",
    "Hydra Legacy",
    "No Mercy",
    "Sweat. Win. Repeat.",
    "Meta Masters",
    "India’s Finest",
    "Goal Rush",
    "Unleash the Beast"
  ];
  
  let typewriterIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeTarget = document.querySelector(".typewriter-text");
  
  function typeEffect() {
    const current = phrases[typewriterIndex];
    const visibleText = current.substring(0, charIndex);
    typeTarget.textContent = visibleText;
  
    if (!isDeleting && charIndex < current.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        typewriterIndex = (typewriterIndex + 1) % phrases.length;
      }
      setTimeout(typeEffect, 1000);
    }
  }
  
  typeEffect();