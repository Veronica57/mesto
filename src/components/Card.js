export default class Card {
    constructor(
        data,
        templateSelector,
        openImagePopup,
        openDeletePopup,
        toggleLikes
    ) {
        this._data = data;
        this._id = data.id;
        this._ownerId = data.owner._id;
        this._likes = data.likes;
        this._likesQuantity = data.likes.length;
        this._toggleLikes = toggleLikes;
        this._cardId = data._id;
        this._templateSelector = templateSelector;
        this._openImagePopup = openImagePopup;
        this._openDeletePopup = openDeletePopup;
    }

    _getTemplate = () => {
        const card = document
            .querySelector(this._templateSelector)
            .content.querySelector(".photo__element")
            .cloneNode(true);
        return card;
    };

    _handleCardClick = () => {
        this._openImagePopup(this._data);
    };

    _handleDeleteCard = () => {
        this._card.remove();
        this._card = null;
    };

    _handleDeletePopup = () => {
        this._openDeletePopup({ card: this, cardId: this._cardId });
    };

    _handleLikes = () => {
        this._toggleLikes(this._likingButton, this._cardId);
    };

    _handleLikeCard = () => {
        this._likingButton.classList.toggle("photo__like_active");
        this._likesNumber.textContent = likes.length;
    };

    _setEventListeners = () => {
        this._deletingButton.addEventListener("click", this._handleDeleteCard);
        this._likingButton.addEventListener("click", this._handleLikeCard);
        this._cardImage.addEventListener("click", this._handleCardClick);
    };

    _showDeleteCardButton() {
        if (this._id === this._ownerId) {
            this._deletingButton.style.display = "block";
        } else {
            this._deletingButton.style.display = "none";
        }
    }

    _checkLikesNumber() {
        this._likes.forEach((item) => {
            if (item._id === this._id) {
                this._likingButton.classList.add("photo__like_active");
                return;
            }
        });
        this._likesNumber.textContent = this._likesQuantity;
    }

    createCard = () => {
        this._card = this._getTemplate();
        this._cardHeading = this._card.querySelector(".photo__name");
        this._deletingButton = this._card.querySelector(".photo__delete");
        this._likingButton = this._card.querySelector(".photo__like");
        this._cardImage = this._card.querySelector(".photo__image");
        this._likesNumber = this._card.querySelector(".photo__like-number");
        this._cardHeading.textContent = this._data.name;
        this._cardImage.src = this._data.link;
        this._cardImage.alt = `Фотография ${this._data.name}`;
        this._setEventListeners();
        return this._card;
    };
}
