import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector('.gallery');
function galleryItemsEl() {
  const list = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__link" href="${original}">
          <img class="gallery__image" 
            src="${preview}" 
            data-source="${original}" 
            alt="${description}" />
        </a>`
    )
    .join('');

  galleryContainerEl.innerHTML = list;
}
galleryItemsEl();

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
