import Popup from './Popup';

class PopupWithForm extends Popup {
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

export default PopupWithForm;
