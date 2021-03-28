export default class Popup {
    constructor(selector) {
        this._popup = document.querySelector(selector);
        this._closeBtn = this._popup.querySelector('.popup__button-close')
    }

    open() {
        this._popup.classList.add('popup-opened');
        document.addEventListener('keydown', this._handleEscClose)
    }

    close () {
        this._popup.classList.remove('popup-opened');
        document.removeEventListener('keydown', this._handleEscClose)
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close()
        }
    }

    setEventListeners() {
        this._closeBtn.addEventListener('click', () => {
            this.close()
        })

        this._popup.addEventListener('click', (event) => {
            if (event.target === event.currentTarget) {
                this.close()
            }
        })
    }

} 