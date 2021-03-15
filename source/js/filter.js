// Модуль описывает фильтр
const PRICE_TYPES = {
  'lowestPrice': 10000,
  'highestPrice': 50000,
}

const filter = document.querySelector('.map__filters');
const type = filter.querySelector('#housing-type');
const price = filter.querySelector('#housing-price');
const rooms = filter.querySelector('#housing-rooms');
const guests = filter.querySelector('#housing-guests');
const features = filter.querySelector('#housing-features');


// Фильтр по типу жилья
const getFilterByType = (data) => {
  return type.value === 'any' || data.offer.type === type.value;
}

// Фильтр по цене
const getFilterByPrice = (data) => {
  switch (price.value) {
    case 'low':
      return data.offer.price < PRICE_TYPES['lowestPrice'];
    case 'middle':
      return (data.offer.price >= PRICE_TYPES['lowestPrice']) && (data.offer.price <= PRICE_TYPES['highestPrice']);
    case 'high':
      return data.offer.price > PRICE_TYPES['highestPrice'];
    default:
      return true;
  }
};

// Фильтр по количеству комнат
const getFilterByRoom = (data) => {
  return rooms.value === 'any' || data.offer.rooms === parseInt(rooms.value, 10);
};

// Фильтр по количеству гостей
const getFilterByGuest = (data) => {
  return guests.value === 'any' || data.offer.guests === parseInt(guests.value, 10);
};

// Фильтр по списку преимуществ
const getFilterByFeatures = (data) => {
  let result = true;

  const checkedFeatures = features.querySelectorAll('input:checked')
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
  filter.addEventListener('change', () => {
    cb();
  });
};

export {getFilters, setFilterChange}
