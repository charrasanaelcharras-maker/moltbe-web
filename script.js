document.addEventListener("DOMContentLoaded", function() {

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  // ===== LIGHTBOX =====
  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

const popup = document.getElementById("popup-aviso");
const cerrar = document.getElementById("cerrar-popup");

cerrar.style.opacity = "1";

cerrar.addEventListener("click", function() {
  popup.style.display = "none";
});

