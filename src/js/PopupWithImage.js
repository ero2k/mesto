import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._popupImg = this._popup.querySelector('.popup__img')
        this._popupCaption = this._popup.querySelector('.popup__caption')
    }

    open(placePhoto, placeTitle) {
        this._popupImg.src = placePhoto
        this._popupImg.alt = `Фото ${placeTitle}`
        this._popupCaption.textContent = placeTitle

        super.open()

    }
}