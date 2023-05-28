export default class Card {
    constructor(data, templateSelector, openImagePopup) {
        this._name = data.name;
        this._link = data.link;
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
        this.card.remove();
    };

    _handleCardClick = () => {
        this._openImagePopup(this._name, this._link);
    };

    _setEventListeners = () => {
        this._deletingButton.addEventListener("click", this._handleDeleteCard);
        this._likingButton.addEventListener("click", this._handleLikeCard);
        this._cardImage.addEventListener("click", this._handleCardClick);
    };

    createCard = () => {
        this.card = this._getTemplate();
        this._cardHeading = this.card.querySelector(".photo__name");
        this._deletingButton = this.card.querySelector(".photo__delete");
        this._likingButton = this.card.querySelector(".photo__like");
        this._cardImage = this.card.querySelector(".photo__image");
        this._cardHeading.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = `Фотография ${this._name}`;
        this._setEventListeners();
        return this.card;
    };
}
