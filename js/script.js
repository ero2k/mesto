const popup = document.querySelector('.popup');
const popupContainer = popup.querySelector('.popup__container');
const inputName = popupContainer.querySelector('.popup__input_js_name');
const inputProfession = popupContainer.querySelector('.popup__input_js_profession');
const buttonSave = popupContainer.querySelector('.popup__button-save');
const buttonPopupClose = popupContainer.querySelector('.popup__button-close');

const editProfileButton = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__title');
const profileProffesional = document.querySelector('.profile__subtitle');
const placeAddButton = document.querySelector('.profile__button-add')

const places = document.querySelector('.places');

const place = document.querySelector('.place');
const buttonTrash = document.querySelectorAll('.place__trash')
const buttonLike = document.querySelectorAll('.place__like')
const placePhoto = places.querySelectorAll('.place__photo')

const popupNewPlace = document.querySelector('.new-place')
const closeNewPlace = popupNewPlace.querySelector('.new-place__button-close')
const buttonSaveCard = popupNewPlace.querySelector('.new-place__button-save')
const newPlaceForm = popupNewPlace.querySelector('.new-place__container')

const viewPic = document.querySelector('.view-pic')
const viewPicBtnClose = viewPic.querySelector('.view-pic__button-close')




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



function placeLikeSelected() {
    this.classList.toggle('place__like_selected')
}

function placeDeleted() {
    this.parentNode.remove()
}

function closePopupBtnEsc(popup) {
    document.addEventListener('keydown', function (evt) {
        if (evt.key === 'Escape') {
            popupOpened(popup)
        }
    })
}

function popupOpened(popup) {
    popup.classList.toggle('popup-opened');
    const popupId = popup.id
    const inputList = document.querySelectorAll(`.${popupId}__input`)
    const buttonSubmit = document.querySelector(`.${popupId}__button-save`)
    const inputError = document.querySelectorAll(`.${popupId}__error`)


    if (popup.classList.contains('popup-opened') && popupId === 'popup') {
        inputName.value = profileName.textContent;
        inputProfession.value = profileProffesional.textContent;
    } else {
        document.querySelector(`.${popupId}__container`).reset()
        buttonSubmit.classList.remove('button-disabled')
        inputError.forEach(input => input.classList.remove(`${popupId}__error_visible`))
        inputList.forEach(span => span.classList.remove(`${popupId}__input_type_error`))
    }

    closePopupBtnEsc(popup)
}


function editProfile() {
    if (popup.classList.contains('popup-opened')) {
        inputName.value = profileName.textContent;
        inputProfession.value = profileProffesional.textContent;
    } else {
        inputName.value = '';
        inputProfession.value = '';
    }
    popupOpened(popup)
}

//функция сохранения профиля
function saveProfile() {

    event.preventDefault();
    profileName.textContent = inputName.value;
    profileProffesional.textContent = inputProfession.value;

    popupOpened(popup)
}

//функция закрытия по темной области попапа
function closePopupByClickOverlay(event) {
    if (event.target === event.currentTarget) {
        popupOpened(event.target)
    }
}

//Функция просмотра фото
function viewPicture() {
    const photo = this.src
    const title = this.parentNode.querySelector('.place__title').textContent

    viewPic.querySelector('.view-pic__img').src = photo
    viewPic.querySelector('.view-pic__caption').textContent = title

    popupOpened(viewPic)
}

// Добавление карточек на страницу
function addPlace(img, title) {

    const placeTemplate = document.querySelector('#placecard').content;
    const placeElement = placeTemplate.cloneNode(true);
    const placePhoto = placeElement.querySelector('.place__photo')

    placePhoto.src = img;
    placePhoto.addEventListener('click', viewPicture)
    placeElement.querySelector('.place__title').textContent = title;
    placeElement.querySelector('.place__trash').addEventListener('click', placeDeleted)
    placeElement.querySelector('.place__like').addEventListener('click', placeLikeSelected)

    return placeElement
}

function addCard(link, name) {
    places.prepend(addPlace(link, name))
}

// Сохранение новой карточки
function saveCard() {
    event.preventDefault();

    const title = popupNewPlace.querySelector('.new-place__input_js_title').value
    const link = popupNewPlace.querySelector('.new-place__input_js_url').value

    addCard(link, title)

    popupOpened(popupNewPlace)

}


buttonPopupClose.addEventListener('click', function () {
    popupOpened(popup)
}); //Обработчик закрытия редактирование профиля

popup.addEventListener('click', closePopupByClickOverlay); //Обработчик закрытия редактирование профиля по темной области оверлэя

popupNewPlace.addEventListener('click', closePopupByClickOverlay);

editProfileButton.addEventListener('click', editProfile); //Обработчик открытия редактирование профиля

popupContainer.addEventListener('submit', saveProfile); //Обработчик сохранения профиля


placeAddButton.addEventListener('click', function () { //Обработчик открытия добавления нового места
    popupOpened(popupNewPlace)
})

closeNewPlace.addEventListener('click', function () { //Обработчик закрытия добавления нового места
    popupOpened(popupNewPlace)
})


newPlaceForm.addEventListener('submit', saveCard) //Сохранение нового места

viewPicBtnClose.addEventListener('click', function () { //Просмотр фото места
    popupOpened(viewPic)
})

initialCards.forEach(item => addCard(item.link, item.name)) //Добавления массива карточек на страницу