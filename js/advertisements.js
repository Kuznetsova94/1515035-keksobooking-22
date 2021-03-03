// Модуль, отвечающий за генерацию разметки похожих объявлений
/*
import {
  advertisementArray
} from './data.js';*/

// Задаем константы для создания функций
const PHOTO_WIDTH = 45; // ширина фото (задана разметкой)
const PHOTO_HEIGHT = 40; // высота фото (задана разметкой)
const PHOTO_ALT = 'Фотография жилья'; // описание фото (задано разметкой)

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
const getAdvFragment = (advs) => {
  const popupElement = popupTemplate.cloneNode(true);
  const popupFeatures = popupElement.querySelector('.popup__features');
  const popupPhotos = popupElement.querySelector('.popup__photos');
  const photo = popupElement.querySelector('.popup__photo');

  // Создаем функцию для преобразования массива из названия удобств в символы
  const getFeaturesFragment = () => {
    popupFeatures.innerHTML = '';
    advs.offer.features.forEach((item, i) => {
      const feature = document.createElement('li');
      feature.classList.add('popup__feature', 'popup__feature--' + advs.offer.features[i]);
      popupFeatures.appendChild(feature);
    });
  };

  // Создаем функцию для преобразования массива из адресов изображений в формат разметки
  const getPhotosFragment = () => {
    popupPhotos.innerHTML = '';
    advs.offer.photos.forEach((item, i) => {
      photo.src = advs.offer.photos[i];
      photo.style.width = PHOTO_WIDTH;
      photo.style.height = PHOTO_HEIGHT;
      photo.alt = PHOTO_ALT;
      popupPhotos.appendChild(photo.cloneNode(true));
    })
  }

  if (advs.offer.title) {
    popupElement.querySelector('.popup__title').textContent = advs.offer.title; // выводим заголовок объявления
  } else {
    popupElement.querySelector('.popup__title').remove();
  }

  if (advs.offer.address) {
    popupElement.querySelector('.popup__text--address').textContent = advs.offer.address; // выводим заголовок объявления
  } else {
    popupElement.querySelector('.popup__text--address').remove();
  }

  if (advs.offer.price) {
    popupElement.querySelector('.popup__text--price').textContent = advs.offer.price + ' ₽/ночь';
  } else {
    popupElement.querySelector('.popup__text--price').remove();
  }

  if (advs.offer.type) {
    popupElement.querySelector('.popup__type').textContent = getFlatType(advs.offer.type);
  } else {
    popupElement.querySelector('.popup__type').remove();
  }

  if (advs.offer.rooms && advs.offer.guests) {
    popupElement.querySelector('.popup__text--capacity').textContent = advs.offer.rooms + ' комнаты для ' + advs.offer.guests + ' гостей'; // выводим количество комнат и гостей
  } else if (advs.offer.rooms) {
    popupElement.querySelector('.popup__text--capacity').textContent = advs.offer.rooms + ' комнаты'; // выводим количество комнат
  } else if (advs.offer.guests) {
    popupElement.querySelector('.popup__text--capacity').textContent = 'для ' + advs.offer.guests + ' гостей'; // выводим количество гостей
  } else {
    popupElement.querySelector('.popup__text--capacity').remove();
  }

  if (advs.offer.checkinTime && advs.offer.checkoutTime) {
    popupElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + advs.offer.checkinTime + ', выезд до ' + advs.offer.checkoutTime; // выводим время выезда и заезда
  } else if (advs.offer.checkinTime) {
    popupElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + advs.offer.checkinTime; // выводим время заезда
  } else if (advs.offer.checkoutTime) {
    popupElement.querySelector('.popup__text--time').textContent = 'Выезд до ' + advs.offer.checkoutTime; // выводим время выезда
  } else {
    popupElement.querySelector('.popup__text--time').remove();
  }

  if (advs.offer.description) {
    popupElement.querySelector('.popup__description').textContent = advs.offer.description;
  } else {
    popupElement.querySelector('.popup__description').remove();
  }

  if (advs.author.avatar) {
    popupElement.querySelector('.popup__avatar').src = advs.author.avatar;
  } else {
    popupElement.querySelector('.popup__avatar').remove();
  }

  getPhotosFragment();
  getFeaturesFragment();


  return popupElement;
};

export {
  getAdvFragment
}
