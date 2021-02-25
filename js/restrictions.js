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

// по умолчанию 1 комната = 1 гость
capacityInput.value = 1;

// Функция делает элемент недоступным
const setDisabledValue = function (elements, values) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].disabled = false;
    if (values.indexOf(elements[i].value) > -1) {
      elements[i].disabled = true;
    }
  }
};

const calculateRoomsAndCapacity = function () {
  const capacityOptions = capacityInput.querySelectorAll('option');
  const roomsInputValue = roomNumberInput.value;

  switch (roomsInputValue) {
    case '1':
      setDisabledValue(capacityOptions, ['0', '2', '3']);
      capacityOptions[2].selected = true;
      break;
    case '2':
      setDisabledValue(capacityOptions, ['0', '3']);
      capacityOptions[1].selected = true;
      break;
    case '3':
      setDisabledValue(capacityOptions, ['0']);
      capacityOptions[0].selected = true;
      break;
    case '100':
      setDisabledValue(capacityOptions, ['1', '2', '3']);
      capacityOptions[3].selected = true;
      break;
  }
};

const roomsInputChangeHandler = function () {
  calculateRoomsAndCapacity();
};

roomNumberInput.addEventListener('change', roomsInputChangeHandler);

/*roomNumberInput.addEventListener('change', (evt) => {
  switch (evt.target.value) {
    case '1':
      capacityInput.options[0].disabled = true;
      capacityInput.options[1].disabled = true;
      capacityInput.options[2].disabled = false;
      capacityInput.options[3].disabled = true;
      capacityInput.options[2].selected = true;
      break;
    case '2':
      capacityInput.options[0].disabled = true;
      capacityInput.options[1].disabled = false;
      capacityInput.options[2].disabled = false;
      capacityInput.options[3].disabled = true;
      capacityInput.options[1].selected = true;
      break;
    case '3':
      capacityInput.options[0].disabled = false;
      capacityInput.options[1].disabled = false;
      capacityInput.options[2].disabled = false;
      capacityInput.options[3].disabled = true;
      capacityInput.options[0].selected = true;
      break;
    case '100':
      capacityInput.options[0].disabled = true;
      capacityInput.options[1].disabled = true;
      capacityInput.options[2].disabled = true;
      capacityInput.options[3].disabled = false;
      capacityInput.options[3].selected = true;
      break;
    default:
      capacityInput.options[0].disabled = false;
      capacityInput.options[1].disabled = false;
      capacityInput.options[2].disabled = false;
      capacityInput.options[3].disabled = false;
  }
});*/

export {
  addressInput
};
