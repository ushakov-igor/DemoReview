import {
  ESC_KEYCODE,
} from '../utils/constants.js';

export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
  }

  open() {
    this._popup.classList.add('popup_is-opened');
    document.addEventListener('keyup', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_is-opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.keyCode === ESC_KEYCODE || event.target.classList.contains('.popup')) {
      event.preventDefault();
      this.close();
    }
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close').addEventListener('click', () => {
      this.close()
    });
  }
}
