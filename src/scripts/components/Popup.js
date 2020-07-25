import {
  ESC_KEYCODE,
} from '../utils/constants.js';

export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
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
    /* Надо исправить: модальное окно не закрывается если нажать по оверлею
       Молодец, проверка класса popup сделана верно и как раз для этого, однако событие keyup
       относится к KeyboardEvent и реагирует только на нажатия по клавишам клавиатуры
       следует посмотреть в сторону MouseEvent: https://developer.mozilla.org/ru/docs/Web/API/MouseEvent
       Но не забыть обрабатывать также и keyup для кнопки ESC  
    */
    if (event.keyCode === ESC_KEYCODE || event.target.classList.contains('popup')) {
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
