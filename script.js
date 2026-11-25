// Menu responsivo e ano automático evitam repetir informações em todas as páginas.
document.querySelectorAll(".menu a").forEach((link) => {
  if (link.getAttribute("href") === location.pathname.split("/").pop())
    link.classList.add("active");
});
document
  .querySelectorAll("[data-year]")
  .forEach((el) => (el.textContent = new Date().getFullYear()));

// Clique, Enter ou Espaço amplia imagens dos projetos; Esc e clique externo fecham a janela.
const imageModal = document.querySelector("#image-modal");
if (imageModal) {
  const expandedImage = imageModal.querySelector("img");
  const closeButton = imageModal.querySelector(".image-modal-close");
  const closeModal = () => {
    imageModal.classList.remove("open");
    imageModal.setAttribute("aria-hidden", "true");
  };
  const openModal = (image) => {
    expandedImage.src = image.src;
    expandedImage.alt = image.alt;
    imageModal.classList.add("open");
    imageModal.setAttribute("aria-hidden", "false");
    closeButton.focus();
  };

  document.querySelectorAll(".project-media").forEach((media) => {
    const image = media.querySelector("img");
    media.addEventListener("click", () => openModal(image));
    media.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(image);
      }
    });
  });
  closeButton.addEventListener("click", closeModal);
  imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && imageModal.classList.contains("open")) closeModal();
  });
}
