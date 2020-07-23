import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);

    this._submitCallback = submitCallback;
  }

  _getInputValues(){

  }

  setEventListeners(){

  }

  close(){

  }
}
