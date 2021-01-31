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
