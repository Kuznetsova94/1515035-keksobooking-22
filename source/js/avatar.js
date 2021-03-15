// Модуль реализации загрузки изображений
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview');
const avatar = avatarPreview.querySelector('img');

const photoChooser = document.querySelector('#images');
const photoPreview = document.querySelector('.ad-form__photo');

// Общая проверка на окончание
const matches = (fileName) => {
  FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });
};

// Функция загрузки аватара
const loadAvatar = () => {
  avatarChooser.addEventListener('change', () => {
    const file = avatarChooser.files[0];
    const fileName = file.name.toLowerCase();

    if (matches(fileName)) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        avatar.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

// Функция загрузки аватара
const loadPhoto = () => {
  photoChooser.addEventListener('change', () => {
    const file = photoChooser.files[0];
    const fileName = file.name.toLowerCase();

    if (matches(fileName)) {
      const reader = new FileReader();
      // Создаем новый div с img для новой фотографии
      const photoContainer = photoPreview.cloneNode(true);
      const newPhoto = document.createElement('img');

      photoContainer.appendChild(newPhoto);
      photoContainer.appendChild(photoContainer);
      photoPreview.remove();

      reader.addEventListener('load', () => {
        newPhoto.src = reader.result;
        newPhoto.style.width = '45px';
        newPhoto.style.height = '40px';
      });

      reader.readAsDataURL(file);
    }
  });
}

loadAvatar();
loadPhoto();
