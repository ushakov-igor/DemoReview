/* import {
  placesWrap,
  editFormModalWindow,
  cardFormModalWindow,
  profileTitle,
  profileDescription,
  titleInputValue,
  descriptionInputValue,
  cardNameInputValue,
  cardLinkInputValue,
} from './constants.js';

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
 */
