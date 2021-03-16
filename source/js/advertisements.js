// Модуль, отвечающий за генерацию разметки похожих объявлений
const PHOTO_WIDTH = 45;
const PHOTO_HEIGHT = 40;
const PHOTO_ALT = 'Фотография жилья';

const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

// Создаем функцию для преобразования типа жилья
const getFlatType = (flatType) => {
  switch (flatType) {
    case 'palace':
      return 'Дворец';
    case 'flat':
      return 'Квартира';
    case 'house':
      return 'Дом';
    case 'bungalow':
      return 'Бунгало';
    default:
      return 'Квартира';
  }
}

// Создаем функцию для генерации объявления
const getAdvertisementFragment = (advertisements) => {
  const popupElement = popupTemplate.cloneNode(true);
  const popupFeatures = popupElement.querySelector('.popup__features');
  const popupPhotos = popupElement.querySelector('.popup__photos');
  const photo = popupElement.querySelector('.popup__photo');

  // Создаем функцию для преобразования массива из названия удобств в символы
  const getFeaturesFragment = () => {
    popupFeatures.innerHTML = '';
    advertisements.offer.features.forEach((item, i) => {
      const feature = document.createElement('li');
      feature.classList.add('popup__feature', 'popup__feature--' + advertisements.offer.features[i]);
      popupFeatures.appendChild(feature);
    });
  };

  // Создаем функцию для преобразования массива из адресов изображений в формат разметки
  const getPhotosFragment = () => {
    popupPhotos.innerHTML = '';
    advertisements.offer.photos.forEach((item, i) => {
      photo.src = advertisements.offer.photos[i];
      photo.style.width = PHOTO_WIDTH;
      photo.style.height = PHOTO_HEIGHT;
      photo.alt = PHOTO_ALT;
      popupPhotos.appendChild(photo.cloneNode(true));
    })
  }

  if (advertisements.offer.title) {
    popupElement.querySelector('.popup__title').textContent = advertisements.offer.title;
  } else {
    popupElement.querySelector('.popup__title').remove();
  }

  if (advertisements.offer.address) {
    popupElement.querySelector('.popup__text--address').textContent = advertisements.offer.address;
  } else {
    popupElement.querySelector('.popup__text--address').remove();
  }

  if (advertisements.offer.price) {
    popupElement.querySelector('.popup__text--price').textContent = advertisements.offer.price + ' ₽/ночь';
  } else {
    popupElement.querySelector('.popup__text--price').remove();
  }

  if (advertisements.offer.type) {
    popupElement.querySelector('.popup__type').textContent = getFlatType(advertisements.offer.type);
  } else {
    popupElement.querySelector('.popup__type').remove();
  }

  if (advertisements.offer.rooms && advertisements.offer.guests) {
    popupElement.querySelector('.popup__text--capacity').textContent = advertisements.offer.rooms + ' комнаты для ' + advertisements.offer.guests + ' гостей';
  } else if (advertisements.offer.rooms) {
    popupElement.querySelector('.popup__text--capacity').textContent = advertisements.offer.rooms + ' комнаты';
  } else if (advertisements.offer.guests) {
    popupElement.querySelector('.popup__text--capacity').textContent = 'для ' + advertisements.offer.guests + ' гостей';
  } else {
    popupElement.querySelector('.popup__text--capacity').remove();
  }

  if (advertisements.offer.checkinTime && advertisements.offer.checkoutTime) {
    popupElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + advertisements.offer.checkinTime + ', выезд до ' + advertisements.offer.checkoutTime;
  } else if (advertisements.offer.checkinTime) {
    popupElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + advertisements.offer.checkinTime;
  } else if (advertisements.offer.checkoutTime) {
    popupElement.querySelector('.popup__text--time').textContent = 'Выезд до ' + advertisements.offer.checkoutTime;
  } else {
    popupElement.querySelector('.popup__text--time').remove();
  }

  if (advertisements.offer.description) {
    popupElement.querySelector('.popup__description').textContent = advertisements.offer.description;
  } else {
    popupElement.querySelector('.popup__description').remove();
  }

  if (advertisements.author.avatar) {
    popupElement.querySelector('.popup__avatar').src = advertisements.author.avatar;
  } else {
    popupElement.querySelector('.popup__avatar').remove();
  }

  getPhotosFragment();
  getFeaturesFragment();

  return popupElement;
};

export {
  getAdvertisementFragment
}
