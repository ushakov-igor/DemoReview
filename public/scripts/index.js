import Section from './components/Section.js';
import Card from './components/Card.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import FormValidator from './components/FormValidator.js';

import {
  initialCards,
  placesWrap,
  editFormModalWindow,
  cardFormModalWindow,
  imageModalWindow,
  openCardFormButton,
  cardSelector,
  defaultFormConfig,
} from './utils/constants.js';

// Инициализация классов
const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const card = new Card({
      data: cardItem,
      handleCardClick: () => {
        const popupWithImage = new PopupWithImage(imageModalWindow);
        popupWithImage.open(cardItem);
        popupWithImage.setEventListeners();
      }
    }, cardSelector);

    const cardElement = card.getView();
    cardList.addItem(cardElement);
  },
},
placesWrap
);

const cardPopupWithForm = new PopupWithForm(cardFormModalWindow, {
  submitCallback: (formData) => {
    const card = new Card({
      data: formData,
      handleCardClick: () => {
        const popupWithImage = new PopupWithImage(imageModalWindow);
        popupWithImage.open(cardItem);
        popupWithImage.setEventListeners();
      }
    }, cardSelector);

    const cardElement = card.getView();
    cardList.addItem(cardElement);
    cardPopupWithForm.close();
  },
});

const editFormValidator = new FormValidator(defaultFormConfig, editFormModalWindow);
const cardFormValidator = new FormValidator(defaultFormConfig, cardFormModalWindow);

// вызовы методов классов
cardList.render(initialCards);
editFormValidator.enableValidation();
cardFormValidator.enableValidation();
cardPopupWithForm.setEventListeners();

// EventListeners
openCardFormButton.addEventListener('click', () => {
  cardPopupWithForm.open();
});
