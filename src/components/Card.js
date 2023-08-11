export default class Card {
    constructor(
        data,
        templateSelector,
        openImagePopup,
        openDeletePopup,
        toggleLike
    ) {
        this._data = data;
        this._imagelink = data.link;
        this._imagename = data.name;
        this._id = data.id;
        this._ownerId = data.owner._id;
        this._cardId = data._id;
        this._likes = data.likes;
        this._likesLength = data.likes.length;
        this._toggleLike = toggleLike;
        this._openImagePopup = openImagePopup;
        this._openDeletePopup = openDeletePopup;
        this._templateSelector = templateSelector;
    }

    _getTemplate = () => {
        const card = document
            .querySelector(this._templateSelector)
            .content.querySelector(".photo__element")
            .cloneNode(true);
        return card;
    };

    _handleLikeCard = () => {
        this._toggleLike(this._likingButton, this._cardId);
    };

    _handleDeleteCard = () => {
        this._openDeletePopup({ card: this, cardId: this._cardId });
    };

    _handleCardClick = () => {
        this._openImagePopup(this._data);
    };

    _setEventListeners() {
        this._likingButton.addEventListener("click", this._handleLikeCard);
        this._deletingButton.addEventListener("click", this._handleDeleteCard);
        this._cardImage.addEventListener("click", this._handleCardClick);
    }

    _handleDeletingButton() {
        this._id === this._ownerId
            ? (this._deletingButton.style.display = "block")
            : (this._deletingButton.style.display = "none");
    }

    _checkLikesStatus() {
        this._likes.forEach((item) => {
            if (item._id === this._id) {
                this._likingButton.classList.add("photo__like_active");
                return;
            }
        });
        this._cardLikesNumber.textContent = this._likesLength;
    }

    toggleLike(likes) {
        this._likingButton.classList.toggle("photo__like_active");
        this._cardLikesNumber.textContent = likes.length;
    }

    deleteCard() {
        this._card.remove();
        this._card = null;
    }

    createCard = () => {
        this._card = this._getTemplate();
        this._cardHeading = this._card.querySelector(".photo__name");
        this._deletingButton = this._card.querySelector(".photo__delete");
        this._likingButton = this._card.querySelector(".photo__like");
        this._cardImage = this._card.querySelector(".photo__image");
        this._cardLikesNumber = this._card.querySelector(".photo__like-number");
        this._cardImage.src = this._imagelink;
        this._cardImage.alt = `Фотография ${this._imagename}`;
        this._cardHeading.textContent = this._imagename;
        this._checkLikesStatus();
        this._handleDeletingButton();
        this._setEventListeners();
        return this._card;
    };
}
