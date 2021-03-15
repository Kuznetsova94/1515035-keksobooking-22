// Модуль для создания функций
const ALERT_SHOW_TIME = 5000;
// Функция для генерации случайного числа
const getRandomIntegerInclusive = (min, max) => {
  //checkMinMaxArguments(min, max);
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Функция для генерации случайного уникального элемента из массива
const getRandomValue = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const getRandomItemNoRepeat = (arr) => {
  const randomElement = getRandomValue(0, arr.length - 1);
  const randomElementItem = arr[randomElement];
  arr.slice(randomElement, 1);
  return randomElementItem;
};

// Функция для генерации случайного количества случайных уникальных элементов из массива
const getRandomArray = (array) => {
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
const getRandomFloat = (min, max, digits) => {
  if (min >= 0 && max >= 0 && max > min) {
    let num = Math.random() * (max - min) + min;
    return +(num.toFixed(digits));
  }
}

// Функция, показывающая предупреждение об ошибке запроса */
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.margin = '0 0 10px 0';
  alertContainer.style.fontSize = '25px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);

}

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export {
  getRandomIntegerInclusive,
  getRandomItemNoRepeat,
  getRandomArray,
  getRandomFloat,
  isEscEvent,
  showAlert
};
