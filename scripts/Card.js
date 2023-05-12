export default class Card {
    constructor(data, templateSelector, openImagePopup) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openImagePopup = openImagePopup;
    }

    _getTemplate() {
        const card = document
            .querySelector(this._templateSelector)
            .content.querySelector(".photo__element")
            .cloneNode(true);
        return card;
    }

    createCard() {
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
    }

    _handleLikeButton = (event) => {
        event.target.classList.toggle("photo__like_active");
    };

    _handleDeleteButton = (event) => {
        event.target.closest(".photo__element").remove();
    };

    _setEventListeners() {
        this._deletingButton.addEventListener("click", () => {
            this._handleDeleteButton;
        });
        this._likingButton.setEventListener("click", () => {
            this._handleLikeButton;
        });
        this._cardImage.setEventListener("click", () => {
            this._openImagePopup(this._name, this._link);
        });
    }
}
