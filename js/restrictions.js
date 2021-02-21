// Модуль, который описывает ограничения
// Ограничения по длине заголовка
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
// Ограничения по цене за ночь
const MAX_PRICE = 1000000;
// Ограничения минимальной цены по типу жилья
const MIN_TYPE_PRICES = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

// Валидация заголовка
const titleInput = document.querySelector('#title');

titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
});

// Валидация цены за ночь
const priceInput = document.querySelector('#price');

priceInput.addEventListener('input', () => {
  const priceValue = priceInput.value;

  if (priceValue > MAX_PRICE) {
    priceInput.setCustomValidity('Максимальная цена за ночь составляет 1 000 000 руб.');
  } else {
    priceInput.reportValidity();
  }
});

titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' симв.');
  } else {
    titleInput.setCustomValidity('');
  }
  titleInput.reportValidity();
});

// При изменении типа размещения/жилья автоматически меняется цена
const flatTypeInput = document.querySelector('#type');
const priceTypeInput = document.querySelector('#price');
// По умолчанию выбрана квартира, меняем минимальную цену на 1000
priceTypeInput.placeholder = 1000;
flatTypeInput.addEventListener('change', () => {
  priceTypeInput.placeholder = MIN_TYPE_PRICES[flatTypeInput.value];
});

// Синхранизация по времени
const checkinTypeInput = document.querySelector('#timein');
const checkoutTypeInput = document.querySelector('#timeout');
checkinTypeInput.addEventListener('change', () => {
  checkoutTypeInput.value = checkinTypeInput.value;
});
checkoutTypeInput.addEventListener('change', () => {
  checkinTypeInput.value = checkoutTypeInput.value;
});
