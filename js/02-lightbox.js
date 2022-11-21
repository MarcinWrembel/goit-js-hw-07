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
    alt="${img.description}"
    />
    </a>
    </div>`
    )
    .join("");
    
    gallery.insertAdjacentHTML("afterbegin", imgGalleryMarkup);
    
    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    
const largeImage = (e) => {
    lightbox.open(e)
  e.preventDefault();
};


gallery.addEventListener("click", largeImage);

/*
Utwórz taką samą galerię jak w zadaniu pierwszym, używając jednak biblioteki SimpleLightbox, która zajmie się opracowaniem kliknięć w obrazki, otwieraniem i zamykaniem okna modalnego oraz przewijaniem obrazków za pomocą klawiatury.

Konieczna jest nieznaczna zmiana znacznika galerii, użyj tego szablonu.

<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>

Wykonuj to zadanie w plikach 02-lightbox.html i 02-lightbox.js. Rozbij je na kilka podzadań:

-Tworzenie i renderowanie znacznika zgodnie z tablicą danych galleryItems i dostarczonym szablonem elementu galerii. Użyj gotowego kodu z zadania pierwszego.
-Połączenie skryptu i stylów biblioteki poprzez użycie CDN serwisu cdnjs. Koniecznym jest dodanie linków do dwóch plików: simple-lightbox.min.js i simple-lightbox.min.css.
-Inicjalizacja biblioteki po utworzeniu elementów galerii i dodaniu ich do div.gallery. Aby to zrobić, zapoznaj się z dokumentacją SimpleLightbox - najpierw sekcje «Usage» i «Markup».
-W dokumentacji zwróć uwagę na sekcję «Options» i dodaj wyświetlanie podpisów do obrazków z atrybutu alt. Niech podpis będzie pod spodem i pojawia się po 250 milisekundach po otwarciu obrazka.
*/
