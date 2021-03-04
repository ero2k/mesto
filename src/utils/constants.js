const inputName = document.querySelector('.popup__input_js_name');
const inputProfession = document.querySelector('.popup__input_js_profession');
const editProfileButton = document.querySelector('.profile__edit');
const placeAddButton = document.querySelector('.profile__button-add')
const sectionPlaces = document.querySelector('.places');
const formList = Array.from(document.querySelectorAll('.form-js'));
const placeTemplate = document.querySelector(`#placecard`)

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

export { inputName, inputProfession, editProfileButton,placeAddButton, sectionPlaces, formList, placeTemplate, initialCards}