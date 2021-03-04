class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(`${this._settings.inputSelector}`));
        this._buttonElement = this._formElement.querySelector(`${this._settings.submitButtonSelector}`);
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(`${this._settings.inputErrorClass}`);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(`${this._settings.errorClass}`);
    };


    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(`${this._settings.inputErrorClass}`);
        errorElement.classList.remove(`${this._settings.errorClass}`);
        errorElement.textContent = '';
    };


    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };


    _hasInvalidInput() {
        return this._inputList.some((input) => {
            return !input.validity.valid
        })
    }

    _toggleButtonState() {

        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(`${this._settings.inactiveButtonClass}`);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(`${this._settings.inactiveButtonClass}`);
            this._buttonElement.disabled = false;
        }
    }


    _resetError = () => {

        if (this._formElement.classList.contains('form-js')) {
            this._inputList.forEach(span => {
                this._hideInputError(span)
            })
            if (!this._formElement.classList.contains('popup_type_edit-profile'))
               { this._formElement.children[0].reset() }
        }
    }

    _setEventListeners() {

        document.querySelector(`.${this._formElement.id}-btn`)
            .addEventListener('click', () => {
                this._resetError()
                this._toggleButtonState()
            })


        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };


    enableValidation() {
        this._formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        })
        this._setEventListeners()
    };
}

export default FormValidator