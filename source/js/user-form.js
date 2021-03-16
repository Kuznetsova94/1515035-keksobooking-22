// Модуль работает с состояниями формы
const advertisementForm = document.querySelector('.ad-form');
const headerForm = document.querySelector('.ad-form-header');
const advertisementElementForm = document.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelectorAll('.map__filters');
const mapFeatures = document.querySelector('.map__features');

// Функция делает .ad-form неактивным полем
const setInactiveForm = () => {
  advertisementElementForm.forEach((formElement) => {
    formElement.setAttribute('disabled', 'disabled');
  });
  advertisementForm.classList.add('ad-form--disabled');
  headerForm.setAttribute('disabled', 'disabled');
};

// Функция возвращает .ad-form в активное состояние
const setActiveForm = () => {
  advertisementElementForm.forEach((formElement) => {
    formElement.removeAttribute('disabled');
  });
  advertisementForm.classList.remove('ad-form--disabled');
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
  advertisementForm,
  mapFilters,
  setActiveForm,
  setActiveMapFilters
}
