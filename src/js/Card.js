class Card {
    constructor(data, templateElement, handleCardClick, handleCardTrash, handleCardLike, currentUser) {
        this._link = data.link;
        this._name = data.name;
        this._likes = data.likes;
        this._placeTemplate = templateElement.content.cloneNode(true);
        this._viewPicture = handleCardClick;
        this._trashCard = handleCardTrash;
        this._likeCard = handleCardLike;
        this._data = data;
        this._cardOwner = data.owner._id;
        this._currentUser = currentUser;

        this._cardID = data._id;
    }

    _isLiked(data) {
        const isLiked = data.find(item => item._id == this._currentUser) !== undefined ? true : false
        return isLiked
    }

    _checkLike = (data) => (e) => {
        const btnLike = e.target
        const countSelector = e.target.parentNode.querySelector('.place__total-like')

        if (!this._isLiked(data)) {
            btnLike.classList.add('place__like_selected')
        } else {
            btnLike.classList.remove('place__like_selected')
        }

        this._likeCard(this._cardID, this._isLiked(data)).then((item) => {
            this._currentCountLikes(countSelector, item.likes.length)
            return item
        }).then((item) => {
            btnLike.addEventListener('click', this._checkLike(item.likes), {
                once: true
            })
        }).catch((err) => {
            console.log(err); // выведем ошибку в консоль
          })

    }

    _currentCountLikes(countSelector, totalCount) {
        countSelector.textContent = totalCount
    }

    _deletePlace = (e) => {
        this._trashCard(this._cardID, e.target.closest('li'))
    }


    generateCard() {
        const placeElement = this._placeTemplate;
        const placePhoto = placeElement.querySelector('.place__photo')
        const placeTitle = placeElement.querySelector('.place__title')
        const placeLikeCount = placeElement.querySelector('.place__total-like')
        const btnPlaceTrash = placeElement.querySelector('.place__trash')
        const btnLike = placeElement.querySelector('.place__like')


        placePhoto.src = this._link;
        placePhoto.alt = `Изображение "${this._name}"`;
        placeTitle.textContent = this._name
        placeLikeCount.textContent = this._likes.length

        placeElement.querySelector('.place__title').textContent = this._name;
        placePhoto.addEventListener('click', this._viewPicture)

        placeElement.querySelector('.place__like').addEventListener('click', this._checkLike(this._data.likes), {
            once: true
        })

        if (this._isLiked(this._data.likes)) {
            btnLike.classList.add('place__like_selected')
        }

        if (this._currentUser === this._cardOwner) {
            btnPlaceTrash.addEventListener('click', this._deletePlace)
        } else {
            btnPlaceTrash.classList.add('trashbtn-hidden')
        }

        return placeElement
    }
}
export default Card