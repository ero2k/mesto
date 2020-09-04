const popup = document.querySelector('.popup');

const popupContainer = popup.querySelector('.popup__container');
const inputName = popupContainer.querySelector('.popup__name');
const inputProfession = popupContainer.querySelector('.popup__profession');
const buttonSave = popupContainer.querySelector('.popup__button-save');
const buttonPopupClose = popupContainer.querySelector('.popup__button-close');


const editProfileButton = document.querySelector('.profile__edit');

const profileName = document.querySelector('.profile__info .profile__title');
const profileProffesional = document.querySelector('.profile__info .subtitle');


function editProfile() {
    popup.classList.toggle('popup_is-opened');

    inputName.value = profileName.textContent;
    inputProfession.value = profileProffesional.textContent;
}

function saveProfile() {
    if (inputName.value !== '' && inputProfession.value !== '') {

        profileName.textContent = inputName.value;
        profileProffesional.textContent = inputProfession.value;
        popup.classList.toggle('popup_is-opened');

    } else {
        const alarmText = `<p class='popup__alarm'>Одно или несколько полей не заполнено</p>`
        popup.querySelector('.popup__title').insertAdjacentHTML('afterend', alarmText)
    }
}

function closePopup() {
    popup.classList.toggle('popup_is-opened');
}

function closePopupByClickOverlay() {
    if (event.target === event.currentTarget) {
        popup.classList.toggle('popup_is-opened');
    }
}

buttonPopupClose.addEventListener('click', closePopup);

popup.addEventListener('click', closePopupByClickOverlay);

editProfileButton.addEventListener('click', editProfile);

buttonSave.addEventListener('click', saveProfile);