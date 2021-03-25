import Card from '../js/Card.js';
import Api from '../js/Api.js'
import FormValidator from '../js/FormValidator.js';
import PopupWithForm from '../js/PopupWithForm.js';
import PopupConfirm from '../js/PopupConfirm.js';
import PopupWithImage from '../js/PopupWithImage.js';
import Section from '../js/Section.js';
import UserInfo from '../js/UserInfo.js';
import './index.css';

import {
    inputName,
    inputProfession,
    editProfileButton,
    placeAddButton,
    sectionPlaces,
    formList,
    placeTemplate,
} from '../utils/constants.js'

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21',
    headers: {
        authorization: '5c6140f1-9e52-4c97-825d-a5a141b1908b'
    }
});
///////////

const popupConfirm = new PopupConfirm('.popup_type_confirm', )
// popupConfirm.setEventListeners()
///////////

function deleteCard(idCard) {
    console.log('deleteCard', idCard)
    popupConfirm.open()
    popupConfirm.evenListener(idCard,api.deleteCard)
}

// function deleteCard() {

// }

function setProfile() {
    usrInfo.setUserInfo(api.getInfoAuthor())
}


const usrInfo = new UserInfo('.profile__title', '.profile__subtitle');
setProfile()
////////////

function createCard(item, checkAuthor) {
    const card = new Card(item, placeTemplate, () => viewPlacePopup.open(item.link, item.name), deleteCard);
    const cardElement = card.generateCard(checkAuthor);
    return cardElement
}

const viewPlacePopup = new PopupWithImage('.popup_type_view-pic')
viewPlacePopup.setEventListeners()
////////////

const newPlacePopup = new PopupWithForm('.popup_type_new-place',
    item => {
        api.postCard(item)
        defaultCardList.setItem(createCard(item));
    }
)
newPlacePopup.setEventListeners()
////////////

const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', api.saveProfile, setProfile); //usrInfo.setUserInfo
editProfilePopup.setEventListeners()
////////////

function viewUserInfoPopup(data) {
    inputName.value = data.name;
    inputProfession.value = data.about;
}


editProfileButton.addEventListener('click', () => { //Обработчик открытия редактирования профиля
    viewUserInfoPopup(usrInfo.getUserInfo());
    editProfilePopup.open()
})


placeAddButton.addEventListener('click', function () { //Обработчик открытия добавления нового места
    newPlacePopup.open();
})

const defaultCardList = new Section({

        items: api.getInitialCards(),
        renderer: (item, myCard) => {
            defaultCardList.setItem(createCard(item, myCard))
        }
    },
    sectionPlaces);

defaultCardList.renderItems(api.getInfoAuthor());

//Добавление проверки форм
formList.forEach((formElement) => {
    const formValidation = new FormValidator({
        formSelector: '.popup__container',
        inputSelector: '.popup__input',
        submitButtonSelector: '.popup__button-save',
        inactiveButtonClass: 'button-disabled',
        inputErrorClass: 'popup__input_type_error',
        errorClass: 'popup__error_visible'
    }, formElement);

    formValidation.enableValidation();
})