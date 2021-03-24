import Popup from './Popup.js'

export default class PopupConfirm extends Popup {
    constructor(popup, callBackSubmitForm) {
        super(popup);
        this._callBackSubmitForm = callBackSubmitForm;
    }

    evenListener(idCard) {
        console.log('!!', this)
        console.log('!!', idCard)

        this._callBackSubmitForm(idCard)
        this.close()
    }

    _deleteCard() {

    }

    setEventListeners() {
        super.setEventListeners()
        // this._popup.addEventListener('submit', e => e.preventDefault())
        this._popup.addEventListener('submit', this._evenListener)

    }

}