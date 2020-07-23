export default class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handlePreviewPicture = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeIcon() {
    this._element.querySelector('.card__like-button').
      classList.toggle('card__like-button_is-active');
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like-button')
      .addEventListener('click', () => this._handleLikeIcon());

    this._element.querySelector('.card__delete-button')
      .addEventListener('click', () => this._handleDeleteCard());

    this._element.querySelector('.card__image')
      .addEventListener('click', () => this._handlePreviewPicture());
  }

  getView() {
    // Публичный метод, возвращающий представление карточки;
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__image').style.backgroundImage = `url(${this._link})`;
    this._element.querySelector('.card__title').textContent = this._name;

    return this._element;
  }
}

