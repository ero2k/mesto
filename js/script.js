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


// Добавление карточек на страницу
const placeAddButton = document.querySelector('.profile__button-add')
const popupNewPlace = document.querySelector('.new-place')
const closeNewPlace = popupNewPlace.querySelector('.new-place__button-close')
const buttonSaveCard = popupNewPlace.querySelector('.new-place__button-save')
const newPlaceForm = popupNewPlace.querySelector('.new-place__container')

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

function openFormAddCard() {
    popupNewPlace.classList.toggle('new-place_is-opened')
}

placeAddButton.addEventListener('click', openFormAddCard)
closeNewPlace.addEventListener('click', openFormAddCard)


function addPlace(img, title) {

    const placeTemplate = document.querySelector('#placecard').content;
    const placeElement = placeTemplate.cloneNode(true);

    placeElement.querySelector('.place__photo').src = img;
    placeElement.querySelector('.place__title').textContent = title;

    places.prepend(placeElement);
}


initialCards.forEach(item => addPlace(item.link, item.name))


function saveCard() {
    event.preventDefault();

    const title = popupNewPlace.querySelector('.new-place__input_js_title').value
    const link = popupNewPlace.querySelector('.new-place__input_js_url').value

    addPlace(link, title)

    openFormAddCard()
}

newPlaceForm.addEventListener('submit', saveCard)


// Like place
const buttonLike = document.querySelectorAll('.place__like')

function placeLikeSelected() {
    this.classList.toggle('place__like_selected')
}

buttonLike.forEach(item => item.addEventListener('click', placeLikeSelected))


// Deleted place
const buttonTrash = document.querySelectorAll('.place__trash')

function placeDeleted() {
    this.parentNode.remove()
}

buttonTrash.forEach(item => item.addEventListener('click', placeDeleted))