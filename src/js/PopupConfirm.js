import Popup from './Popup.js'

export default class PopupConfirm extends Popup {
    constructor(popup, callBackSubmitForm) {
        super(popup);
        console.log(callBackSubmitForm)
        this._callBackSubmitForm = callBackSubmitForm;
    }

    close  ()  {
        super.close()
        console.log('remove', this.evenListener)
        this._popup.removeEventListener('submit', this.evenListener)
    }

    evenListener = () => {
            this._callBackSubmitForm()
            this.close()
        }



    setEventListeners() {
        super.setEventListeners()
        this._popup.addEventListener('submit', this.evenListener)
    }

}