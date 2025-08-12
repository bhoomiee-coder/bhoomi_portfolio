(() => {
  if (window.__portfolioScriptLoaded) return;
  window.__portfolioScriptLoaded = true;

  document.addEventListener("DOMContentLoaded", () => {
    // Reveal on scroll
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Adjust sensitivity
    });

    document.querySelectorAll(".section").forEach((section) => {
      revealObserver.observe(section);
    });

    // Navbar toggle for mobile
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".navbar ul");

    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
      });
    }

    // Certificate modal
    window.showCert = function (imgPath) {
      const modal = document.getElementById("certModal");
      const modalImg = document.getElementById("certImage");
      if (modal && modalImg) {
        modalImg.src = imgPath;
        modal.style.display = "block";
      }
    };

    window.closeModal = function () {
      const modal = document.getElementById("certModal");
      if (modal) modal.style.display = "none";
    };
  });
})();
