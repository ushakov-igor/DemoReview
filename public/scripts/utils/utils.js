import {
  ESC_KEYCODE,
  placesWrap,
  editFormModalWindow,
  cardFormModalWindow,
  profileTitle,
  profileDescription,
  titleInputValue,
  descriptionInputValue,
  cardNameInputValue,
  cardLinkInputValue,
  cardSelector,
} from './constants.js';

import Card from '../components/Card.js';

export const isEscEvent = (evt, action) => {
  const activePopup = document.querySelector('.popup_is-opened');
  if (evt.which === ESC_KEYCODE) {
    action(activePopup);
  }
};

export const openModalWindow = (modalWindow) => {
  modalWindow.classList.add('popup_is-opened');
  document.addEventListener('keyup', handleEscUp);
};

export const closeModalWindow = (modalWindow) => {
  modalWindow.classList.remove('popup_is-opened');
  document.removeEventListener('keyup', handleEscUp);
};

export const renderCard = (data, wrap) => {
  const card = new Card(data, cardSelector);
  wrap.prepend(card.getView());
};

export const handleEscUp = (evt) => {
  evt.preventDefault();
  isEscEvent(evt, closeModalWindow);
};

export const formSubmitHandler = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = titleInputValue.value;
  profileDescription.textContent = descriptionInputValue.value;
  closeModalWindow(editFormModalWindow);
};

export const cardFormSubmitHandler = (evt) => {
  evt.preventDefault();
  renderCard({
    name: cardNameInputValue.value,
    link: cardLinkInputValue.value
  }, placesWrap);
  closeModalWindow(cardFormModalWindow);
};
