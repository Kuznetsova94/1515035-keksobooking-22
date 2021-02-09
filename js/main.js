/* =========================== Исправленный вариант домашнего задания ===========================*/
//Создаем массивы для создания объекта
const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow'];
const FEATURES_TYPES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const TIMES = ['12:00', '13:00', '14:00'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const OBJECT_NUMBER = 10;

//Создаем функции для создания объекта из случайных значений
// Функция для генерации случайного адреса изображения
const getRandomIntegerInclusive = (min, max) => {
  //checkMinMaxArguments(min, max);
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomAvatar = () => {
  const avatarId = '0' + getRandomIntegerInclusive(1, 8);
  return 'img/avatars/user' + avatarId + '.png';
}

// Функция для генерации случайного уникального элемента из массива
const getRandomValue = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

const getRandomItemNoRepeat = function (arr) {
  const randomElement = getRandomValue(0, arr.length - 1);
  const randomElementItem = arr[randomElement];
  arr.slice(randomElement, 1);
  return randomElementItem;
};

// Функция для генерации случайного количества случайных уникальных элементов из массива features
const getRandomArray = function (array) {
  let newArray = [];
  array.forEach((element) => {
    if (getRandomValue(0, 1)) {
      return;
    }
    newArray.push(element);
  })
  return newArray;
}

// Функция для генерации случайного числа для х и y
const getRandomFloat = function (min, max, digits) {
  if (min >= 0 && max >= 0 && max > min) {
    let num = Math.random() * (max - min) + min;
    return +(num.toFixed(digits));
  }
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
