import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("div.gallery");

const imgGalleryMarkup = galleryItems
  .map(
    (img) =>
      `<div class="gallery__item"> 
            <a class="gallery__link" href="${img.original}">
                <img class="gallery__image"
                src="${img.preview}"
                data-source="${img.original}"
                alt="${img.description}"
                />
            </a>
    </div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", imgGalleryMarkup);

const largeImage = (e) => {
  const originalImg = e.target.dataset.source;
  basicLightbox
    .create(`<img  src="${originalImg}">	`, {
      onShow: (instance) => {
        document.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            instance.close();
          }
        });
      },
    })
    .show();
  e.preventDefault();
};

gallery.addEventListener("click", largeImage);

/*
const largeImage = (e) => {
  // console.log(e.target); // sprawdzenie na co jest skierowany target
  // console.log(e.currentTarget); // sprawdzenie do czego prowadzi currenttarget

  const originalImg = e.target.dataset.source;
  basicLightbox.create(`<img  src="${originalImg}">	`, {
    onShow : (instance) => {
      document.addEventListener('keydown', event => {
        console.log(event.key);
        if (event.key === "Escape") {
          instance.close()}
      })
      console.log("hello", instance)
  },
    onClose : (instance) => {
      console.log("goodbye", instance)
    }
  }).show();
  isModalOpen = basicLightbox.visible();
  e.preventDefault();
};
*/
