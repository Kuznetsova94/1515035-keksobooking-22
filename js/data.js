// Модуль для создания объекта из массива данных
import {getRandomIntegerInclusive, getRandomItemNoRepeat, getRandomArray, getRandomFloat} from './utils.js';

//Создаем массивы для создания объекта
const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow'];
const FEATURES_TYPES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const TIMES = ['12:00', '13:00', '14:00'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const OBJECT_NUMBER = 10;


// Функция для генерации случайного адреса изображения с использованием импортированной функции
const getRandomAvatar = () => {
  const avatarId = '0' + getRandomIntegerInclusive(1, 8);
  return 'img/avatars/user' + avatarId + '.png';
}

//Создаем функцию для генерации объекта
const createObj = () => {
  const randomAvatar = getRandomAvatar();
  const titleName = 'Предложение о сдаче в аренду недвижимости в центре Токио';
  const xInt = getRandomFloat(35.65000, 35.70000, 5);
  const yInt = getRandomFloat(139.70000, 139.80000, 5);
  const addressName = xInt + ', ' + yInt;
  const randomPrice = Math.floor(Math.random() * 1000000);
  const randomType = getRandomItemNoRepeat(OFFER_TYPES);
  const randomRoomNumber = Math.floor(Math.random() * 100);
  const randomGuestNumber = Math.floor(Math.random() * 1000);
  const randomCheckinTime = getRandomItemNoRepeat(TIMES);
  const randomCheckoutTime = getRandomItemNoRepeat(TIMES);
  const randomFeatures = getRandomArray(FEATURES_TYPES);
  const descriptionName = 'Уютная квартира в самом центре Токио';
  const randomPhotos = getRandomArray(PHOTOS);

  return {
    avatar: randomAvatar,
    title: titleName,
    addresses: addressName,
    price: randomPrice,
    types: randomType,
    rooms: randomRoomNumber,
    guests: randomGuestNumber,
    checkinTime: randomCheckinTime,
    checkoutTime: randomCheckoutTime,
    features: randomFeatures,
    description: descriptionName,
    photos: randomPhotos,
    x: xInt,
    y: yInt,
  };
};

// Объединяем 10 объектов в массив
const advertisementArray = new Array(OBJECT_NUMBER).fill(null).map(() => createObj());

// eslint-disable-next-line no-console
console.log(advertisementArray);

export {advertisementArray};
