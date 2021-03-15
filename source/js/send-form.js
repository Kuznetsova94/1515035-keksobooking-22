import {
  sendData
} from './api.js';

import {
  mainPinMarker,
  CITY_CENTER
} from './map.js';

import {
  addressInput
} from './restrictions.js';

import {
  advForm
} from './user-form.js';

import {
  isEscEvent
} from './utils.js';

// Модуль создает сообщения при отправке формы
const mainElement = document.querySelector('.main'); // обозначаем место для вставки скопированного шаблона
const successTemplate = document.querySelector('#success').content.querySelector('.success'); // получаем доступ к шаблону с успешной отправкой
const successMessage = successTemplate.cloneNode(true);
const errorTemplate = document.querySelector('#error').content.querySelector('.error'); // получаем доступ к шаблону с ошибкой
const errorMessage = errorTemplate.cloneNode(true);
const resetButton = document.querySelector('.ad-form__reset');
const mapFilter = document.querySelector('.map__filters');

// Добавляю сообщения в разметку + скрываю сообщения с помощью класса hidden
mainElement.append(successMessage);
mainElement.append(errorMessage);
successMessage.classList.add('hidden');
errorMessage.classList.add('hidden');

const closeMessage = (message) => {
  message.classList.add('hidden');
  message.removeEventListener('click', () => {
    closeMessage(message);
  });
  document.removeEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      closeMessage(message);
    }
  });
}

const openMessage = (message) => {
  message.classList.remove('hidden');
  message.addEventListener('click', () => {
    closeMessage(message);
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      closeMessage(message);
    }
  });
}

// Функция сбрасывает введенные значения
const resetForm = () => {
  advForm.reset();
  mapFilter.reset();
  mainPinMarker.setLatLng({
    lat: CITY_CENTER.LAT,
    lng: CITY_CENTER.LNG,
  });
  addressInput.value = CITY_CENTER.LAT + ', ' + CITY_CENTER.LNG;
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
});

const setUserFormSubmit = () => {
  advForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => {
        openMessage(successMessage);
        resetForm();
      },
      () => openMessage(errorMessage),
      new FormData(evt.target),
    );
  });
};

export {
  setUserFormSubmit
}
