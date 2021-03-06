class Card {
    constructor(data, templateElement, handleCardClick) {
        this._link = data.link;
        this._name = data.name;
        this._placeTemplate = templateElement.content;
        this._viewPicture = handleCardClick;
    }

    _addFavoritePlace() {
        this.classList.toggle('place__like_selected')
    }

    _deletePlace() {
        this.parentNode.remove()
    }

    generateCard() {
        const placeElement = this._placeTemplate.cloneNode(true);
        const placePhoto = placeElement.querySelector('.place__photo')
        const placeTitle = placeElement.querySelector('.place__title')

        placePhoto.src = this._link;
        placePhoto.alt = `Изображение "${this._name}"`; 
        placeTitle.textContent = this._name

        placeElement.querySelector('.place__title').textContent = this._name;
        placePhoto.addEventListener('click', this._viewPicture)


        placeElement.querySelector('.place__trash').addEventListener('click', this._deletePlace)
        placeElement.querySelector('.place__like').addEventListener('click', this._addFavoritePlace)

        return placeElement
    }

}

export default Card