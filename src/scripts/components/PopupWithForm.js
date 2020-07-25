import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, {submitCallback}) {
    super(popupSelector);

    this._submitCallback = submitCallback;
    this._form = this._popup.querySelector('.popup__form');
  }

  /* Можно лучше: В методе _getInputValues не обязательно использовать this, это создаст два новых приватных поля в классе
     которые не используются нигде вне этого метода. Достаточно использовать const/let, тогда в класс не будут
     добавлены новые поля
  */
  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.popup__input');

    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  close(){
    this._form.reset();
    super.close();
  }

  setEventListeners() {
    this._popup.addEventListener('submit', (event) => {
      event.preventDefault();

      this._submitCallback(this._getInputValues());
      this.close();
    })

    super.setEventListeners();
  }
}
