import {getData} from './api.js';
//import './advertisements.js';
import './user-form.js';
import {setUserFormSubmit} from './send-form.js';
import {createPins} from './map.js';
import {showAlert} from './utils.js';
import './restrictions.js';


getData((data) => {
  createPins(data);
}, showAlert);

setUserFormSubmit();
