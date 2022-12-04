import { galleryItems } from "./gallery-items.js";
// Change code below this line
// перебір та створення + додавання
const gallery = document.querySelector(".gallery");
const galleryArr = iteamsGallery(galleryItems);
function iteamsGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
gallery.insertAdjacentHTML("beforeend", galleryArr);

gallery.addEventListener("click", onOpenModal);

// відкриття + закриття картинки

function onOpenModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
	<img width="1000" height="600" src="${event.target.dataset.source}">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEsckey);
      },

      onClose: (instance) => {
        window.removeEventListener("keydown", onEsckey);
      },
    }
  );
  instance.show();

  // function onOpenModal(event) {
  //   event.preventDefault();

  //     if (event.target.nodeName !== 'IMG') {
  //         return;
  //     }
  //      const instance = basicLightbox.create(`
  //  	<img src="${event.target.dataset.cource}"
  //     alt ="${event.target.alt}"
  //     />`,
  // {
  //              onShow: () => {
  //                  window.addEventListener('keydown', onEsckey);
  //              },

  //              onClose: () => {
  //                  window.removeEventListener('keydown', onEsckey);
  //              },
  //          }
  //      )
  //  .show()

  //     function onEsckey(event) {
  //         if (event.code !== "Escape") {
  //             return;
  //         } else {
  //             instance.close();
  //         }
  //     }
  // }
  function onEsckey(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

// console.log(galleryItems);
