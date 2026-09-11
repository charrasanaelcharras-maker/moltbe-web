document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  if (!lightbox || !lightboxImg) return;

  document.querySelectorAll(".gallery img").forEach((img) => {
    img.addEventListener("click", function () {
      lightbox.style.display = "block";
      lightboxImg.src = this.src;
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      lightbox.style.display = "none";
    });
  }
});
