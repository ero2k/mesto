import Popup from './Popup.js'

export default class PopupConfirm extends Popup {
    constructor(popup) {
        super(popup);
    }

    close() {
        super.close()
        console.log('remove', this.evenListener)
        this._popup.removeEventListener('submit', this.evenListener)
    }

    open(){
        super.open()
        this._popup.addEventListener('submit', e => e.preventDefault())
        this._popup.addEventListener('submit', this.evenListener)
    }

    evenListener(idCard, callBackSubmitForm) {
        console.log('evenListener', this)
        callBackSubmitForm(idCard)
        this.close()
    }


    setEventListeners() {
        super.setEventListeners()
        console.log('setEventListeners')
    }

}