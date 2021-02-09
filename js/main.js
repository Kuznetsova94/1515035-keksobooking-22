/* eslint-disable no-undef */
// Сссылка на источник:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%BE%D0%B3%D0%BE_%D1%86%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE_%D1%87%D0%B8%D1%81%D0%BB%D0%B0_%D0%B2_%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D0%BE%D0%BC_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D0%B0%D0%BB%D0%B5_%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE
const getRandomIntInclusive = function (min, max) {
  // Проверка значений
  if (min >= 0 && max >= 0 && max > min) {
    // Округляет аргумент до ближайшего большего целого
    min = Math.ceil(min);
    // Округляет аргумент вниз
    max = Math.floor(max);
    // Возвращает случайное округленное число из диапазона
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    // eslint-disable-next-line no-console
    console.log('Ошибка');
  }
}
// eslint-disable-next-line no-console
console.log(getRandomIntInclusive(10, 78));


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomNumber = function (min, max, digits) {
  // Проверка значений
  if (min >= 0 && max >= 0 && max > min) {
    // Неокругленное случайное число из переданного диапазона включительно
    let numObj = (Math.random() * (max - min + 1)) + min;
    return +(numObj.toFixed(digits));
  } else {
    // eslint-disable-next-line no-console
    console.log('Ошибка');
  }
}
// eslint-disable-next-line no-console
console.log(getRandomNumber(10.5, 78, 8));

/* =========================== Первый вариант ДЗ ===========================*/
/*
//Создаем массивы для генерации объекта
const avatars = ['img/avatars/user{{01}}.png',
  'img/avatars/user{{02}}.png',
  'img/avatars/user{{03}}.png',
  'img/avatars/user{{04}}.png',
  'img/avatars/user{{05}}.png',
  'img/avatars/user{{06}}.png',
  'img/avatars/user{{07}}.png',
  'img/avatars/user{{08}}.png',
];
const types = ['palace', 'flat', 'house', 'bungalow'];
const checkinTime = ['12:00', '13:00', '14:00'];
const checkoutTime = ['12:00', '13:00', '14:00'];
const featuresArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosArray = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

// Функция для генерации случайного числа для х и y
const getRandomFloat = function (min, max, digits) {
  // Проверка значений
  if (min >= 0 && max >= 0 && max > min) {
    // Неокругленное случайное число из переданного диапазона включительно
    let num = Math.random() * (max - min) + min;
    return +(num.toFixed(digits));
  }
  // eslint-disable-next-line no-console
  console.log('Ошибка');
}

//Создаем функцию для генерации объекта
const createObj = () => {
  const randomAvatarIndex = _.random(0, avatars.length - 1);
  const titleName = 'Предложение о сдаче в аренду недвижимости в центре Токио';
  const xInt = getRandomFloat(35.65000, 35.70000, 5);
  const yInt = getRandomFloat(139.70000, 139.80000, 5);
  const addressName = xInt + ', ' + yInt;
  const randomPrice = Math.floor(Math.random() * 1000000);
  const randomTypeIndex = _.random(0, types.length - 1);
  const randomRoomNumber = Math.floor(Math.random() * 100);
  const randomGuestNumber = Math.floor(Math.random() * 1000);
  const randomCheckinIndex = _.random(0, checkinTime.length - 1);
  const randomCheckoutIndex = _.random(0, checkoutTime.length - 1);
  const mixedFeatures = _.shuffle(featuresArray);
  const randomFeatures = mixedFeatures.slice((Math.floor(Math.random() * featuresArray.length - 1)) * (Math.floor(Math.random() * featuresArray.length)));
  const descriptionName = 'Уютная квартира в самом центре Токио';
  const mixedPhotos = _.shuffle(photosArray);
  const randomPhotos = mixedPhotos.slice((Math.floor(Math.random() * photosArray.length - 1)) * (Math.floor(Math.random() * photosArray.length)));

  return {
    avatar: avatars[randomAvatarIndex],
    title: titleName,
    addresses: addressName,
    price: randomPrice,
    types: types[randomTypeIndex],
    rooms: randomRoomNumber,
    guests: randomGuestNumber,
    checkinTime: checkinTime[randomCheckinIndex],
    checkoutTime: checkoutTime[randomCheckoutIndex],
    features: randomFeatures,
    description: descriptionName,
    photos: randomPhotos,
    x: xInt,
    y: yInt,
  };
};

let advertisementObj = createObj()
// eslint-disable-next-line no-console
console.log(advertisementObj);

// Объединяем 10 объектов в массив
const objectNumber = 10;
const advertisementArray = new Array(objectNumber).fill(null).map(() => createObj());

// eslint-disable-next-line no-console
console.log(advertisementArray); */


/* =========================== Второй вариант ДЗ (с подсказками) ===========================*/

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
// eslint-disable-next-line no-console
console.log(getRandomAvatar());

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
  // eslint-disable-next-line no-console
  console.log('Ошибка');
}

//Создаем массивы для создания объекта
const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow'];
const FEATURES_TYPES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const CHECKIN_TIMES = ['12:00', '13:00', '14:00'];
const CHECKOUT_TIMES = ['12:00', '13:00', '14:00'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

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
  const randomCheckinTime = getRandomItemNoRepeat(CHECKIN_TIMES);
  const randomCheckoutTime = getRandomItemNoRepeat(CHECKOUT_TIMES);

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
const objectNumber = 10;
const advertisementArray = new Array(objectNumber).fill(null).map(() => createObj());

// eslint-disable-next-line no-console
console.log(advertisementArray);
