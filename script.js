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