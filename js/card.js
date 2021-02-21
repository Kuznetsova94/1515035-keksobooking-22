// Модуль, отвечающий за генерацию разметки похожих элементов
/*import {
  advertisementArray
} from './data.js';*/

// Задаем константы для создания функций
//const ADV_NUMBER = 1; // число объявлений
const PHOTO_WIDTH = 45; // ширина фото (задана разметкой)
const PHOTO_HEIGHT = 40; // высота фото (задана разметкой)
const PHOTO_ALT = 'Фотография жилья'; // описание фото (задано разметкой)

//const popupListElement = document.querySelector('.map__canvas'); // обозначаем место для вставки скопированного шаблона
const popupTemplate = document.querySelector('#card').content.querySelector('.popup'); // выбираем шаблон

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

// Создаем функцию для преобразования массива из названия удобств в символы
const getFeaturesFragment = (array) => {
  const fragment = document.createDocumentFragment();
  array.forEach((feature) => {
    let listItem = document.createElement('li');
    listItem.className = 'popup__feature popup__feature--' + feature;
    fragment.appendChild(listItem);
  });
  return fragment;
}

// Создаем функцию для преобразования массива из адресов изображений в формат разметки
const getPhotosFragment = (array) => {
  const fragment = document.createDocumentFragment();
  array.forEach((photo) => {
    const photoItem = document.createElement('img');
    photoItem.className = 'popup__photo';
    photoItem.width = PHOTO_WIDTH;
    photoItem.height = PHOTO_HEIGHT;
    photoItem.alt = PHOTO_ALT;
    photoItem.src = photo;
    fragment.appendChild(photoItem);
  });
  return fragment;
};

// Создаем функцию для генерации объявления
const getAdvFragment = (offer) => {

  const advFragment = document.createDocumentFragment();

  const popupElement = popupTemplate.cloneNode(true); // копируем содержимое шаблона

  if (offer.title) {
    popupElement.querySelector('.popup__title').textContent = offer.title; // выводим заголовок объявления
  } else {
    popupElement.querySelector('.popup__title').remove();
  }

  if (offer.addresses) {
    popupElement.querySelector('.popup__text--address').textContent = offer.addresses; // выводим адрес
  } else {
    popupElement.querySelector('.popup__text--address').remove();
  }

  if (offer.price) {
    popupElement.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь'; // выводим цену
  } else {
    popupElement.querySelector('.popup__text--price').remove();
  }

  if (offer.types) {
    popupElement.querySelector('.popup__type').textContent = getFlatType(offer.types); // выводим тип жилья
  } else {
    popupElement.querySelector('.popup__type').remove();
  }

  // Проверка выполнения ОБОИХ условий
  if (offer.rooms && offer.guests) {
    popupElement.querySelector('.popup__text--capacity').textContent = offer.rooms + ' комнаты для ' + offer.guests + ' гостей'; // выводим количество комнат и гостей
  } else if (offer.rooms) {
    popupElement.querySelector('.popup__text--capacity').textContent = offer.rooms + ' комнаты'; // выводим количество комнат
  } else if (offer.guests) {
    popupElement.querySelector('.popup__text--capacity').textContent = 'для ' + offer.guests + ' гостей'; // выводим количество гостей
  } else {
    popupElement.querySelector('.popup__text--capacity').remove();
  }

  // Проверка выполнения ОБОИХ условий
  if (offer.checkinTime && offer.checkoutTime) {
    popupElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkinTime + ', выезд до ' + offer.checkoutTime; // выводим время выезда и заезда
  } else if (offer.checkinTime) {
    popupElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkinTime; // выводим время заезда
  } else if (offer.checkoutTime) {
    popupElement.querySelector('.popup__text--time').textContent = 'Выезд до ' + offer.checkoutTime; // выводим время выезда
  } else {
    popupElement.querySelector('.popup__text--time').remove();
  }

  if (offer.features) {
    popupElement.querySelector('.popup__features').innerHTML = '';
    const featuresFragment = getFeaturesFragment(offer.features);
    popupElement.querySelector('.popup__features').appendChild(featuresFragment);
  } else {
    popupElement.querySelector('.popup__features').remove();
  }

  if (offer.description) {
    popupElement.querySelector('.popup__description').textContent = offer.description; // выводим описание квартиры
  } else {
    popupElement.querySelector('.popup__description').remove();
  }

  if (offer.photos) {
    popupElement.querySelector('.popup__photos').innerHTML = '';
    const photoFragment = getPhotosFragment(offer.photos);
    popupElement.querySelector('.popup__photos').appendChild(photoFragment);
  } else {
    popupElement.querySelector('.popup__photos').remove();
  }

  if (offer.avatar) {
    popupElement.querySelector('.popup__avatar').src = offer.avatar; // выводим адрес изображения-аватара
  } else {
    popupElement.querySelector('.popup__avatar').remove();
  }

  advFragment.appendChild(popupElement); // добавляем содержимое фрагмента в разметку

  return advFragment;
};

// Вставляем ОДНО объявление на сайт с помощью импортированной функции
//popupListElement.appendChild(getAdvFragment(advertisementArray[ADV_NUMBER]));

export {getAdvFragment}
