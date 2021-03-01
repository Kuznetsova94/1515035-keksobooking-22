import {
  advForm
} from './user-form.js';

import {
  sendData
} from './api.js';

const ALERT_SHOW_TIME = 5000;
// Модуль создает сообщения при отправке формы
const mainElement = document.querySelector('.main'); // обозначаем место для вставки скопированного шаблона
const successTemplate = document.querySelector('#success').content.querySelector('.success'); // получаем доступ к шаблону с успешной отправкой
const successMessage = successTemplate.cloneNode(true);
const errorTemplate = document.querySelector('#error').content.querySelector('.error'); // получаем доступ к шаблону с ошибкой
const errorMessage = errorTemplate.cloneNode(true);
//const closeErrorButton = errorMessage.querySelector('.error__button');

// Добавляю сообщения в разметку + скрываю сообщения с помощью класса hidden
mainElement.append(successMessage);
mainElement.append(errorMessage);
successMessage.classList.add('hidden');
errorMessage.classList.add('hidden');


const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const closeMessage = (message) => {
  if (mainElement.contains(message)) {
    message.classList.add('hidden');
    message.removeEventListener('click', () => {
      closeMessage(message);
    });
    document.removeEventListener('keydown', (evt) => {
      if (isEscEvent(evt)) {
        closeMessage(message);
      }
    });
  }
}

const openMessage = (message) => {
  message.classList.remove('hidden');
  message.addEventListener('click', () => {
    closeMessage(message);
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      closeMessage(message);
    }
  });
}

// Функция, показывающая предупреждение об ошибке запроса */
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);

}

const setUserFormSubmit = () => {
  advForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => {
        openMessage(successMessage);
        advForm.reset();
      },
      () => openMessage(errorMessage),
      new FormData(evt.target),
    );
  });
};

setUserFormSubmit();

export {
  showAlert
}
