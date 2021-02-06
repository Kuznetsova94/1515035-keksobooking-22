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
/*
//Создаем массивы для генерации объектов
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

//Создаем функцию для генерации первого объекта
const createAuthor = () => {
  const randomAvatarIndex = _.random(0, avatars.length - 1);
  return {
    avatar: avatars[randomAvatarIndex],
  };
};

let firstObj = createAuthor()
// eslint-disable-next-line no-console
console.log(firstObj);


//Создаем функцию для генерации второго объекта
const createOffer = () => {
  const titleName = 'Предложение о сдаче в аренду недвижимости в центре Токио';
  const addressName = '{{location.x}}, {{location.y}}';
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
  };
};
let secondObj = createOffer()
// eslint-disable-next-line no-console
console.log(secondObj);

//Создаем функцию для генерации третьего объекта
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

const createLocation = () => {
  const xInt = getRandomFloat(35.65000, 35.70000, 5);
  const yInt = getRandomFloat(139.70000, 139.80000, 5);
  return {
    x: xInt,
    y: yInt,
  };
};
let thirdObj = createLocation()
// eslint-disable-next-line no-console
console.log(thirdObj);

// Объединяем объекты в общий объект
let advertisementObj = Object.assign({}, firstObj, secondObj, thirdObj);
// eslint-disable-next-line no-console
console.log(advertisementObj);

// Объединяем 10 объектов в массив
const objectNumber = 10;
let advertisementArray = [];
for (let i = 0; i <= objectNumber - 1; i++) {
  advertisementArray.push(advertisementObj);
}
// eslint-disable-next-line no-console
console.log(advertisementArray); */


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
console.log(advertisementArray);
