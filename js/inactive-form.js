// Модуль переводит страницу в неактивное состояние
const advForm = document.querySelector('.ad-form');
const headerForm = document.querySelector('.ad-form-header');
const advElementForm = document.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelectorAll('.map__filters')
const mapFeatures = document.querySelector('.map__features')

// Функция делает .ad-form неактивным полем
const setInactiveForm = () => {
  advElementForm.forEach((formElement) => {
    formElement.setAttribute('disabled', 'disabled');
  });
  advForm.classList.add('ad-form--disabled');
  headerForm.setAttribute('disabled', 'disabled');
};

// Функция возвращает .ad-form в активное состояние
const setActiveForm = () => {
  advElementForm.forEach((formElement) => {
    formElement.removeAttribute('disabled');
  });
  advForm.classList.remove('ad-form--disabled');
  headerForm.removeAttribute('disabled');
};

// Функция делает .map__filters неактивным полем
const setInactiveMapFilters = () => {
  mapFilters.forEach((filterElement) => {
    filterElement.setAttribute('disabled', 'disabled');
  });
  mapFeatures.setAttribute('disabled', 'disabled');
};

// Функция возвращает .map__filters в активное состояние
const setActiveMapFilters = () => {
  mapFilters.forEach((filterElement) => {
    filterElement.removeAttribute('disabled');
  });
  mapFeatures.removeAttribute('disabled');
};

setInactiveForm();
setInactiveMapFilters();

export {
  setActiveForm,
  setActiveMapFilters
}

/*
//На месте карты отображается серый прямоугольник.
//Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
const advForm = document.querySelector('.ad-form'); // Находим нужную форму
advForm.classList.add('ad-form--disabled');

//Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled, добавленного на них или на их родительские блоки fieldset;
const headerField = document.querySelector('.ad-form-header');
headerField.setAttribute('disabled', 'disabled');

const titleField = document.querySelector('#title');
titleField.setAttribute('disabled', 'disabled');

const addressField = document.querySelector('#address');
addressField.setAttribute('disabled', 'disabled');

const typeField = document.querySelector('#type');
typeField.setAttribute('disabled', 'disabled');

const priceField = document.querySelector('#price');
priceField.setAttribute('disabled', 'disabled');

const timeinField = document.querySelector('#timein');
timeinField.setAttribute('disabled', 'disabled');

const timeoutField = document.querySelector('#timeout');
timeoutField.setAttribute('disabled', 'disabled');

const roomNumberField = document.querySelector('#room_number');
roomNumberField.setAttribute('disabled', 'disabled');

const capacityField = document.querySelector('#capacity');
capacityField.setAttribute('disabled', 'disabled');

const featuresField = document.querySelector('.features');
featuresField.setAttribute('disabled', 'disabled');

const descriptionField = document.querySelector('#description');
descriptionField.setAttribute('disabled', 'disabled');

const photoField = document.querySelector('#images');
photoField.setAttribute('disabled', 'disabled');

const submitField = document.querySelector('.ad-form__element--submit');
submitField.setAttribute('disabled', 'disabled');


//Форма с фильтрами .map__filters заблокирована так же, как и форма .ad-form — класс и атрибуты disabled;
const mapField = document.querySelector('.map__filters'); // Находим поле загрузки изображенмя
mapField.classList.add('ad-form--disabled');

const houseTypeField = document.querySelector('#housing-type');
houseTypeField.setAttribute('disabled', 'disabled');

const housePriceField = document.querySelector('#housing-price');
housePriceField.setAttribute('disabled', 'disabled');

const houseRoomsField = document.querySelector('#housing-rooms');
houseRoomsField.setAttribute('disabled', 'disabled');

const houseGuestsField = document.querySelector('#housing-guests');
houseGuestsField.setAttribute('disabled', 'disabled');

const houseFeaturesField = document.querySelector('#housing-features');
houseFeaturesField.setAttribute('disabled', 'disabled');
*/
