import Card from './js/Card.js';
import FormValidator from './js/FormValidator.js';
import PopupWithForm from './js/PopupWithForm.js';
import PopupWithImage from './js/PopupWithImage.js';
import Section from './js/Section.js';
import UserInfo from './js/UserInfo.js';
import './pages/index.css';
// import logo from '../images/logo/logo.svg';
// import placeheart_fill from '../images/place/place-heart_fill.svg';
// import placeheart from '../images/place/place-heart.svg';
// import placetrash from '../images/place/place-trash.svg';



import {
    inputName,
    inputProfession,
    editProfileButton,
    placeAddButton,
    sectionPlaces,
    formList,
    placeTemplate,
    initialCards,
} from './utils/constants.js'

const viewPlacePopup = new PopupWithImage('.popup_type_view-pic')
viewPlacePopup.setEventListeners()
////////////

const newPlacePopup = new PopupWithForm('.popup_type_new-place',
    item => {
        const card = new Card(item, placeTemplate, () => viewPlacePopup.open(item.link, item.name));
        const cardElement = card.generateCard();

        defaultCardList.setItem(cardElement);
    }
)
newPlacePopup.setEventListeners()
////////////

const usrInfo = new UserInfo('.profile__title', '.profile__subtitle');
////////////

const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', usrInfo.setUserInfo);
editProfilePopup.setEventListeners()
////////////

function viewUserInfoPopup(data) {
    inputName.value = data.name;
    inputProfession.value = data.proffesion;
}


editProfileButton.addEventListener('click', () => { //Обработчик открытия редактирования профиля
    viewUserInfoPopup(usrInfo.getUserInfo());
    editProfilePopup.open()
})


placeAddButton.addEventListener('click', function () { //Обработчик открытия добавления нового места
    newPlacePopup.open();
})

//Добавление карточек из имеющейся коллекции 
const defaultCardList = new Section({
    items: initialCards,
    renderer: item => {
        const card = new Card(item, placeTemplate, () => viewPlacePopup.open(item.link, item.name));
        const cardElement = card.generateCard();

        defaultCardList.setItem(cardElement);
    }
}, sectionPlaces);

defaultCardList.renderItems();

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