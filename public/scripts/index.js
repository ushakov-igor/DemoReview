import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import Card from './components/Card.js';

import {
  initialCards,
  placesWrap,
  editFormModalWindow,
  cardFormModalWindow,
  imageModalWindow,
  openEditFormButton,
  openCardFormButton,
  profileTitle,
  profileDescription,
  titleInputValue,
  descriptionInputValue,
  cardSelector,
  defaultFormConfig,
} from './utils/constants.js';

import {
  openModalWindow,
  closeModalWindow,
  formSubmitHandler,
  cardFormSubmitHandler,
} from './utils/utils.js';

// EventListeners
editFormModalWindow.addEventListener('submit', formSubmitHandler);
cardFormModalWindow.addEventListener('submit', cardFormSubmitHandler);

openEditFormButton.addEventListener('click', () => {
  titleInputValue.value = profileTitle.textContent;
  descriptionInputValue.value = profileDescription.textContent;
  openModalWindow(editFormModalWindow);
});

openCardFormButton.addEventListener('click', () => {
  openModalWindow(cardFormModalWindow);
});

editFormModalWindow.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    closeModalWindow(editFormModalWindow);
  }
});
cardFormModalWindow.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    closeModalWindow(cardFormModalWindow);
  }
});
imageModalWindow.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    closeModalWindow(imageModalWindow);
  }
});

// Инициализация
const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const card = new Card(cardItem, cardSelector);
    const cardElement = card.getView();
    cardList.addItem(cardElement);
  },
},
placesWrap
);

const editFormValidator = new FormValidator(defaultFormConfig, editFormModalWindow);
const cardFormValidator = new FormValidator(defaultFormConfig, cardFormModalWindow);

cardList.render(initialCards);
editFormValidator.enableValidation();
cardFormValidator.enableValidation();


