/* global _:readonly */
import {getData} from './api.js';
import './avatar.js';
//import './advertisements.js';
import {
  setFilterChange
} from './filter.js'
import './user-form.js';
import {setUserFormSubmit} from './send-form.js';
import {createPins} from './map.js';
import {showAlert} from './utils.js';
import './restrictions.js';

const RERENDER_DELAY = 500;

getData((data) => {
  createPins(data);
  setFilterChange(_.debounce(
    () => createPins(data), RERENDER_DELAY));
}, showAlert);

setUserFormSubmit();
