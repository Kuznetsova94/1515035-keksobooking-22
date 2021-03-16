// Модуль описывает фильтр
const PRICE_TYPE = {
  'lowestPrice': 10000,
  'highestPrice': 50000,
}

const filterElement = document.querySelector('.map__filters');
const typeElement = filterElement.querySelector('#housing-type');
const priceElement = filterElement.querySelector('#housing-price');
const roomsElement = filterElement.querySelector('#housing-rooms');
const guestsElement = filterElement.querySelector('#housing-guests');
const featuresElement = filterElement.querySelector('#housing-features');


// Фильтр по типу жилья
const getFilterByType = (data) => {
  return typeElement.value === 'any' || data.offer.type === typeElement.value;
}

// Фильтр по цене
const getFilterByPrice = (data) => {
  switch (priceElement.value) {
    case 'low':
      return data.offer.price < PRICE_TYPE['lowestPrice'];
    case 'middle':
      return (data.offer.price >= PRICE_TYPE['lowestPrice']) && (data.offer.price <= PRICE_TYPE['highestPrice']);
    case 'high':
      return data.offer.price > PRICE_TYPE['highestPrice'];
    default:
      return true;
  }
};

// Фильтр по количеству комнат
const getFilterByRoom = (data) => {
  return roomsElement.value === 'any' || data.offer.rooms === parseInt(roomsElement.value, 10);
};

// Фильтр по количеству гостей
const getFilterByGuest = (data) => {
  return guestsElement.value === 'any' || data.offer.guests === parseInt(guestsElement.value, 10);
};

// Фильтр по списку преимуществ
const getFilterByFeatures = (data) => {
  let result = true;

  const checkedFeatures = featuresElement.querySelectorAll('input:checked')
  checkedFeatures.forEach((item) => {
    if (data.indexOf(item.value) === -1) {
      result = false;
    }
  });

  return result;
}

// Объединяем функции в одну
const getFilters = (data) => {
  return (
    getFilterByType(data) &&
    getFilterByPrice(data) &&
    getFilterByRoom(data) &&
    getFilterByGuest(data) &&
    getFilterByFeatures(data.offer.features)
  )
}

const setFilterChange = (cb) => {
  filterElement.addEventListener('change', () => {
    cb();
  });
};

const setFilterReset = (cb) => {
  filterElement.addEventListener('reset', () => {
    setTimeout(() => {
      cb();
    }, 0);
  });
};

export {getFilters, setFilterChange, setFilterReset}
