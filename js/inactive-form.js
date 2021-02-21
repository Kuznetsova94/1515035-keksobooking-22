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
