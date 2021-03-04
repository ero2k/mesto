import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(selector, callBackSubmitForm) {
        super(selector);
        this._callBackSubmitForm = callBackSubmitForm;
    }

    setEventListeners = () => {
        super.setEventListeners()
        this._selector.addEventListener('submit',
            () => {
                this._callBackSubmitForm(this._getInputValues())
                this.close()
            }
        )
    }

    _getInputValues() {
        const inputs = this._selector.querySelectorAll('.popup__input')

        const data = {}
        inputs.forEach(input => {
            const name = input.getAttribute('name')
            data[name] = input.value
        })

        return data
    }

    close() {
        super.close()
        this._selector.children[0].reset()
    }
}