const popup = document.querySelector('.popup');

const popupContainer = popup.querySelector('.popup__container');
const inputName = popupContainer.querySelector('.popup__input_js_name');
const inputProfession = popupContainer.querySelector('.popup__input_js_profession');
const buttonSave = popupContainer.querySelector('.popup__button-save');
const buttonPopupClose = popupContainer.querySelector('.popup__button-close');

const editProfileButton = document.querySelector('.profile__edit');

const profileName = document.querySelector('.profile__title');
const profileProffesional = document.querySelector('.profile__subtitle');

const places = document.querySelector('.places');

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


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

function addPlace(img, title) {

    const placeTemplate = document.querySelector('#placecard').content;
    const placeElement = placeTemplate.cloneNode(true);

    placeElement.querySelector('.place__photo').src = img;
    placeElement.querySelector('.place__title').textContent = title;

    places.append(placeElement);
}


initialCards.forEach(item => addPlace(item.link, item.name))

buttonPopupClose.addEventListener('click', editProfile);

popup.addEventListener('click', closePopupByClickOverlay);

editProfileButton.addEventListener('click', editProfile);

popupContainer.addEventListener('submit', saveProfile);