import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
    }

    open(placePhoto, placeTitle) {
        this._selector.querySelector('.popup__img').src = placePhoto
        this._selector.querySelector('.popup__img').alt = `Фото ${placeTitle}`
        this._selector.querySelector('.popup__caption').textContent = placeTitle

        super.open()

    }
}