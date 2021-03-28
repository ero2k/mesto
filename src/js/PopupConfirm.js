import Popup from './Popup.js'

export default class PopupConfirm extends Popup {
    constructor(popup, handlerButtonClick, item) {
        super(popup);
        this._clickConfirm = handlerButtonClick;
        this._item = item
    }

    close() {
        super.close()
        this._popup.removeEventListener('click', this._eventListener)
    }

    _eventListener = () => {
        this._clickConfirm().then(item => {
            console.log(item.message)
            this._item.remove()
        })
        this.close()
    }


    setEventListeners() {
        super.setEventListeners()
        this._popup.addEventListener('click', this._eventListener)
    }

}