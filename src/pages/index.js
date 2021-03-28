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
    avatar
} from '../utils/constants.js'

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21',
    headers: {
        authorization: '5c6140f1-9e52-4c97-825d-a5a141b1908b'
    }
});
///////////

///////////

function deleteCard(idCard, item) {
    const popupConfirm = new PopupConfirm('.popup_type_confirm', () => api.deleteCard(idCard), item)
    popupConfirm.open()
    popupConfirm.setEventListeners()
}


const usrInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar');
usrInfo.setUserInfo(api.getInfoAuthor())
////////////

function createCard(item, currentUser) {
    const card = new Card(item, placeTemplate, () => viewPlacePopup.open(item.link, item.name), deleteCard, api.like, currentUser);
    const cardElement = card.generateCard();
    return cardElement
}

const viewPlacePopup = new PopupWithImage('.popup_type_view-pic')
viewPlacePopup.setEventListeners()
////////////



const newPlacePopup = new PopupWithForm('.popup_type_new-place', {
    callBackSubmit: item => {
        return api.postCard(item).then(item =>
            api.getInfoAuthor().then(({
                _id
            }) => defaultCardList.setItem(createCard(item, _id)))
        )
    }
})

newPlacePopup.setEventListeners()
////////////


const updateAvatarPopup = new PopupWithForm('.popup_type_update-avatar', {
    callBackSubmit: item => {
        return api.updateAvatar(item).then(({
            avatar
        }) => document.querySelector('.profile__avatar').src = avatar)
    }
})

updateAvatarPopup.setEventListeners()

avatar.addEventListener('click', () => updateAvatarPopup.open())

////////////////
const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', {
    callBackSubmit: item => {
        return api.saveProfile(item).then(usrInfo.setUserInfo(api.getInfoAuthor().then()))
    }
});
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
        renderer: (item, idCurrentUser) => {
            return defaultCardList.setItem(createCard(item, idCurrentUser))
        }
    },
    sectionPlaces);

api.getInfoAuthor().then(({
    _id
}) => defaultCardList.renderItems(_id));

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