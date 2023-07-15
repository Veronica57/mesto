export default class Card {
    constructor(data, templateSelector, openImagePopup) {
        this._data = data;
        this._templateSelector = templateSelector;
        this._openImagePopup = openImagePopup;
    }

    _getTemplate = () => {
        const card = document
            .querySelector(this._templateSelector)
            .content.querySelector(".photo__element")
            .cloneNode(true);
        return card;
    };

    _handleLikeCard = () => {
        this._likingButton.classList.toggle("photo__like_active");
    };

    _handleDeleteCard = () => {
        this._card.remove();
    };

    _handleCardClick = () => {
        this._openImagePopup(this._data);
    };

    _setEventListeners = () => {
        this._deletingButton.addEventListener("click", this._handleDeleteCard);
        this._likingButton.addEventListener("click", this._handleLikeCard);
        this._cardImage.addEventListener("click", this._handleCardClick);
    };

    createCard = () => {
        this._card = this._getTemplate();
        this._cardHeading = this._card.querySelector(".photo__name");
        this._deletingButton = this._card.querySelector(".photo__delete");
        this._likingButton = this._card.querySelector(".photo__like");
        this._cardImage = this._card.querySelector(".photo__image");
        this._cardHeading.textContent = this._data.name;
        this._cardImage.src = this._data.link;
        this._cardImage.alt = `Фотография ${this._data.name}`;
        this._setEventListeners();
        return this._card;
    };
}
