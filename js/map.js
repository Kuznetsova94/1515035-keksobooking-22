/* global L:readonly */
// Модуль реализации карты
import {getAdvFragment} from './card.js';
import {
  advertisementArray
} from './data.js';
import {
  setActiveForm,
  setActiveMapFilters
} from './inactive-form.js';

import {addressInput} from './restrictions.js';

const CITY_CENTER = {
  LAT: 35.68941,
  LNG: 139.69201,
};

// Создаем и активируем карту
//const addressInput = document.querySelector('#address')
const map = L.map('map-canvas')
  .on('load', () => {
    setActiveForm();
    setActiveMapFilters();
    addressInput.value = CITY_CENTER.LAT + ', ' + CITY_CENTER.LNG;
  })
  .setView({
    // Координаты центра Токио
    lat: CITY_CENTER.LAT,
    lng: CITY_CENTER.LNG,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// Добавляем главную метку
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [48, 48],
  iconAnchor: [24, 48],
});

const mainPinMarker = L.marker({
  lat: CITY_CENTER.LAT,
  lng: CITY_CENTER.LNG,
}, {
  draggable: true,
  icon: mainPinIcon,
});
// добавляем главную иконку пина на карту
mainPinMarker.addTo(map);

mainPinMarker.on('move', (evt) => {
  // при перемещении пина меняем значение адреса и округляем до 5 цифр после точки!
  addressInput.value = evt.target.getLatLng().lat.toFixed(5) + ', ' + evt.target.getLatLng().lng.toFixed(5);
});

// Добавляем метки из массива
advertisementArray.forEach((adv) => {
  const lat = adv.x;
  const lng = adv.y;

  const pinIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const pinMarker = L.marker({
    lat,
    lng,
  }, {
    pinIcon,
  });

  pinMarker
    .addTo(map)
    // привязываем балун
    .bindPopup(
      // передаем функцию генерации массива из объявлений
      getAdvFragment(adv),
      {
        keepInView: true,
      },
    );
});
