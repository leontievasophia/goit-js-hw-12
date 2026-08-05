
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMore= docement.querySelector('.load-btn');

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images){
const markup = images
    .map(image => {
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img
              class="gallery-image"
              src="${image.webformatURL}"
              alt="${image.tags}"
            />
          </a>

          <div class="image-info">
            <p>
              <b>Likes</b>
              ${image.likes}
            </p>
            <p>
              <b>Views</b>
              ${image.views}
            </p>
            <p>
              <b>Comments</b>
              ${image.comments}
            </p>
            <p>
              <b>Downloads</b>
              ${image.downloads}
            </p>
          </div>
        </li>
      `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery(){
gallery.innerHTML='';
}

export function showLoader(){
  loader.classList.remove('is-hidden');
}
export function hideLoader(){
 loader.classList.add('is-hidden');
}

export function showLoadMoreButton(){
    loadMore.classList.remove('is-hidden');
}

export function hideLoadMoreButton(){
    loadMore.classList.add('is-hidden');
}