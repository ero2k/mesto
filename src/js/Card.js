class Card {
    constructor(data, templateElement, handleCardClick, handleCardTrash, handleCardLike) {
        this._link = data.link;
        this._name = data.name;
        this._likes = data.likes;
        this._placeTemplate = templateElement.content;
        this._viewPicture = handleCardClick;
        this._trashCard = handleCardTrash;
        this._likeCard = handleCardLike;

        this._cardID = data._id
    }

    _addFavoritePlace() {
        this.classList.toggle('place__like_selected')
    }

    _deletePlace = () => {
        console.log('asdda')
        console.log(this._cardID)
        this._trashCard(this._cardID)
    }

    // _deletePlace() {
    //     this.parentNode.remove()
    // }

    generateCard(checkAuthor) {
        const placeElement = this._placeTemplate.cloneNode(true);
        const placePhoto = placeElement.querySelector('.place__photo')
        const placeTitle = placeElement.querySelector('.place__title')
        const placeLike = placeElement.querySelector('.place__total-like')
        const btnPlaceTrash = placeElement.querySelector('.place__trash')

        placePhoto.src = this._link;
        placePhoto.alt = `Изображение "${this._name}"`;
        placeTitle.textContent = this._name
        // console.log(this._cardID)
        placeLike.textContent = this._likes != null ? this._likes.length : 'not data'

        placeElement.querySelector('.place__title').textContent = this._name;
        placePhoto.addEventListener('click', this._viewPicture)

        placeElement.querySelector('.place__like').addEventListener('click', this._addFavoritePlace)

        if (checkAuthor == true) {
            btnPlaceTrash.addEventListener('click', this._deletePlace)
        } else {
            btnPlaceTrash.classList.add('trashbtn-hidden')
        }

        return placeElement
    }
}
export default Card