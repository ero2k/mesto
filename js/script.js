const popup = document.querySelector('.popup');

const popupContainer = popup.querySelector('.popup__container');
const inputName = popupContainer.querySelector('.popup__input_js_name');
const inputProfession = popupContainer.querySelector('.popup__input_js_profession');
const buttonSave = popupContainer.querySelector('.popup__button-save');
const buttonPopupClose = popupContainer.querySelector('.popup__button-close');


const editProfileButton = document.querySelector('.profile__edit');

const profileName = document.querySelector('.profile__title');
const profileProffesional = document.querySelector('.profile__subtitle');


function editProfile() {
    event.preventDefault();
    popup.classList.toggle('popup_is-opened');

    if (popup.classList.contains('popup_is-opened')) {
        inputName.value = profileName.textContent;
        inputProfession.value = profileProffesional.textContent;
    }
}

function saveProfile() {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileProffesional.textContent = inputProfession.value;

    editProfile();
}

function closePopupByClickOverlay() {
    if (event.target === event.currentTarget) {
        editProfile();
    }
}

buttonPopupClose.addEventListener('click', editProfile);

popup.addEventListener('click', closePopupByClickOverlay);

editProfileButton.addEventListener('click', editProfile);

popupContainer.addEventListener('submit', saveProfile);