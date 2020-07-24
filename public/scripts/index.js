import Section from './components/Section.js';
import Card from './components/Card.js';
import UserInfo from './components/UserInfo.js';
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
  openEditFormButton,
  cardSelector,
  defaultFormConfig,
  profileTitle,
   profileDescription,
   titleInputValue,
   descriptionInputValue
} from './utils/constants.js';

// Инициализация классов
const user = new UserInfo({
  nameSelector: profileTitle,
  descriptionSelector: profileDescription });

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
    console.log(formData);
    const card = new Card({
      data: formData,
      handleCardClick: () => {
        const popupWithImage = new PopupWithImage(imageModalWindow);
        popupWithImage.open(formData);
        popupWithImage.setEventListeners();
      }
    }, cardSelector);

    const cardElement = card.getView();
    cardList.addItem(cardElement);
    cardPopupWithForm.close();
  }
});

const editPopupWithForm = new PopupWithForm(editFormModalWindow, {
  submitCallback: (formData) => {
    user.setUserInfo(formData);
    editPopupWithForm.close();
  }
});

const editFormValidator = new FormValidator(defaultFormConfig, editFormModalWindow);
const cardFormValidator = new FormValidator(defaultFormConfig, cardFormModalWindow);

// вызовы методов классов
cardList.render(initialCards);
cardPopupWithForm.setEventListeners();
editPopupWithForm.setEventListeners();

// EventListeners
openCardFormButton.addEventListener('click', () => {
  cardFormValidator.enableValidation();
  cardPopupWithForm.open();
});

openEditFormButton.addEventListener('click', () => {
  const userInfo = user.getUserInfo();
  titleInputValue.value = userInfo.name;
  descriptionInputValue.value = userInfo.description;
  editFormValidator.enableValidation();
  editPopupWithForm.open();
});
