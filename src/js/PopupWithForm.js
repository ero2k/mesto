import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popup, callBackSubmitForm, setInfoProfile) {
        super(popup);
        this._setInfoProfile = setInfoProfile;
        this._callBackSubmitForm = callBackSubmitForm;
        this._inputs = this._popup.querySelectorAll('.popup__input')
    }

    setEventListeners = () => {
        super.setEventListeners()
        this._popup.addEventListener('submit',
            () => {
                this._callBackSubmitForm(this._getInputValues(), this._setInfoProfile)
                this.close()
            }
        )
    }

    _getInputValues() {
        const data = {}
        this._inputs.forEach(input => {
            const name = input.getAttribute('name')
            data[name] = input.value
        })
        return data
    }

    close() {
        super.close()
        this._popup.children[0].reset()
    }
}