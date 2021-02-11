// Модуль для создания функций генерации случайных чисел
// Функция для генерации случайного числа
const getRandomIntegerInclusive = (min, max) => {
  //checkMinMaxArguments(min, max);
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
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

// Функция для генерации случайного количества случайных уникальных элементов из массива
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

// Функция для генерации случайного числа с плавающей точкой
const getRandomFloat = function (min, max, digits) {
  if (min >= 0 && max >= 0 && max > min) {
    let num = Math.random() * (max - min) + min;
    return +(num.toFixed(digits));
  }
}

export {
  getRandomIntegerInclusive,
  getRandomItemNoRepeat,
  getRandomArray,
  getRandomFloat
};
