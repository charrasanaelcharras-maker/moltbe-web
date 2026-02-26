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

  // ===== POPUP =====
  const popup = document.getElementById("popup-aviso");
  const cerrar = document.getElementById("cerrar-popup");

  setTimeout(() => {
    cerrar.style.display = "flex";
  }, 1000);

  cerrar.addEventListener("click", function() {
    popup.style.display = "none";
  });

});

