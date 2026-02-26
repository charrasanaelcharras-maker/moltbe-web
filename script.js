document.addEventListener("DOMContentLoaded", function() {

  /* =========================
     LIGHTBOX (solo si existe)
  ========================== */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  if (lightbox && lightboxImg) {
    document.querySelectorAll(".gallery img").forEach(img => {
      img.addEventListener("click", function() {
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
      });
    }
  }

  /* =========================
     POPUP
  ========================== */
  const popup = document.getElementById("popup-aviso");
  const cerrar = document.getElementById("cerrar-popup");

  if (popup && cerrar) {

    // Cerrar con la X
    cerrar.addEventListener("click", function() {
      popup.style.display = "none";
    });

    // Cerrar tocando el fondo oscuro
    popup.addEventListener("click", function(e) {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });

  }

});
