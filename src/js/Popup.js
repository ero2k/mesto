export default class Popup {
    constructor(selector) {
        this._selector = document.querySelector(selector);
    }

    open() {
        this._selector.classList.add('popup-opened');
        document.addEventListener('keydown', this._handleEscClose)
    }

    close() {
        this._selector.classList.remove('popup-opened');
        document.removeEventListener('keydown', this._handleEscClose)
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close()
        }
    }

    setEventListeners() {
        const closeBtn = this._selector.querySelector('.popup__button-close')
        closeBtn.addEventListener('click', () => {
            this.close()
        })

        this._selector.addEventListener('click', (event) => {
            if (event.target === event.currentTarget) {
                this.close()
            }
        })
    }

} 