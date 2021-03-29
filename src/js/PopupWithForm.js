import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popup, {
        callBackSubmit
    }) {
        super(popup);
        this._callBackSubmitForm = callBackSubmit;
        this._inputs = this._popup.querySelectorAll('.popup__input')
        this._button = this._popup.querySelector('.popup__button-save')
    }

    setEventListeners = () => {
        super.setEventListeners()
        const btnLabel = this._button.textContent
        this._popup.addEventListener('submit',
            () => {
                this._callBackSubmitForm(this._getInputValues()).then(item => {
                    console.log('Done')
                    this._button.textContent = btnLabel
                    this.close()
                }).catch((err) => {
                    console.log(err); // выведем ошибку в консоль
                  })
                this._button.textContent = 'Сохранение...'
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