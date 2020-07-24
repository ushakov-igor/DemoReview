import Popup from './Popup.js';

export default class PopupWithImage extends Popup {

  open(data) {
    this._popup.querySelector('.popup__caption').textContent = data.name;

    const popupImage = this._popup.querySelector('.popup__image');
    popupImage.src = data.link;
    popupImage.alt = `Изображение ${data.link}`;

    super.open();
  }

}


