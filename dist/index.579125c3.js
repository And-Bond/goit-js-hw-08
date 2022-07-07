const refs = {
    galleryBox: document.querySelector('.js-gallery'),
    galleryBtn: document.querySelector('button[data-action="close-lightbox"]'),
    galleryDiv: document.querySelector('.js-lightbox'),
    galleryOverlay: document.querySelector('.lightbox__overlay'),
    createBtn: document.querySelector('.js-create'),
    galleryResult: createGalleryCollection(galleryItems)
};
refs.galleryBox.insertAdjacentHTML("beforeend", refs.galleryResult);
function createGalleryCollection(galleryItems) {
    return galleryItems.map(({ preview , original , description  })=>{
        return `<li class="gallery__item">
      <a
        class="gallery__link"
        href="#"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `;
    }).join('');
}
refs.galleryBox.addEventListener('click', onGalleryClick);
function onGalleryClick(evt) {
    if (!evt.target.classList.contains('gallery__image')) return;
    refs.galleryDiv.classList.add('is-open');
    evt.target.classList.add('is-active');
    const currentImage = document.querySelector('img.lightbox__image');
    currentImage.dataset.source = evt.target.dataset.source;
    currentImage.setAttribute('src', evt.target.dataset.source);
}
refs.galleryBtn.addEventListener('click', onGalleryClose);
window.addEventListener('keydown', onKeydownClose);
function onKeydownClose(evt) {
    if (evt.code === 'Escape') onGalleryClose();
}
function onGalleryClose() {
    refs.galleryDiv.classList.remove('is-open');
}
refs.galleryOverlay.addEventListener('click', onGalleryOverlayClick);
function onGalleryOverlayClick(evt) {
    if (!evt.target === refs.galleryOverlay) return;
    onGalleryClose();
}
const galleryImages = document.querySelectorAll('.gallery__image');
galleryImages.forEach((img)=>{
    img.addEventListener('load', onGalleryLoad, {
        once: true
    });
});
function onGalleryLoad() {
    galleryImages.forEach((img)=>{
        img.classList.add('load');
    });
}

//# sourceMappingURL=index.579125c3.js.map
