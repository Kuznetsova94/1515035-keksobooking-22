// Модуль, который описывает ограничения (задание 5.2)
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

// Валидация адреса (необходимо запретить ручное редактирование)
const addressInput = document.querySelector('#address');
addressInput.setAttribute('disabled', 'disabled');

// Валидация цены за ночь
const priceInput = document.querySelector('#price');

priceInput.addEventListener('input', () => {
  const priceValue = priceInput.value;

  if (priceValue > MAX_PRICE) {
    priceInput.setCustomValidity('Максимальная цена за ночь составляет 1 000 000 руб.');
  } else {
    priceInput.setCustomValidity('');
  }
  priceInput.reportValidity();
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
flatTypeInput.addEventListener('input', () => {
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

// Валидация количества комнат и количества мест
const roomNumberInput = document.querySelector('#room_number');
const capacityInput = document.querySelector('#capacity');

// По умолчанию 1 комната = 1 гость
capacityInput.value = 1;
capacityInput.options[0].setAttribute('disabled', 'disabled');
capacityInput.options[2].setAttribute('selected', 'selected');
capacityInput.options[1].setAttribute('disabled', 'disabled');
capacityInput.options[3].setAttribute('disabled', 'disabled');

roomNumberInput.addEventListener('change', () => {
  const roomNumberValue = roomNumberInput.value;
// 3 2 1 0
  if (roomNumberValue === '1') {
    capacityInput.options[0].removeAttribute('selected');
    capacityInput.options[1].removeAttribute('selected');
    capacityInput.options[2].removeAttribute('disabled');
    capacityInput.options[3].removeAttribute('selected');
    capacityInput.options[0].setAttribute('disabled', 'disabled');
    capacityInput.options[1].setAttribute('disabled', 'disabled');
    capacityInput.options[2].setAttribute('selected', 'selected');
    capacityInput.options[3].setAttribute('disabled', 'disabled');
  } else if (roomNumberValue === '2') {
    capacityInput.options[0].removeAttribute('selected');
    capacityInput.options[1].removeAttribute('disabled');
    capacityInput.options[2].removeAttribute('selected');
    capacityInput.options[2].removeAttribute('disabled');
    capacityInput.options[3].removeAttribute('selected');
    capacityInput.options[0].setAttribute('disabled', 'disabled');
    capacityInput.options[1].setAttribute('selected', 'selected');
    capacityInput.options[3].setAttribute('disabled', 'disabled');
  } else if (roomNumberValue === '3') {
    capacityInput.options[0].removeAttribute('disabled');
    capacityInput.options[1].removeAttribute('selected');
    capacityInput.options[1].removeAttribute('disabled');
    capacityInput.options[2].removeAttribute('selected');
    capacityInput.options[2].removeAttribute('disabled');
    capacityInput.options[3].removeAttribute('selected');
    capacityInput.options[0].setAttribute('selected', 'selected');
    capacityInput.options[3].setAttribute('disabled', 'disabled');
  } else if (roomNumberValue === '100') {
    capacityInput.options[0].removeAttribute('selected');
    capacityInput.options[1].removeAttribute('selected');
    capacityInput.options[2].removeAttribute('selected');
    capacityInput.options[3].removeAttribute('disabled');
    capacityInput.options[0].setAttribute('disabled', 'disabled');
    capacityInput.options[1].setAttribute('disabled', 'disabled');
    capacityInput.options[2].setAttribute('disabled', 'disabled');
    capacityInput.options[3].setAttribute('selected', 'selected');
  } else {
    capacityInput.options[0].removeAttribute('disabled');
    capacityInput.options[1].removeAttribute('disabled');
    capacityInput.options[2].removeAttribute('disabled');
    capacityInput.options[3].removeAttribute('disabled');
    capacityInput.options[0].removeAttribute('selected');
    capacityInput.options[1].removeAttribute('selected');
    capacityInput.options[2].removeAttribute('selected');
    capacityInput.options[3].removeAttribute('selected');
  }
  capacityInput.reportValidity();
});

export {
  addressInput
};
