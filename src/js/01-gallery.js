import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryBox = galleryItems.map(({preview , description , original}) => {
    return `<a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>`
});

gallery.insertAdjacentHTML("afterbegin", galleryBox.join(""));

new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250 });
