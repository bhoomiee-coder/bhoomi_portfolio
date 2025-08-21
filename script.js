// ==================== Loader fade-out ====================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    setTimeout(() => loader.style.display = "none", 1000);
  }
});

// ==================== Smooth scroll for ALL internal links ====================
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ==================== Scroll reveal animation ====================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".section").forEach(section => {
  revealObserver.observe(section);
});

// ==================== Typing effect ====================
const textEl = document.querySelector(".animated-text");
if (textEl) {
  const fullText = textEl.textContent;
  textEl.textContent = "";
  let idx = 0;
  const typing = setInterval(() => {
    if (idx < fullText.length) {
      textEl.textContent += fullText[idx];
      idx++;
    } else {
      clearInterval(typing);
    }
  }, 70);
}



// ==================== Cursor Blob ====================
const cursor = document.createElement("div");
cursor.className = "cursor-blob";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// ==================== Skill Bar Animation ====================
const skillFills = document.querySelectorAll(".skill-bar .fill");
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const percent = fill.getAttribute("data-percent") || "100";
      fill.style.width = percent + "%";
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => {
  skillObserver.observe(fill);
});

// ==================== Profile Image Styling ====================
const profileImg = document.querySelector(".profile-img");
if (profileImg) {
  profileImg.style.width = "160px";
  profileImg.style.height = "160px";
  profileImg.style.borderRadius = "50%";
  profileImg.style.objectFit = "cover";
  profileImg.style.boxShadow = "0 0 20px rgba(160,32,240,0.5)";
}

// ==================== Horizontal Carousel Drag ====================
const carousel = document.querySelector(".carousel-track");
if (carousel) {
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    carousel.classList.add("dragging");
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("mouseleave", () => {
    isDown = false;
    carousel.classList.remove("dragging");
  });

  carousel.addEventListener("mouseup", () => {
    isDown = false;
    carousel.classList.remove("dragging");
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    carousel.scrollLeft = scrollLeft - walk;
  });
}

// ==================== Certificate Modal ====================
function showCert(imagePath) {
  const modal = document.getElementById("certModal");
  const img = document.getElementById("certImage");
  const nav = document.querySelector(".navbar");

  if (img) img.src = imagePath;
  if (modal) modal.style.display = "flex";
  if (nav) nav.style.display = "none";
}

function closeModal() {
  const modal = document.getElementById("certModal");
  const nav = document.querySelector(".navbar");

  if (modal) modal.style.display = "none";
  if (nav) nav.style.display = "block";
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("certModal");
  if (e.target === modal) {
    closeModal();
  }
});

// Make functions global so HTML onclick works
window.showCert = showCert;
window.closeModal = closeModal;

// Navbar Toggle for Mobile
// document.addEventListener("DOMContentLoaded", () => {
//   const toggleBtn = document.querySelector(".menu-toggle");
//   const navLinks = document.querySelector(".nav-links");

//   if (toggleBtn && navLinks) {
//     toggleBtn.addEventListener("click", () => {
//       navLinks.classList.toggle("active");
//     });
//   }
// });





document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});


