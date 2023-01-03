import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryIt = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryIt);
gallery.addEventListener("click", openImage);

function openImage(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => window.addEventListener("keydown", escExit),
      onClose: () => window.removeEventListener("keydown", escExit),
    }
  );
  instance.show();

  function escExit(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
