import galleryResult from "./js/gallery-collection-create";

// const galleryItems = [
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
//     description: 'Hokkaido Flower',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
//     description: 'Container Haulage Freight',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
//     description: 'Aerial Beach View',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
//     description: 'Flower Blooms',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
//     description: 'Alpine Mountains',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
//     description: 'Mountain Lake Sailing',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
//     description: 'Alpine Spring Meadows',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
//     description: 'Nature Landscape',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
//     description: 'Lighthouse Coast Sea',
//   },
// ];
// function createGalleryCollection(galleryItems){
//   return galleryItems.map(({preview,original,description}) => {
//      return `<li class="gallery__item">
//      <a
//        class="gallery__link"
//        href="#"
//      >
//        <img
//          class="gallery__image"
//          src="${preview}"
//          data-source="${original}"
//          alt="${description}"
//        />
//      </a>
//    </li>
//    `;
//   }).join('')
// }
// const galleryResult = createGalleryCollection(galleryItems)
const refs = {
  galleryBox: document.querySelector('.js-gallery'),
  galleryBtn: document.querySelector('button[data-action="close-lightbox"]'),
  galleryDiv: document.querySelector('.js-lightbox'),
  galleryOverlay: document.querySelector('.lightbox__overlay'),
  createBtn: document.querySelector('.js-create')
}

refs.galleryBox.insertAdjacentHTML("beforeend", galleryResult)


refs.galleryBox.addEventListener('click', onGalleryClick)

function onGalleryClick(evt){
  if(!evt.target.classList.contains('gallery__image')){
    return
  }
  refs.galleryDiv.classList.add('is-open')
  const currentImage = document.querySelector('img.lightbox__image')
  currentImage.dataset.source = evt.target.dataset.source
  currentImage.setAttribute('src', evt.target.dataset.source)
}

refs.galleryBtn.addEventListener('click', onGalleryClose)
window.addEventListener('keydown', onKeydownClose)

function onKeydownClose(evt){
  if(evt.code === 'Escape'){
    onGalleryClose()
  }
}

function onGalleryClose(){
  refs.galleryDiv.classList.remove('is-open')
}

refs.galleryOverlay.addEventListener('click', onGalleryOverlayClick)

function onGalleryOverlayClick(evt){
  if(!evt.target === refs.galleryOverlay){
    return
  }
  onGalleryClose()
}
const galleryImages = document.querySelectorAll('.gallery__image') 
galleryImages.forEach(img => {
  img.addEventListener('load', onGalleryLoad, {once: true})
})


function onGalleryLoad(){
  galleryImages.forEach(img => {
    img.classList.add('load')
  })
}

