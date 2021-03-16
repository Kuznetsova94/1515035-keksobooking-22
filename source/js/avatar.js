// Модуль реализации загрузки изображений
const MAX_PHOTOS = 8;
const PHOTOS = ['jpg', 'jpeg', 'png', 'gif'];
const IMAGE_WIDTH = 70;
const IMAGE_HEIGHT = 70;

const photoContainerElement = document.querySelector('.ad-form__photo');
const avatarUploadElement = document.querySelector('.ad-form__field input[type=file]');
const ImageInputElement = document.querySelector('.ad-form-header__preview img');
const photoUploadElement = document.querySelector('.ad-form__upload input[type=file]');

avatarUploadElement.addEventListener('change', () => {
  const file = avatarUploadElement.files[0];
  const fileNameElement = file.name.toLowerCase();
  const matches = PHOTOS.some((item) => {
    return fileNameElement.endsWith(item);
  });

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      ImageInputElement.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
});

const addImage = (source) => {
  const imageElement = document.createElement('img');
  imageElement.alt = 'Фотография жилья';
  imageElement.src = source;
  imageElement.width = IMAGE_WIDTH;
  imageElement.draggable = true;
  imageElement.height = IMAGE_HEIGHT;
  imageElement.style.margin = '2px';
  photoContainerElement.style.display = 'flex';
  photoContainerElement.style.justifyContent = 'space-around';
  photoContainerElement.style.alignItems = 'center';
  photoContainerElement.style.width = 'auto';
  photoContainerElement.appendChild(imageElement);
};

photoUploadElement.addEventListener('change', () => {
  const photos = document.querySelectorAll('.ad-form__photo img').length;
  if (photos !== null && photos < MAX_PHOTOS) {

    const images = photoUploadElement.files[0];
    const fileNameElement = images.name.toLowerCase();

    const matches = PHOTOS.some((item) => {
      return fileNameElement.endsWith(item);
    });

    if (matches) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        addImage(reader.result);
      });
      reader.readAsDataURL(images);
    }
  }
});

// Функция для очистки полей с фотографиями
const cleanPhoto = () => {
  ImageInputElement.src = 'img/muffin-grey.svg';
  photoContainerElement.innerHTML = '';
};

export {cleanPhoto};
