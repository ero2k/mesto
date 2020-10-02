const objectForm = {
    objectPopup: {
        formSelector: '.popup__container',
        inputSelector: '.popup__input',
        submitButtonSelector: '.popup__button-save',
        inactiveButtonClass: 'button-disabled',
        inputErrorClass: 'popup__input_type_error',
        errorClass: 'popup__error_visible'
    },
    objectNewPlace: {
        formSelector: '.new-place__container',
        inputSelector: '.new-place__input',
        submitButtonSelector: '.new-place__button-save',
        inactiveButtonClass: 'button-disabled',
        inputErrorClass: 'new-place__input_type_error',
        errorClass: 'new-place__error_visible'
    },
}

const openPopupBtn = document.querySelectorAll('.open-popup-btn-js')

const showInputError = (container, inputElement, errorMessage, errorClass, inputErrorClass) => {
    const errorElement = container.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(`${inputErrorClass}`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(`${errorClass}`);
};

const hideInputError = (container, inputElement, errorClass, inputErrorClass) => {
    const errorElement = container.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(`${inputErrorClass}`);
    errorElement.classList.remove(`${errorClass}`);
    errorElement.textContent = '';
};

const checkInputValidity = (container, inputElement, errorClass, inputErrorClass) => {
    if (!inputElement.validity.valid) {
        showInputError(container, inputElement, inputElement.validationMessage, errorClass, inputErrorClass);
    } else {
        hideInputError(container, inputElement, errorClass, inputErrorClass);
    }
};


const hasInvalidInput = (inputList) => {
    return inputList.some((input) => {
        return !input.validity.valid
    })
}



const toggleButtonState = (inputList, buttonElement, buttonDisabledClass) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(`${buttonDisabledClass}`);
    } else {
        buttonElement.classList.remove(`${buttonDisabledClass}`);
    }
}


const setEventListeners = (formElement) => {

    const container = document.querySelector(formElement.formSelector)
    const inputList = Array.from(container.querySelectorAll(`${formElement.inputSelector}`));
    const buttonElement = container.querySelector(`${formElement.submitButtonSelector}`);
    const buttonDisabledClass = formElement.inactiveButtonClass
    const errorClass = formElement.errorClass
    const inputErrorClass = formElement.inputErrorClass

    openPopupBtn.forEach(btn =>
        btn.addEventListener('click', function () {
            toggleButtonState(inputList, buttonElement, buttonDisabledClass);
        })
    )


    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(container, inputElement, errorClass, inputErrorClass);
            // чтобы проверять его при изменении любого из полей
            toggleButtonState(inputList, buttonElement, buttonDisabledClass);
        });
    });
};


const enableValidation = (objectForm) => {

    const formList = Array.from(document.querySelectorAll('.form-js'));

    formList.forEach((formElement) => {

        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        })
    })

    Object.entries(objectForm).forEach(objectSelecor => setEventListeners(objectSelecor[1]))

};
enableValidation(objectForm)